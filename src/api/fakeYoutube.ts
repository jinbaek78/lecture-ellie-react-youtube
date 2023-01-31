import axios from 'axios';
import { VideoIdType, VideoType } from '../pages/Videos';

export default class FakeYoutube {
  constructor() {}

  async search(keyword: string | undefined) {
    return keyword ? this.searchByKeyword() : this.mostPopular();
  }

  private async searchByKeyword() {
    return axios
      .get('/videos/search.json')
      .then((res) => res.data.items)
      .then((items: VideoType[]) =>
        items.map((item) => ({ ...item, id: (item.id as VideoIdType).videoId }))
      );
  }

  private async mostPopular() {
    return axios.get('/videos/popular.json').then((res) => res.data.items);
  }
}
