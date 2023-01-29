import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import Video, { VideoType } from '../compoents/Video';
import { useVideosQuery } from '../queries/useYouTubeQuery';

type VideoListProps = {
  videoId?: string;
};
const VideoList = ({ videoId }: VideoListProps) => {
  const { query } = useParams();
  const { isLoading, error, data } = useVideosQuery(query, videoId);

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
