import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import SeminarCard from "./SeminarCard";

interface FormData {
    title: string;
    date: Date;
    startTime: Date;
    endTime: Date;
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
    _id: string;
    title: string;
    date: Date;
    startTime: Date;
    endTime: Date;
    email: string;
    location: string;
    description: string;
    speaker: string;
    author: string;
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
            axiosPublic
                .get(`/get-posted-Seminars/${user?.email}`)
                .then((res) => {
                    setCompanyPostedSeminars(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        axiosPublic
            .get(`/user-profile/${user.email}`)
            .then((res) => {
                setCompany(res.data);
            })
            .catch((err) => console.log(err));
    }, [user]);

    const length = companyPostedSeminars?.length;

    const handleDelete = (seminarId: string) => {
        axiosPublic.delete(`/delete-seminar/${seminarId}`)
            .then((res) => {
                if (res.data.acknowledged) {
                    toast.success(`Seminar deleted successfully`, {
                        hideProgressBar: true,
                        autoClose: 2000,
                        position: "top-center",
                    });
                    setCompanyPostedSeminars(companyPostedSeminars?.filter((seminar: any) => seminar._id !== seminarId));
                    setIsModalOpen(false);
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
        axiosPublic
            .post("/post-the-seminar", seminarData)
            .then((res) => {
                if (res.data) {
                    toast.success("Seminar Posted Successfully", {
                        hideProgressBar: true,
                        autoClose: 2000,
                        position: "top-center",
                    });
                    navigate("/dashboard/seminar-posted");
                }
            })
            .catch((err) => {
                console.log(err);
                toast.error("Failed to post Seminar");
            });
    };

    return (
        <div>
            <div className="navbar">
                <div className="md:navbar-start">
                    {/* for small device */}
                    <div>
                        <div className="flex justify-end gap-2 text-xs mb-5 lg:hidden">
                            <button className="border-2 bg-slate-100 py-1 px-2 hover:bg-slate-200">
                                <a href="#my_modal_8">{length}</a>
                            </button>
                            <a href="#my_modal_8" className="border-2 bg-slate-100 py-1 px-2 hover:bg-slate-200" onClick={openModal}>
                                Post Seminar
                            </a>
                        </div>
                        <a className="text-xl md:text-3xl font-semibold">Your Posted Seminars</a>
                    </div>
                </div>
                {/* for large device */}
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        <a className="btn" href="#my_modal_8" onClick={openModal}>
                            {length}
                        </a>
                        <a href="#my_modal_8" onClick={openModal} className="btn">
                            Post Seminar
                        </a>
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-6">
                {companyPostedSeminars?.map((seminar: Seminar) => (
                    <SeminarCard key={seminar._id} seminar={seminar} handleDelete={handleDelete} />
                ))}
            </div>
            <ToastContainer />

            {isModalOpen && (
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
                                    <label>
                                        Date
                                    </label>
                                    <input
                                        type="date"
                                        {...register("date", { required: "Time is required" })}
                                        className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-500"
                                    />
                                </div>
                                <div className="form-control w-full">
                                    <label>
                                        Start Time
                                    </label>
                                    <input
                                        type="time"
                                        {...register("startTime", { required: "Time is required" })}
                                        className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-500"
                                    />
                                </div>
                                <div className="form-control w-full">
                                    <label>
                                        End Time
                                    </label>
                                    <input
                                        type="time"
                                        {...register("endTime")}
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
                                        {...register("speaker", { required: "Speaker is required" })}
                                        placeholder="Speaker"
                                        className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-500"
                                    />
                                </div>
                                <div className="form-control w-full">
                                    <input
                                        type="text"
                                        {...register("description", { required: "Description is required" })}
                                        className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-500"
                                        placeholder="Description"
                                    />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-accent mb-10 w-full ">
                                {loading ? <span className="loading loading-ring loading-lg"></span> : "Submit"}
                            </button>
                        </form>
                        <div className="flex items-center mt-2 justify-end ">
                            <button onClick={closeModal} className="btn">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Seminars;