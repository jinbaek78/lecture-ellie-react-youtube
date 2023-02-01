import { useQuery } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { format, register } from 'timeago.js';
import { VideoType } from '../pages/Videos';
import { formatAgo } from '../util/date';

type VideoCardProps = {
  video: VideoType;
};
const VideoCard = ({ video }: VideoCardProps) => {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();
  const handleVideoClick = () => {
    navigate(`/videos/watch/${video.id}`, { state: video });
  };

  return (
    <li className="w-full" onClick={handleVideoClick}>
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
