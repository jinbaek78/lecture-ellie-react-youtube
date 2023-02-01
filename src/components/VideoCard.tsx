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
    <li className="w-full">
      <img className="w-full" src={thumbnails.medium.url} alt={title} />
      <div>
        <p className="font-semibold my-2 line-clamp-2">{title}</p>
        <p className="text-sm opacity-80">{channelTitle}</p>
        <p className="text-sm opacity-80">{formatAgo(publishedAt)}</p>
      </div>
    </li>
  );
};

export default VideoCard;
