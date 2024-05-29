import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { PageHeader } from './components/PageHeader';

export const App: FC = () => {
  return (
    <>
      <PageHeader />
      <Outlet />
    </>
  );
};
