import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import Video, { VideoIdType, VideoType } from '../compoents/Video';

//youtube.googleapis.com/youtube/v3/search?part=snippet&regionCode=US&maxResults=25&key=[YOUR_API_KEY]&q=surfing

//youtube.googleapis.com/youtube/v3/videos?part=snippet&regionCode=US&maxResults=100&key=[YOUR_API_KEY]&chart=mostPopular

//youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=Ks-_Mh1QhMc&type=video&key=[YOUR_API_KEY

// relatedToVideoId=Ks-_Mh1QhMc&type

const base = `https://youtube.googleapis.com/youtube/v3`;
const options = `part=snippet&regionCode=US&maxResults=100&type=video`;
const key = `&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`;

const mockPopular = '/data/mockPopular.json';
const mockSearch = '/data/mockSearch.json';
const mockRelated = '/data/mockRelatedVideos.json';

type VideoListProps = {
  videoId?: string;
};
const VideoList = ({ videoId }: VideoListProps) => {
  console.log('videoId: ', videoId);
  const { query } = useParams();
  console.log('query: ', query);
  const { isLoading, error, data } = useQuery(
    [`data/${query ? query : videoId ? videoId : ''}`],
    async () => {
      const url = `${base}/${
        query || videoId ? 'search' : 'videos'
      }?${options}${key}&${
        query
          ? `q=${query}`
          : videoId
          ? `relatedToVideoId=${videoId}`
          : `chart=mostPopular`
      }`;
      console.log('fetching....query, url: ', query, url);
      return fetch(
        query ? mockSearch : videoId ? mockRelated : mockPopular
      ).then((res) => res.json());
      // return fetch(url).then((res) => res.json());
    },
    { staleTime: 1000 * 60 * 60 }
  );

  console.log('isLoading: ', isLoading);
  return (
    <div className={videoId ? `ml-3 w-full` : `flex flex-wrap p-5`}>
      {isLoading && <h1 className="text-white">Loading...</h1>}
      {!isLoading &&
        data?.items?.map?.((item: VideoType) => (
          <Video
            isSide={videoId !== undefined}
            video={item}
            key={typeof item.id === 'string' ? item.id : item.id.videoId}
          />
        ))}
    </div>
  );
};

export default VideoList;
