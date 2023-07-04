import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login";
import Dashboard from "../layouts/dashboard";
import MailingList from "../pages/mailingList";
import Surveys from "../pages/surveys";

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
      {
        path: "/dashboard/surveys",
        element: <Surveys />,
      },
    ],
  },
]);

export default router;
