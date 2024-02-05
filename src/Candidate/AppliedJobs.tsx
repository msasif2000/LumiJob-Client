import { useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import CandidateNav from "./CommonNavbar/CandidateNav";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

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

  const formatDeadlineDate = (deadline: any) => {
    const formattedDate = new Date(deadline).toLocaleDateString("en-GB");
    return formattedDate;
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
          {jobs?.map((job:any) => (
            <Link key={job._id} to={`/details/${job._id}`}>
              <div className="card shadow-md hover:shadow-xl duration-1000">
                <div className="card-body  space-y-2">
                  <h2 className="text-2xl font-bold">{job?.platform}</h2>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold">{job?.jobType}</p>
                    <p className="text-right">${job?.salaryRange.min}</p>
                  </div>
                  <p>{job?.description}</p>
                  <div className="flex justify-between items-center">
                    <p className="">{job?.sectorType}</p>
                    <p className="text-violet-500 text-right font-semibold">{job?.status}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="">{job?.location}</p>
                    <p className="text-right">
                      {formatDeadlineDate(job?.deadline)}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppliedJobs;
