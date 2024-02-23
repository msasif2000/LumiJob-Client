import { useEffect, useState } from "react";
import { FcBriefcase, FcDecision } from "react-icons/fc";
import { useForm, SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import useAxiosPublic from "../hooks/useAxiosPublic";

interface SectorAdded {
    sectorType: string;
}

interface SkillAdded {
    skill: string;
}

const Add_Data = () => {
    const loading = false;
    const axiosPublic = useAxiosPublic();
    const { register: registerSector, handleSubmit: handleSubmitSector } = useForm<SectorAdded>();
    const { register: registerSkill, handleSubmit: handleSubmitSkill } = useForm<SkillAdded>();
    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const [sectors, setSectors] = useState<string[]>([]);
    const [skills, setSkills] = useState<string[]>([]);

    const openModal1 = () => {
        setIsModalOpen1(true);
    };

    const closeModal1 = () => {
        setIsModalOpen1(false);
    };

    const openModal2 = () => {
        setIsModalOpen2(true);
    };

    const closeModal2 = () => {
        setIsModalOpen2(false);
    };

    useEffect(() => {
        axiosPublic
            .get("/get-sectors")
            .then((res) => {
                setSectors(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

        axiosPublic.get("/get-skills")
            .then((res) => {
                setSkills(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [axiosPublic]);


    const onSubmitSector: SubmitHandler<SectorAdded> = async (data: SectorAdded) => {
        axiosPublic
            .post("/add-job-sector", data)
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
                toast.error("Failed to add job sector");
            });
    };
    // console.log(sectors);
    // console.log(skills);
    const onSubmitSkill: SubmitHandler<SkillAdded> = async (data: SkillAdded) => {
        axiosPublic
            .post("/add-skill", data)
            .then((res) => {
                if (res.data) {
                    toast.success("New Skill Added Successfully", {
                        hideProgressBar: true,
                        autoClose: 2000,
                        position: "top-center",
                    });
                    setIsModalOpen2(false);
                }
            })
            .catch((err) => {
                console.log(err);
                toast.error("Failed to add skill");
            });
    };
    return (
        <div className="h-screen max-w-2xl mx-auto">
            <div className="flex justify-center items-center h-full gap-4">
                <div className="w-[200px] h-[200px] mx-auto bg-slate-300 flex flex-col justify-center items-center">
                    <a href="#sector-add-modal">
                        <button onClick={openModal1} className="p-10 flex flex-col justify-center items-center text-2xl"><FcBriefcase className="text-7xl" /> Add Job Sector</button>
                    </a>

                </div>
                <div className="w-[200px] h-[200px] mx-auto bg-slate-300 flex flex-col justify-center items-center">
                    <a href="#skill-add-modal" onClick={openModal2}>
                        <button className="p-10 flex flex-col justify-center items-center text-2xl"><FcDecision className="text-7xl" /> Add Skills</button>
                    </a>
                </div>
            </div>
            <ToastContainer />
            {isModalOpen1 && (
                <div className="modal" role="dialog" id="sector-add-modal">
                    <div className="modal-box bg-white px-2 py-5">
                        <h2 className="text-2xl font-bold text-center">Add Job Sector</h2>
                        <div>
                            <ul className="dropdown">
                                {sectors.map((sector: any) => (
                                    <li key={sector.id} className="dropdown-item">
                                        <p className="dropdown-link">
                                            {sector}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <form className="space-y-5" onSubmit={handleSubmitSector(onSubmitSector)}>
                            <div className="pb-10 space-y-6">

                                <div className="form-control w-full">
                                    <input
                                        type="text"
                                        {...registerSector("sectorType", { required: "Job Sector name is required" })}
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
                            <button onClick={closeModal1} className="btn bg-red-600 text-white hover:bg-red-500">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {isModalOpen2 && (
                <div className="modal" role="dialog" id="skill-add-modal">
                    <div className="modal-box bg-white px-2 py-5">
                        <h2 className="text-2xl font-bold text-center">Add Skill</h2>
                        <div>
                            <ul className="dropdown">
                                {skills.map((skill: any) => (
                                    <li key={skill.id} className="dropdown-item">
                                        <a href="#" className="dropdown-link">
                                            {skill}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <form className="space-y-5" onSubmit={handleSubmitSkill(onSubmitSkill)}>
                            <div className="pb-10 space-y-6">
                                <div className="form-control w-full">
                                    <input
                                        type="text"
                                        {...registerSkill("skill", { required: "Job Sector name is required" })}
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
                            <button onClick={closeModal2} className="btn bg-red-600 text-white hover:bg-red-500">
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