import { useQuery } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getTruncated } from '../utility/helper';
import VideoList from './VideoList';
// youtube.googleapis.com/youtube/v3/channels?part=snippet&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=[YOUR_API_KEY]
const base = `https://youtube.googleapis.com/youtube/v3`;
const options = 'channels?part=snippet';
const key = `&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`;
type VideoDetailProps = {};
const VideoDetail = ({}: VideoDetailProps) => {
  const { videoId } = useParams();
  const { channelId, channelTitle, description, title } = useLocation().state;
  const { isLoading, data } = useQuery([`data/${channelId}`], async () => {
    const url = `${base}/${options}${key}&id=${channelId}`;
    return fetch(url).then((res) => res.json());
  });
  // console.log(data.items[0].snippet.thumbnails.default);
  console.log('data: ', data);
  // const { url } = data?.items?.[0]?.snippet?.thumbnails?.default;
  let url = '';
  if (!isLoading) {
    url = data?.items?.[0]?.snippet?.thumbnails?.default.url;
  }

  return (
    <div className="text-white flex mt-3 sm:flex-col">
      <div className="w-2/3 mr-7">
        <iframe
          width={700}
          height={400}
          src={`https://www.youtube.com/embed/${videoId}`}
          allow="accelerometer; autoplay; clipboard-write;
        encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <p className="mt-4 h-10 text-lg">{getTruncated(title, 75)}</p>
        <div className="flex mt-4">
          <img className="rounded-full" src={url} width={50} height={50} />
          <p className="mt-3 mx-2">{channelTitle}</p>
        </div>
        <p className="mt-3 text-gray-300">{getTruncated(description, 180)}</p>
      </div>
      <div className="w-full">
        <VideoList videoId={videoId} />
      </div>
    </div>
  );
};

export default VideoDetail;
