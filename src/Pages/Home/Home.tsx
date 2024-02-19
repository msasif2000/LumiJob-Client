import Banner from "../../component/Banner/Banner";
// import Step from "./Step_Set/Step";
import PopularJobs from "./PopularJobs/PopularJobs";
import HowItWorks from "./HowItWorks/HowItWorks";

// import BannerRe from "../../component/Banner/BannerRe";

import TopCompany from "../../component/TopCompany/TopCompany";

const Home = () => {
  return (
    <div>
      {/* <BannerRe /> */}
      <Banner />
      <HowItWorks />
      {/* <Step></Step> */}
      <PopularJobs />
      <TopCompany />
    </div>
  );
};

export default Home;
