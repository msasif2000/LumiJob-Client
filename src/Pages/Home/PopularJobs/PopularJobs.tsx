import { useEffect, useState } from "react";
import JobCards from "./JobCards";

const PopularJobs = () => {
  const [popularJobs, setPopularJobs] = useState([]);

  useEffect(() => {
    fetch("popular.json")
      .then((res) => res.json())
      .then((data) => setPopularJobs(data));
  }, []);

  return (
    <>
      <div className="">
        <h3 className="text-4xl font-bold text-center mb-5">
          Most popular jobs for you
        </h3>
        <p className="text-sm text-center mb-10">
          The most updated platform about jobs that are open
        </p>
        <div className="grid md:grid-cols-4 gap-5">
          {popularJobs.map((job) => (
            <JobCards key={job.id} job={job}></JobCards>
          ))}
        </div>
      </div>
    </>
  );
};

export default PopularJobs;
