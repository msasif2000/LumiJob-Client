import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import empowering from "../../assets/image/empowering.png";
import career from "../../assets/image/Career.png";
import innovation from "../../assets/image/innovation.png";
import { motion } from "framer-motion";

const Banner = () => {
  const { role, user } = useAuth();
  return (
    <section className="bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] -mt-16">
      <div className="max-w-screen-xl mx-auto px-4 py-10 relative">
        <div className="flex flex-col justify-center items-center text-center min-h-[60svh] md:min-h-[40vh] lg:min-h-[80vh] 2xl:min-h-[80vh] z-20 mt-12 2xl:mt-0 ">
          <h2 className="text-[#3F3F46] text-[1.4rem] md:text-5xl lg:text-6xl 2xl:text-[5.3rem] font-heading font-semibold my-12 z-10 flex flex-wrap items-center justify-center">
            Empowering
            <img
              src={empowering}
              alt="Empowering"
              className="w-5 h-5  md:w-16 md:h-16 inline ml-[0.5rem] mr-[0.5rem]"
            />
            Tech Careers
            <img
              src={career}
              alt="career"
              className="w-5 h-5  md:w-16 md:h-16 inline ml-[0.5rem] mr-[0.5rem]"
            />
            with Innovation
            <img
              src={innovation}
              alt="innovation"
              className="w-5 h-5  md:w-16 md:h-16 inline ml-[0.5rem] mr-[0.5rem]"
            />
            and Boundless Opportunities
          </h2>
          <p className="text-base md:text-lg xl:text-xl text-gray-600 px-5 md:px-28 lg:px-40 font-normal">
            Unlock the Door to Your Future: Let LumiJobs Empower Your Tech
            Career Journey with Continuous Innovation, Abundant Opportunities,
            and Limitless Possibilities
          </p>

          <NavLink
            to={user && role === "company" ? "/find-candidate" : "/find-job"}
          >
            <motion.button
              whileTap={{ scale: 0.85 }}
              className="btn  text-light text-lg font-heading font-bold  border-none px-12 lg:px-20 my-12 bg-accent hover:bg-accent rounded-full"
            >
              {user && role === "company"
                ? "Find Skilled Candidates"
                : "Find Your Future"}
            </motion.button>
          </NavLink>

          {/* <img
            src={iconOne}
            alt="icon"
            className="w-20 absolute bottom-[40%] left-16 opacity-50 z-[1]"
          />
          <img
            src={iconTwo}
            alt="icon"
            className="w-20 absolute bottom-[40%] right-16 opacity-50 z-[1]"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Banner;
