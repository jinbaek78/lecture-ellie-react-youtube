import { useQuery } from '@tanstack/react-query';

const QUERY_OPTIONS = {
  staleTime: 1000 * 60 * 60,
};

const MOCK_POPULAR = '/videos/popular.json';
const MOCK_SEARCH = '/videos/search.json';
const MOCK_CHANNEL = '/videos/channel.json';
const MOCK_RELATED = '/videos/related.json';

const base = `https://youtube.googleapis.com/youtube/v3`;
const options = `part=snippet&regionCode=US&maxResults=100`;
const key = `&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`;

//Will there be a conflict if react router and axios are used together => do search

export const useYoutubeQuery = (keyword: string) => {
  const fetcher = async () => {
    const URL = `${base}/${keyword ? 'search' : 'videos'}?${options}${key}&${
      keyword ? `q=${keyword}` : 'chart=mostPopular'
    }`;

    // real api
    // return fetch(URL).then((res) => res.json());

    // mock
    return fetch(keyword ? MOCK_SEARCH : MOCK_POPULAR).then((res) =>
      res.json()
    );
  };
  return useQuery(['YOUTUBE/', keyword], fetcher, QUERY_OPTIONS);
};
