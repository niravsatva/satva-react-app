import { router } from 'router';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import React from 'react';
export default function App() {
  return (
    <React.Fragment>
      <RouterProvider router={router} />
      <Toaster position="top-right" reverseOrder={false} />
    </React.Fragment>
  );
}
