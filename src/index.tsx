import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Root from './Root';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Sender from './pages/Sender/Sender';
import Documentation from './pages/Documentation/Documentation';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<ErrorPage />,
    children: [
      {
        path: "/home",
        element: <App/>,
        errorElement:<ErrorPage />
      },
      {
        path:"sender",
        element: <Sender/>,
        errorElement:<ErrorPage />
      },
      {
        path: "/docd",
        element: <Documentation/>,
        errorElement:<ErrorPage />
      },
    ],
  },
  
]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

