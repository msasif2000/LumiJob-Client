import { useState } from "react";
import { MdCancelScheduleSend } from "react-icons/md";
import { SiGooglemeet } from "react-icons/si";
import { Link } from "react-router-dom";

interface prop {
  job: any;
  handleDelete: (jobId: string) => void;
}

const AppliedCard: React.FC<prop> = ({ job, handleDelete }) => {
  const [cancel, setCancel] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleConfirm = () => {
    setShowConfirmation(true);
  };

  console.log(job);

  const formatDeadlineDate = (deadline: any) => {
    const formattedDate = new Date(deadline).toLocaleDateString("en-GB");
    return formattedDate;
  };

  const handleDeleteConfirmation = () => {
    handleDelete(job._id);
    setShowConfirmation(false);
  };

  const shortDesc = (desc: string, maxWord: number) => {
    const words = desc.split(" ");
    if (words.length > maxWord) {
      return words.slice(0, maxWord).join(" ") + "...";
    } else {
      return desc;
    }
  };

  function convertTo12HourFormat(time24: any) {
    let [hours, minutes] = time24.split(":").map(Number);

    let period = "AM";

    if (hours === 0) {
      hours = 12;
    } else if (hours === 12) {
      period = "PM";
    } else if (hours > 12) {
      hours -= 12;
      period = "PM";
    }

    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}:${paddedMinutes} ${period}`;
  }

  function formatDate(dateString: any) {
    const parts = dateString.split("-");
    const formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
    return formattedDate;
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setCancel(true)}
      onMouseLeave={() => setCancel(false)}
    >
      <div
        className={`card ${
          job?.scheduleInterview ? "bg-green-100 bg-opacity-60" : "bg-base-100"
        }  hover:shadow-xl duration-1000 h-full`}
      >
        <div className="card-body ">
          <Link key={job._id} to={`/details/${job._id}`} className="space-y-4">
            <h2 className="text-2xl font-bold">{job?.platform}</h2>
            <div className="flex justify-between items-center">
              <p className="font-semibold">{job?.title}</p>

              <p className="text-right">${job?.salaryRange.min}</p>
            </div>
            <p>{shortDesc(job?.description, 15)}</p>
            <div className="flex justify-between items-center">
              <p className="font-semibold">{job?.jobType}</p>
              <p className="text-violet-500 text-right font-semibold">
                {job?.status === "applicant" ? "up-opened" : job?.status}
              </p>
            </div>
          </Link>
          {job?.scheduleInterview ? (
            <div className="pt-1">
              {job?.scheduleInterview ? (
                <div className="flex items-center font-medium">
                  <div className="flex items-center  space-x-4">
                    <p className="font-semibold">Interview at:</p>
                    <Link
                      to={job?.scheduleInterview?.googleMeet}
                      target="_blank"
                      title="Google Meet"
                      className="hover:scale-150 duration-500 text-lg"
                    >
                      <SiGooglemeet />
                    </Link>
                    <p>
                      {convertTo12HourFormat(
                        job?.scheduleInterview?.interviewTime
                      )}
                    </p>
                    <p> {formatDate(job?.scheduleInterview?.interviewDate)}</p>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          ) : (
            <div className="flex justify-between items-center">
              <p className="">{job?.location}</p>
              <p className="text-right">{formatDeadlineDate(job?.deadline)}</p>
            </div>
          )}
        </div>
      </div>
      {cancel && (
        <div className="absolute top-10 right-8">
          <MdCancelScheduleSend
            className="text-red-500 cursor-pointer transition duration-300 ease-in-out transform hover:scale-150"
            onClick={handleConfirm}
          />
        </div>
      )}
      {showConfirmation && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md shadow-2xl w-60">
          <p className="text-md font-semibold">
            Are you sure you want to cancel this job application?
          </p>
          <div className="flex justify-center mt-4">
            <button
              className="bg-red-500 text-white px-4 py-1 rounded-md mr-2"
              onClick={handleDeleteConfirmation}
            >
              Yes
            </button>
            <button
              className="bg-gray-200 text-gray-700 px-4 py-1 rounded-md"
              onClick={() => setShowConfirmation(false)}
            >
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppliedCard;
