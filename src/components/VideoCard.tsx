import { ReactNode } from 'react';
import { VideoType } from '../pages/Videos';

type VideoCardProps = {
  video: VideoType;
};
const VideoCard = ({ video }: VideoCardProps) => {
  return <div>{video.snippet.title}</div>;
};

export default VideoCard;
