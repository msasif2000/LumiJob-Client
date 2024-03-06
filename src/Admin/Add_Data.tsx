import { useState } from "react";
import { FcBriefcase, FcDecision } from "react-icons/fc";
import { useForm, SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import useSectorAndSkills from "../hooks/useSectorAndSkills";
import useAxiosSecure from "../hooks/useAxiosSecure";


interface SectorAdded {
    sectorType: string;
}

interface SkillAdded {
    skill: string;
}

const Add_Data = () => {
    const loading = false;
    const axiosSecure = useAxiosSecure();
    const { register: registerSector, handleSubmit: handleSubmitSector, reset: resetSector } = useForm<SectorAdded>();
    const { register: registerSkill, handleSubmit: handleSubmitSkill, reset: resetSkill } = useForm<SkillAdded>();
    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const [showSectors, setShowSectors] = useState(false);
    const [showSkills, setShowSkills] = useState(false);

    const toggleShowSectors = () => {
        setShowSectors(!showSectors);
    };
    const toggleShowSkills = () => {
        setShowSkills(!showSkills);
    };

    const { sectors, skills, refetch } = useSectorAndSkills();

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

    const onSubmitSector: SubmitHandler<SectorAdded> = async (data: SectorAdded) => {
        axiosSecure
            .post("/add-job-sector", data)
            .then((res) => {
                if (res.data) {
                    toast.success("New Job Sector Added Successfully", {
                        hideProgressBar: true,
                        autoClose: 2000,
                        position: "top-center",
                    });
                    setIsModalOpen1(false);
                    refetch();
                    resetSector();
                }
            })
            .catch((err) => {
                console.log(err);
                toast.error("Failed to add job sector");
            });
    };
    //  console.log(sectors);
    //  console.log(skills);
    const onSubmitSkill: SubmitHandler<SkillAdded> = async (data: SkillAdded) => {
        axiosSecure
            .post("/add-skill", data)
            .then((res) => {
                if (res.data) {
                    toast.success("New Skill Added Successfully", {
                        hideProgressBar: true,
                        autoClose: 2000,
                        position: "top-center",
                    });
                    setIsModalOpen2(false);
                    refetch();
                    resetSkill();
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
                <div className="w-[200px] h-[200px] mx-auto bg-[#dbe4ff] flex flex-col justify-center items-center">
                    <a href="#sector-modal" onClick={openModal1}>
                        <button className="p-10 flex flex-col justify-center items-center text-2xl"><FcBriefcase className="text-7xl" /> Add Job Sector</button>
                    </a>

                </div>
                <div className="w-[200px] h-[200px] mx-auto bg-[#dbe4ff] flex flex-col justify-center items-center">
                    <a href="#skill-modal" onClick={openModal2}>
                        <button className="p-10 flex flex-col justify-center items-center text-2xl"><FcDecision className="text-7xl" /> Add Skills</button>
                    </a>
                </div>
            </div>
            <ToastContainer />
            {isModalOpen1 && (
                <div className="modal" role="dialog" id="sector-modal">
                    <div className="modal-box bg-white px-4 py-8">
                        <h2 className="text-2xl font-bold text-center mb-4">Add Job Sector</h2>
                        <div className="box bg-[#dbe4ff] rounded p-2 font-bold" onClick={toggleShowSectors}>
                           {
                                 showSectors ? "Click to Hide Sectors" : "Click to Show Sectors"
                           }
                        </div>
                        {showSectors && (
                            <div>
                                <ul className="dropdown mb-4">
                                    {sectors.map((sector: any, idx: number) => (
                                        <li key={sector._id} className="dropdown-item">
                                            <p className="dropdown-link">
                                                <span className="font-bold">{idx + 1}.</span> {sector?.sectorType}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        <form className="space-y-5" onSubmit={handleSubmitSector(onSubmitSector)}>
                            <div className="pb-10 space-y-6">

                                <div className="form-control w-full">
                                    <input
                                        type="text"
                                        {...registerSector("sectorType", { required: "Job Sector name is required" })}
                                        className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-500"
                                        placeholder="Add Job Sector"
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
                <div className="modal" role="dialog" id="skill-modal">
                    <div className="modal-box bg-white px-4 py-8">
                        <h2 className="text-2xl font-bold text-center mb-4">Add Skill</h2>
                        <div className="box bg-[#dbe4ff] rounded p-2 font-bold" onClick={toggleShowSkills}>
                            {
                                showSkills ? "Click to Hide Skills" : "Click to Show Skills"
                            }
                        </div>
                        {
                            showSkills && (
                                <div>
                                    <ul className="dropdown mb-4">
                                        {skills.map((skill: any, idx: number) => (
                                            <li key={skill._id} className="dropdown-item">
                                                <p className="dropdown-link">
                                                    <span className="font-bold">{idx + 1}.</span> {skill?.skill}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )
                        }
                        <form className="space-y-5" onSubmit={handleSubmitSkill(onSubmitSkill)}>
                            <div className="pb-10 space-y-6">
                                <div className="form-control w-full">
                                    <input
                                        type="text"
                                        {...registerSkill("skill", { required: "Job Sector name is required" })}
                                        className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-500"
                                        placeholder="Add New Skill"
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