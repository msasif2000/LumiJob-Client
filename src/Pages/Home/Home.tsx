import Banner from "../../component/Banner/Banner";
import Navbar from "../Navbar/Navbar";
import PopularJobs from "./PopularJobs/PopularJobs";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner />
      <PopularJobs></PopularJobs>
    </div>
  );
};

export default Home;
