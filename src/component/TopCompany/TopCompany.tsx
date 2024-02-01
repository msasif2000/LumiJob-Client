import { useEffect, useState } from "react";
import Job from "../../Pages/Home/PopularJobs/Job";
import TopCompanyCard from "./TopCompanyCard";

const TopCompany = () => {
  const [allJobs, setAllJobs] = useState<Job[]>([]);

  useEffect(() => {
    fetch("popular.json")
      .then((res) => res.json())
      .then((data: Job[]) => setAllJobs(data));
  }, []);

  const filterJob = allJobs.slice(0, 12);

  return (
    <div className="max-w-screen-2xl mx-auto py-16 px-4">
      <div className="mb-8">
        <h3 className="text-4xl md:text-6xl lg:text-7xl font-heading font-semibold text-center mb-4 xl:mb-7">
          Most <span className="text-accentTwo">requited</span> company
        </h3>
        <p className="text-sm md:text-lg xl:text-2xl text-[#999999] text-center mx-4">
          Elevate Your Career with the Most Coveted Companies
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 mt-16">
          {filterJob?.map((job, idx) => (
            <TopCompanyCard key={idx} job={job}></TopCompanyCard> /* Changed key={job._id} to key={idx} */
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCompany;
