import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";

// import CFIlters from "./CFIlters";
import FindCandidateCard from "./FindCandidateCard";
import Candidate from "./CandidateType";
import CPagination from "./CPagination";
import CSearch from "./CSearch";


const FindCandidate: React.FC = () => {
  const [currentCandidates, setCurrentCandidates] = useState<Candidate[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [candidatesPerPage] = useState<number>(4);
  const axiosPublic = useAxiosPublic();
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
      <div className="">
        <div className="my-16 w-full lg:w-[70%] 2xl:w-[50%] mx-auto px-1">
          

          {/*=======> Search <============= */}
          <CSearch onSearchResult={handleSearchResult}></CSearch>
        </div>

        <div className="bg-[#FAFAFA]">
          <div className="max-w-screen-2xl mx-auto md:flex justify-center xl:px-5 xl:gap-6">
            {/* <div className="lg:w-1/4 md:w-1/3">
              {/*=======> Left column <============= */}
              {/* <CFIlters onFilterChange={handleFilterChange} /> */}
            {/* </div> */} 

            {/* =============> Middle column <============== */}
            <div className="lg:w-2/4 md:w-2/3">

              {/* ===> Showing jobs <=== */}
              <div className="grid grid-cols-1 px-3">
                {currentCandidates
                  .slice((currentPage - 1) * candidatesPerPage, currentPage * candidatesPerPage)
                  .map((candidate: Candidate) => (
                    <FindCandidateCard key={candidate._id} candidate={candidate}></FindCandidateCard>
                  ))}
              </div>

              {currentCandidates.length > candidatesPerPage && (
                <div className="py-12">
                  {/* ==>  Pagination <== */}
                  <CPagination
                    totalCandidates={currentCandidates.length}
                    candidatesPerPage={candidatesPerPage}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                  ></CPagination>
                </div>
              )}
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
