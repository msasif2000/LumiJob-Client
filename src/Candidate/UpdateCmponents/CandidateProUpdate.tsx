import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { AiOutlineCloseCircle } from "react-icons/ai";
import CandidateNav from "../CommonNavbar/CandidateNav";
import { FieldValues } from 'react-hook-form';


interface FormData {
  name: string;
  phone: number;
  bio: string;
  skills: string[];
  address: string;
  experience: number;
}

interface ExperienceData extends FieldValues {
  experienceCompany: string;
  experiencePosition: string;
  experienceSubject: string;
  experienceFromDate: string;
  experienceToDate: string;
}

interface EducationData extends FieldValues {
  educationUniversity: string;
  educationPosition: string;
  educationSubject: string;
  educationFromDate: string;
  educationToDate: string;
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
    },
  });

  const [inputValue, setInputValue] = useState<string>("");
  const [additionalExperiences, setAdditionalExperiences] = useState<ExperienceData[]>([]);
  const [additionalEducations, setAdditionalEducations] = useState<EducationData[]>([]);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

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
        experienceCompany: "",
        experiencePosition: "",
        experienceSubject: "",
        experienceFromDate: "",
        experienceToDate: "",
      },
    ]);
  };

  const addEducation = () => {
    setAdditionalEducations([
      ...additionalEducations,
      {
        educationUniversity: "",
        educationPosition: "",
        educationSubject: "",
        educationFromDate: "",
        educationToDate: "",
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

  return (
    <div className="min-h-screen lg:px-20">
      <CandidateNav
        text="Upgrade your information"
        btn="Return"
        handleClick={backToProfile}
      />
      {/* Your navigation component */}
      <div className=" bg-white px-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex space-x-10">
            {/* Name */}
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
          {/* Bio */}
          <div className="form-control w-full">
          <textarea
                rows={3}
                {...register("bio", { required: "bio is required" })}
                placeholder="Bio"
                className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-500"
              ></textarea>
          </div>
          {/* Skills */}
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
          {/* Display errors if any */}
          {errors.skills && <p>{errors.skills.message}</p>}
          <div className="flex space-x-10">
            {/* Name */}
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
          <div>
            <div>

            {additionalExperiences.map((experience, index) => (
            <div key={index} className="form-control w-full mt-6">
              <h2 className="text-2xl font-bold mb-4">Experience {index + 1}</h2>
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <input
                    type="text"
                    {...register(`experienceCompany.${index}`, {
                      required: "Company name is required",
                    })}
                    placeholder="Company Name"
                    className="py-3 px-4 rounded-md outline-none bg-gray-100 border-2 border-gray-300 w-full text-lg focus:border-accent hover:border-accent duration-300"
                  />
                </div>
                <div className="w-1/2">
                  <input
                    type="text"
                    {...register(`experiencePosition.${index}`, {
                      required: "Position is required",
                    })}
                    placeholder="Position"
                    className="py-3 px-4 rounded-md outline-none bg-gray-100 border-2 border-gray-300 w-full text-lg focus:border-accent hover:border-accent duration-300"
                  />
                </div>
              
              </div>
              <div className="flex space-x-4 mt-4">
                <div className="w-1/2">
                  <input
                    type="text"
                    {...register(`experienceFromDate.${index}`, {
                      required: "From date is required",
                    })}
                    placeholder="From Date"
                    className="py-3 px-4 rounded-md outline-none bg-gray-100 border-2 border-gray-300 w-full text-lg focus:border-accent hover:border-accent duration-300"
                  />
                </div>
                <div className="w-1/2">
                  <input
                    type="text"
                    {...register(`experienceToDate.${index}`, {
                      required: "To date is required",
                    })}
                    placeholder="To Date"
                    className="py-3 px-4 rounded-md outline-none bg-gray-100 border-2 border-gray-300 w-full text-lg focus:border-accent hover:border-accent duration-300"
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={() => removeExperience(index)}
                className="text-red-500 mt-2"
              >
                Remove Experience
              </button>
            </div>
          ))}
          <div className="mt-4">
            <button type="button" onClick={addExperience} className="text-blue-500">
              Add Experience
            </button>
          </div>

          {/* Additional Educations */}
          {additionalEducations.map((education, index) => (
            <div key={index} className="form-control w-full mt-6">
              <h2 className="text-2xl font-bold mb-4">Education {index + 1}</h2>
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <input
                    type="text"
                    {...register(`educationUniversity.${index}`, {
                      required: "University name is required",
                    })}
                    placeholder="University Name"
                    className="py-3 px-4 rounded-md outline-none bg-gray-100 border-2 border-gray-300 w-full text-lg focus:border-accent hover:border-accent duration-300"
                  />
                </div>
                
                <div className="w-1/2">
                  <input
                    type="text"
                    {...register(`educationSubject.${index}`, {
                      required: "Subject studied is required",
                    })}
                    placeholder="Studied Subject"
                    className="py-3 px-4 rounded-md outline-none bg-gray-100 border-2 border-gray-300 w-full text-lg focus:border-accent hover:border-accent duration-300"
                  />
                </div>
              </div>
              <div className="flex space-x-4 mt-4">
                <div className="w-1/2">
                  <input
                    type="text"
                    {...register(`educationFromDate.${index}`, {
                      required: "From date is required",
                    })}
                    placeholder="From Date"
                    className="py-3 px-4 rounded-md outline-none bg-gray-100 border-2 border-gray-300 w-full text-lg focus:border-accent hover:border-accent duration-300"
                  />
                </div>
                <div className="w-1/2">
                  <input
                    type="text"
                    {...register(`educationToDate.${index}`, {
                      required: "To date is required",
                    })}
                    placeholder="To Date"
                    className="py-3 px-4 rounded-md outline-none bg-gray-100 border-2 border-gray-300 w-full text-lg focus:border-accent hover:border-accent duration-300"
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={() => removeEducation(index)}
                className="text-red-500 mt-2"
              >
              Remove Education
              </button>
            </div>
          ))}
          <div className="mt-4">
            <button type="button" onClick={addEducation} className="text-blue-500">
              Add Education
            </button>
          </div>
            
            </div>
            <button type="submit" className="btn btn-primary mt-4">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CandidateProUpdate;
