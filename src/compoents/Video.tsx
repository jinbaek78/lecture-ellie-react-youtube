import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { convertTimeToDate, getTruncated } from '../utility/helper';

export type VideoType = {
  // to be added for displaying view count
  // statistics: StatisticsType;
  etag: string;
  kind: string;
  id: string | VideoIdType;
  snippet: SnippetType;
};

export type VideoIdType = { kind: string; videoId: string };

type VideoProps = {
  video: VideoType;
  isSide?: boolean | undefined;
};
const Video = ({ video, isSide }: VideoProps) => {
  const videoId = typeof video.id === 'string' ? video.id : video.id.videoId;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/videos/watch/${videoId}`, { state: video.snippet });
  };
  const {
    snippet: {
      title,
      channelTitle,
      publishedAt,
      thumbnails: {
        medium: { url, width, height },
      },
    },
  } = video;

  const elapsedTime = Date.now() - Date.parse(publishedAt);

  return (
    <div
      className={
        isSide
          ? `w-full mb-2 flex `
          : `w-60 max-w-xs px-1 mt-2 h-50 sm:flex-auto`
      }
      onClick={handleClick}
    >
      <img
        className="mr-2"
        src={url}
        width={isSide ? 170 : width}
        height={isSide ? 100 : height}
      />
      <div className="text-sm text-white text m-0 mt-1">
        <p className="">{getTruncated(title)}</p>
        <div className="text-xs truncate text-gray-500 m-0 mt-2">
          <p>{channelTitle}</p>
          <p>{convertTimeToDate(elapsedTime)}</p>
        </div>
      </div>
    </div>
  );
};

export default Video;

type StatisticsType = {
  commentCount: string;
  favoriteCount: string;
  likeCount: string;
  viewCount: string;
};
type ThumbnailsType = {
  default: URLandSizeType;
  hight: URLandSizeType;
  medium: URLandSizeType;
  standard?: URLandSizeType;
  maxres?: URLandSizeType;
};
type URLandSizeType = {
  url: string;
  width?: number;
  height?: number;
};

type SnippetType = {
  publishedAt: string;
  channelId: string;
  channelTitle: string;
  title: string;
  description: string;
  thumbnails: ThumbnailsType;
  liveBroadcastContent: string;

  publishTime?: string;
  categoryId?: string;
  localized?: {
    title: string;
    description: string;
  };
  tags?: string[];
};
