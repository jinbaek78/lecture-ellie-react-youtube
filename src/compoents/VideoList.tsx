import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import Video, { VideoIdType, VideoType } from './Video';

//youtube.googleapis.com/youtube/v3/search?part=snippet&regionCode=US&maxResults=25&key=[YOUR_API_KEY]&q=surfing

//youtube.googleapis.com/youtube/v3/videos?part=snippet&regionCode=US&maxResults=100&key=[YOUR_API_KEY]&chart=mostPopular
const base = `https://youtube.googleapis.com/youtube/v3`;
const options = `part=snippet&regionCode=US&maxResults=100&type=video`;
const key = `&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`;
const mockURL = '/data/mockData.json';
const mockSearch = '/data/mockSearch.json';

type VideoListProps = {};
const VideoList = ({}: VideoListProps) => {
  const { query } = useParams();
  console.log('query: ', query);
  const { isLoading, error, data } = useQuery(
    [`data/${query ? query : ''}`],
    async () => {
      const url = `${base}/${query ? 'search' : 'videos'}?${options}${key}&${
        query ? `q=${query}` : `chart=mostPopular`
      }`;
      console.log('fetching....query, url: ', query, url);
      return fetch(query ? mockSearch : mockURL).then((res) => res.json());
      // return fetch(url).then((res) => res.json());
    },
    { staleTime: 1000 * 60 * 60 }
  );

  console.log('isLoading: ', isLoading);

  return (
    <div className="flex flex-wrap p-5">
      {isLoading && <h1 className="text-white">Loading...</h1>}
      {!isLoading &&
        data?.items?.map?.((item: VideoType) => (
          <Video
            video={item}
            key={typeof item.id === 'string' ? item.id : item.id.videoId}
          />
        ))}
    </div>
  );
};

export default VideoList;
