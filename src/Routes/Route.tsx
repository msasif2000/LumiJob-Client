import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login";
import Signup from "../Pages/Auth/Signup";
import Blogs from "../Pages/Blogs/Blogs";
import JobsDetails from "../Pages/JobDetails/JobsDetails";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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
          path: "/blogs",
          element: <Blogs/>
        },
        {
          path: "/details/:id",
          element: <JobsDetails></JobsDetails>,
          loader: () => fetch(`/popular.json`)
        },
      ],
    },
  ]);