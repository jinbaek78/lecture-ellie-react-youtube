import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import SearchHeader from './components/SearchHeader';

const queryClient = new QueryClient();

type AppProps = {};
const App = ({}: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SearchHeader />
      <Outlet />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
