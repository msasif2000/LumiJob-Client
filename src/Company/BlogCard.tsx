import { Link } from "react-router-dom";
import { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";

interface prop {
    blog: any,
    handleDelete: (blogId: string) => void;
}

const BlogCard: React.FC<prop> = ({ blog, handleDelete }) => {
    const [showDeleteIcon, setShowDeleteIcon] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);

    const formatDeadlineDate = (deadline: any) => {
        const formattedDate = new Date(deadline).toLocaleDateString("en-GB");
        return formattedDate;
    };

    const applicants = blog.applicants?.length
    console.log(applicants)


    const confirmDelete = () => {
        setShowConfirmation(true);
    };

    const cancelDelete = () => {
        setShowConfirmation(false);
    };

    const handleDeleteConfirmation = () => {
        handleDelete(blog._id);
        setShowConfirmation(false);
    };
    return (
        <div
            className="relative"
            onMouseEnter={() => setShowDeleteIcon(true)}
            onMouseLeave={() => setShowDeleteIcon(false)}
        >
            <Link key={blog._id} to={`/details/${blog._id}`}>
                <div className="card shadow-md hover:shadow-xl duration-1000">
                    <div className="card-body space-y-2">
                        <h2 className="text-2xl font-bold">{blog?.platform}</h2>
                        <div className="flex justify-between items-center">
                            <p className="font-semibold">{blog?.blogType}</p>
                            <p className="text-right">${blog?.salaryRange.min}</p>
                        </div>
                        <p>{blog?.description}</p>
                        <div className="flex justify-between items-center">
                            <p className="">{blog?.sectorType}</p>
                            <p className="text-violet-500 text-right font-semibold">
                                {
                                    blog.applicants ?
                                        <>
                                            <p>{applicants} Applicants</p>
                                        </>
                                        :
                                        <>
                                            <p>No Applicants</p>
                                        </>
                                }
                            </p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="">{blog?.location}</p>
                            <p className="text-right">
                                {formatDeadlineDate(blog?.deadline)}
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
            {showDeleteIcon && (
                <div className="absolute top-8 right-8">
                    <RiDeleteBinLine
                        className="text-red-500 cursor-pointer transition duration-300 ease-in-out transform hover:scale-150"
                        onClick={confirmDelete} // Show confirmation dialog on click
                    />
                </div>
            )}
            {showConfirmation && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md shadow-2xl w-60">
                    <p className="text-md font-semibold">Are you sure you want to delete this blog?</p>
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

export default BlogCard;