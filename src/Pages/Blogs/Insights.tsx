import { Helmet } from "react-helmet-async";
import FeaturedArticle from "./components/FeaturedArticle";
import Hero from "./components/Hero";
import Seminers from "./components/Seminers";
import GoToTop from "../../component/GoToTop/GoToTop";

const Insights = () => {
  return (
    <div className="">
      <Helmet>
        <title>Insights | LumiJobs</title>
      </Helmet>
      <Hero />
      <div className="bg-[#FAFAFA] pt-12">
        <FeaturedArticle />
        <Seminers />
      </div>
      <GoToTop />
    </div>
  );
};

export default Insights;
