import axios, { AxiosRequestConfig } from 'axios';
import { IClient } from './youtubeClient';

export default class FakeYoutubeClient implements IClient {
  constructor() {}
  async search({ params }: AxiosRequestConfig) {
    return params.relatedToVideoId
      ? axios.get('/videos/related.json')
      : axios.get('/videos/search.json');
  }

  async videos() {
    return axios.get('/videos/popular.json');
  }

  async channels() {
    return axios.get('/videos/channel.json');
  }
}
