import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import HomePage from './components/Templates/HomePage/home-page.view'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginController from './components/Templates/LoginPage/login-page.controller';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LoginController />,
      },
      {
        path: "home",
        element: <HomePage />,
        loader: async ({ request, params }) => {
          return fetch(
            `/fake/api/teams/${params.teamId}.json`,
            { signal: request.signal }
          );
        },
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
