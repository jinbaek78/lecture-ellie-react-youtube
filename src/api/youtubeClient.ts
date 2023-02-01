import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export interface IClient {
  httpClient?: AxiosInstance;
  search: (options: AxiosRequestConfig) => Promise<any>;
  videos: (options: AxiosRequestConfig) => Promise<any>;
  channel: (options: AxiosRequestConfig) => Promise<any>;
  related: (options: AxiosRequestConfig) => Promise<any>;
}

export default class YoutubeClient implements IClient {
  httpClient: AxiosInstance;
  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://youtube.googleapis.com/youtube/v3',
      params: { key: import.meta.env.VITE_YOUTUBE_API_KEY },
    });
  }
  async search(options: AxiosRequestConfig) {
    return this.httpClient.get('search', options);
  }

  async videos(options: AxiosRequestConfig) {
    return this.httpClient.get('videos', options);
  }

  async channel(options: AxiosRequestConfig) {
    return this.httpClient.get('channels', options);
  }

  async related(options: AxiosRequestConfig) {
    return this.httpClient.get('search', options);
  }
}
