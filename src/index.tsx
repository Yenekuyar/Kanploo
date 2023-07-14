import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import HomePage from './components/Templates/HomePage/home-page.view'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { LoginPageWrapper } from './components/Templates/LoginPage/login-page.styles';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LoginPageWrapper />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
    ]
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
