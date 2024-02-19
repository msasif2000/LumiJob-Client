import { FaBackward } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="hero h-screen flex items-center justify-center bg-gradient-to-tr from-[#abf1c0] from-5% via-[#D0FBD0] via-20% to-[#F2F8F5] to-65% ...">
        <div className="hero-content text-center">
          <div className="-mt-48">
            <h1 className="text-[650px] font-black">404</h1>
            <p className="-mt-32 text-xl">Page Not Found</p>
            <div className="mt-10 flex justify-center">
              <Link to="/" className="btn btn-accent">
                <FaBackward />
                <span>Go Home</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
