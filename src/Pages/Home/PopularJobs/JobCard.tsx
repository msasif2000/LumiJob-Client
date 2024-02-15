import { HiOutlineSparkles } from "react-icons/hi2";
import { MdDateRange } from "react-icons/md";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoMdTime } from "react-icons/io";
import { PiMoney, PiSuitcaseSimpleLight } from "react-icons/pi";
import { FaMapMarkerAlt } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import BookmarkButton from "../../../component/Shared/BookmarkButton";
import Job from "./Job";
import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import useAuth from "../../../hooks/useAuth";
import './quickly-button.css';
import { Link } from "react-router-dom";
interface JobCardsProps {
  job: Job;
}

const JobCard: React.FC<JobCardsProps> = ({ job }) => {
  const { user } = useAuth();
  const { _id, picture, location, title, salaryRange, deadline } = job;
  const jobPostId = _id;
  let applierEmail: string;

  if (user && user.email) {
    applierEmail = user.email;
  }

 

  

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      data-aos="fade-up"
      className="card w-full bg-base-100 border rounded-md "
    >
      {/*================ >> Content Box <<=============== */}

      <div className=" px-3 pt-3 ">
        <div className="bg-[#abbdf1] min-h-48 rounded-md p-4">
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

            <BookmarkButton job={job} />
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
              <PiMoney className="mr-1" /> {salaryRange?.min}-{salaryRange?.max}
            </span>
            <span className="bg-white py-1 px-3 rounded flex items-center text-sm">
              <MdDateRange className="mr-1" /> {deadline.split("T")[0]}
            </span>
          </div>
        </div>
      </div>

      {/* =========> Company Logo And Action <============== */}

      <div className="flex items-center justify-between py-4 px-10">
        <div>
          <img src={picture} alt="logo" className=" h-6 " />
        </div>
        {/*Quickly Apply button with model react form */}
        <div>
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <Link to={`details/${jobPostId}`}
            className="py-3 px-8 border border-gray-300 hover:bg-accent hover:text-white font-semibold text-base rounded-3xl"
          >
            See Details
          </Link>
         
        </div>
      </div>
    </div>
  );
};

export default JobCard;
