import useAuth from "../hooks/useAuth";
import AppliedCard from "./AppliedCard";
import { ToastContainer, toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import GoToTop from "../component/GoToTop/GoToTop";
import { Helmet } from "react-helmet-async";
import NoData from "../component/NoData/NoData";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";

const AppliedJobs = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const userEmail = user?.email;

  const { data: jobs, refetch: jobsRefetch } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/get-applied-jobs/${userEmail}`);
      return res.data;
    },
  });

  // console.log(jobs)

  const handleNoData = () => {
    navigate('/find-job')
  };
  const length = jobs?.length;

  if (length === 0) {
    return (
      <div className="min-h-screen">
        <NoData text="You have not applied for any job yet" btn="Apply Job Now" noDataClick={handleNoData} />
      </div>
    )
  }
  const handleDelete = (id: string, jobId: string) => {
    const data = {
      jobId,
      userEmail,
      id,
    };
    // console.log(data)

    axiosSecure
      .post("/delete-jobs-from-candidate", data)
      .then((res) => {
        // console.log(res.data);
        if (res.data.message === "true") {
          toast.success("Cancel successfull", {
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            position: "top-center",
          });
          jobsRefetch();
        } else {
          toast.warn("Cancel failed");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.warn("Something went wrong");
      });
  };

  return (
    <>
      <Helmet>
        <title>Applied jobs | Dashboard</title>
      </Helmet>
      <GoToTop />
      <div>
        <h3 className="md:text-3xl font-bold mb-12 mt-3">
          Applied jobs <span className="text-accent">{length}</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4  gap-6">
        {jobs?.map((job: any) => (
          <AppliedCard key={job._id} job={job} handleDelete={handleDelete} />
        ))}
      </div>
      <ToastContainer />

    </>
  );
};

export default AppliedJobs;
