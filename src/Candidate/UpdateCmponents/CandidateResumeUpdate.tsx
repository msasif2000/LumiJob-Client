import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { AiOutlineCloseCircle } from "react-icons/ai";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { GrAdd } from "react-icons/gr";


interface ExperienceData {
    company: string;
    position: string;
    fromDate: Date | null;
    toDate: Date | null;
}

interface LinkData {
    name: string;
    link: string;
}
interface ProjectData {
    title: string;
    link: string;
    description: string;
}

interface EducationData {
    university: string;
    degree: string;
    subject: string;
    fromDate: Date | null;
    toDate: Date | null;
}

interface FormData {
    name: string;
    email: string;
    phone: string;
    address: string;
    objective: string;
    skills: string[];
    experience: number;
    education: EducationData[];
    experienceDetails: ExperienceData[];
    link: LinkData[];
    project: ProjectData[];
    photo: File;
    village: string;
    city: string;
    country: string;
    availability: string;
    position: string;
    work: string;
    salaryRangeMin: number;
    salaryRangeMax: number;
}

interface UserData {
    email: string;
    _id: string;
    role: string;
}

const CandidateResumeUpdate: React.FC = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const [loading, setLoading] = useState<boolean>(false);
    // const [currentUser, setCurrentUser] = useState(null);
    const [userData, setUserData] = useState<UserData | null>(null);
    const axiosPublic = useAxiosPublic();

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
        watch,
    } = useForm<FormData>({
        defaultValues: {
            skills: [],
            education: [],
            link: [],
            project: [],
            experienceDetails: [],
        },
    });

    const [inputValue, setInputValue] = useState<string>("");
    const [link, setLink] = useState<
        LinkData[]
    >([]);
    const [project, setProjects] = useState<
        ProjectData[]
    >([]);
    const [additionalExperiences, setAdditionalExperiences] = useState<
        ExperienceData[]
    >([]);
    const [additionalEducations, setAdditionalEducations] = useState<
        EducationData[]
    >([]);

    const selectedSkills = watch("skills");

    const removeSkill = (skill: string) => {
        setValue(
            "skills",
            Array.isArray(selectedSkills)
                ? selectedSkills.filter((selectedSkill) => selectedSkill !== skill)
                : []
        );
    };

    const addLink = () => {
        setLink([
            ...link,
            {
                name: "",
                link: "",

            },
        ]);
    };
    const addProject = () => {
        setProjects([
            ...project,
            {
                title: "",
                link: "",
                description: ""

            },
        ]);
    };
    const addExperience = () => {
        setAdditionalExperiences([
            ...additionalExperiences,
            {
                company: "",
                position: "",
                fromDate: null,
                toDate: null,
            },
        ]);
    };

    const addEducation = () => {
        setAdditionalEducations([
            ...additionalEducations,
            {
                university: "",
                degree: "",
                subject: "",
                fromDate: null,
                toDate: null,
            },
        ]);
    };

    const removeLink = (index: number) => {
        const updatedLinks = [...link];
        updatedLinks.splice(index, 1);
        setLink(updatedLinks);
    };
    const removeProject = (index: number) => {
        const updatedProjects = [...project];
        updatedProjects.splice(index, 1);
        setProjects(updatedProjects);
    };
    const removeExperience = (index: number) => {
        const updatedExperiences = [...additionalExperiences];
        updatedExperiences.splice(index, 1);
        setAdditionalExperiences(updatedExperiences);
    };

    const removeEducation = (index: number) => {
        const updatedEducations = [...additionalEducations];
        updatedEducations.splice(index, 1);
        setAdditionalEducations(updatedEducations);
    };

    const backToProfile = () => {
        navigate(-1);
    };

    useEffect(() => {
        if (user?.email) {
            axiosPublic
                .get(`/user-profile/${user.email}`)
                .then((res) => {
                    setUserData(res.data);
                })
                .catch((error) => console.log(error));
        }
    }, [user]);

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        setLoading(true);

        try {



            // Prepare candidate data with the image URL
            const candidateData = {
                ...data,
                email: userData?.email,
                userId: userData?._id,
                role: userData?.role,
            };

            console.log(candidateData);



        } catch (error) {
            console.error(error);
            toast.error("An error occurred while updating profile");
        } finally {
            setLoading(false);
        }
    };


    // useEffect(() => {
    //   if (user?.email) {
    //     axiosPublic
    //       .get(`/user-profile/${user.email}`)
    //       .then((res) => {
    //         setCurrentUser(res.data);
    //       })
    //       .catch((error) => console.log(error));
    //   }
    // }, [user]);

    return (
        <div className="min-h-screen">
            <div className="flex justify-between items-center px-5 pt-5">
                <div className="text-xl md:text-3xl font-semibold">Update Your Resume</div>
                <div><button className="btn" onClick={backToProfile}>Back</button></div>
            </div>

            <div className=" bg-white px-2 py-5">
                <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>


                    <div className="pb-10 space-y-6">
                        {/* Second div group */}
                        <div className="md:flex md:space-x-10">
                            <div className="form-control w-full">
                                <input
                                    type="text"
                                    {...register("name", { required: "Name is required" })}
                                    placeholder="Your Name"
                                    className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xs md:text-xl hover:border-accent duration-500"
                                />
                            </div>

                            <div className="form-control w-full">
                                <input
                                    type="email"
                                    {...register("email", {
                                        required: "email is required",
                                    })}
                                    placeholder="Your Email"
                                    className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xs md:text-xl hover:border-accent duration-500"
                                />
                            </div>
                            <div className="form-control w-full">
                                <input
                                    type="text"
                                    {...register("phone", { required: "phone is required" })}
                                    placeholder="Contact Number"
                                    className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xs md:text-xl hover:border-accent duration-500"
                                />
                            </div>
                        </div>
                        {/* Second div group */}
                        <div className=" md:flex md:space-x-10">
                            <div className="form-control w-full">
                                <input
                                    type="text"
                                    {...register("village", { required: "Village is required" })}
                                    placeholder="Your Village / Area"
                                    className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xs md:text-xl hover:border-accent duration-500"
                                />
                            </div>
                            <div className="form-control w-full">
                                <input
                                    type="text"
                                    {...register("city", { required: "City is required" })}
                                    placeholder="Your City"
                                    className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xs md:text-xl hover:border-accent duration-500"
                                />
                            </div>
                            <div className="form-control w-full">
                                <input
                                    type="text"
                                    {...register("country", { required: "Country is required" })}
                                    placeholder="Your Country"
                                    className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xs md:text-xl hover:border-accent duration-500"
                                />
                            </div>
                        </div>

                        <div className="md:flex md:space-x-10">
                            <div className="form-control w-full">
                                <input
                                    type="number"
                                    {...register("experience")}
                                    placeholder="Years of experience"
                                    className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xs md:text-xl hover:border-accent duration-500"
                                />
                            </div>

                            <select
                                {...register("availability", {
                                    required: "Availability is required",
                                })}
                                name="availability"
                                id="availability"
                                className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xs md:text-xl hover:border-accent duration-500"
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    Availability
                                </option>
                                <option value="Full Time">Full Time</option>
                                <option value="Part Time">Part Time</option>
                            </select>

                            <select
                                {...register("work", {
                                    required: "Work type is required",
                                })}
                                name="work"
                                id="work"
                                className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xs md:text-xl hover:border-accent duration-50"
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    Preferred work setting
                                </option>
                                <option value="Remote">Remote</option>
                                <option value="Office">Office</option>
                                <option value="Hybrid">Hybrid</option>
                            </select>
                        </div>
                    </div>

                    <div className="pb-10 space-y-6">
                        <div className="form-control w-full">
                            <textarea
                                rows={3}
                                {...register("objective", { required: "objective is required" })}
                                placeholder="Your Objective"
                                className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xs md:text-xl hover:border-accent duration-500"
                            ></textarea>
                        </div>

                        <div className="form-control w-full">
                            <div className="flex flex-wrap">
                                {Array.isArray(selectedSkills) &&
                                    selectedSkills.map((skill, idx) => (
                                        <div
                                            key={idx}
                                            className="bg-green-300 font-bold rounded-full px-4 py-2 m-2 flex items-center"
                                        >
                                            <span className="mr-2">{skill}</span>
                                            <button
                                                type="button"
                                                onClick={() => removeSkill(skill)}
                                                className="text-red-500"
                                            >
                                                <AiOutlineCloseCircle />
                                            </button>
                                        </div>
                                    ))}
                            </div>

                            <div className="mt-2">
                                <input
                                    type="text"
                                    value={inputValue}
                                    placeholder="Add skill"
                                    className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xs md:text-xl hover:border-accent duration-500"
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter" && inputValue.trim() !== "") {
                                            setValue(
                                                "skills",
                                                Array.isArray(selectedSkills)
                                                    ? [...selectedSkills, inputValue.trim()]
                                                    : [inputValue.trim()]
                                            );
                                            setInputValue("");
                                            e.preventDefault();
                                        }
                                    }}
                                    onChange={(e) => setInputValue(e.target.value)}
                                />
                            </div>
                        </div>

                        {errors.skills && <p>{errors.skills.message}</p>}
                    </div>

                    <div className="md:flex md:space-x-10 pb-10">
                        <div className="form-control w-full">
                            <input
                                type="number"
                                {...register("salaryRangeMin")}
                                className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xs md:text-xl hover:border-accent duration-500"
                                placeholder="$ Expected Min Salary"
                            />
                        </div>
                        <div className="form-control w-full">
                            <input
                                type="number"
                                {...register("salaryRangeMax")}
                                className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xs md:text-xl hover:border-accent duration-500"
                                placeholder="$ Expected Max Salary"
                            />
                        </div>
                    </div>


                    <p className=" md:text-2xl font-bold mb-4 md:py-6">Work Experience</p>
                    {additionalExperiences.map((experience, index) => (
                        <div key={index} className="form-control w-full mt-6 space-y-1">
                            <h2 className="text-sm md:text-lg opacity-70 font-bold mb-4">Experience {index + 1}</h2>
                            <div className="flex space-x-4 pb-10">
                                <div className="w-1/2">
                                    <input
                                        type="text"
                                        {...register(`experienceDetails.${index}.company`, {
                                            required: "Company name is required",
                                        })}
                                        placeholder="Company Name"
                                        className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xs md:text-xl hover:border-accent duration-50"
                                    />
                                </div>
                                <div className="w-1/2">
                                    <input
                                        type="text"
                                        {...register(`experienceDetails.${index}.position`, {
                                            required: "Position is required",
                                        })}
                                        placeholder="Position"
                                        className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xs md:text-xl hover:border-accent duration-50"
                                    />
                                </div>
                            </div>
                            <div className="flex space-x-4 mt-4">
                                <div className="w-1/2">
                                    <DatePicker
                                        selected={experience.fromDate}
                                        onChange={(date: Date | null) => {
                                            if (date) {
                                                setAdditionalExperiences((prevState) => {
                                                    const updatedExperiences = [...prevState];
                                                    updatedExperiences[index].fromDate = date;
                                                    return updatedExperiences;
                                                });
                                                setValue(`experienceDetails.${index}.fromDate`, date);
                                            }
                                        }}
                                        dateFormat="dd-MM-yyyy"
                                        placeholderText="From Date"
                                        className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xs md:text-xl hover:border-accent duration-50"
                                    />
                                </div>
                                <div className="w-1/2">
                                    <DatePicker
                                        selected={experience.toDate}
                                        onChange={(date: Date | null) => {
                                            if (date) {
                                                setAdditionalExperiences((prevState) => {
                                                    const updatedExperiences = [...prevState];
                                                    updatedExperiences[index].toDate = date;
                                                    return updatedExperiences;
                                                });
                                                setValue(`experienceDetails.${index}.toDate`, date);
                                            }
                                        }}
                                        dateFormat="dd-MM-yyyy"
                                        placeholderText="To Date"
                                        className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xs md:text-xl hover:border-accent duration-50"
                                    />
                                </div>
                            </div>
                            <button
                                type="button"
                                onClick={() => removeExperience(index)}
                                className="text-red-500 mt-2 text-xs md:text-base text-right"
                            >
                                Remove Experience
                            </button>
                        </div>
                    ))}

                    <div className="mt-4">
                        <button
                            type="button"
                            onClick={addExperience}
                            className="text-blue-500 text-xs md:text-xl font-semibold"
                        >
                            Add Work Experience
                        </button>
                    </div>

                    <p className=" md:text-2xl font-bold mb-4 md:py-6">Portfolio/ Work Samples</p>
                    {link.map((_link, index) => (
                        <div key={index} className="form-control w-full mt-6 space-y-1">
                            <h2 className="text-sm md:text-lg opacity-70 font-bold mb-4">Link {index + 1}</h2>
                            <div className="flex space-x-4 pb-10 gap-7">
                                <div className="w-1/4">
                                    <input
                                        type="text"
                                        {...register(`link.${index}.name`, {
                                            required: "LinkName required",
                                        })}
                                        placeholder="Portfolio/Github/Blog/Other work sample"
                                        className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xs md:text-lg hover:border-accent duration-50"
                                    />
                                </div>
                                <div className="w-3/4">
                                    <input
                                        type="text"
                                        {...register(`link.${index}.link`, {
                                            required: "Link is required",
                                        })}
                                        placeholder="Link"
                                        className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xs md:text-lg hover:border-accent duration-50"
                                    />
                                </div>
                            </div>
                            <button
                                type="button"
                                onClick={() => removeLink(index)}
                                className="text-red-500 mt-2 text-xs md:text-base text-right"
                            >
                                Remove Link
                            </button>
                        </div>
                    ))}

                    <div className="mt-2">
                        <button
                            type="button"
                            onClick={addLink}
                            className="text-blue-500 text-xs md:text-xl font-semibold"
                        >
                            <div className="flex items-center gap-2">
                                <GrAdd></GrAdd> Add Link
                            </div>
                        </button>
                    </div>


                    <p className=" md:text-2xl font-bold mb-4 md:py-6">Academic/ Personal Projects</p>
                    {project.map((_project, index) => (
                        <div key={index} className="form-control w-full mt-6 space-y-1">
                            <h2 className="text-sm md:text-lg opacity-70 font-bold mb-4">Project {index + 1}</h2>
                            <div className="space-y-4 ">
                                <div className="w-3/4">
                                    <input
                                        type="text"
                                        {...register(`project.${index}.title`, {
                                            required: "Project title is required",
                                        })}
                                        placeholder="Title"
                                        className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xs md:text-lg hover:border-accent duration-50"
                                    />
                                </div>
                                <div className="w-3/4">
                                    <input
                                        type="text"
                                        {...register(`project.${index}.link`,)}
                                        placeholder="Project Link (optional)"
                                        className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xs md:text-lg hover:border-accent duration-50"
                                    />
                                </div>
                                <div >

                                    <textarea
                                        rows={3}
                                        {...register(`project.${index}.description`,)}
                                        placeholder="Description (Optional)"
                                        className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xs md:text-xl hover:border-accent duration-500"
                                    ></textarea>
                                </div>
                            </div>
                            <button
                                type="button"
                                onClick={() => removeProject(index)}
                                className="text-red-500 mt-2 text-xs md:text-base text-right"
                            >
                                Remove Project
                            </button>
                        </div>
                    ))}

                    <div className="mt-2">
                        <button
                            type="button"
                            onClick={addProject}
                            className="text-blue-500 text-xs md:text-xl font-semibold"
                        >
                            <div className="flex items-center gap-2">
                                <GrAdd></GrAdd> Add Projects
                            </div>
                        </button>
                    </div>


                    <p className=" md:text-2xl font-bold mb-4 md:py-6">Education</p>
                    {additionalEducations.map((education, index) => (
                        <div key={index} className="form-control w-full mt-6">
                            <h2 className="text-sm md:text-lg opacity-70 font-bold mb-4">Education {index + 1}</h2>
                            <div className="md:flex md:space-x-4">
                                <div className="md:w-1/2">
                                    <input
                                        type="text"
                                        {...register(`education.${index}.university`, {
                                            required: "University name is required",
                                        })}
                                        placeholder="University / Collage Name"
                                        className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xs md:text-xl hover:border-accent duration-50"
                                    />
                                </div>
                                <div className="md:w-1/2">
                                    <input
                                        type="text"
                                        {...register(`education.${index}.degree`)}
                                        placeholder="Degree"
                                        className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xs md:text-xl hover:border-accent duration-50"
                                    />
                                </div>
                                <div className="md:w-1/2">
                                    <input
                                        type="text"
                                        {...register(`education.${index}.subject`, {
                                            required: "Subject studied is required",
                                        })}
                                        placeholder="Studied Subject"
                                        className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xs md:text-xl hover:border-accent duration-50"
                                    />
                                </div>
                            </div>
                            <div className="flex space-x-4 mt-4">
                                <div className="w-1/2">
                                    <DatePicker
                                        selected={education.fromDate}
                                        onChange={(date: Date | null) => {
                                            if (date) {
                                                setAdditionalEducations((prevState) => {
                                                    const updatedEducations = [...prevState];
                                                    updatedEducations[index].fromDate = date;
                                                    return updatedEducations;
                                                });
                                                setValue(`education.${index}.fromDate`, date);
                                            }
                                        }}
                                        placeholderText="From Date"
                                        dateFormat="dd-MM-yyyy" // Add date format if needed
                                        className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xs md:text-xl hover:border-accent duration-50"
                                    />
                                </div>
                                <div className="w-1/2">
                                    <DatePicker
                                        selected={education.toDate}
                                        onChange={(date: Date | null) => {
                                            if (date) {
                                                setAdditionalEducations((prevState) => {
                                                    const updatedEducations = [...prevState];
                                                    updatedEducations[index].toDate = date;
                                                    return updatedEducations;
                                                });
                                                setValue(`education.${index}.toDate`, date);
                                            }
                                        }}
                                        placeholderText="To Date"
                                        dateFormat="dd-MM-yyyy" // Add date format if needed
                                        className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xs md:text-xl hover:border-accent duration-50"
                                    />
                                </div>
                            </div>
                            <button
                                type="button"
                                onClick={() => removeEducation(index)}
                                className="text-red-500 mt-2 text-xs md:text-base text-right"
                            >
                                Remove Education
                            </button>
                        </div>
                    ))}

                    <div className="mt-2">
                        <button
                            type="button"
                            onClick={addEducation}
                            className="text-blue-500 text-xs md:text-xl font-semibold"
                        >
                            Add Education
                        </button>
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

export default CandidateResumeUpdate;



