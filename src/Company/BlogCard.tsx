import { AiFillEdit } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";

interface prop {
    blog: any,
    handleDelete: (blogId: string) => void;
}

const BlogCard: React.FC<prop> = ({ blog, handleDelete }) => {
    const navigate = useNavigate();
    const [showDeleteIcon, setShowDeleteIcon] = useState(false);
    const [showEditIcon, setShowEditIcon] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);

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

    const confirmEdit = () => {

        navigate(`/dashboard/${blog._id}/edit-blog`, { state: { blog } });
    }
     //console.log(blog._id);   
    return (
        <div
            className="relative"
            onMouseEnter={() => {
                setShowDeleteIcon(true);
                setShowEditIcon(true);
            }}
            onMouseLeave={() => setShowDeleteIcon(false)}
        >
            <Link key={blog._id} to={`/insights/${blog._id}`}>
                <div className="card shadow-md hover:shadow-xl duration-1000 h-full">
                    <div className="card-body lg:p-4 xl:p-6">
                        <h2 className="text-2xl font-bold">{blog?.title}</h2>
                        <div className="flex justify-between items-center">
                            <p className="font-semibold">{blog?.category}</p>
                        </div>
                        <p className="font-semibold text-violet-500">{blog?.postTime?.split("T")[0]}</p>
                        <p>{blog?.details.slice(0, 100)}...</p>
                    </div>
                </div>
            </Link>
            {(showDeleteIcon && showEditIcon) && (
                <div className="absolute top-8 right-4 ">
                    <div className="bg-red-600 p-2 rounded">
                        <RiDeleteBinLine
                            className="text-white cursor-pointer transition duration-300 ease-in-out transform hover:scale-150"
                            onClick={confirmDelete} // Show confirmation dialog on click
                        />
                    </div>
                    <div className="bg-accent p-2 rounded mt-1">
                        <AiFillEdit
                            className="text-white cursor-pointer transition duration-300 ease-in-out transform hover:scale-150"
                            onClick={confirmEdit} // Show confirmation dialog on click
                        />
                    </div>
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