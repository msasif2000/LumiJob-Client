import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { AiOutlineCloseCircle } from "react-icons/ai";
import CandidateNav from "../CommonNavbar/CandidateNav";
import DatePicker from "react-datepicker"; // Import the date picker
import "react-datepicker/dist/react-datepicker.css"; // Import the styles

interface EducationData {
  university: string;
  subject: string;
  fromDate: Date | null; // Update fromDate and toDate to Date | null
  toDate: Date | null;
}

interface ExperienceData {
  company: string;
  position: string;
  fromDate: Date | null; // Update fromDate and toDate to Date | null
  toDate: Date | null;
}

interface FormData {
  name: string;
  phone: string;
  address: string;
  bio: string;
  skills: string[];
  experience: string;
  education: EducationData[];
  experienceDetails: ExperienceData[];
}

const CandidateProUpdate: React.FC = () => {
  const navigate = useNavigate();
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
      experienceDetails: [],
    },
  });

  const [inputValue, setInputValue] = useState<string>("");
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
        subject: "",
        fromDate: new Date(),
        toDate: new Date(),
      },
    ]);
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

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // Format dates before submitting
    const formattedExperiences = data.experienceDetails.map((experience) => ({
      ...experience,
      fromDate: new Date(experience.fromDate).toLocaleDateString("en-GB"),
      toDate: new Date(experience.toDate).toLocaleDateString("en-GB"),
    }));
  
    const formattedEducations = data.education.map((education) => ({
      ...education,
      fromDate: new Date(education.fromDate).toLocaleDateString("en-GB"),
      toDate: new Date(education.toDate).toLocaleDateString("en-GB"),
    }));
  
    const formattedData = {
      ...data,
      experienceDetails: formattedExperiences,
      education: formattedEducations,
    };
  
    console.log(formattedData);
    // Add your logic to submit the formattedData
  };
  

  return (
    <div className="min-h-screen lg:px-20">
      <CandidateNav
        text="Upgrade your information"
        btn="Return"
        handleClick={backToProfile}
      />

      <div className=" bg-white px-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex space-x-10">
            <div className="form-control w-full">
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                placeholder="Your Name"
                className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-500"
              />
            </div>
            <div className="form-control w-full">
              <input
                type="text"
                {...register("phone", { required: "phone is required" })}
                placeholder="Your phone number"
                className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-500"
              />
            </div>
            <div className="form-control w-full">
              <input
                type="text"
                {...register("address", { required: "address is required" })}
                placeholder="Your address"
                className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-500"
              />
            </div>
          </div>

          <div className="form-control w-full">
            <textarea
              rows={3}
              {...register("bio", { required: "bio is required" })}
              placeholder="Bio"
              className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-500"
            ></textarea>
          </div>

          <div className="form-control w-full">
            <div className="flex flex-wrap">
              {Array.isArray(selectedSkills) &&
                selectedSkills.map((skill) => (
                  <div
                    key={skill}
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
                placeholder="Type a skill and press Enter"
                className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-500"
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

          <div className="flex space-x-10">
            <div className="form-control w-full">
              <input
                type="number"
                {...register("experience", {
                  required: "experience is required",
                })}
                placeholder="Years of experience"
                className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-500"
              />
            </div>

            <select
              name="sector"
              id=""
              className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-500"
            >
              <option value="Default" disabled selected>
                Availability
              </option>
              <option value="Full">Full Time</option>
              <option value="Part">Part Time</option>
            </select>

            <select
              name="section"
              id=""
              className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-50"
            >
              <option value="Default" disabled selected>
                Preferred work setting
              </option>
              <option value="Remote">Remote</option>
              <option value="Office">Office</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          {additionalExperiences.map((experience, index) => (
            <div key={index} className="form-control w-full mt-6">
              <h2 className="text-2xl font-bold mb-4">
                Experience {index + 1}
              </h2>
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <input
                    type="text"
                    {...register(`experienceDetails.${index}.company`, {
                      required: "Company name is required",
                    })}
                    placeholder="Company Name"
                    className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-50"
                  />
                </div>
                <div className="w-1/2">
                  <input
                    type="text"
                    {...register(`experienceDetails.${index}.position`, {
                      required: "Position is required",
                    })}
                    placeholder="Position"
                    className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-50"
                  />
                </div>
              </div>
              <div className="flex space-x-4 mt-4">
                <div className="w-1/2">
                  <DatePicker
                    selected={experience.fromDate}
                    onChange={(date) => {
                      setAdditionalExperiences((prevState) => {
                        const updatedExperiences = [...prevState];
                        updatedExperiences[index].fromDate = date;
                        return updatedExperiences;
                      });
                      setValue(`experienceDetails.${index}.fromDate`, date);
                    }}
                    dateFormat="dd-MM-yyyy"
                    placeholderText="From Date"
                    className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-50"
                  />
                </div>
                <div className="w-1/2">
                  <DatePicker
                    selected={experience.toDate}
                    onChange={(date) => {
                      setAdditionalExperiences((prevState) => {
                        const updatedExperiences = [...prevState];
                        updatedExperiences[index].toDate = date;
                        return updatedExperiences;
                      });
                      setValue(`experienceDetails.${index}.toDate`, date);
                    }}
                    dateFormat="dd-MM-yyyy"
                    placeholderText="To Date"
                    className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-50"
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={() => removeExperience(index)}
                className="text-red-500 mt-2 text-right"
              >
                Remove Experience
              </button>
            </div>
          ))}

          <div className="mt-4">
            <button
              type="button"
              onClick={addExperience}
              className="text-blue-500 text-xl font-semibold"
            >
              Add Experience
            </button>
          </div>

          {additionalEducations.map((education, index) => (
            <div key={index} className="form-control w-full mt-6">
              <h2 className="text-2xl font-bold mb-4">Education {index + 1}</h2>
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <input
                    type="text"
                    {...register(`education.${index}.university`, {
                      required: "University name is required",
                    })}
                    placeholder="University Name"
                    className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-50"
                  />
                </div>
                <div className="w-1/2">
                  <input
                    type="text"
                    {...register(`education.${index}.subject`, {
                      required: "Subject studied is required",
                    })}
                    placeholder="Studied Subject"
                    className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-50"
                  />
                </div>
              </div>
              <div className="flex space-x-4 mt-4">
                <div className="w-1/2">
                  <DatePicker
                    selected={education.fromDate}
                    onChange={(date) => {
                      setAdditionalEducations((prevState) => {
                        const updatedEducations = [...prevState];
                        updatedEducations[index].fromDate = date;
                        return updatedEducations;
                      });
                      setValue(`education.${index}.fromDate`, date);
                    }}
                    placeholderText="From Date"
                    dateFormat="dd-MM-yyyy" // Add date format if needed
                    className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-50"
                  />
                </div>
                <div className="w-1/2">
                  <DatePicker
                    selected={education.toDate}
                    onChange={(date) => {
                      setAdditionalEducations((prevState) => {
                        const updatedEducations = [...prevState];
                        updatedEducations[index].toDate = date;
                        return updatedEducations;
                      });
                      setValue(`education.${index}.toDate`, date);
                    }}
                    placeholderText="To Date"
                    dateFormat="dd-MM-yyyy" // Add date format if needed
                    className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-50"
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={() => removeEducation(index)}
                className="text-red-500 mt-2 text-right"
              >
                Remove Education
              </button>
            </div>
          ))}

          <div className="mt-4">
            <button
              type="button"
              onClick={addEducation}
              className="text-blue-500 text-xl font-semibold"
            >
              Add Education
            </button>
          </div>

          <button type="submit" className="btn btn-accent my-4 w-full ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CandidateProUpdate;
