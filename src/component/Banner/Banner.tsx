import { NavLink } from "react-router-dom";
import aqua from "../../assets/GlowShadow/Aqua.svg";
import teamPhoto from "../../assets/image/team-photo.png";

const Banner = () => {
  return (
    <div>
      <div className=" lg:min-h-screen bg-[#F2F8F5] relative overflow-hidden">
        <div className="max-w-screen-2xl mx-auto lg:px-4">
          <div className="relative z-10">
            <div className="space-y-4 lg:space-y-5 xl:space-y-8  text-center">
              <h1 className="text-3xl lg:text-7xl font-bold font-heading my-12 relative z-10">
                Grow With Us <br /> And build Your Career
              </h1>
              {/* <h1 className="xl:hidden block text-3xl md:text-5xl pt-5 lg:pt-8 px-3 font-bold  relative z-10">
                Grow With Us <br /> And build Your Career
              </h1> */}
              <h1 className=" text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 px-5 md:px-28 lg:px-40 font-normal relative z-10">
                Good life begins with a good company. Let's create a better
                future by looking for jobs here. Discover opportunities that
                align with your skills and aspirations, and let's shape a
                promising tomorrow together.
              </h1>
              <div className="flex justify-center gap-2 relative z-10">
                <button className="btn bg-blue-500 text-white normal-case md:px-5 lg:px-20 mb-12 hover:bg-blue-600">
                  <NavLink to="/findjob">Find JOb</NavLink>
                </button>
              </div>
            </div>
            <img className="relative z-10" src={teamPhoto} alt="" />
            <img
              src={aqua}
              alt="blogBg"
              className="absolute right-40 -top-20 w-[1000px]"
            />
            <img
              src={aqua}
              alt="blogBg"
              className="absolute left-0 -top-0 w-[1000px]"
            />
            <img
              src={aqua}
              alt="blogBg"
              className="absolute right-20 -top-20 w-[1000px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
