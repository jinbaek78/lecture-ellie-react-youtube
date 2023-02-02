import { createContext, ReactNode, useContext } from 'react';
import FakeYoutubeClient from '../api/fakeYoutubeClient';
import Youtube, { IYoutube } from '../api/youtube';
import YoutubeClient, { IClient } from '../api/youtubeClient';

type YoutubeContextType = {
  youtube: IYoutube;
};
const YoutubeApiContext = createContext<YoutubeContextType | null>(null);

const client = new FakeYoutubeClient();
// const client = new YoutubeClient();
const youtube = new Youtube(client);
type YoutubeApiProviderProps = {
  children: ReactNode;
};
const YoutubeApiProvider = ({ children }: YoutubeApiProviderProps) => {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
};

export default YoutubeApiProvider;

export function useYoutubeApi() {
  const context = useContext(YoutubeApiContext);
  if (context) {
    return context;
  }

  throw Error('YoutubeAPi is empty');
}
