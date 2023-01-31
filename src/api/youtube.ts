import axios, { AxiosInstance } from 'axios';
import { VideoIdType, VideoType } from '../pages/Videos';

export default class Youtube {
  httpClient: AxiosInstance;
  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://youtube.googleapis.com/youtube/v3',
      params: { key: import.meta.env.VITE_YOUTUBE_API_KEY },
    });
  }

  async search(keyword: string | undefined) {
    return keyword ? this.searchByKeyword(keyword) : this.mostPopular();
  }

  private async searchByKeyword(keyword: string) {
    return this.httpClient
      .get('search', {
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
    return this.httpClient
      .get('/videos', {
        params: {
          part: 'snippet',
          maxResults: 100,
          type: 'video',
          regionCode: 'US',
          chart: 'mostPopular',
        },
      }) //
      .then((res) => res.data.items);
  }
}
