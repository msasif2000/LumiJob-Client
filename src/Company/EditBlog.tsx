import { useLocation } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";

interface FormData {
    photo: File;
    title: string;
    category: string;
    details: string;
}

const EditBlog = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const loading = false;
    const blog = location.state.blog;
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit} = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
        axiosPublic.patch(`/update-blog/${blog._id}`, data)
            .then(res => {
                if (res.data._id) {
                    toast.success(`Blog post updated successfully`, {
                        hideProgressBar: true,
                        autoClose: 2000,
                        position: "top-center",
                    });
                    navigate('/dashboard/blog-posted');
                }
            })
            .catch(err => {
                console.error("Error updating blog:", err);
                toast.error("An error occurred while updating the Blog.");
            });
    };
    return (
        <div>
            <div className=" bg-white px-2 py-5">
                <div>
                    <img src={blog?.img} alt="" />
                </div>
                <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>

                    <div className="pb-10 space-y-6">
                        <div className="form-control w-full">
                        <label>
                                Title
                            </label>
                            <input
                                type="text"
                                {...register("title", { required: "Title is required" })}
                                defaultValue={blog?.title}
                                className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-500"
                            />
                        </div>
                        <div className="form-control w-full">
                            <label>
                                Category
                            </label>
                            <input
                                type="text"
                                {...register("category", {
                                    required: "Category is required",
                                })}
                                defaultValue={blog?.category}
                                className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-500"
                            />
                        </div>
                        <div className="form-control w-full">
                        <label>
                                Details
                            </label>
                            <input
                                type="text"
                                {...register("details", { required: "Details is required" })}
                                className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-500"
                                defaultValue={blog?.details}
                            />
                        </div>

                    </div>
                    <button type="submit" className="btn btn-accent mb-10 w-full ">
                        {loading ? (
                            <span className="loading loading-ring loading-lg"></span>
                        ) : (
                            "Update"
                        )}
                    </button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default EditBlog;