import { ReactNode } from 'react';
import { convertTimeToDate, getTruncated } from '../utility/helper';

export type VideoType = {
  contentDetail: ContentDetailType;
  etag: string;
  id: string;
  kind: string;
  snippet: SnippetType;
  statistics: StatisticsType;
};

type VideoProps = {
  video: VideoType;
};
const Video = ({ video }: VideoProps) => {
  const {
    snippet,
    snippet: {
      title,
      channelTitle,
      description,
      publishedAt,
      thumbnails: {
        medium: { url, width, height },
      },
    },
  } = video;

  const elapsedTime = Date.now() - Date.parse(publishedAt);
  // milliseconds => seconds

  return (
    <div className="w-60 max-w-xs px-1 mt-2 h-50 sm:flex-auto ">
      <img className="" src={url} width={width} height={height} />
      <div className="text-sm text-white text m-0 mt-1">
        <p className="">{getTruncated(title)}</p>
      </div>
      <div className="text-xs truncate text-gray-500 m-0 mt-2">
        <p>{channelTitle}</p>
        <p>{convertTimeToDate(elapsedTime)}</p>
      </div>
    </div>
  );

  // <iframe
  //   width={width}
  //   height={height}
  //   src={`https://www.youtube.com/embed/${id}`}
  //   title="as of today"
  //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  // ></iframe>
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
  standard: URLandSizeType;
};
type URLandSizeType = {
  url: string;
  width: number;
  height: number;
};
type ContentDetailType = {
  caption: 'true' | 'false';
  contentRatings: {};
  definition: string;
  dimension: '2d' | '3d';
  duration: string;
  licensedContent: boolean;
  projection: string;
};
type SnippetType = {
  categoryId: string;
  channelId: string;
  channelTitle: string;
  description: string;
  liveBroadcastContent: string;
  localized: {
    title: string;
    description: string;
  };
  publishedAt: string;
  tags: string[];
  thumbnails: ThumbnailsType;
  title: string;
};
