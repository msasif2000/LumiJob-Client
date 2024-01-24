import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { AiOutlineCloseCircle } from "react-icons/ai";
import CandidateNav from "../CommonNavbar/CandidateNav";

interface FormData {
  name: string;
  bio: string;
  skills: string[];
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
    <div className="bg-base-200 min-h-screen p-5">
      <CandidateNav
        text="Upgrade your information"
        btn="Return"
        handleClick={backToProfile}
      />
      {/* Your navigation component */}
      <div className="p-5 bg-white">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div className="form-control w-full">
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="Your Name"
              className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl"
            />
          </div>
          {/* Bio */}
          <div className="form-control w-full">
            <input
              type="text"
              {...register("bio", { required: "Bio is required" })}
              placeholder="Bio"
              className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl"
            />
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
                className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl"
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
          <div>
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
