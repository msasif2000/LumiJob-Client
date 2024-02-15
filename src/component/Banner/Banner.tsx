import { NavLink } from "react-router-dom";
import backgroundImage from "../../assets/image/banner-bg.jpg";
import useAuth from "../../hooks/useAuth";
// import iconOne from "../../assets/image/hero-icon1.png";
// import iconTwo from "../../assets/image/hero-icon2.png";

const Banner = () => {
  const {  role } = useAuth();
  return (
    <section
      className="bg-gray-50"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-screen-xl mx-auto px-4 py-10 relative">
        <div className="flex flex-col justify-center items-center text-center min-h-[60vh] md:min-h-[40vh] lg:min-h-[90vh] 2xl:min-h-[80vh]">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-semibold my-12 z-10">
            <span className="text-accentTwo">Empowering </span> Tech Careers
            with Innovation and
            <span className="text-accentTwo"> Boundless </span> Opportunities
          </h2>
          <p className="text-md md:text-lg xl:text-xl text-gray-600 px-5 md:px-28 lg:px-40 font-normal">
            Unlock the Door to Your Future: Let LumiJobs Empower Your Tech
            Career Journey with Continuous Innovation, Abundant Opportunities,
            and Limitless Possibilities
          </p>


          <button className="btn bg-btnbg text-light text-lg font-heading font-medium rounded-sm border-none px-12 lg:px-20 my-12 hover:bg-accent">
            {
              role === "company" ? (
                <NavLink to="/find-candidate">Find Skilled Candidates</NavLink>
              ) : (
                <NavLink to="/findjob">Find Your Future</NavLink>
              )
            }
          </button>

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
