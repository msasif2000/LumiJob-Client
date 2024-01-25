import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { AiOutlineCloseCircle } from "react-icons/ai";
import CandidateNav from "../CommonNavbar/CandidateNav";

interface FormData {
  name: string;
  phone: number;
  bio: string;
  skills: string[];
  address: string;
  experience: number;
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

  const backToProfile = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen ">
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
