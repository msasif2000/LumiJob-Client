import useAxiosPublic from "../hooks/useAxiosPublic";
import useAuth from "../hooks/useAuth";
import AppliedCard from "./AppliedCard";
import { ToastContainer, toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";

const AppliedJobs = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const userEmail = user?.email;

  const { data: jobs, refetch: jobsRefetch } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/get-applied-jobs/${userEmail}`);
      return res.data;
    },
  });

  const length = jobs?.length;

  const handleDelete = (jobId: string) => {
    const data = {
      jobId,
      userEmail,
    };

    axiosPublic
      .post("/delete-jobs-from-candidate", data)
      .then((res) => {
        console.log(res.data);
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
      <div>
        <h3 className="md:text-3xl font-bold mb-12 mt-3">
          Applied jobs <span className="text-accent">{length}</span>
        </h3>
      </div>
      <div>
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">
          {jobs?.map((job: any) => (
            <AppliedCard key={job._id} job={job} handleDelete={handleDelete} />
          ))}
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default AppliedJobs;
