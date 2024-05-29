import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { UncontrolledFormPage } from './pages/UncontrolledFormPage';
import { App } from './App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/uncontrolled-form',
        element: <UncontrolledFormPage />,
      },
    ],
  },
]);
