import { createBrowserRouter } from "react-router";
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";
import Register from "../pages/register";

let router = createBrowserRouter([
  {
    path: "/",
    Component: Dashboard,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
]);

export default router