import PostedJobsCard from "./PostedJobsCard";
import Job from "../Pages/Home/PopularJobs/Job";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import CandidateNav from "../Candidate/CommonNavbar/CandidateNav";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import NoData from "../component/NoData/NoData";

const PostedJobs = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const [companyPostedJobs, setCompanyPostedJobs] = useState<any | null>(null);
  const navigate = useNavigate()

  useEffect(() => {
    if (user?.email) {
      axiosPublic
        .get(`/get-company-posted-jobs/${user?.email}`)
        .then((res) => {
          setCompanyPostedJobs(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const handleDelete = (jobId: string) => {
    axiosPublic
      .delete(`/delete-job/${jobId}`)
      .then((res) => {
      
        if (res.data.message === 'true') {
          toast.success(`Job post deleted successfully`, {
            hideProgressBar: true,
            autoClose: 2000,
            position: "top-center",
          });
          setCompanyPostedJobs(
            companyPostedJobs?.filter((job: any) => job._id !== jobId)
          );
        }
      })
      .catch((err) => {
        console.error("Error deleting job:", err);
        toast.error("An error occurred while deleting the job.");
      });
  };

  const handlePostJob = () => {
    navigate('/dashboard/postJob');
  }

  const length = companyPostedJobs?.length;

  return (
    <>
      {
        length ? (
          <div>
            <CandidateNav
              text="Your Posted Jobs"
              btn="Post Jobs"
              btn2={length}
              handleClick={() => { handlePostJob() }}
              handleClick2={() => { }}
            />
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
              {companyPostedJobs?.map((job: Job) => (
                <PostedJobsCard key={job._id} job={job} handleDelete={handleDelete} />
              ))}
            </div>
            <ToastContainer />
          </div >
        )
          :
          (
            <NoData text="You have not posted any jobs yet" btn="Post Job" noDataClick={handlePostJob} />
          )
      }</>
  );
};

export default PostedJobs;
