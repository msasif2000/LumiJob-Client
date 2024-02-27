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
import { Helmet } from "react-helmet-async";
import Loading from "../Blogs/components/err/Loading";

const FindJob: React.FC = () => {
  const [currentJobs, setCurrentJobs] = useState<Job[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [jobsPerPage] = useState<number>(6);
  const axiosPublic = useAxiosPublic();

  const { data: popularJobs, isLoading = [] } = useQuery({
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
      <Helmet>
        <title>Find Jobs | LumiJobs</title>
      </Helmet>
      <div className="">

        <div className="my-16 w-full lg:w-[70%] 2xl:w-[50%] mx-auto px-1">
          <h3 className="text-4xl md:text-4xl xl:text-5xl font-hanken font-semibold text-center mb-4 xl:mb-12">
            Navigate <span className="text-[#4869DD]">Opportunities</span> and
            Find Your Perfect Job Today!
          </h3>

          {/*=======> Search <============= */}
          <Search onSearchResult={handleSearchResult}></Search>
        </div>

        <div className="bg-[#FAFAFA]">
          <div className="max-w-screen-2xl mx-auto md:flex justify-center xl:px-5 xl:gap-6">
            <div className="lg:w-1/4 md:w-1/3">
              {/*=======> Left column <============= */}
              <Filters onFilterChange={handleFilterChange} />
            </div>

            {/* =============> Middle column <============== */}
            <div className="lg:w-2/4 md:w-2/3">
              <div className="flex justify-between items-center min-h-32 px-4">
                <h4 className="font-semibold font-heading text-2xl">
                  <span className="text-[#486DD9]">{currentJobs.length}</span>{" "}
                  Jobs Available
                </h4>
              </div>

              {/* ===> Showing jobs <=== */}
              <div className="grid grid-cols-1 gap-8 p-3">
                {isLoading ? <Loading></Loading> :null}
                { currentJobs
                  .slice(
                    (currentPage - 1) * jobsPerPage,
                    currentPage * jobsPerPage
                  )
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

            <div className="lg:w-1/4 hidden lg:block">
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
