import { useQuery } from '@tanstack/react-query';
import Video, { VideoType } from './Video';

type VideoListProps = {};
const VideoList = ({}: VideoListProps) => {
  const { isLoading, error, data } = useQuery(
    ['data'],
    async () => {
      console.log('fetching....');
      return fetch('/data/mockData.json').then((res) => res.json());
    },
    { staleTime: 1000 * 60 * 60 }
  );
  return (
    <div className="flex flex-wrap p-5">
      {data?.items?.map?.((item: VideoType) => (
        <Video video={item} key={item.id} />
      ))}
    </div>
  );
};

export default VideoList;
