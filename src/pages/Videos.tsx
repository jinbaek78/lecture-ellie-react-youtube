import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export type VideoType = {
  etag: string;
  kind: string;
  id: string | VideoIdType;
  snippet: SnippetType;
};

type VideosProps = {};
const Videos = ({}: VideosProps) => {
  const { keyword } = useParams();
  const youtube = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], () => youtube.search(keyword));
  return (
    <>
      Videos {keyword ? `🔎${keyword}` : `🔥`}
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Something is wrong</h1>}
      {videos && (
        // <ul className="w-full flex flex-wrap m-0 p-0">
        <ul className="grid gap-2 gap-y-3  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 ">
          {videos.map((video: VideoType) => (
            <VideoCard key={video.id as string} video={video} />
          ))}
        </ul>
      )}
    </>
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
  high: URLandSizeType;
  medium: URLandSizeType;
  standard: URLandSizeType;
};
type URLandSizeType = {
  url: string;
  width: number;
  height: number;
};
