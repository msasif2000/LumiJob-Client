import { useState } from "react";
import { MdCancelScheduleSend } from "react-icons/md";
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

  const formatDeadlineDate = (deadline: any) => {
    const formattedDate = new Date(deadline).toLocaleDateString("en-GB");
    return formattedDate;
  };

  const handleDeleteConfirmation = () => {
    handleDelete(job._id);
    setShowConfirmation(false);
  };

  const shortDesc = (desc: string, maxWord: number)=>{
    const words = desc.split(" ");
    if (words.length > maxWord) {
      return words.slice(0, maxWord).join(" ") + "...";
    } else {
      return desc;
    }
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setCancel(true)}
      onMouseLeave={() => setCancel(false)}
    >
      <Link key={job._id} to={`/details/${job._id}`}>
        <div className="card bg-base-100 hover:shadow-xl duration-1000">
          <div className="card-body space-y-2">
            <h2 className="text-2xl font-bold">{job?.platform}</h2>
            <div className="flex justify-between items-center">
              <p className="font-semibold">{job?.title}</p>

              <p className="text-right">${job?.salaryRange.min}</p>
            </div>
            <p>{shortDesc(job?.description, 15)}</p>
            <div className="flex justify-between items-center">
              <p className="font-semibold">{job?.jobType}</p>
              <p className="text-violet-500 text-right font-semibold">
                {job?.status}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className="">{job?.location}</p>
              <p className="text-right">{formatDeadlineDate(job?.deadline)}</p>
            </div>
          </div>
        </div>
      </Link>
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
            Are you sure you want to cancel this application?
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
