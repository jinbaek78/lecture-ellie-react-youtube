import axios from 'axios';

export async function search(keyword: string | undefined) {
  return axios(`/videos/${keyword ? 'search' : 'popular'}.json`).then(
    (res) => res.data.items
  );
}
