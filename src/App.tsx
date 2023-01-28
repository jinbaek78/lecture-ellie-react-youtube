import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Fragment, ReactNode, useEffect, useState } from 'react';
import Header from './compoents/Header';
import VideoList from './compoents/VideoList';

const queryClient = new QueryClient();

type AppProps = {};
const App = ({}: AppProps) => {
  return (
    <div className="bg-gray-black app">
      <QueryClientProvider client={queryClient}>
        <Header />
        <VideoList />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
};

export default App;
