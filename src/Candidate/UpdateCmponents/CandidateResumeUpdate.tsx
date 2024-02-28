import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import CandidateNav from "../CommonNavbar/CandidateNav";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import useAuth from "../../hooks/useAuth";
import { ToastContainer } from "react-toastify";
// import useAxiosPublic from "../../hooks/useAxiosPublic";

interface EducationData {
  university: string;
  degree: string;
  subject: string;
  fromDate: Date | null;
  toDate: Date | null;
}

interface ExperienceData {
  company: string;
  position: string;
  fromDate: Date | null;
  toDate: Date | null;
}


const CompleteResume: React.FC = () => {
  const navigate = useNavigate();
  //   const { user } = useAuth();
  const [loading, setLoading] = useState<boolean>(false);
  console.log(setLoading);

  //   const axiosPublic = useAxiosPublic();

  const { register, handleSubmit, setValue } = useForm<any>({
    defaultValues: {
      skills: [],
      education: [],
      experienceDetails: [],
    },
  });

  //   const [inputValue, setInputValue] = useState<string>("");
  const [additionalExperiences, setAdditionalExperiences] = useState<
    ExperienceData[]
  >([]);
  const [additionalEducations, setAdditionalEducations] = useState<
    EducationData[]
  >([]);

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

  const onSubmit: SubmitHandler<any> = async (data) => {
    console.log(data);
  };

  const backToResume = () => {
    navigate("/dashboard/candidateProfile/resume");
  };
  const backToProfile = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen">
      <CandidateNav
        text="Fill Information"
        btn="Return"
        btn2="See Resume"
        handleClick={backToProfile}
        handleClick2={backToResume}
      />

      <div className="p-2 ">
        <form className="space-y-5 py-5" onSubmit={handleSubmit(onSubmit)}>
          <div className=" space-y-6">
            <div className=" bg-white p-10">
              {/* name desired contact */}
              <p>General Information</p>
              <div className="md:flex space-x-10">
                <div className="form-control w-full">
                  <input
                    type="text"
                    {...register("name")}
                    placeholder="Name"
                    className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xs md:text-xl hover:border-accent duration-500"
                  />
                </div>

                <div className="form-control w-full">
                  <input
                    type="text"
                    {...register("position")}
                    placeholder="Desired Position"
                    className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xs md:text-xl hover:border-accent duration-500"
                  />
                </div>
                <div className="form-control w-full">
                  <input
                    type="text"
                    {...register("phone")}
                    placeholder="Contact Number"
                    className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xs md:text-xl hover:border-accent duration-500"
                  />
                </div>
              </div>
            </div>
            {/* objective */}
            <div className="pb-10 space-y-6 bg-white p-10">
              <p>Objective</p>
              <div className="form-control w-full">
                <textarea
                  rows={5}
                  {...register("objective")}
                  placeholder="At least 200 word"
                  className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xs md:text-xl hover:border-accent duration-500"
                ></textarea>
              </div>
            </div>
            {/* Address */}
            <div className="pb-10 space-y-6 bg-white p-10">
              <p>Address</p>
              <div className=" md:flex md:space-x-10 py-5">
                <div className="form-control w-full">
                  <input
                    type="text"
                    {...register("village")}
                    placeholder="Village"
                    className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xs md:text-xl hover:border-accent duration-500"
                  />
                </div>
                <div className="form-control w-full">
                  <input
                    type="text"
                    {...register("city")}
                    placeholder="City"
                    className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xs md:text-xl hover:border-accent duration-500"
                  />
                </div>
                <div className="form-control w-full">
                  <input
                    type="text"
                    {...register("postal")}
                    placeholder="Postal code"
                    className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xs md:text-xl hover:border-accent duration-500"
                  />
                </div>
                <div className="form-control w-full">
                  <input
                    type="text"
                    {...register("country")}
                    placeholder="Country"
                    className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xs md:text-xl hover:border-accent duration-500"
                  />
                </div>
              </div>
            </div>

            {/* skills */}
            <div className="pb-10 space-y-6 bg-white p-10">
              <p>Skills</p>
              <div className="py-5">
                <div className="form-control w-full">
                  <input
                    type="text"
                    {...register("expert")}
                    placeholder="Expert in working with"
                    className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xs md:text-xl hover:border-accent duration-500"
                  />
                </div>
                <div className="form-control w-full">
                  <input
                    type="text"
                    {...register("comfortable")}
                    placeholder="Confortable in working with"
                    className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xs md:text-xl hover:border-accent duration-500"
                  />
                </div>
                <div className="form-control w-full">
                  <input
                    type="text"
                    {...register("familiar")}
                    placeholder="Familiar in working with"
                    className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xs md:text-xl hover:border-accent duration-500"
                  />
                </div>
                <div className="form-control w-full">
                  <input
                    type="text"
                    {...register("tools")}
                    placeholder="Tools I'm confortable with"
                    className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xs md:text-xl hover:border-accent duration-500"
                  />
                </div>
              </div>
            </div>
            {/*soft skills */}
            <div className="pb-10 space-y-6 bg-white p-10">
              <p>Soft Skills</p>
              <div className="py-5">
                <div className="form-control w-full">
                  <input
                    type="text"
                    {...register("softSkills")}
                    placeholder="Soft Skills I have"
                    className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xs md:text-xl hover:border-accent duration-500"
                  />
                </div>
              </div>
            </div>

            {/*Languages */}
            <div className="pb-10 space-y-6 bg-white p-10">
              <p>Languages</p>
              <div className="py-5">
                <div className="form-control w-full">
                  <input
                    type="text"
                    {...register("languages")}
                    placeholder="Languages I know"
                    className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xs md:text-xl hover:border-accent duration-500"
                  />
                </div>
              </div>
            </div>

            {/*Links */}
            <div className=" space-y-6 bg-white p-10">
              <p>Links</p>
              <div className="py-5">
                <div className="form-control w-full">
                  <input
                    type="text"
                    {...register("portfolio")}
                    placeholder="Portfolio url"
                    className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xs md:text-xl hover:border-accent duration-500"
                  />
                </div>
                <div className="form-control w-full">
                  <input
                    type="text"
                    {...register("linkedin")}
                    placeholder="LinkedIn profile"
                    className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xs md:text-xl hover:border-accent duration-500"
                  />
                </div>
                <div className="form-control w-full">
                  <input
                    type="text"
                    {...register("github")}
                    placeholder="github profile"
                    className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xs md:text-xl hover:border-accent duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10">
            <p className=" mb-4 md:pb-10">Experience</p>
            {additionalExperiences.map((experience, index) => (
              <div key={index} className="form-control w-full mt-6 space-y-1">
                <h2 className="text-sm md:text-lg opacity-70 font-bold mb-4">
                  Experience {index + 1}
                </h2>
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
                Add Experience
              </button>
            </div>
          </div>

          <div className="bg-white p-10">
            <p className=" mb-4 md:pb-10">Education</p>
            {additionalEducations.map((education, index) => (
              <div key={index} className="form-control w-full mt-6">
                <h2 className="text-sm md:text-lg opacity-70 font-bold mb-4">
                  Education {index + 1}
                </h2>
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

            <div className="mt-4">
              <button
                type="button"
                onClick={addEducation}
                className="text-blue-500 text-xs md:text-xl font-semibold"
              >
                Add Education
              </button>
            </div>
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

export default CompleteResume;
