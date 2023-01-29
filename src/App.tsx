import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Fragment, ReactNode, useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './pages/Header';
import VideoList from './pages/VideoList';
import Root from './pages/Root';
import Video from './compoents/Video';
import VideoDetail from './pages/VideoDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <h1 className="text-white">Not Found</h1>,
    children: [
      { index: true, element: <VideoList /> },
      { path: '/videos/:query', element: <VideoList /> },
      { path: '/videos/watch/:videoId', element: <VideoDetail /> },
    ],
  },
]);

const queryClient = new QueryClient();

type AppProps = {};
const App = ({}: AppProps) => {
  return (
    <div className="bg-gray-black app">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        {/* <Header />
        <VideoList /> */}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
};

export default App;
