import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiFillYoutube, AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="relative mt-16 bg-gray-950 text-gray-600 lg:h-[360px]">
      <footer className="footer py-10 px-4 max-w-screen-2xl mx-auto grid grid-cols-2 md:grid-cols-4 font-semibold pt-20">
        <div>
          <span className="text-white uppercase text-xl">Services</span>
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
          <span className="text-white uppercase text-xl">Terms</span>
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
          <span className="text-white uppercase text-xl">Company</span>
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
          <header className="text-white uppercase text-xl">Explore</header>
          <a className="link link-hover">Features</a>
          <a className="link link-hover">Enterprise</a>
          <a className="link link-hover">Security</a>
          <a className="link link-hover">Pricing</a>
        </nav>
        <nav>
          <header className="text-white uppercase text-xl">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <div className="max-w-screen-2xl mx-auto px-4 pb-4">
        <div className="lg:flex justify-between">
          <span className="text-white font-bold text-2xl ">LumiJobs</span>
         
          <div className="flex gap-3 pt-5 lg:pt-0">
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
      <p className="text-center">Copyright © 2022 all rights reserved to Dev Dynasty.</p>
      {/* <div className="divider divider-neutral max-w-screen-2xl mx-auto"></div>
      <div className="space-y-3">
        <h1 className="text-3xl font-bold text-center">LumiJobs</h1>
        <div className="flex justify-center space-x-10">
          <p>User agreement</p>
          <p>/</p>
          <p>Responsible disclosure</p>
          <p>/</p>
          <p>Privacy policy</p>
        </div>
        <p className="text-center">Copyright © 2022 all rights reserved to Developers Dynatsy</p>
      </div> */}
    </div>
  );
};

export default Footer;
