import { Helmet } from "react-helmet-async";
import FeaturedArticle from "./components/FeaturedArticle";
import Hero from "./components/Hero";
import Seminers from "./components/Seminers";
import GoToTop from "../../component/GoToTop/GoToTop";

const Insights = () => {
  return (
    <div className="Background">
      <Helmet>
        <title>Insights | LumiJobs</title>
      </Helmet>
      <Hero />
      <FeaturedArticle />
      <Seminers />
      <GoToTop />
    </div>
  );
};

export default Insights;
