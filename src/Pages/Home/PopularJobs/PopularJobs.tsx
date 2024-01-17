import { useEffect, useState } from "react";
import JobCards from "./JobCards";

interface Job {
  _id?: string;
  picture: string;
  platform: string;
  title: string;
  post_time: string;
  description: string;
  // Add other properties of your job object here
}

const PopularJobs = () => {
  const [popularJobs, setPopularJobs] = useState<Job[]>([]);

  useEffect(() => {
    fetch("popular.json")
      .then((res) => res.json())
      .then((data: Job[]) => setPopularJobs(data));
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
          {popularJobs?.map((job) => (
            <JobCards key={job._id} job={job}></JobCards>
          ))}
        </div>
      </div>
    </>
  );
};

export default PopularJobs;
