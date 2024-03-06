import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import SeminarCard from "./SeminarCard";
import NoData from "../component/NoData/NoData";
import useAxiosSecure from "../hooks/useAxiosSecure";

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
    const axiosSecure= useAxiosSecure();
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
                .then((res) => {
                    setCompanyPostedSeminars(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        axiosPublic.get(`/user-profile/${user.email}`)
            .then((res) => {
                setCompany(res.data);
            })
            .catch((err) => console.log(err));
    }, [user]);

    const length = companyPostedSeminars?.length;

    const handleDelete = (seminarId: string) => {
        axiosSecure.delete(`/delete-seminar/${seminarId}`)
            .then((res) => {
                if (res.data.acknowledged) {
                    toast.success(`Seminar deleted successfully`, {
                        hideProgressBar: true,
                        autoClose: 2000,
                        position: "top-center",
                    });
                    setCompanyPostedSeminars(companyPostedSeminars?.filter((seminar: any) => seminar._id !== seminarId));
                    navigate("/dashboard/seminar-posted");
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
        axiosSecure.post("/post-the-seminar", seminarData)
            .then((res) => {
                if (res.data) {
                    toast.success("Seminar Posted Successfully", {
                        hideProgressBar: true,
                        autoClose: 2000,
                        position: "top-center",
                    });
                    setIsModalOpen(false);
                    setCompanyPostedSeminars([...companyPostedSeminars, res.data]);
                }
            })
            .catch((err) => {
                console.log(err);
                toast.error("Failed to post Seminar");
            });
    };

    const handleSeminar = () => {
    }

    return (
        <>
            {
                length ? (
                    <div>
                        <div className="navbar">
                            <div className="md:navbar-start">
                                {/* for small device */}
                                <div>
                                    <div className="flex gap-5 justify-end">
                                        <a className="text-xl md:text-3xl font-semibold">Seminars</a>
                                        <div className=" flex justify-end gap-2 text-xs mb-5 md:hidden">
                                            {
                                                length ? <a className="border-2 bg-slate-100 py-1 px-2 hover:bg-slate-200">
                                                    {length}
                                                </a> : null
                                            }
                                            <a href="#seminar_modal" className="border-2 bg-slate-100 py-1 px-2 hover:bg-slate-200" onClick={openModal}>
                                                Post Seminar
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* for large device */}
                            <div className="navbar-end hidden md:flex">
                                <ul className="menu menu-horizontal px-1 gap-2">
                                    {
                                        length ? <a className="btn ">
                                            {length}
                                        </a> : null
                                    }
                                    <a href="#seminar_modal" onClick={openModal} className="btn">
                                        Post Seminar
                                    </a>
                                </ul>
                            </div>
                        </div>
                        <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                            {companyPostedSeminars?.map((seminar: Seminar) => (
                                <SeminarCard key={seminar._id} seminar={seminar} handleDelete={handleDelete} />
                            ))}
                        </div>
                        <ToastContainer />

                        {isModalOpen && (
                            <div className="modal" role="dialog" id="seminar_modal">
                                <div className="modal-box bg-white px-6 py-5">
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
                                            <div className="flex items-center justify-between gap-6">
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
                                        <button onClick={closeModal} className="btn bg-red-600 text-white hover:bg-red-500">
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ) :
                    (
                        <div>
                            <NoData text="You have not arranged any Seminars yet" btn="" noDataClick={handleSeminar} />
                            <div className="flex justify-center -mt-4">
                                <a href="#seminar_modal" onClick={openModal} className="btn bg-accent text-white hover:bg-accent">
                                    Post Seminar
                                </a>
                            </div>
                            {isModalOpen && (
                                <div className="modal" role="dialog" id="seminar_modal">
                                    <div className="modal-box bg-white px-6 py-5">
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
                                                <div className="flex items-center justify-between gap-6">
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
                                            <button onClick={closeModal} className="btn bg-red-600 text-white hover:bg-red-500">
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )
            }
        </>
    );
};

export default Seminars;