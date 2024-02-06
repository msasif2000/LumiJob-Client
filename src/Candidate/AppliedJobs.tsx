import { useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import CandidateNav from "./CommonNavbar/CandidateNav";
import useAuth from "../hooks/useAuth";
import AppliedCard from "./AppliedCard";
import { toast } from "react-toastify";

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
    axiosPublic
      .delete(`//${jobId}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.message === "true") {
          toast.success(`Job post deleted successfully`, {
            hideProgressBar: true,
            autoClose: 2000,
            position: "top-center",
          });
          setJobs(jobs?.filter((job: any) => job._id !== jobId));
        }
      })
      .catch((err) => {
        console.error("Error deleting job:", err);
        toast.error("An error occurred while deleting the job");
      });
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
        <div className="grid grid-cols-4 gap-6">
          {jobs?.map((job: any) => (
            <AppliedCard key={job._id} job={job} handleDelete={handleDelete} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AppliedJobs;
