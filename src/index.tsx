import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginController from './components/Templates/LoginPage/login-page.controller';
import HomePageController from './components/Templates/HomePage/home-page.controller';
import KanbanPageController from './components/Templates/KanbanPage/kanban-page.controller';

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
        element: <HomePageController />
      },
      {
        path: "kanban",
        element: <KanbanPageController />,
      }
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
