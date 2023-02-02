import { useQuery } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';

type ChannelInfoProps = {
  id: string;
  name: string;
};
const ChannelInfo = ({ id, name }: ChannelInfoProps) => {
  const { youtube } = useYoutubeApi();
  const { data: url } = useQuery(['channel', id], () =>
    youtube.channelImageURL(id)
  );
  console.log(url);

  return (
    <div className="flex my-4 mb-8 items-center">
      {url && <img className="w-10 h-10 rounded-full" src={url} alt={name} />}
      <p className="text-lg font-medium ml-2">{name}</p>
    </div>
  );
};

export default ChannelInfo;
