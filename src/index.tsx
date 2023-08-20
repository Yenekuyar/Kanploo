import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import KanbanPageController from "./pages/KanbanPage/kanban-page.controller";
import LoginController from "./pages/LoginPage/login-page.controller";
import HomePageController from "./pages/HomePage/home-page.controller";

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
        element: <HomePageController />,
      },
      {
        path: "kanban",
        element: <KanbanPageController />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
