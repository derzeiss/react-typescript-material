import { createBrowserRouter, redirect } from 'react-router-dom';
import { UncontrolledFormPage } from './pages/UncontrolledFormPage';
import { App } from './App';
import { CounterPage } from './pages/CounterPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        loader: () => redirect('/counter'),
      },
      {
        path: '/counter',
        element: <CounterPage />,
      },
      {
        path: '/uncontrolled-form',
        element: <UncontrolledFormPage />,
      },
    ],
  },
]);
