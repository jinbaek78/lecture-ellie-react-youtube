import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

type AppProps = {};
const App = ({}: AppProps) => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default App;
