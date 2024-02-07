import React, { useEffect, useState } from "react";
import FindJobCard from "./FindJobCard";
//import { IoFilterOutline } from "react-icons/io5";
import Filters from "./Filters";
import Search from "./Search";
import NotificationCard from "./NotificationCard";
import { useQuery } from "@tanstack/react-query";
import Job from "../Home/PopularJobs/Job";
import Pagination from "./Pagination";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const FindJob: React.FC = () => {
  const [currentJobs, setCurrentJobs] = useState<Job[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [jobsPerPage] = useState<number>(6);
  const axiosPublic = useAxiosPublic();
  const { data: popularJobs = [] } = useQuery({
    queryKey: ["popularJobs"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/all-job-posts`);
      return res.data;
    },
  });

  useEffect(() => {
    setCurrentJobs(popularJobs);
  }, [popularJobs]);

  const handleFilterChange = (filteredData: Job[]) => {
    setCurrentJobs(filteredData);
    setCurrentPage(1); // Reset to first page when filtering
  };

  const handleSearchResult = (searchData: any[]) => {
    setCurrentJobs(searchData);
    setCurrentPage(1); // Reset to first page when searching
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="">
        <div className="my-16 w-full lg:w-[70%] 2xl:w-[50%] mx-auto px-1">
          <h3 className="text-4xl md:text-4xl xl:text-5xl font-hanken font-semibold text-center mb-4 xl:mb-12">
            Navigate <span className="text-[#4869DD]">Opportunities</span> and
            Find Your Perfect Job Today!
          </h3>

          {/*=======> Search <============= */}
          <Search onSearchResult={handleSearchResult}></Search>
        </div>

        <div className="w-full bg-[#FAFAFA]">
          <div className="max-w-screen-2xl mx-auto px-4 grid grid-cols-1 md:grid-cols-6 xl:grid-cols-7 xl:gap-2">
            <div className="col-span-1 md:col-span-2 lg:col-span-1 xl:col-span-1">
              {/*=======> Left column <============= */}
              <Filters onFilterChange={handleFilterChange} />
            </div>

            {/* =============> Middle column <============== */}
            <div className="col-span-1 md:col-span-4 xl:col-span-5 min-h-screen">
              <div className="flex justify-between items-center min-h-32 px-4">
                <h4 className="font-semibold font-heading text-2xl">
                  <span className="text-[#486DD9]">{currentJobs.length}</span> Jobs Available
                </h4>
              </div>

              {/* ===> Showing jobs <=== */}
              <div className="grid grid-cols-1 gap-8 p-3">
                {currentJobs
                  .slice((currentPage - 1) * jobsPerPage, currentPage * jobsPerPage)
                  .map((job: Job) => (
                    <FindJobCard key={job._id} job={job}></FindJobCard>
                  ))}
              </div>

              {currentJobs.length > jobsPerPage && (
                <div className="py-12">
                  {/* ==>  Pagination <== */}
                  <Pagination
                    totalJobs={currentJobs.length}
                    jobsPerPage={jobsPerPage}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                  ></Pagination>
                </div>
              )}
            </div>

            <div className="col-span-1 hidden lg:block">
              <div className="min-h-32"></div>
              <NotificationCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindJob;
