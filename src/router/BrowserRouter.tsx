import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/login';
import Register from '../pages/register';
import { Settings } from 'pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/settings',
    element: <Settings />,
  },
]);

export default router;
