import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/login';
import Register from '../pages/register';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

export default router;
