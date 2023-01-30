import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import SearchHeader from './components/SearchHeader';

type AppProps = {};
const App = ({}: AppProps) => {
  return (
    <div>
      <SearchHeader />
      <Outlet />
    </div>
  );
};

export default App;
