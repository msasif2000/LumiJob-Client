import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login";
import Signup from "../Pages/Auth/Signup";
import Insights from "../Pages/Blogs/Insights";
import ArticleDetails from "../Pages/Blogs/components/ArticleDetails";
import Contact from "../Pages/Contact/Contact";
import NotFound from "../component/err & loading/NotFound";
import JobsDetails from "../Pages/JobDetails/JobsDetails";
import PrivateRoute from "../providers/PrivateRoute";
import Roles from "../component/UpdateUser/Roles";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/insights",
        element: <Insights />,
      },
      {
        path: "/insights/:id",
        element: (
          <PrivateRoute>
            <ArticleDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/details/:id",
        element: <JobsDetails></JobsDetails>,
        loader: () => fetch(`/popular.json`),
      },
      {
        path: "/signup/role",
        element:<Roles/>
      },
    ],
  },
]);
