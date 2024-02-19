import { Link } from "react-router-dom";
import errsvg from "../../assets/svg/err.svg";

const NotFound = () => {
  return (
    <>
      <div className="max-w-screen-lg mx-auto px-4 min-h-screen flex flex-col items-center justify-center">
        <figure>
          <img src={errsvg} alt="err" className="w-full" />
        </figure>
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-heading font-semibold mt-5 text-black">
            Oh no. We lost this page
          </h2>
          <p className="my-1 md:my-4 xl:my-8 md:mx-[14%]">
            We searched everywhere but couldn’t find what you’re looking for.
            Let’s find a better place for you to go.
          </p>
          <Link to="/">
            <button className="rounded py-2 xl:px-5 px-3 bg-accent hover:bg-accentTwo text-white mt-3">
              Back to Homepage
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
