import Banner from "../../component/Banner/Banner";
import Footer from "../../component/Footer/Footer";
import Navbar from "../Navbar/Navbar";
// import Step from "./Step_Set/Step";
import PopularJobs from "./PopularJobs/PopularJobs";
import HowItWorks from "./HowItWorks/HowItWorks";
// import BannerRe from "../../component/Banner/BannerRe";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      {/* <BannerRe /> */}
      <Banner />
      <HowItWorks />
      {/* <Step></Step> */}
      <PopularJobs></PopularJobs>

      <Footer />
    </div>
  );
};

export default Home;
