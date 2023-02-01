import { ReactNode } from 'react';
import { format, register } from 'timeago.js';
import { VideoType } from '../pages/Videos';
import { formatAgo } from '../util/date';

type VideoCardProps = {
  video: VideoType;
};
const VideoCard = ({ video }: VideoCardProps) => {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  return (
    <li>
      <img src={thumbnails.medium.url} alt={title} />
      <div>
        <p>{title}</p>
        <p>{channelTitle}</p>
        <p>{formatAgo(publishedAt)}</p>
      </div>
    </li>
  );
};

export default VideoCard;
