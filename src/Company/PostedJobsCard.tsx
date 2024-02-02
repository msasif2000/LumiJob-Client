import { HiOutlineSparkles } from "react-icons/hi2";
import { MdDateRange } from "react-icons/md";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoMdTime } from "react-icons/io";
import { PiMoney, PiSuitcaseSimpleLight } from "react-icons/pi";
import { FaMapMarkerAlt } from "react-icons/fa";

import './PostedCard.css'
import Job from "../Pages/Home/PopularJobs/Job";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Swal from "sweetalert2";

interface PostedJobsCardProps {
  job: Job;
  refetch: () => Promise<any>;
}

const PostedJobsCard: React.FC<PostedJobsCardProps> = ({ job, refetch  }) => {

  const { title, salaryRange, location } = job;

  const axiosPublic = useAxiosPublic()

  const handleDeletePost = (id: string | undefined) => {
    Swal.fire({
      title: "Are you sure to delete this post?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/postJob/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your post has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className=" bg-slate-100  rounded-md p-10 px-40 ">
      {/*================ >> Content Box <<=============== */}

      <div className=" px-3 pt-3 w-[800px] ">
        <div className="bg-[#DCE3F8] min-h-48 rounded-md p-6">
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <span className="bg-[#F9CB5B] py-1 px-4 rounded flex items-center text-sm text-gray-600">
                <HiOutlineSparkles className="mr-1" /> Featured
              </span>
              <span className="bg-[#CF474A] py-1 px-4 rounded flex items-center text-sm text-white">
                <AiOutlineThunderbolt className="mr-1" /> Urgent
              </span>
            </div>

            {/* =============> edit and delete Button <============= */}
            <div className="flex gap-4"  >
              <button
                title="Add New"
                className="group cursor-pointer outline-none hover:rotate-90 duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50px"
                  height="50px"
                  viewBox="0 0 24 24"
                  className="stroke-slate-400 fill-none group-hover:fill-slate-800 group-active:stroke-slate-200 group-active:fill-slate-600 group-active:duration-0 duration-300"
                >
                  <path
                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                    stroke-width="1.5"
                  ></path>
                  <path d="M8 12H16" stroke-width="1.5"></path>
                  <path d="M12 16V8" stroke-width="1.5"></path>
                </svg>
              </button>

              <button onClick={() => handleDeletePost(job._id)} className="bin-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 39 7"
                  className="bin-top"
                >
                  <line stroke-width="4" stroke="white" y2="5" x2="39" y1="5"></line>
                  <line
                    stroke-width="3"
                    stroke="white"
                    y2="1.5"
                    x2="26.0357"
                    y1="1.5"
                    x1="12"
                  ></line>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 33 39"
                  className="bin-bottom"
                >
                  <mask fill="white" id="path-1-inside-1_8_19">
                    <path
                      d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"
                    ></path>
                  </mask>
                  <path
                    mask="url(#path-1-inside-1_8_19)"
                    fill="white"
                    d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
                  ></path>
                  <path stroke-width="4" stroke="white" d="M12 6L12 29"></path>
                  <path stroke-width="4" stroke="white" d="M21 6V29"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 89 80"
                  className="garbage"
                >
                  <path
                    fill="white"
                    d="M20.5 10.5L37.5 15.5L42.5 11.5L51.5 12.5L68.75 0L72 11.5L79.5 12.5H88.5L87 22L68.75 31.5L75.5066 25L86 26L87 35.5L77.5 48L70.5 49.5L80 50L77.5 71.5L63.5 58.5L53.5 68.5L65.5 70.5L45.5 73L35.5 79.5L28 67L16 63L12 51.5L0 48L16 25L22.5 17L20.5 10.5Z"
                  ></path>
                </svg>
              </button>


            </div>

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
              <PiMoney className="mr-1" /> ${salaryRange.min} - ${salaryRange.max} per year
            </span>
            <span className="bg-white py-1 px-3 rounded flex items-center text-sm">
              <MdDateRange className="mr-1" /> 1 day ago
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostedJobsCard;


