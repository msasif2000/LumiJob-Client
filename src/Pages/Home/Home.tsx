import Banner from "../../component/Banner/Banner";
// import Step from "./Step_Set/Step";
import PopularJobs from "./PopularJobs/PopularJobs";
import HowItWorks from "./HowItWorks/HowItWorks";
import TopCompany from "../../component/TopCompany/TopCompany";
import TrustedByCompany from "./TrustedByCompany/TrustedByCompany";
import { Helmet } from "react-helmet-async";
import CallToAction from "./CallToAction/CallToAction";
import useAuth from "../../hooks/useAuth";

const Home = () => {
  const { user } = useAuth();
  return (
    <div>
      <Helmet>
        <title>Home | LumiJobs</title>
      </Helmet>
      <Banner />
      <TrustedByCompany />
      <HowItWorks />
      {/* <Step></Step> */}
      <PopularJobs />
      <TopCompany />
      {user ? null : <CallToAction />}
    </div>
  );
};

export default Home;
