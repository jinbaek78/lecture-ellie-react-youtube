import { ReactNode } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import VideoCard from './VideoCard';
import { VideoType } from '../pages/Videos';

type RelatedVideosProps = {
  id: string;
};

const RelatedVideos = ({ id }: RelatedVideosProps) => {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['related', id], () => youtube.relatedVideos(id));
  console.log(videos?.length);
  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Something is wrong</h1>}
      {videos && (
        <ul>
          {videos.map((video: VideoType) => (
            <VideoCard
              key={typeof video.id === 'string' ? video.id : video.id.videoId}
              video={video}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default RelatedVideos;
