import { ReactNode } from 'react';
import { VideoType } from '../pages/Videos';
import { convertTimeToDate, getTruncated } from '../utility/helper';

type VideoCardProps = {
  video: VideoType;
};
const VideoCard = ({ video }: VideoCardProps) => {
  const { snippet } = video;
  console.log('snippet:', snippet);
  const {
    channelTitle,
    title,
    publishedAt,
    thumbnails: {
      medium: { url },
    },
  } = snippet;

  // how to make the page responsive?
  return (
    <div className="w-full  flex flex-col">
      <img src={url} className="" />
      <div>
        <p className="text-sm">{getTruncated(title)}</p>
        <div className="text-xs mt-2 text-zinc-400">
          <p>{getTruncated(channelTitle, 50)}</p>
          <p>{convertTimeToDate(publishedAt)}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
