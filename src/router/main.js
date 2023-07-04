import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login";
import Dashboard from "../layouts/dashboard";
import MailingList from "../pages/mailingList";

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
        element: <MailingList />,
      },
    ],
  },
]);

export default router;
