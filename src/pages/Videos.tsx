import { useQuery } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { useParams } from 'react-router-dom';
import { useYoutubeQuery } from '../queries/useYoutubeQuery';
export type VideoType = {
  etag: string;
  kind: string;
  id: string | VideoIdType;
  snippet: SnippetType;
};
type VideosProps = {};
const Videos = ({}: VideosProps) => {
  const { keyword } = useParams();
  const { data, isLoading } = useYoutubeQuery(keyword || '');
  console.log('data: ', data);

  return (
    <div>
      Videos {keyword ? `🔎${keyword}` : `🔥`}
      <div>
        {isLoading && <h1>Loading...</h1>}
        {!isLoading && (
          <>
            {data?.items?.map((item: VideoType) => (
              <div
                key={typeof item.id === 'string' ? item.id : item.id.videoId}
              >
                {item.snippet.title}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Videos;

export type VideoIdType = { kind: string; videoId: string };

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
