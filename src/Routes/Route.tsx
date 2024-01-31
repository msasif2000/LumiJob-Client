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
import DashBoard from "../Layout/DashBoard";
import CandidateProfile from "../Candidate/CandidateProfile";
import Resume from "../Candidate/Resume";
import AppliedJobs from "../Candidate/AppliedJobs";
import Bookmarks from "../Candidate/Bookmarks";
import CompanyAnalytics from "../Company/CompanyAnalytics";
import CompanyProfile from "../Company/CompanyProfile";
import PostJob from "../Company/PostJob";
import PostedJobs from "../Company/PostedJobs";
import Employees from "../Company/Employees";
import CandidateProUpdate from "../Candidate/UpdateCmponents/CandidateProUpdate";
import FindJob from "../Pages/FindJob/FindJOb";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/findjob",
        element: <FindJob />,
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
      },
      {
        path: "/signup/role",
        element: <Roles />,
      },
    ],
  },

  //Dashboard
  {
    path: "/dashboard",
    element: <DashBoard></DashBoard>,
    errorElement: <NotFound />,
    children: [
      {
        path: "candidateProfile",
        element: <CandidateProfile></CandidateProfile>,
      },
      {
        path: "candidateProfile/update",
        element: <CandidateProUpdate />,
      },
      {
        path: "candidateProfile/resume",
        element: <Resume></Resume>,
      },
      {
        path: "appliedJobs",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "bookmarks",
        element: <Bookmarks></Bookmarks>,
      },
      {
        path: "candidateAnalytics",
        element: <CompanyAnalytics></CompanyAnalytics>,
      },
      {
        path: "companyProfile",
        element: <CompanyProfile></CompanyProfile>,
      },
      {
        path: "postJob",
        element: <PostJob></PostJob>,
      },
      {
        path: "postedJobs",
        element: <PostedJobs></PostedJobs>,
      },
      {
        path: "companyAnalytics",
        element: <CompanyAnalytics></CompanyAnalytics>,
      },
      {
        path: "employees",
        element: <Employees></Employees>,
      },
    ],
  },
]);
