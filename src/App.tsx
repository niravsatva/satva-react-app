import { router } from 'router';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}
