import Banner from "../../component/Banner/Banner";
import Footer from "../../component/Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Step from "../Step_Set/Step";
import PopularJobs from "./PopularJobs/PopularJobs";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner />
      <Step></Step>
      <PopularJobs></PopularJobs>
      <Footer/>
    </div>
  );
};

export default Home;
