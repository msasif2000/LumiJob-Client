import { useForm, SubmitHandler } from "react-hook-form";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


interface FormData {
    photo: File;
    title: string;
    category: string;
    details: string;
}

interface BlogData {
    email: string;
    _id: string;
    role: string;
    name: string;
}

const Post_A_Blog = () => {
    const navigate = useNavigate();
    const loading = false;
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const [company, setCompany] = useState<BlogData | null>(null);
    const { register, handleSubmit, setValue } = useForm<FormData>();
    const api = import.meta.env.VITE_IMAGEBB_API_KEY;

    const date = new Date().toISOString();

    //console.log(date);
    useEffect(() => {
        if (user?.email) {
            axiosPublic
                .get(`/user-profile/${user.email}`)
                .then((res) => {
                    setCompany(res.data);
                    //console.log(res.data);
                })
                .catch((err) => console.log(err));
        }
    }, [user]);

    //console.log(company);
    const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
        const blogData = {
            ...data,
            email: company?.email,
            companyId: company?._id,
            role: company?.role,
            author: company?.name,
            postTime: date,
        };

        try {
            // Upload image to ImageBB
            const imageData = new FormData();
            imageData.append("image", data.photo);

            console.log(imageData);

            const imageUploadResponse = await axios.post(
                "https://api.imgbb.com/1/upload",
                imageData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                    params: {
                        key: api,
                    },
                }
            );
            // Check if image upload was successful
            if (imageUploadResponse.data.status === 200) {
                const imageUrl = imageUploadResponse.data.data.url;

                //set image to the field
                const updateBlog = {
                    ...blogData,
                    img: imageUrl,
                };

                axiosPublic.post("/post-the-blog", updateBlog)
                .then(res => {
                    //console.log(res.data);
                    if(res.data.insertedId){
                        toast.success("Blog Posted Successfully");
                        navigate("/dashboard/blog-posted");
                    }
                })
                .catch(err => {
                    console.log(err);
                    toast.error("Failed to post Blog");
                })

            } else {
                toast.error("Failed to upload photo");
            }
        } catch (error) {
            console.log(error);
            toast.error("An error occurred while uploading Image");
        }
    };

    return (
        <div>
            <div className=" bg-white px-2 py-5">
                <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>

                    <div className="pb-10 space-y-6">
                        <div className="form-control w-full">
                            <label
                                className="font-bold text-gray-400 text-xl"
                                htmlFor="photo"
                            >
                                Upload Image
                            </label>

                            <input
                                type="file"
                                name="photo"
                                onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                        setValue("photo", file);
                                    }
                                }}
                                className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-500"
                            />
                        </div>
                        <div className="form-control w-full">
                            <input
                                type="text"
                                {...register("title", { required: "Title is required" })}
                                placeholder="Blog Title"
                                className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-500"
                            />
                        </div>
                        <div className="form-control w-full">
                            <input
                                type="text"
                                {...register("category", {
                                    required: "Category is required",
                                })}
                                placeholder="Category"
                                className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-500"
                            />
                        </div>
                        <div className="form-control w-full">
                            <input
                                type="text"
                                {...register("details", { required: "Details is required" })}
                                className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-500"
                                placeholder="Write Details"
                            />
                        </div>

                    </div>
                    <button type="submit" className="btn btn-accent mb-10 w-full ">
                        {loading ? (
                            <span className="loading loading-ring loading-lg"></span>
                        ) : (
                            "Submit"
                        )}
                    </button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Post_A_Blog; 