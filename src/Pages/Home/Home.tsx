import Navbar from "../Navbar/Navbar";
import PopularJobs from "./PopularJobs/PopularJobs";



const Home = () => {
    return (
        <div>
           <Navbar></Navbar>
            <h1 className="text-5xl font-bold" >WELcome To </h1>
            <PopularJobs></PopularJobs>
        </div>
    );
};

export default Home;