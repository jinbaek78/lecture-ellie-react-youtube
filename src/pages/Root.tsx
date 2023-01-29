import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

type RootProps = {};
const Root = ({}: RootProps) => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Root;
