import { useEffect, useState } from "react";
import { FcBriefcase } from "react-icons/fc";
import { FcDecision } from "react-icons/fc";
import { useForm, SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import useAxiosPublic from "../hooks/useAxiosPublic";

interface sectorAdded
 {
    sectorType: string;
}
const Add_Data = () => {
    const loading = false;
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit } = useForm<sectorAdded>();
    const [isModalOpen, setIsModalOpen1] = useState(false);
    const [sectors, setSectors] = useState([] as any);

    const openModal = () => {
        setIsModalOpen1(true);
    };

    useEffect(() => {
        axiosPublic
            .get(`/get-sectors`)
            .then((res) => {
                setSectors(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

    }, [null]);
    const closeModal = () => {
        setIsModalOpen1(false);
    };

    const onSubmitSector: SubmitHandler<sectorAdded> = async (data: sectorAdded) => {
        axiosPublic
            .post("add-job-sector", data)
            .then((res) => {
                if (res.data) {
                    toast.success("New Job Sector Added Successfully", {
                        hideProgressBar: true,
                        autoClose: 2000,
                        position: "top-center",
                    });
                    setIsModalOpen1(false);
                }
            })
            .catch((err) => {
                console.log(err);
                toast.error("Failed to post Seminar");
            });
    };
    return (
        <div className="h-screen max-w-2xl mx-auto">
            <div className="flex justify-center items-center h-full gap-4">
                <div className="w-[200px] h-[200px] mx-auto bg-slate-300 flex flex-col justify-center items-center">
                    <a href="#sector-add-modal" className="border-2 bg-slate-100 py-1 px-2 hover:bg-slate-200" onClick={openModal}>
                        <button className="p-10 flex flex-col justify-center items-center text-2xl"><FcBriefcase className="text-7xl" /> Add Job Sector</button>
                    </a>

                </div>
                <div className="w-[200px] h-[200px] mx-auto bg-slate-300 flex flex-col justify-center items-center">
                    <button className="p-10 flex flex-col justify-center items-center text-2xl"><FcDecision className="text-7xl" /> Add Skills</button>
                </div>
            </div>
            <ToastContainer />
            {isModalOpen && (
                <div className="modal" role="dialog" id="sector-add-modal">
                    <div className="modal-box bg-white px-2 py-5">
                        <h2 className="text-2xl font-bold text-center">Add Job Sector</h2>
                        <form className="space-y-5" onSubmit={handleSubmit(onSubmitSector)}>
                            <div className="pb-10 space-y-6">
                                <div>
                                    <ul className="dropdown">
                                        {sectors.map((sector: any) => (
                                            <li key={sector.id} className="dropdown-item">
                                                <a href="#" className="dropdown-link">
                                                    {sectors.sector}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="form-control w-full">
                                    <input
                                        type="text"
                                        {...register("sectorType", { required: "Job Sector name is required" })}
                                        className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-500"
                                        placeholder="Job Sector"
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

export default Add_Data;