import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { AiOutlineCloseCircle } from "react-icons/ai";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";

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

interface FormData {
  name: string;
  phone: string;
  address: string;
  bio: string;
  skills: string[];
  experience: number;
  education: EducationData[];
  experienceDetails: ExperienceData[];
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

const CandidateProUpdate: React.FC = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [loading, setLoading] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<any | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const [additionalExperiences, setAdditionalExperiences] = useState<ExperienceData[]>([]);
  const [additionalEducations, setAdditionalEducations] = useState<EducationData[]>([]);
  const api = import.meta.env.VITE_IMAGEBB_API_KEY;


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

  const backToProfile = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (user?.email) {
      axiosSecure.get(`/user-profile/${user.email}`)
        .then((res) => {
          setUserData(res.data);
        })
        .catch((error) => console.log(error));
    }
  }, [user]);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setLoading(true);

    try {
      // Upload image to ImageBB
      const imageData = new FormData();
      imageData.append("image", data.photo);

      const imageUploadResponse = await axios.post(
        "https://api.imgbb.com/1/upload",
        imageData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          params: {
            key: api,
          },
        }
      );

      // Check if image upload was successful
      if (imageUploadResponse.data.status === 200) {
        const imageUrl = imageUploadResponse.data.data.url;
        //console.log("ImageBB Response:", imageUploadResponse.data);

        // Prepare candidate data with the image URL
        const candidateData = {
          ...data,
          email: userData?.email,
          userId: userData?._id,
          role: userData?.role,
          photo: imageUrl,
        };

        console.log(candidateData);

        // Send the updated candidate data to your database
        const updateUserDataResponse = await axiosPublic.put(
          `/user-update/${user?.email}`,
          candidateData
        );

        // Handle response accordingly
        if (updateUserDataResponse.data.message === "true") {
          toast.success("Profile Updated Successfully");
          navigate("/dashboard/candidateProfile");
        } else {
          toast.error("Failed to update profile data");
        }
      } else {
        toast.error("Failed to upload profile photo to ImageBB");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while updating profile");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user?.email) {
      axiosPublic
        .get(`/specific-candidate/${user.email}`)
        .then((res) => {
          setCurrentUser(res.data);
          console.log(res.data);
        })
        .catch((error) => console.log(error));
    }
  }, [user]);

  useEffect(() => {
    // Check if currentUser has data
    if (currentUser) {
      // Set default values for inputs using setValue
      setValue("name", currentUser.name);
      setValue("phone", currentUser.phone);
      setValue("village", currentUser.village);
      setValue("city", currentUser.city);
      setValue("country", currentUser.country);
      setValue("bio", currentUser.bio);
      setValue("availability", currentUser.availability);
      setValue("position", currentUser.position);
      setValue("work", currentUser.work);
      setValue("salaryRangeMin", currentUser.salaryRangeMin);
      setValue("salaryRangeMax", currentUser.salaryRangeMax);
      setValue("experience", currentUser.experience);

      // Set default values for skills (assuming currentUser.skills is an array of strings)
      if (Array.isArray(currentUser.skills)) {
        currentUser.skills.forEach((skill: any, index: number) => {
          setValue(`skills.${index}`, skill);
        });
      }

      // Set default values for additional experiences
      if (Array.isArray(currentUser.experienceDetails)) {
        currentUser.experienceDetails.forEach(
          (experience: any, index: number) => {
            setValue(`experienceDetails.${index}.company`, experience.company);
            setValue(
              `experienceDetails.${index}.position`,
              experience.position
            );
            setValue(
              `experienceDetails.${index}.fromDate`,
              new Date(experience.fromDate)
            );
            setValue(
              `experienceDetails.${index}.toDate`,
              new Date(experience.toDate)
            );
          }
        );
      }

      // Set default values for education
      if (Array.isArray(currentUser.education)) {
        currentUser.education.forEach((education: any, index: number) => {
          setValue(`education.${index}.university`, education.university);
          setValue(`education.${index}.degree`, education.degree);
          setValue(`education.${index}.subject`, education.subject);
          setValue(`education.${index}.fromDate`, new Date(education.fromDate));
          setValue(`education.${index}.toDate`, new Date(education.toDate));
        });
      }
    }
  }, [currentUser, setValue]);

  return (
    <div className="min-h-screen">
      <div className="flex justify-between items-center px-5 pt-5">
        <div className="text-xl md:text-3xl font-semibold">
          Update Your Profile
        </div>
        <div>
          <button className="btn" onClick={backToProfile}>
            Back
          </button>
        </div>
      </div>

      <div className="p-2 ">
        <form className="space-y-5 py-5" onSubmit={handleSubmit(onSubmit)}>
          {currentUser?.photo ? (
            <div className="bg-white p-8 flex space-x-10 pb-10 ">
              <div className="form-control w-full">
                <p className="py-2">Profile Picture</p>
                <div className="flex gap-5">
                  <img
                    src={currentUser?.photo}
                    alt="User Current picture"
                    className="w-20 h-20 rounded-full"
                  />
                  <input
                    type="file"
                    name="photo"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        setValue("photo", file);
                      }
                    }}
                    className="py-4 outline-none font-bold bg-transparent border-b-2
                 w-full border-gray-300 text-xs md:text-xl hover:border-accent duration-500"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white p-8 flex space-x-10 pb-10 ">
              <div className="form-control w-full">
                <p>Profile Picture</p>
                <input
                  type="file"
                  name="photo"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setValue("photo", file);
                    }
                  }}
                  className="py-4 outline-none font-bold bg-transparent border-b-2
               w-full border-gray-300 text-xs md:text-xl hover:border-accent duration-500"
                />
              </div>
            </div>
          )}

          <div className="bg-white p-8 pb-10 space-y-6">
            {/* Second div group */}
            <p>General Information</p>
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
                  type="text"
                  {...register("position", {
                    required: "position is required",
                  })}
                  placeholder="Desired Job Position"
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
                  placeholder="Your Village"
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

          <div className=" bg-white p-8 pb-10 space-y-6">
            <p>Bio</p>
            <div className="form-control w-full">
              <textarea
                rows={3}
                {...register("bio", { required: "bio is required" })}
                placeholder="Write within 50 words"
                className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xs md:text-xl hover:border-accent duration-500"
              ></textarea>
            </div>
          </div>
          <div className=" bg-white p-8 pb-10 space-y-6">
            <p>Enter your Skills</p>
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
                  placeholder="Type a skill and press enter"
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

          <div className="bg-white p-8  pb-10">
            <p>Salary Expectation</p>
            <div className="md:flex md:space-x-10">
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
          </div>

          <div className="bg-white p-8">
            <p className="md:pb-10">Experiences</p>
            {additionalExperiences.map((experience, index) => (
              <div key={index} className="form-control w-full mt-6 space-y-1">
                <h2 className="text-sm md:text-lg text-blue-600 opacity-70 font-bold mb-4">
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
                  Remove
                </button>
              </div>
            ))}

            <div className="">
              <button
                type="button"
                onClick={addExperience}
                className="text-blue-500 text-xs md:text-lg font-semibold"
              >
                Add Experience
              </button>
            </div>
          </div>

          <div className="bg-white p-8">
            <p className=" md:py-10">Educations</p>
            {additionalEducations.map((education, index) => (
              <div key={index} className="form-control w-full mt-6">
                <h2 className="text-sm md:text-lg text-blue-600 opacity-70 font-bold mb-4">
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
                  Remove
                </button>
              </div>
            ))}

            <div className="">
              <button
                type="button"
                onClick={addEducation}
                className="text-blue-500 text-xs md:text-lg font-semibold"
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

export default CandidateProUpdate;
