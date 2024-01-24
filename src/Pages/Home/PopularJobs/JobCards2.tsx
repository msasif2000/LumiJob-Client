import { HiOutlineSparkles } from "react-icons/hi2";
import { MdBookmarkAdd, MdDateRange } from "react-icons/md";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoMdTime } from "react-icons/io";
import { PiMoney, PiSuitcaseSimpleLight } from "react-icons/pi";
import { FaMapMarkerAlt } from "react-icons/fa";
import Job from "./Job";

interface JobCardsProps {
  job: Job;
}

const JobCardstwo: React.FC<JobCardsProps> = ({ job }) => {
  const { picture, location, title, salary, post_time } = job;

  return (
    <div className="card w-full bg-base-100 border rounded-md ">
      {/*================ >> Content Box <<=============== */}

      <div className=" px-3 pt-3 ">
        <div className="bg-[#DCE3F8] min-h-48 rounded-md p-4">
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <span className="bg-[#F9CB5B] py-1 px-4 rounded flex items-center text-sm text-gray-600">
                <HiOutlineSparkles className="mr-1" /> Featured
              </span>
              <span className="bg-[#CF474A] py-1 px-4 rounded flex items-center text-sm text-white">
                <AiOutlineThunderbolt className="mr-1" /> Urgent
              </span>
            </div>

            {/* =============> Bookmark Button <============= */}

            <button
              title="Add to Bookmark"
              className="bg-white border border-[#486DD9] hover:border-black p-2 rounded-full text-xl text-[#486DD9] hover:text-black"
            >
              <MdBookmarkAdd />
            </button>
          </div>

          <div className="py-4">
            <h3 className="text-3xl mb-2">{title}</h3>
            <p className="text-lg flex items-center gap-2 mb-4">
              <FaMapMarkerAlt /> {location}
            </p>
          </div>

          {/* =============>  Job Details <<=========== */}

          <div className="flex flex-wrap gap-3 items-center">
            <span className="bg-white py-1 px-3 rounded flex items-center text-sm">
              <IoMdTime className="mr-1" /> Full Time
            </span>
            <span className="bg-white py-1 px-3 rounded flex items-center text-sm">
              <PiSuitcaseSimpleLight className="mr-1" /> 5-7 Years
            </span>
            <span className="bg-white py-1 px-3 rounded flex items-center text-sm">
              <PiMoney className="mr-1" /> {salary}
            </span>
            <span className="bg-white py-1 px-3 rounded flex items-center text-sm">
              <MdDateRange className="mr-1" /> {post_time}
            </span>
          </div>
        </div>
      </div>

      {/* =========> Company Logo And Action <============== */}

      <div className="flex items-center justify-between py-4 px-10">
        <div>
          <img src={picture} alt="logo" className=" h-6 " />
        </div>
        <div>
          <button className="py-1 px-8 border border-gray-300 hover:bg-[#486DD9] hover:text-white font-semibold text-base rounded-3xl">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCardstwo;
