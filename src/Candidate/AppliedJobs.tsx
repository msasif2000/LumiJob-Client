import { useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import CandidateNav from "./CommonNavbar/CandidateNav";
import useAuth from "../hooks/useAuth";
import AppliedCard from "./AppliedCard";
// import { toast } from "react-toastify";

const AppliedJobs = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [jobs, setJobs] = useState<any | null>(null);

  useEffect(() => {
    if (user?.email) {
      axiosPublic
        .get(`/get-applied-jobs/${user?.email}`)
        .then((res) => {
          setJobs(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const length = jobs?.length;

  const handleDelete = (jobId: string) => {
   console.log(jobId)
  };

  return (
    <>
      <CandidateNav
        text="Jobs you applied for"
        btn={length}
        btn2=""
        handleClick={() => {}}
        handleClick2={() => {}}
      />

      <div>
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">
          {jobs?.map((job: any) => (
            <AppliedCard key={job._id} job={job} handleDelete={handleDelete} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AppliedJobs;
