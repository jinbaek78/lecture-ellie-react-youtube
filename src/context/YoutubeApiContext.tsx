import { createContext, ReactNode, useContext } from 'react';
import FakeYoutube from '../api/fakeYoutube';
import Youtube, { Searchable } from '../api/youtube';

const YoutubeApiContext = createContext<Searchable | null>(null);

// const youtube: Searchable = new Youtube();
const youtube: Searchable = new FakeYoutube();

type YoutubeApiContextProps = {
  children: ReactNode;
};
const YoutubeApiProvider = ({ children }: YoutubeApiContextProps) => {
  return (
    <YoutubeApiContext.Provider value={youtube}>
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
