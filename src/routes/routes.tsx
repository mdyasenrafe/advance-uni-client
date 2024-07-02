import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { AdminRoutes } from "./admin.routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <App />,
    children: AdminRoutes,
  },
]);
