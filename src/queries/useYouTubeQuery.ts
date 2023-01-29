import { useQuery } from '@tanstack/react-query';
// video
//youtube.googleapis.com/youtube/v3/search?part=snippet&regionCode=US&maxResults=25&key=[YOUR_API_KEY]&q=surfing

//youtube.googleapis.com/youtube/v3/videos?part=snippet&regionCode=US&maxResults=100&key=[YOUR_API_KEY]&chart=mostPopular

//youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=Ks-_Mh1QhMc&type=video&key=[YOUR_API_KEY

// relatedToVideoId=Ks-_Mh1QhMc&type

// channel
// youtube.googleapis.com/youtube/v3/channels?part=snippet&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=[YOUR_API_KEY]

const mockPopular = '/data/mockPopular.json';
const mockSearch = '/data/mockSearch.json';
const mockRelated = '/data/mockRelatedVideos.json';

const base = `https://youtube.googleapis.com/youtube/v3`;
const options = `part=snippet&regionCode=US&maxResults=100&type=video`;
const key = `&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`;

const QUERY_OPTIONS = { staleTime: 1000 * 60 * 60 };

export const useVideosQuery = (query?: string, videoId?: string) => {
  const QUERY_KEY = `data/${query ? query : videoId ? videoId : 'popular'}`;
  const URL = `${base}/${
    query || videoId ? 'search' : 'videos'
  }?${options}${key}&${
    query
      ? `q=${query}`
      : videoId
      ? `relatedToVideoId=${videoId}`
      : `chart=mostPopular`
  }`;
  const fetcher = async () => {
    return fetch(query ? mockSearch : videoId ? mockRelated : mockPopular).then(
      (res) => res.json()
    );
    // return fetch(URL).then((res) => res.json());
  };

  return useQuery([QUERY_KEY], fetcher, QUERY_OPTIONS);
};

export const useChannelQuery = (channelId: string) => {
  const QUERY_KEY = `data/${channelId}`;
  const URL = `${base}/channels?part=snippet${key}&id=${channelId}`;
  const fetcher = async () => fetch(URL).then((res) => res.json());

  return useQuery([QUERY_KEY], fetcher, QUERY_OPTIONS);
};
