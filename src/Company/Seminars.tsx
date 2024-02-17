import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import SeminarCard from "./SeminarCard";


interface FormData {
    startTime: Date;
    endTime: Date;
    title: string;
    location: string;
    description: string;
    speaker: string;
    author: string;
}

interface SeminarData {
    email: string;
    _id: string;
    role: string;
    name: string;
}

interface Seminar {
    _id: string,
    title: string,
    startDate: Date,
    endTime: Date,
    email: string,
    location: string,
    description: string,
    speaker: string,
    author: string,
}

const Seminars = () => {
    const loading = false;
    const navigate = useNavigate();
    const [companyPostedSeminars, setCompanyPostedSeminars] = useState<any | null>(null);
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const [company, setCompany] = useState<SeminarData | null>(null);
    const { register, handleSubmit } = useForm<FormData>();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };
      
    useEffect(() => {
        if (user?.email) {
            axiosPublic.get(`/get-posted-Seminars/${user?.email}`)
                .then(res => {
                    setCompanyPostedSeminars(res.data);
                })
                .catch(err => {
                    console.log(err);
                })
        }
        axiosPublic.get(`/user-profile/${user.email}`)
            .then((res) => {
                setCompany(res.data);
                //console.log(res.data);
            })
            .catch((err) => console.log(err));

    }, [user]);
    const length = companyPostedSeminars?.length;
    const handleDelete = (seminarId: string) => {
        axiosPublic
            .delete(`/delete-seminar/${seminarId}`)
            .then((res) => {
                //console.log(res.data);
                if (res.data.acknowledged) {
                    toast.success(`Seminar deleted successfully`, {
                        hideProgressBar: true,
                        autoClose: 2000,
                        position: "top-center",
                    });
                    setCompanyPostedSeminars(
                        companyPostedSeminars?.filter((seminar: any) => seminar._id !== seminarId),
                    );
                    navigate('/dashboard/seminar-posted');
                }
            })
            .catch((err) => {
                console.error("Error deleting Seminar:", err);
                toast.error("An error occurred while deleting the Seminar.");
            });
    };

    const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
        const seminarData = {
            ...data,
            email: company?.email,
            companyId: company?._id,
            role: company?.role,
            author: company?.name,
        };
        axiosPublic.post("post-the-seminar", seminarData)
            .then((res) => {
                if (res.data) {
                    toast.success("Seminar Posted Successfully", {
                        hideProgressBar: true,
                        autoClose: 2000,
                        position: "top-center",
                    });
                    navigate('/dashboard/seminar-posted');
                }
            })
            .catch((err) => {
                console.log(err);
                toast.error("Failed to post Seminar");
            })

    };

    return (
        <div>
            <div className="navbar">
                <div className="md:navbar-start">
                    {/* for small device */}
                    <div>
                        <div className=" flex justify-end gap-2 text-xs mb-5 lg:hidden">
                            <button className="border-2 bg-slate-100 py-1 px-2 hover:bg-slate-200"> <a className="">{length}</a></button>
                            <button className="border-2 bg-slate-100 py-1 px-2 hover:bg-slate-200"><a href="#my_modal_8" className="">open modal</a></button>
                        </div>
                        <div className="modal" role="dialog" id="my_modal_8">

                        </div>
                        <a className="text-xl md:text-3xl font-semibold">Your Posted Blogs</a>
                    </div>
                </div>
                {/* for large device  */}
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        <a className="btn">{length}</a>
                        <a href="#my_modal_8" className="btn">open modal</a>
                    </ul>
                    <div className="modal" role="dialog" id="my_modal_8">
                        <div className="modal-box bg-white px-2 py-5">
                            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>

                                <div className="pb-10 space-y-6">
                                    <div className="form-control w-full">
                                        <input
                                            type="text"
                                            {...register("title", { required: "Title is required" })}
                                            placeholder="Seminar Topic"
                                            className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-500"
                                        />
                                    </div>
                                    <div className="form-control w-full">
                                        <input
                                            type="datetime-local"
                                            {...register("startTime", { required: "Time is required" })}

                                            className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-500"
                                        />
                                    </div>
                                    <div className="form-control w-full">
                                        <input
                                            type="datetime-local"
                                            {...register("title")}
                                            className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-500"
                                        />
                                    </div>
                                    <div className="form-control w-full">
                                        <input
                                            type="text"
                                            {...register("location", { required: "Location is required" })}
                                            placeholder="Venue"
                                            className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-500"
                                        />
                                    </div>
                                    <div className="form-control w-full">
                                        <input
                                            type="text"
                                            {...register("speaker", {
                                                required: "Speaker is required",
                                            })}
                                            placeholder="Speaker"
                                            className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-500"
                                        />
                                    </div>
                                    <div className="form-control w-full">
                                        <input
                                            type="text"
                                            {...register("description", { required: "Description is required" })}
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
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">This modal works with anchor links</p>
                            <div className="modal-action">
                                <a href="#" className="btn">Yay!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-6">
                {companyPostedSeminars?.map((seminar: Seminar) => (
                    <SeminarCard key={seminar._id} seminar={seminar} handleDelete={handleDelete} />
                ))}
            </div>
            <ToastContainer />
        </div>
    );
};

export default Seminars;