import { useQuery } from "@tanstack/react-query";
import PostedJobsCard from "./PostedJobsCard";
import Job from "../Pages/Home/PopularJobs/Job";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import CandidateNav from "../Candidate/CommonNavbar/CandidateNav";
import { useEffect, useState } from "react";

const PostedJobs = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  console.log(user?.email);
  const [companyPostedJobs, setCompanyPostedJobs] = useState<any | null>(null);

  useEffect(() => {
    if (user?.email) {
      axiosPublic
        .get(`/get-company-posted-jobs/${user?.email}`)
        .then((res) => {
          setCompanyPostedJobs(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const length = companyPostedJobs?.length

  return (
    <div>
      <CandidateNav
        text="Your Posted Jobs"
        btn={length}
        btn2=""
        handleClick={() => {}}
        handleClick2={() => {}}
      />
      <div className="grid grid-cols-4 gap-6">
        {companyPostedJobs?.map((job: Job) => (
          <PostedJobsCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default PostedJobs;
