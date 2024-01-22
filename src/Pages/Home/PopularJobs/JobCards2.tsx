import { HiOutlineSparkles } from "react-icons/hi2";
import { MdBookmarkAdd, MdDateRange } from "react-icons/md";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoMdTime } from "react-icons/io";
import { PiMoney, PiSuitcaseSimpleLight } from "react-icons/pi";

const JobCardstwo = () => {
  return (
    <div className="card w-full bg-base-100 border rounded-md ">
      {/*================ >> Content Box <<=============== */}

      <div className=" px-3 pt-3 ">
        <div className="bg-[#C8F5D8] min-h-72 rounded-md p-4">
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <span className="bg-white py-1 px-4 rounded flex items-center text-sm">
                <HiOutlineSparkles className="mr-1" /> Featured
              </span>
              <span className="bg-white py-1 px-4 rounded flex items-center text-sm">
                <AiOutlineThunderbolt className="mr-1" /> Urgent
              </span>
            </div>

            {/* =============> Bookmark Button <============= */}

            <button
              title="Add to Bookmark"
              className="bg-white border border-[#28D769] hover:border-black p-2 rounded-full text-xl text-[#28D769]"
            >
              <MdBookmarkAdd />
            </button>
          </div>

          <div className="py-4">
            <h3 className="text-3xl">Mechine Learning Engineer</h3>
            <p className="text-lg">Stockholm, Sweden</p>
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
              <PiMoney className="mr-1" /> $250K Per Year
            </span>
            <span className="bg-white py-1 px-3 rounded flex items-center text-sm">
              <MdDateRange className="mr-1" /> Posted on Jan 12, 2024
            </span>
          </div>
        </div>
      </div>

      {/* =========> Company Logo And Action <============== */}

      <div className="flex items-center justify-between p-5">
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/559px-Spotify_logo_with_text.svg.png"
            alt="logo"
            className="w-32"
          />
        </div>
        <div>
          <button className="py-2 px-10 border bg-black text-gray-200 hover:text-white font-bold rounded-3xl">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCardstwo;
