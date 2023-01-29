import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Fragment, ReactNode, useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './compoents/Header';
import VideoList from './compoents/VideoList';
import Root from './pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <h1 className="text-white">Not Found</h1>,
    children: [
      { index: true, element: <VideoList /> },
      { path: '/videos/:query', element: <VideoList /> },
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
