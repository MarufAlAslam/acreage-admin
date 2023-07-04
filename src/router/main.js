import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login";
import Dashboard from "../layouts/dashboard";
import MailingList from "../pages/mailingList";
import Surveys from "../pages/surveys";
import SurveyDetails from "../pages/survey-details";

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
        path: "/dashboard/mailings",
        element: <MailingList />,
      },
      {
        path: "/dashboard/surveys",
        element: <Surveys />,
      },
      {
        path: "/dashboard/surveys/details/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:8000/api/v1/survey/${params.id}`),
        element: <SurveyDetails />,
      },
    ],
  },
]);

export default router;
