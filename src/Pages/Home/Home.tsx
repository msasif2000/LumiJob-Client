import Banner from "../../component/Banner/Banner";
// import Step from "./Step_Set/Step";
import PopularJobs from "./PopularJobs/PopularJobs";
import HowItWorks from "./HowItWorks/HowItWorks";

import TopCompany from "../../component/TopCompany/TopCompany";
import TrustedByCompany from "./TrustedByCompany/TrustedByCompany";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | LumiJobs</title>
      </Helmet>
      <Banner />
      <TrustedByCompany></TrustedByCompany>
      <HowItWorks />
      {/* <Step></Step> */}
      <PopularJobs />
      <TopCompany />
    </div>
  );
};

export default Home;
