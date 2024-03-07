import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";

// import CFIlters from "./CFIlters";
import FindCandidateCard from "./FindCandidateCard";
import Candidate from "./CandidateType";
import CPagination from "./CPagination";
import CSearch from "./CSearch";
import { Helmet } from "react-helmet-async";
import GoToTop from "../../component/GoToTop/GoToTop";

const FindCandidate: React.FC = () => {
  const [currentCandidates, setCurrentCandidates] = useState<Candidate[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [dataPerPage, setDataPerPage] = useState<number>(9);
  const axiosPublic = useAxiosPublic();

  const handleDataPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDataPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  const { data: allCandidates = [] } = useQuery({
    queryKey: ["allCandidates"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/all-candidate-data`);
      return res.data;
    },
  });

  useEffect(() => {
    setCurrentCandidates(allCandidates);
  }, [allCandidates]);

  //   const handleFilterChange = (filteredData: Job[]) => {
  //     setCurrentCandidates(filteredData);
  //     setCurrentPage(1); // Reset to first page when filtering
  //   };

  const handleSearchResult = (searchData: any[]) => {
    setCurrentCandidates(searchData);
    setCurrentPage(1); // Reset to first page when searching
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Helmet>
        <title>Find Candidate | LumiJobs</title>
      </Helmet>
      <GoToTop />
      <div className="">
        <div className="mt-14 mb-5 w-full lg:w-[70%] 2xl:w-[50%] mx-auto px-1">
          <h3 className="text-4xl md:text-4xl xl:text-5xl font-hanken font-semibold text-center mb-4 xl:mb-12">
            Find your expected <span className="text-[#4869DD]">Skilled</span> and <span className="text-[#4869DD]">Talented </span>
             people here!
          </h3>
          {/*=======> Search <============= */}
          <CSearch onSearchResult={handleSearchResult}></CSearch>
        </div>

        <div className="bg-[#FAFAFA]">
          <div className="max-w-screen-2xl mx-auto md:flex justify-center xl:gap-6 px-4 pt-16 pb-4 lg:px-20">
            {/* <div className="lg:w-1/4 md:w-1/3">
              {/*=======> Left column <============= */}
            {/* <CFIlters onFilterChange={handleFilterChange} /> */}
            {/* </div> */}

            {/* =============> Middle column <============== */}
            <div className="">
              {/* ===> Showing jobs <=== */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-6 md:px-3 gap-4 ">
                {currentCandidates
                  .slice(
                    (currentPage - 1) * dataPerPage,
                    currentPage * dataPerPage
                  )
                  .map((candidate: Candidate) => (
                    <FindCandidateCard
                      key={candidate._id}
                      candidate={candidate}
                    ></FindCandidateCard>
                  ))}
              </div>

              <div className="flex justify-center gap-12">
                {currentCandidates.length > dataPerPage && (
                  <div className="py-12">
                    {/* ==>  Pagination <== */}
                    <CPagination
                      totalData={currentCandidates.length}
                      dataPerPage={dataPerPage}
                      currentPage={currentPage}
                      onPageChange={handlePageChange}
                    ></CPagination>
                  </div>
                )}
                <div className="flex justify-end py-12 items-center">
                  <select
                    id="dataPerPage"
                    value={dataPerPage}
                    onChange={handleDataPerPageChange}
                    className="px-2 py-1 border rounded-md"
                  >
                    <option value={10}>9</option>
                    <option value={20}>18</option>
                    <option value={30}>27</option>
                  </select>
                </div>
              </div>
            </div>

            {/* <div className="lg:w-1/4 hidden lg:block">
              <div className="min-h-32"></div>
              <NotificationCard />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default FindCandidate;
