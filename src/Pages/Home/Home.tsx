import Banner from "../../component/Banner/Banner";
// import Step from "./Step_Set/Step";
import PopularJobs from "./PopularJobs/PopularJobs";
import HowItWorks from "./HowItWorks/HowItWorks";
import TopCompany from "../../component/TopCompany/TopCompany";
import TrustedByCompany from "./TrustedByCompany/TrustedByCompany";
import { Helmet } from "react-helmet-async";
import CallToAction from "./CallToAction/CallToAction";
import useAuth from "../../hooks/useAuth";
import GoToTop from "../../component/GoToTop/GoToTop";
import FeedbackForWebsiteHome from "../FeedbackForWebsiteHome/FeedbackForWebsiteHome";

const Home = () => {
  const { user } = useAuth();
  return (
    <div className="">
      <Helmet>
        <title>Home | LumiJobs</title>
      </Helmet>
      <GoToTop />
      <Banner />
      <TrustedByCompany />
      <HowItWorks />
      {/* <Step></Step> */}
      <PopularJobs />
      <TopCompany />
      <FeedbackForWebsiteHome></FeedbackForWebsiteHome>
      {user ? null : <CallToAction />}
      
    </div>
  );
};

export default Home;
