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
import CompanyProUpdate from "../Company/Update/CompanyProUpdate";
import SubscriptionsUiCompany from "../Pages/Subscription/SubscriptionsUiCompany";
import SubscriptionsUiCandidate from "../Pages/Subscription/SubscriptionsUiCandidate";
import AdminDashboard from "../Admin/AdminDashboard";
import ManageCompany from "../Admin/ManageCompany";
import ManageJobs from "../Admin/ManageJobs";
import ManagePayments from "../Admin/ManagePayments";
import ManageCandidate from "../Admin/ManageCandidate";
import Payment from "../Pages/Payment/Payment";
import OptionSubscribe from "../Pages/Subscription/OptionSubscribe";
// import TopCompany from "../component/TopCompany/TopCompany";
import TopCompanyProfile from "../component/TopCompany/TopCompanyProfile";
import Blogs from "../Company/Blogs";
import Post_A_Blog from "../Company/Post_A_Blog";
import CandidateDetails from "../Pages/CandidateDetails/CandidateDetails";
import FindCandidate from "../Pages/FindCandidate/FindCandidate";

import EditBlog from "../Company/EditBlog";
import Seminars from "../Company/Seminars";
// import Post_A_Seminar from "../Company/Post_A_Seminar";
import ManageApplicants from "../Company/ManageApplicants";
// import CandidateResume from "../Candidate/CandidateResume";
import CandidateResumeUpdate from "../Candidate/UpdateCmponents/CandidateResumeUpdate";
import Add_Data from "../Admin/Add_Data";
import Challenges from "../Admin/Challenges/Challenges";
import CollaborationHub from "../Pages/CollaborationHub/CollaborationHub";
import TaskDetails from "../Pages/CollaborationHub/TaskDetails";
import AboutUs from "../component/Footer/FooterPages/AboutUs";
import TermsConditions from "../component/Footer/FooterPages/TermsConditions";
import PrivacyPolicy from "../component/Footer/FooterPages/PrivacyPolicy";
import Features from "../component/Footer/FooterPages/Features";
import ProductAndService from "../component/Footer/FooterPages/ProductAndService";
import FAQs from "../component/Footer/FooterPages/FAQs";
import Supports from "../component/Footer/FooterPages/Supports";

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
        path: "/find-job",
        element: <FindJob />,
      },
      {
        path: "/find-candidate",
        element: <FindCandidate></FindCandidate>,
      },
      {
        path: "/subscriptionsUiCompany",
        element: <SubscriptionsUiCompany></SubscriptionsUiCompany>,
      },
      {
        path: "/subscriptionsUiCandidate",
        element: <SubscriptionsUiCandidate />,
      },
      {
        path: "/optionsSubscribe",
        element: <OptionSubscribe></OptionSubscribe>,
      },
      

      {
        path: "/insights",
        element: <Insights />,
      },
      {
        path: "/insights/:_id",
        element: <ArticleDetails />,
      },
      {
        path: "/collaboration-hub",
        element: <CollaborationHub />
      },
      {
        path: "/task-details",
        element: <TaskDetails />
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
        path: "/manage-applicants/:id",
        element: (
          <PrivateRoute>
            <ManageApplicants />
          </PrivateRoute>
        ),
      },
      {
        path: "/company-details-profile/:id",
        element: <TopCompanyProfile></TopCompanyProfile>,
      },
      // {
      //   path: "/companyProfileView/:id",
      //   element: <TopCompanyProfile></TopCompanyProfile>,
      // },
      {
        path: "/candidate-detailsProfile/:id",
        element: <CandidateDetails></CandidateDetails>,
      },
      // footer 
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/terms&conditions",
        element: <TermsConditions></TermsConditions>,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy></PrivacyPolicy>,
      },
      {
        path: "/features",
        element: <Features></Features>,
      },
      {
        path: "/services",
        element: <ProductAndService></ProductAndService>,
      },
      {
        path: "/faqs",
        element: <FAQs></FAQs>,
      },
      {
        path: "/supports",
        element: <Supports></Supports>
      },
    ],
  },

  {
    path: "payment/:planId",
    element: <Payment />,
  },

  {
    path: "/signup/role",
    errorElement: <NotFound />,
    element: <Roles />,
  },

  //Login

  {
    path: "/login",
    errorElement: <NotFound />,
    element: <Login />,
  },

  //SignUp
  {
    path: "/signup",
    errorElement: <NotFound />,
    element: <Signup />,
  },

  //Dashboard
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoard />
      </PrivateRoute>
    ),
    errorElement: <NotFound />,
    children: [
      // Admin Dashboard Routes
      {
        path: "adminDashboard",
        element: <AdminDashboard />,
      },
      {
        path: "admin/manage-candidate",
        element: <ManageCandidate />,
      },
      {
        path: "admin/manage-company",
        element: <ManageCompany />,
      },
      {
        path: "admin/manage-jobs",
        element: <ManageJobs />,
      },
      {
        path: "admin/manage-payments",
        element: <ManagePayments />,
      },
      {
        path: "admin/challenges",
        element: <Challenges />,
      },
      {
        path: "admin/add-data",
        element: <Add_Data />,
      },

      // Candidate Dashboard Routes
      {
        path: "candidateProfile",
        element: <CandidateProfile />,
      },
      {
        path: "candidateProfile/update",
        element: <CandidateProUpdate />,
      },

      {
        path: "resume",
        element: <Resume></Resume>,
      },
      // {
      //   path: "resume",
      //   element: <CandidateResume></CandidateResume>,
      // },
      {
        path: "resume/update",
        element: <CandidateResumeUpdate></CandidateResumeUpdate>,
      },
      {
        path: "appliedJobs",
        element: <AppliedJobs />,
      },
      {
        path: "bookmarks",
        element: <Bookmarks />,
      },
      {
        path: "candidateAnalytics",
        element: <CompanyAnalytics />,
      },

      // Company Dashboard Routes
      {
        path: "companyProfile",
        element: <CompanyProfile />,
      },
      {
        path: "companyProfile/update",
        element: <CompanyProUpdate />,
      },
      {
        path: "postJob",
        element: <PostJob />,
      },
      {
        path: "postedJobs",
        element: <PostedJobs />,
      },
      {
        path: "blog-posted",
        element: <Blogs />,
      },
      {
        path: "post-a-blog",
        element: <Post_A_Blog />,
      },
      {
        path: ":id/edit-blog",
        element: <EditBlog />,
      },
      {
        path: "seminar-posted",
        element: <Seminars />,
      },
      // {
      //   path: "post-a-seminar",
      //   element: <Post_A_Seminar />
      // },
      {
        path: "companyAnalytics",
        element: <CompanyAnalytics />,
      },
      {
        path: "employees",
        element: <Employees />,
      },

      // {
      //   path: "feedback",
      //   element: <Feedback></Feedback>,
      // },

    ],
  },
]);
