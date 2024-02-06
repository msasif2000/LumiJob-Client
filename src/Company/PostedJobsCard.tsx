import { Link } from "react-router-dom";
import { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri"; // Import the delete icon from react-icons
import { toast } from "react-toastify"; // Import toast from react-toastify
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for react-toastify

interface prop {
  job: any;
}

const PostedJobsCard: React.FC<prop> = ({ job }) => {
  const [showDeleteIcon, setShowDeleteIcon] = useState(false);

  const formatDeadlineDate = (deadline: any) => {
    const formattedDate = new Date(deadline).toLocaleDateString("en-GB");
    return formattedDate;
  };

  const handleDelete = (jobId: string) => {
    // Handle delete action
    // Here you can perform the delete action
    // For demonstration, let's just show a toast with the _id
    toast.success(`Deleted job with ID: ${jobId}`);
    console.log(jobId)
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setShowDeleteIcon(true)}
      onMouseLeave={() => setShowDeleteIcon(false)}
    >
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
              <p className="text-violet-500 text-right font-semibold">
                {job?.status}
              </p>
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
      {showDeleteIcon && (
        <div className="absolute top-8 right-8">
          <RiDeleteBinLine
            className="text-red-500 cursor-pointer transition duration-300 ease-in-out transform hover:scale-150"
            onClick={() => handleDelete(job._id)} // Pass job._id to handleDelete function
          />
        </div>
      )}
    </div>
  );
};

export default PostedJobsCard;
