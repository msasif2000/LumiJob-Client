import { CgWorkAlt } from "react-icons/cg"; 
import { HiUserGroup } from "react-icons/hi";
import { BiTime } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { Link } from "react-router-dom";
import { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";

interface prop {
  job: any;
  handleDelete: (jobId: string) => void;
}

const PostedJobsCard: React.FC<prop> = ({ job, handleDelete }) => {
  const [showDeleteIcon, setShowDeleteIcon] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const formatDeadlineDate = (deadline: any) => {
    const formattedDate = new Date(deadline).toLocaleDateString("en-GB");
    return formattedDate;
  };

  const applicants = job.applicants?.length
 
  const confirmDelete = () => {
    setShowConfirmation(true);
  };

  const cancelDelete = () => {
    setShowConfirmation(false);
  };

  const handleDeleteConfirmation = () => {
    handleDelete(job._id);
    setShowConfirmation(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setShowDeleteIcon(true)}
      onMouseLeave={() => setShowDeleteIcon(false)}
    >
      <Link key={job._id} to={`/details/${job._id}`}>
        <div className="card shadow-md hover:shadow-xl duration-1000 h-full">
          <div className="card-body lg:p-4 xl:p-6">
            <h2 className="text-2xl font-bold">{job?.platform}</h2>
            <div className="flex justify-between items-center">
              <p className="font-semibold">{job?.jobType}</p>
              <p className="text-right">${job?.salaryRange.min}</p>
            </div>
            <p>{job?.description}</p>
            <div className="flex">
            <p className="flex gap-1 items-center"><CgWorkAlt className="text-2xl"/>{job?.sectorType}</p>
              <p className="text-violet-500 text-right font-semibold">
                {
                  job.applicants ?
                    <>
                      <p className="flex gap-1 items-center justify-end">{applicants} Applicants <HiUserGroup className="text-xl" /></p>
                    </>
                    :
                    <>
                      <p className="flex gap-1 items-center justify-end">None<HiUserGroup className="text-xl" /></p>
                    </>
                }
              </p>
            </div>
            <div className="flex">
              <p className="flex gap-1 items-center"><GoLocation className="text-xl" />{job?.location}</p>
              <p className="flex items-center justify-end gap-1 text-violet-500 font-semibold">
                {formatDeadlineDate(job?.deadline)} <BiTime className="text-xl" />
              </p>
            </div>
          </div>
        </div>
      </Link>
      {showDeleteIcon && (
        <div className="absolute top-4 right-6 bg-red-600 p-2 rounded">
          <RiDeleteBinLine
            className="text-white cursor-pointer transition duration-300 ease-in-out transform hover:scale-150"
            onClick={confirmDelete} // Show confirmation dialog on click
          />
        </div>
      )}
      {showConfirmation && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md shadow-2xl w-60">
          <p className="text-md font-semibold">Are you sure you want to delete this job?</p>
          <div className="flex justify-center mt-4">
            <button className="bg-red-500 text-white px-4 py-1 rounded-md mr-2" onClick={handleDeleteConfirmation}>
              Yes
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-1 rounded-md" onClick={cancelDelete}>
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostedJobsCard;
