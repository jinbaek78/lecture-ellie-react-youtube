import { VideoIdType, VideoType } from '../pages/Videos';
import { IClient } from './youtubeClient';

export interface IYoutube {
  apiClient: IClient;
  search: (keyword: string | undefined) => Promise<any>;
  getChannel: (channelId: string) => Promise<any>;
  getRelated: (videoId: string) => Promise<any>;
}

export default class Youtube implements IYoutube {
  constructor(public apiClient: IClient) {}

  async search(keyword: string | undefined) {
    return keyword ? this.searchByKeyword(keyword) : this.mostPopular();
  }

  // youtube.googleapis.com/youtube/v3/channels?part=snippet&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=[YOUR_API_KEY]

  async getChannel(channelId: string) {
    return this.apiClient
      .channel({
        params: {
          part: 'snippet',
          id: channelId,
        },
      })
      .then((res) => res.data.items[0]);
  }

  //youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=Ks-_Mh1QhMc&type=video&key=[YOUR_API_KEY

  // relatedToVideoId=Ks-_Mh1QhMc&type

  async getRelated(videoId: string) {
    return this.apiClient
      .related({
        params: {
          part: 'snippet',
          type: 'video',
          maxResults: 100,
          regionCode: 'US',
          relatedToVideoId: videoId,
        },
      })
      .then((res) => res.data.items)
      .then((items: VideoType[]) =>
        items.map((item) => ({ ...item, id: (item.id as VideoIdType).videoId }))
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
      .then((res) => res.data.items)
      .then((items: VideoType[]) =>
        items.map((item) => ({ ...item, id: (item.id as VideoIdType).videoId }))
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
