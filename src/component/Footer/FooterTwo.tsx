import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterTwo = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-screen-2xl px-4 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-center sm:justify-start">
              <h3 className="text-3xl font-bold">
                Lumi<span className="text-[#4869DD]">Jobs</span>
              </h3>
            </div>

            <p className="max-w-md mx-auto mt-4 leading-relaxed text-center text-gray-500 sm:max-w-xs sm:mx-0 sm:text-left text-sm font-normal">
              LumiJobs is designed to revolutionize the hiring process by
              providing a feature-rich platform that caters to the diverse needs
              of both companies and job seekers.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 md:grid-cols-4">
            <div className="text-center sm:text-left">
              <p className="text-sm md:text-base font-medium ">About</p>

              <nav className="mt-6">
                <ul className="space-y-4 text-xs md:text-sm">
                  <li>
                    <a className=" transition hover:/75" href="/aboutUs">
                      About Lumijobs
                    </a>
                  </li>

                  <li>
                    <a className=" transition hover:/75" href="/terms&conditions">
                      Terms & Conditions
                    </a>
                  </li>

                  <li>
                    <a className=" transition hover:/75" href="/privacy-policy">
                      Privacy Policy
                    </a>
                  </li>

                  <li>
                    <a className=" transition hover:/75" href="/">
                      Feedback
                    </a>
                  </li>
                  
                </ul>
              </nav>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-sm md:text-base font-medium ">Job Seekers</p>

              <nav className="mt-6">
                <ul className="space-y-4 text-xs md:text-sm">
                  <li>
                    <a className=" transition hover:/75" href="/">
                      Find Jobs
                    </a>
                  </li>

                  <li>
                    <a className=" transition hover:/75" href="/">
                      Create Account
                    </a>
                  </li>

                  <li>
                    <a className=" transition hover:/75" href="/">
                      List of Features
                    </a>
                  </li>

                  
                </ul>
              </nav>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-sm md:text-base font-medium ">Recruiter</p>

              <nav className="mt-6">
                <ul className="space-y-4 text-xs md:text-sm">
                  <li>
                    <a className=" transition hover:/75" href="/">
                      Create Account
                    </a>
                  </li>

                  <li>
                    <a className=" transition hover:/75" href="/">
                      Products/Service
                    </a>
                  </li>
                  <li>
                    <a className=" transition hover:/75" href="/">
                      Post a Job
                    </a>
                  </li>
                 
                </ul>
              </nav>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-sm md:text-base font-medium ">Helpful Links</p>

              <nav className="mt-6">
                <ul className="space-y-4 text-xs md:text-sm">
                  <li>
                    <a className=" transition hover:/75" href="/">
                      FAQs
                    </a>
                  </li>

                  <li>
                    <a className=" transition hover:/75" href="/">
                      Support
                    </a>
                  </li>
                  <li>
                    <a className=" transition hover:/75" href="/">
                      Contact Us
                    </a>
                  </li>

                </ul>
              </nav>
            </div>
          </div>
        </div>

        <div className="pt-6 mt-12 border-t border-gray-300">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="mt-4 text-base text-gray-500 sm:order-first sm:mt-0">
              <b>LumiJobs</b> &copy; {new Date().getFullYear()} all rights
              reserved
            </p>
            <div className="flex justify-end items-center gap-3 ">
              <Link
                to="/"
                target="_blank"
                className="rounded-full bg-white duration-200 p-3 hover:bg-gray-100"
              >
                <FaFacebookF className="text-[#1877F2] transition duration-200 hover:text-black" />
              </Link>
              <Link
                to="#"
                className="rounded-full bg-white duration-200 p-3 hover:bg-gray-100"
              >
                <AiFillYoutube className="text-[#FF0000] transition duration-200 hover:text-black" />
              </Link>

              <Link
                to="#"
                className="rounded-full bg-white duration-200 p-3 hover:bg-gray-100"
              >
                <AiFillInstagram className="text-[#E4405F] transition duration-200 hover:text-black" />
              </Link>

              <Link
                to="#"
                className="rounded-full bg-white duration-200 p-3 hover:bg-gray-100"
              >
                <FaTwitter className="text-[#1DA1F2] transition duration-200 hover:text-black" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;