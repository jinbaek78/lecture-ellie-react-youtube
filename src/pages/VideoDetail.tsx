import { useQuery } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { SnippetType, VideoType } from './Videos';
type ChannelInfoType = {
  etag: string;
  id: string;
  kind: string;
  snippet: SnippetType;
};
type VideoDetailProps = {};
const VideoDetail = ({}: VideoDetailProps) => {
  const {
    id,
    snippet: { title, channelId, channelTitle, description },
  } = useLocation().state;
  const youtube = useYoutubeApi();
  const { isLoading: isChannelLoading, data: channelInfo } = useQuery(
    ['channel', channelId],
    () => youtube.getChannel(channelId)
  );
  console.log('channelInfo: ', channelInfo);
  const { isLoading: isRelatedLoading, data: relatedVideos } = useQuery(
    ['related', id],
    () => youtube.getRelated(id)
  );
  console.log('relatedVideos: ', relatedVideos);
  return (
    <div>
      {(isChannelLoading || isRelatedLoading) && <h1>Loading...</h1>}
      {!isChannelLoading && !isRelatedLoading && (
        <div className="flex xs:flex-col">
          {/* <div className="basis-10/12"> */}
          <div className="basis-11/12">
            <iframe
              src={`https://www.youtube.com/embed/${id}`}
              title={title}
              className="w-full h-96"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
              allowFullScreen
            ></iframe>

            <p className="font-semibold">{title}</p>
            <div className="flex items-center mt-3">
              <img
                className="rounded-full w-7 h-7 mr-1"
                src={
                  (channelInfo as ChannelInfoType).snippet.thumbnails.default
                    .url
                }
              />
              <p>{channelTitle}</p>
            </div>
            <p className="mt-3 mb-5 w-100 ">{description}</p>
          </div>
          <ul className="ml-1 basis-2/5">
            {relatedVideos.map((video: VideoType) => (
              <VideoCard
                key={typeof video.id === 'string' ? video.id : video.id.videoId}
                video={video}
                isSide={true}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default VideoDetail;
