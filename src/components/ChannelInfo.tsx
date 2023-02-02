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
    <div>
      {url && <img src={url} alt={name} />}
      <p>{name}</p>
    </div>
  );
};

export default ChannelInfo;
