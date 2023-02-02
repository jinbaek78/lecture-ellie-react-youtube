import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { format, register } from 'timeago.js';
import { VideoType } from '../pages/Videos';
import { formatAgo } from '../util/date';

type VideoCardProps = {
  video: VideoType;
  type?: 'list' | '';
};
const VideoCard = ({ video, type }: VideoCardProps) => {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();
  const isList = type === 'list';
  console.log(isList);
  return (
    <li
      className={isList ? 'flex gap-1 m-2' : ''}
      onClick={() =>
        navigate(`/videos/watch/${video.id}`, { state: { video } })
      }
    >
      <img
        className={isList ? 'w-60 mr-1' : 'w-full'}
        src={thumbnails.medium.url}
        alt={title}
      />
      <div>
        <p className="font-semibold my-2 line-clamp-2">{title}</p>
        <p className="text-sm opacity-80">{channelTitle}</p>
        <p className="text-sm opacity-80">{formatAgo(publishedAt)}</p>
      </div>
    </li>
  );
};

export default VideoCard;
