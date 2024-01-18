import Navbar from "../Navbar/Navbar";
import FeaturedArticle from "./components/FeaturedArticle";
import Hero from "./components/Hero";
import Seminers from "./components/Seminers";


const Insights = () => {
    return (
        <div className="Background">
            <Navbar color={'bg-gradient-to-r from-[#EEF8F1] from-5% via-[#D0FBD0] via-20% to-[#E7F9F3] to-45% ...'}/>
            <Hero/>
            <FeaturedArticle/>
            <Seminers/>
            
        </div>
    );
};

export default Insights;