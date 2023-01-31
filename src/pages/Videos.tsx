import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ReactNode } from 'react';
import { useParams } from 'react-router-dom';
import FakeYoutube from '../api/fakeYoutubeClient';
import Youtube from '../api/youtubeClient';
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
  console.log('youtube: ', youtube);
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
        <ul>
          {videos.map((video: VideoType) => (
            <VideoCard
              key={typeof video.id === 'string' ? video.id : video.id.videoId}
              video={video}
            />
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
  hight: URLandSizeType;
  medium: URLandSizeType;
  standard: URLandSizeType;
};
type URLandSizeType = {
  url: string;
  width: number;
  height: number;
};
