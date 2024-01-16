import Banner from "../../component/Banner/Banner";
import Navbar from "../Navbar/Navbar";


const Home = () => {
    return (
        <div>
            <Banner/>
           <Navbar></Navbar>
            <h1 className="text-5xl font-bold" >WELcome To </h1>
        </div>
    );
};

export default Home;