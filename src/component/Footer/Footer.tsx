import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiFillYoutube, AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="relative bg-white text-[#74767e] border-t ">
      <div className="footer py-10 px-4 max-w-screen-2xl mx-auto grid grid-cols-2 md:grid-cols-4 font-Macan font-normal text-lg lg:min-h-[22rem] pt-20 ">
        <div>
          <span className="capitalize font-Macan font-bold text-xl text-gray-900">
            Services
          </span>
          <Link className="link link-hover" to="#">
            Branding
          </Link>
          <Link className="link link-hover" to="#">
            Design
          </Link>
          <Link className="link link-hover" to="#">
            Marketing
          </Link>
          <Link className="link link-hover" to="#">
            Advertisement
          </Link>
        </div>
        <div>
          <span className="capitalize font-Macan font-bold text-xl text-gray-900">
            Terms
          </span>
          <Link className="link link-hover" to="#">
            Branding
          </Link>
          <Link className="link link-hover" to="#">
            Design
          </Link>
          <Link className="link link-hover" to="#">
            Marketing
          </Link>
          <Link className="link link-hover" to="#">
            Advertisement
          </Link>
        </div>
        <div>
          <span className="capitalize font-Macan font-bold text-xl text-gray-900">
            Company
          </span>
          <Link className="link link-hover" to="#">
            Branding
          </Link>
          <Link className="link link-hover" to="#">
            Design
          </Link>
          <Link className="link link-hover" to="#">
            Marketing
          </Link>
          <Link className="link link-hover" to="#">
            Advertisement
          </Link>
        </div>
        <nav>
          <header className="capitalize font-Macan font-bold text-xl text-gray-900">
            Explore
          </header>
          <a className="link link-hover">Features</a>
          <a className="link link-hover">Enterprise</a>
          <a className="link link-hover">Security</a>
          <a className="link link-hover">Pricing</a>
        </nav>
        <nav>
          <header className="capitalize font-Macan font-bold text-xl text-gray-900">
            Legal
          </header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
      <div className="max-w-screen-2xl min-h-16 mx-auto px-4 pb-4 ">
        <div className="divider"></div>
        <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center">
          <h5 className="text-center  font-normal">
            Copyright © {new Date().getFullYear()} all rights reserved LumiJobs
          </h5>

          <div className="flex justify-end items-center gap-3 ">
            <Link
              to="/"
              target="_blank"
              className="rounded-full hover:text-black bg-white duration-200 p-3"
            >
              <FaFacebookF />
            </Link>
            <Link
              to="#"
              // target="_blank"
              className="rounded-full hover:text-black bg-white duration-200 p-3"
            >
              <AiFillYoutube />
            </Link>

            <Link
              to="#"
              // target="_blank"
              className="rounded-full hover:text-black bg-white duration-200 p-3"
            >
              <AiFillInstagram />
            </Link>

            <Link
              to="#"
              // target="_blank"
              className="rounded-full hover:text-black bg-white duration-200 p-3"
            >
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
