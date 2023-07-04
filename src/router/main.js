import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login";
import Dashboard from "../layouts/dashboard";
import Main from "../components/main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <Main />,
      },
    ],
  },
]);

export default router;
