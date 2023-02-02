import { VideoIdType, VideoType } from '../pages/Videos';
import { IClient } from './youtubeClient';

export interface IYoutube {
  apiClient: IClient;
  search: (keyword: string | undefined) => Promise<VideoType[]>;
  channelImageURL: (id: string) => Promise<string>;
  relatedVideos: (id: string) => Promise<VideoType[]>;
}

export default class Youtube implements IYoutube {
  constructor(public apiClient: IClient) {}

  async search(keyword: string | undefined) {
    return keyword ? this.searchByKeyword(keyword) : this.mostPopular();
  }

  async channelImageURL(id: string) {
    return this.apiClient
      .channels({ params: { part: 'snippet', id } })
      .then((res) => res.data.items[0].snippet.thumbnails.default.url);
  }

  async relatedVideos(id: string) {
    return this.apiClient
      .search({
        params: {
          part: 'snippet',
          maxResults: 100,
          type: 'video',
          regionCode: 'US',
          relatedToVideoId: id,
        },
      })
      .then((res) =>
        res.data.items.map((item: VideoType) => ({
          ...item,
          id: (item.id as VideoIdType).videoId,
        }))
      );
  }

  private async searchByKeyword(keyword: string) {
    return this.apiClient
      .search({
        params: {
          part: 'snippet',
          maxResults: 100,
          type: 'video',
          regionCode: 'US',
          q: keyword,
        },
      })
      .then((res) =>
        res.data.items.map((item: VideoType) => ({
          ...item,
          id: (item.id as VideoIdType).videoId,
        }))
      );
  }

  private async mostPopular() {
    return this.apiClient
      .videos({
        params: {
          part: 'snippet',
          maxResults: 100,
          type: 'video',
          regionCode: 'US',
          chart: 'mostPopular',
        },
      })
      .then((res) => res.data.items);
  }
}
