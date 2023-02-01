import axios, { AxiosRequestConfig } from 'axios';
import { IClient } from './youtubeClient';

export default class FakeYoutubeClient implements IClient {
  constructor() {}
  async search(options: AxiosRequestConfig) {
    return axios.get('/videos/search.json', options);
  }

  async videos(options: AxiosRequestConfig) {
    return axios.get('/videos/popular.json', options);
  }

  async channel(options: AxiosRequestConfig) {
    return axios.get('/videos/channel.json', options);
  }

  async related(options: AxiosRequestConfig) {
    return axios.get('/videos/related.json', options);
  }
}
