import { NavLink } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import bannerImg from "../../assets/image/bannerImg.png";
import googleIcon from "../../assets/icon/google-Icon.png";
import dropboxIcon from "../../assets/icon/Dropbox-Icon.png";
import twitterIcon from "../../assets/icon/twitter-Icon.png";
const Banner = () => {
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto ">
        <div className="flex px-4 justify-between flex-col md:flex-row items-center ">
          <div className="flex-1 space-y-5 lg:space-y-10 py-5">
            <h3 className="text-4xl lg:text-6xl font-bold">
              Grow With Us <br className="hidden lg:flex " /> And build Your
              Career
            </h3>
            <p className="md:text-base lg:text-lg text-gray-600">
              Good life begins with a good company. Let's create a better future
              by looking for jobs here
            </p>

            <div className="flex gap-2 ">
              <button className="btn bg-blue-500 text-white normal-case md:px-5 lg:px-10">
                <NavLink to="/">Get Stated</NavLink>
              </button>
              <button className="btn border-2 border-blue-500 text-blue-500 normal-case">
                <NavLink className="flex items-center gap-2" to="/">
                  <FaPlay /> Watch Video
                </NavLink>
              </button>
            </div>
          </div>

          <div className="flex-1 relative">
            <div>
              <img
                className="md:h-96 lg:h-full  md:w-[480px] lg:w-full "
                src={bannerImg}
                alt=""
              />
            </div>
            <div>
              <img
                className="absolute z-2 bg-white w-10 md:w-12 lg:w-16 top-16 lg:top-24 left-16 lg:left-32 rounded-lg drop-shadow-xl p-3"
                src={googleIcon}
                alt=""
              />
              <img
                className="absolute z-2 bg-white w-10 md:w-12 lg:w-16 top-40 md:top-48 lg:top-60 left-8 lg:left-20 rounded-lg drop-shadow-xl p-3"
                src={dropboxIcon}
                alt=""
              />
            </div>
            <div className="absolute bottom-0 lg:bottom-20 right-1 bg-white rounded-xl drop-shadow-xl p-4 w-[205px] md:w-[260px] lg:w-[300px]">
              <div className="flex items-center gap-2 ">
                <img className="w-8 lg:w-12" src={twitterIcon} alt="" />
                <div className="flex flex-col gap-1">
                  <p className="text-sm lg:text-lg font-semibold">
                    Twitter Inc
                  </p>
                  <p className="text-xs lg:text-base text-gray-600">
                    California, USA
                  </p>
                </div>
              </div>
              <p className="md:text-xs lg:text-base text-gray-600 pt-2 hidden md:flex md:flex-col">
                Online social networking and micro-blogging service that...
                <NavLink
                  className="text-blue-700 text-xs lg:text-base font-semibold"
                  to="/"
                >
                  Read more
                </NavLink>{" "}
              </p>
              <div className="mt-3">
                <button className="btn btn-sm bg-blue-100 p-[5px] md:p-3 lg:p-3 text-[11px] md:text-[12px]  text-blue-900 normal-case">
                  Fulltime
                </button>
                <button className="btn btn-sm bg-green-10 p-[5px] md:p-3 lg:p-3 text-[11px] md:text-[12px] text-green-800 normal-case mx-1 lg:mx-3">
                  Remote
                </button>
                <button className="btn btn-sm bg-fuchsia-100 p-[5px] md:p-3 lg:p-3 text-[11px] md:text-[12px] text-fuchsia-800 normal-case">
                  Anywhere
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
