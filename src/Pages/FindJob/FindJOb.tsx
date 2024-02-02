import React, { SetStateAction, useState } from "react";
import Footer from "../../component/Footer/Footer";
import Navbar from "../Navbar/Navbar";
import FindJobCard from "./FindJobCard";
import { IoFilterOutline } from "react-icons/io5";
import Filters from "./Filters";
import Search from "./Search";
import NotificationCard from "./NotificationCard";
import { useQuery } from "@tanstack/react-query";
import Job from "../Home/PopularJobs/Job";
import Pagination from "./Pagination";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const FindJob: React.FC = () => {
  const [currentJobs, setCurrentJobs] = useState<Job[]>([]);
  const axiosPublic = useAxiosPublic()
  const { data: popularJobs = [] } = useQuery({
    queryKey: ["popularJobs"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/all-job-posts`);
      return res.data;
    },
  });

  const handleFilterChange = (filteredData: Job[]) => {
    setCurrentJobs(filteredData);
  };

  return (
    <>
      <Navbar />
      <div className="">
        <div className="my-16 w-full lg:w-[70%] 2xl:w-[50%] mx-auto px-1">
          <h3 className="text-4xl md:text-4xl xl:text-5xl font-hanken font-semibold text-center mb-4 xl:mb-12">
            Navigate <span className="text-[#4869DD]">Opportunities</span> and
            Find Your Perfect Job Today!
          </h3>

          {/*=======> Search <============= */}
          <Search />
        </div>

        <div className="w-full bg-[#FAFAFA]">
          <div className="max-w-screen-2xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-4">
            {/*=======> Left column <============= */}
            <Filters onFilterChange={handleFilterChange} />

            {/* =============> Middle column <============== */}
            <div className="col-span-1 md:col-span-4 lg:col-span-3 min-h-screen">
              <div className="flex justify-between items-center min-h-32 px-4">
                <h4 className="font-semibold font-heading text-2xl">
                  <span className="text-[#486DD9]">3,137</span> Jobs Available
                </h4>
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="flex items-center gap-2 py-2 px-5 border border-[#486DD9] text-[#486DD9] font-semibold rounded"
                  >
                    <IoFilterOutline /> Filter By
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* ===> Showing jobs <=== */}
              <div className="grid grid-cols-1 gap-8 p-3">
                {currentJobs.map((job: Job) => (
                  <FindJobCard key={job._id} job={job}></FindJobCard>
                ))}
              </div>

              <div className="py-12">
                {/* ==>  Pagination <== */}
                <Pagination
                  popularJobs={popularJobs}
                  onPageChange={(jobs: SetStateAction<Job[]>) => setCurrentJobs(jobs)}
                ></Pagination>
              </div>
            </div>

            <div className="col-span-1 hidden lg:block">
              <div className="min-h-32"></div>
              <NotificationCard />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FindJob;
