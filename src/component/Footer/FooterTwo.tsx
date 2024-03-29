import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FaXTwitter } from "react-icons/fa6";

const FooterTwo = () => {
  const { user } = useAuth();
  return (
    <footer className="bg-white border-t">
      <div className="max-w-screen-2xl px-4  pt-16 pb-6 mx-auto sm:px-6 lg:px-20 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-center sm:justify-start">
              <h3 className="text-3xl font-bold">
                Lumi<span className="text-[#4869DD]">Jobs</span>
              </h3>
            </div>

            <p className="max-w-md mx-auto mt-4 leading-relaxed text-center text-gray-500 sm:max-w-xs sm:mx-0 sm:text-left font-normal text-xs md:text-sm xl:text-lg">
              LumiJobs is designed to revolutionize the hiring process by
              providing a feature-rich platform that caters to the diverse needs
              of both companies and job seekers.
            </p>
          </div>

          <div className="grid gap-8 grid-cols-2 lg:col-span-2 md:grid-cols-4">
            <div className="text-center sm:text-left">
              <p className="text-xs md:text-sm xl:text-lg font-medium ">About</p>
              <hr />
              <nav className="mt-6">
                <ul className="space-y-4 text-xs md:text-sm xl:text-lg">
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
                </ul>
              </nav>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-xs md:text-sm xl:text-lg font-medium ">Job Seekers</p>
              <hr />
              <nav className="mt-6">
                <ul className="space-y-4 text-xs md:text-sm xl:text-lg">
                  <li>
                    <Link to={"/find-job"} className=" transition hover:/75" >
                      Find Job
                    </Link>
                  </li>

                  {user ? null : (
                    <li>
                      <Link className="transition hover:/75" to={"/signup"}>
                        Create Account
                      </Link>
                    </li>
                  )}

                  <li>
                    <Link className=" transition hover:/75" to={"/features"}>
                      List of Features
                    </Link>
                  </li>


                </ul>
              </nav>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-xs md:text-sm xl:text-lg font-medium ">Recruiter</p>
              <hr />
              <nav className="mt-6">
                <ul className="space-y-4 text-xs md:text-sm xl:text-lg">
                  {user ? null : (
                    <li>
                      <Link className="transition hover:/75" to={"/signup"}>
                        Create Account
                      </Link>
                    </li>
                  )}

                  <li>
                    <Link className=" transition hover:/75" to={"services"}>
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link className=" transition hover:/75" to={"/find-candidate"}>
                      Candidates
                    </Link>
                  </li>


                </ul>
              </nav>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-xs md:text-sm xl:text-lg font-medium ">Helpful Links</p>
              <hr />
              <nav className="mt-6">
                <ul className="space-y-4 text-xs md:text-sm xl:text-lg">
                  <li>
                    <Link className=" transition hover:/75" to="/faqs">
                      FAQs
                    </Link>
                  </li>

                  <li>
                    <Link className=" transition hover:/75" to={"/supports"}>
                      Support
                    </Link>
                  </li>
                  <li>
                    <Link className=" transition hover:/75" to={"/Contact"}>
                      Contact Us
                    </Link>
                  </li>

                </ul>
              </nav>
            </div>
          </div>
        </div>

        <div className="pt-6 mt-12 border-t border-gray-300">
          <div className="text-center md:flex md:justify-between items-center sm:text-left">
            <p className="mt-4 text-xs md:text-sm xl:text-lg text-gray-500 sm:order-first sm:mt-0">
              <b>LumiJobs</b> &copy; {new Date().getFullYear()} all rights
              reserved
            </p>
            <div className="flex justify-center md:justify-end items-center gap-3 ">
              <a
                href="https://www.facebook.com"
                target="_blank"
                className="rounded-full bg-white duration-200 p-3 hover:bg-gray-100"
              >
                <FaFacebookF className="text-[#1877F2] transition duration-200 hover:text-black" />
              </a>

              <a
                href="https://www.youtube.com"
                target="_blank"
                className="rounded-full bg-white duration-200 p-3 hover:bg-gray-100"
              >
                <AiFillYoutube className="text-red-500 transition duration-200 hover:text-black" />
              </a>

              <a
                href="https://www.instagram.com"
                target="_blank"
                className="rounded-full bg-white duration-200 p-3 hover:bg-gray-100"
              >
                <AiFillInstagram className="text-[#E1306C] transition duration-200 hover:text-black" />
              </a>

              <a
                href="https://www.twitter.com"
                target="_blank"
                className="rounded-full bg-white duration-200 p-3 hover:bg-gray-100"
              >
                <FaXTwitter className="text-[#1DA1F2] transition duration-200 hover:text-black" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;