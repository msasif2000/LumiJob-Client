import { IoMdTime } from "react-icons/io";
import { MdDateRange } from "react-icons/md";
import { PiMoney, PiSuitcaseSimpleLight } from "react-icons/pi";
import Job from "../Home/PopularJobs/Job";
import { Link } from "react-router-dom";

interface JobCardsProps {
  job: Job;
}

const FindJobCard: React.FC<JobCardsProps> = ({ job }) => {
  const { _id, sector, picture, location, title, salary, post_time } = job;
  return (
    <>
      <Link to={`/details/${_id}`}>
        <div className="group grid grid-cols-12 space-x-8 overflow-hidden rounded-lg border hover:border-[#486DD9] py-8 text-gray-700 bg-white ">
          <div className="order-2 col-span-1 mt-4 -ml-14 text-left text-gray-600 hover:text-gray-700 sm:-order-1 sm:ml-4">
            <div className="group relative h-16 w-16 overflow-hidden rounded-lg">
              <img src={picture} alt="logo" className="w-full  text-gray-700" />
            </div>
          </div>
          <div className="col-span-11 flex flex-col pr-8 text-left sm:pl-4">
            <h3 className="text-sm text-gray-600 mb-2">{sector}</h3>
            <h3 className="mb-1 overflow-hidden pr-7 text-lg font-semibold sm:text-xl">
              {title}
            </h3>
            <p>{location}</p>
            {/* =============>  Job Details <<=========== */}

            <div className="flex flex-wrap gap-3 items-center mt-5">
              <span className="bg-[#E0E0E0] py-1 px-3 rounded flex items-center text-sm">
                <IoMdTime className="mr-1" /> Full Time
              </span>
              <span className="bg-[#E0E0E0] py-1 px-3 rounded flex items-center text-sm">
                <PiSuitcaseSimpleLight className="mr-1" /> 5-7 Years
              </span>
              <span className="bg-[#E0E0E0] py-1 px-3 rounded flex items-center text-sm">
                <PiMoney className="mr-1" /> {salary}
              </span>
              <span className="bg-[#E0E0E0] py-1 px-3 rounded flex items-center text-sm">
                <MdDateRange className="mr-1" /> {post_time}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default FindJobCard;
