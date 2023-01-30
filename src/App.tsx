import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

type AppProps = {};
const App = ({}: AppProps) => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
