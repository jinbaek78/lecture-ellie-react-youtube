import { ReactNode } from 'react';
import { useParams } from 'react-router-dom';

type VideosProps = {};
const Videos = ({}: VideosProps) => {
  const { keyword } = useParams();
  return <div>Videos {keyword ? `🔎${keyword}` : `🔥`}</div>;
};

export default Videos;
