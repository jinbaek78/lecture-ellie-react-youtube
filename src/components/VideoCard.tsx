import { useQuery } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { format, register } from 'timeago.js';
import { VideoType } from '../pages/Videos';
import { formatAgo } from '../util/date';

type VideoCardProps = {
  video: VideoType;
  isSide?: boolean | undefined;
};
const VideoCard = ({ video, isSide }: VideoCardProps) => {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();
  const handleVideoClick = () => {
    navigate(`/videos/watch/${video.id}`, { state: video });
  };

  return (
    <li
      className={isSide ? 'w-full flex pb-2' : 'w-full'}
      onClick={handleVideoClick}
    >
      <img
        className={isSide ? 'w-60 mr-2' : 'w-full'}
        src={thumbnails.medium.url}
        alt={title}
      />
      <div>
        <p
          className={
            isSide
              ? 'text-xs font-semibold my-2 line-clamp-2'
              : 'font-semibold my-2 line-clamp-2'
          }
        >
          {title}
        </p>
        <p className={isSide ? 'text-[11px] opacity-80' : 'text-sm opacity-80'}>
          {channelTitle}
        </p>
        <p className={isSide ? 'text-[11px] opacity-80' : 'text-sm opacity-80'}>
          {formatAgo(publishedAt)}
        </p>
      </div>
    </li>
  );
};

export default VideoCard;
