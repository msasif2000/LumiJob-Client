import Navbar from "../Navbar/Navbar";
import Hero from "./components/Hero";
import TopNews from "./components/TopNews";

const Blogs = () => {
    return (
        <div className="Background">
            <Navbar color={'bg-[#F2F8F5]'}/>
            <Hero/>
            <TopNews/>
            
        </div>
    );
};

export default Blogs;