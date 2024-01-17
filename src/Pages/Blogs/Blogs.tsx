import Navbar from "../Navbar/Navbar";
import Hero from "./components/Hero";
import Seminers from "./components/Seminers";
import TopNews from "./components/TopNews";

const Blogs = () => {
    return (
        <div className="Background">
            <Navbar color={'bg-gradient-to-r from-[#EEF8F1] from-5% via-[#D0FBD0] via-20% to-[#E7F9F3] to-45% ...'}/>
            <Hero/>
            <TopNews/>
            <Seminers/>
            
        </div>
    );
};

export default Blogs;