
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiFillYoutube, AiFillInstagram } from "react-icons/ai";
const Footer = () => {
    return (
        <div className="relative mt-16">
            <footer className="-mt-1 footer p-10 bg-gray-300 grid grid-cols-2 md:grid-cols-4 font-semibold">
                <div>
                    <span className="text-blue-800 uppercase text-xl">Services</span>
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
                    <span className="text-blue-800 uppercase text-xl">Terms</span>
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
                    <span className="text-blue-800 uppercase text-xl">Company</span>
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
                    <span className="text-blue-800 uppercase text-xl">Dev. info</span>
                    <Link
                        className="link link-hover"
                        to="/"
                        target="_blank"
                    >
                        Portfolio
                    </Link>
                    <Link
                        target="_blank"
                        className="link link-hover"
                        to="/"
                    >
                        Github
                    </Link>
                    <Link
                        className="link link-hover"
                        to="/"
                        target="_blank"
                    >
                        Linkedin
                    </Link>
                    <Link
                        className="link link-hover"
                        to="/"
                        target="_blank"
                    >
                        Facebook
                    </Link>
                    <Link
                        className="link link-hover"
                        to="/"
                        target="_blank"
                    >
                        Instagram
                    </Link>

                </div>
            </footer>
            <div className="px-10 pb-4 gap-5 bg-gray-300 flex items-center justify-between">
                <div>
                    <span className="font-bold text-2xl ">LumiJobs</span>
                </div>

                <div className="flex gap-3">
                    <Link
                        to="/"
                        target="_blank"
                        className="rounded-full hover:text-black hover:bg-white bg-black text-white duration-200 p-3"
                    >
                        <FaFacebookF />
                    </Link>
                    <Link
                        to="#"
                        // target="_blank"
                        className="rounded-full hover:text-black hover:bg-white bg-black text-white duration-200 p-3"
                    >
                        <AiFillYoutube />
                    </Link>

                    <Link
                        to="#"
                        // target="_blank"
                        className="rounded-full hover:text-black hover:bg-white bg-black text-white duration-200 p-3"
                    >
                        <AiFillInstagram />
                    </Link>

                    <Link
                        to="#"
                        // target="_blank"
                        className="rounded-full hover:text-black hover:bg-white bg-black text-white duration-200 p-3"
                    >
                        <FaTwitter />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
