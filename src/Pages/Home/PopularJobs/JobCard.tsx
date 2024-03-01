import { HiOutlineSparkles } from "react-icons/hi2";
import { MdDateRange } from "react-icons/md";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoMdTime } from "react-icons/io";
import { PiMoney } from "react-icons/pi";
import { FaMapMarkerAlt } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import BookmarkButton from "../../../component/Shared/BookmarkButton";
import Job from "./Job";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./quickly-button.css";

interface JobCardsProps {
  job: Job;
}

const JobCard: React.FC<JobCardsProps> = ({ job }) => {
  const { _id, picture, location, title, salaryRange, deadline ,jobType  } = job;
  const jobPostId = _id;

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      data-aos="fade-up"
      className="bg-white rounded-lg shadow-lg hover:shadow-xl overflow-hidden"
    >
      <div className="px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <span className="bg-blue-500 text-white py-1 px-2 rounded-full text-xs flex">
              <HiOutlineSparkles className="" /> <span>Featured</span>
            </span>
            <span className="bg-red-600 text-white py-1 px-2 rounded-full text-xs flex">
              <AiOutlineThunderbolt className="" /> <span>Urgent</span>
            </span>
          </div>
          <BookmarkButton job={job} />
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-sm text-gray-600 flex items-center gap-1">
            <FaMapMarkerAlt className="text-gray-500" />{" "}
            <span>{location}</span>
          </p>
        </div>
        <div className="flex flex-wrap gap-3 items-center mt-4">
          <span className="bg-gray-200 py-1 px-2 rounded-full flex items-center text-xs text-gray-700">
            <IoMdTime className="mr-1" /> {jobType}
          </span>
          {/* <span className="bg-gray-200 py-1 px-2 rounded-full flex items-center text-xs text-gray-700">
            <PiSuitcaseSimpleLight className="mr-1" />
          </span> */}
          <span className="bg-gray-200 py-1 px-2 rounded-full flex items-center text-xs text-gray-700">
            <PiMoney className="mr-1" /> {salaryRange?.min}$
          </span>
          <span className="bg-gray-200 py-1 px-2 rounded-full flex items-center text-xs text-gray-700">
            <MdDateRange className="mr-1" /> {deadline.split("T")[0]}
          </span>
        </div>
      </div>
      <div className="px-6 py-4 bg-gray-100 border-t border-gray-200 flex justify-between items-center">
        <div>
          <img src={picture} alt="Company Logo" className="h-8 max-w-16" />
        </div>
        <div>
          <Link
            to={`details/${jobPostId}`}
            className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold text-xs rounded-full transition duration-300 ease-in-out"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
