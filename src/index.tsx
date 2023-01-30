import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import VideoDetail from './pages/VideoDetail';
import Videos from './pages/Videos';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Videos /> },
      { path: '/videos/', element: <Videos /> },
      { path: 'videos/:query', element: <Videos /> },
      { path: 'videos/watch/:videoId', element: <VideoDetail /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
