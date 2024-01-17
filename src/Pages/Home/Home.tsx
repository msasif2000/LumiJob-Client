import Banner from "../../component/Banner/Banner";
import Footer from "../../component/Footer/Footer";
import Navbar from "../Navbar/Navbar";
import PopularJobs from "./PopularJobs/PopularJobs";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner />
      <PopularJobs></PopularJobs>
      <Footer/>
    </div>
  );
};

export default Home;
