import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login";
import Signup from "../Pages/Auth/Signup";
import Insights from "../Pages/Blogs/Insights";
import ArticleDetails from "../Pages/Blogs/components/ArticleDetails";

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
          path: "/insights",
          element:<Insights/>
        },
        {
          path: "/insights/:id",
          element:<ArticleDetails/>
        },
      ],
    },
  ]);