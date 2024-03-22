import { ImLocation } from "react-icons/im";
import { PiMoney, PiSuitcaseSimpleLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const NotificationCard = () => {
  const { premium } = useAuth();
  const axiosSecure = useAxiosSecure();
  const recJobsDemo = [1, 2, 3, 4, 5, 6];
  const [recJobs, setRecJobs] = useState<any[]>([]);

  const { user } = useAuth();

  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/matchingJobs?email=${user.email}`)
        .then((res: any) => {
          setRecJobs(res.data);
        })
        .catch((err: any) => console.log(err));
    }
  }, [user]);

  return (
    <>
      {/* <div className="bg-white xl:p-5 p-3 rounded border m-3">
        <h4 className="font-semibold font-heading text-2xl text-center">
          Get Noticed Faster
        </h4>
        <button className="w-full rounded py-2 xl:px-5 px-3 bg-accent text-white mt-5">
          Turn on notifications
        </button>
      </div> */}

      {premium === "premium" ? (
        <div className="bg-white p-2 xl:p-5 rounded border mx-3 mb-8 mt-3 min-h-64">
          <h2 className="font-heading font-semibold text-2xl my-3 text-center">
            Recommended for you
          </h2>

          <div className="grid grid-cols-1 gap-6 pb-4">
            {recJobs?.slice(0, 5).map((recJob: any) => (
              <div
                key={recJob._id}
                className="rounded-md border p-2 min-h-40 relative"
              >
                <div className="bg-[#CCB5D9] p-3 rounded-md">
                  <h2 className="font-semibold">{recJob.title}</h2>
                  <h4>{recJob.location}</h4>
                  <div className="flex flex-wrap gap-3 items-center mt-5">
                    <span className="bg-[#f8f6f6] py-1 px-3 rounded flex items-center text-xs">
                      <ImLocation className="mr-1" /> {recJob.jobType}
                    </span>
                    <span className="bg-[#f8f6f6] py-1 px-3 rounded flex items-center text-xs">
                      <PiSuitcaseSimpleLight className="mr-1" />{" "}
                      {recJob.experience.split("years")[0]} years
                    </span>

                    <span className="bg-[#f8f6f6] py-1 px-3 rounded flex items-center text-xs">
                      <PiMoney className="mr-1" /> $ {recJob.salaryRange.min} -
                      $ {recJob.salaryRange.max}
                    </span>
                  </div>
                </div>
                <div className="bg-white min-h-10 py-3 flex flex-wrap justify-between items-center">
                  <div className="flex gap-3 items-center">
                    <img src={recJob.picture} alt="c-logo" className="w-12" />
                    <h2 className="text-xs">{recJob.platform}</h2>
                  </div>
                  <div>
                    <Link
                      className="flex justify-end"
                      to={`/details/${recJob._id}`}
                    >
                      <button className=" py-1 px-5 border bg-[#CCB5D9] hover:bg-accentTwo hover:text-white font-semibold rounded-full ">
                        View
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white p-2 xl:p-5 rounded border mx-3 mb-8 mt-3 min-h-64 relative">
          <h2 className="font-heading font-semibold text-2xl my-3 text-center">
            Recommended for you
          </h2>

          <div className="grid grid-cols-1 gap-6 pb-4 filter blur-md ">
            {recJobsDemo?.slice(0, 5).map((recJob: any) => (
              <div
                key={recJob}
                className="rounded-md border p-2 min-h-40 relative"
              >
                <div className="bg-[#CCB5D9] p-3 rounded-md">
                  <h2 className="font-semibold">Fullstack Software Engineer</h2>
                  <h4>Los Angeles, CA</h4>
                  <div className="flex flex-wrap gap-3 items-center mt-5">
                    <span className="bg-[#f8f6f6] py-1 px-3 rounded flex items-center text-xs">
                      <ImLocation className="mr-1" /> Remote
                    </span>
                    <span className="bg-[#f8f6f6] py-1 px-3 rounded flex items-center text-xs">
                      <PiSuitcaseSimpleLight className="mr-1" /> 10+ years
                    </span>

                    <span className="bg-[#f8f6f6] py-1 px-3 rounded flex items-center text-xs">
                      <PiMoney className="mr-1" /> $ 1100000 - $ 1719962
                    </span>
                  </div>
                </div>
                <div className="bg-white min-h-10 py-3 flex flex-wrap justify-between items-center">
                  <div className="flex gap-3 items-center">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                      alt="c-logo"
                      className="w-12"
                    />
                    <h2 className="text-xs">Google Inc.</h2>
                  </div>
                  <div>
                    <Link
                      className="flex justify-end  btn-disabled"
                      to={`/details/65cb74e052ece56ba70ba668`}
                    >
                      <button className=" py-1 px-5 border bg-[#CCB5D9] hover:bg-accentTwo hover:text-white font-semibold rounded-full ">
                        View
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="absolute top-24 text-center text-md">
            For premium users only.
          </p>
        </div>
      )}
    </>
  );
};

export default NotificationCard;
