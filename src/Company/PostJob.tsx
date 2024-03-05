import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { MdDeleteForever } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CandidateNav from "../Candidate/CommonNavbar/CandidateNav";
import useAuth from "../hooks/useAuth";
import {ToastContainer ,toast } from "react-toastify";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

interface CompanyData {
  email: string;
  _id: string;
  role: string;
  name: string;
  photo: string;
}

const JobPostingForm: React.FC = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [loading, setLoading] = useState<boolean>(false);
  const [requirements, setRequirements] = useState([0, 1]);
  const [responsibilities, setResponsibilities] = useState([0, 1]);
  const [skills, setSkills] = useState([0, 1]);
  const [perks, setPerks] = useState([0, 1]);
  const [dates, setDate] = useState<Date | undefined>(undefined);
  const { user } = useAuth();
  const [company, setCompany] = useState<CompanyData | null>(null);
  const axiosPublic = useAxiosPublic()
  const navigate = useNavigate()

  const addRequirement = () => {
    setRequirements((prevRequirements) => [
      ...prevRequirements,
      prevRequirements.length,
    ]);
  };

  const addResponsibilities = () => {
    setResponsibilities((prevResponsibilities) => [
      ...prevResponsibilities,
      prevResponsibilities.length,
    ]);
  };

  const addSkills = () => {
    setSkills((prevSkills) => [...prevSkills, prevSkills.length]);
  };

  const addPerks = () => {
    setPerks((prevPerks) => [...prevPerks, prevPerks.length]);
  };

  const removeRequirement = (indexToRemove: number) => {
    setRequirements((prevRequirements) =>
      prevRequirements.filter((_, index) => index !== indexToRemove)
    );
  };

  const removeResponsibilities = (indexToRemoves: number) => {
    setResponsibilities((prevResponsibilities) =>
      prevResponsibilities.filter((_, index) => index !== indexToRemoves)
    );
  };

  const removeSkills = (indexToRemoves: number) => {
    setSkills((prevSkills) =>
      prevSkills.filter((_, index) => index !== indexToRemoves)
    );
  };
  const removePerks = (indexToRemoves: number) => {
    setPerks((prevPerks) =>
      prevPerks.filter((_, index) => index !== indexToRemoves)
    );
  };

  useEffect(() => {
    if (user?.email) {
      axiosPublic
        .get(`/specific-company/${user.email}`)
        .then((res) => {
          setCompany(res.data);
        
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const onSubmit: SubmitHandler<any> = (data) => {
    const date = new Date();
    const jobData = {
      ...data,
      email: company?.email,
      companyId: company?._id,
      role: company?.role,
      platform: company?.name,
      picture: company?.photo,
      post_time: date,
    };

    setLoading(true)
    
    axiosPublic
      .post("/post-jobs", jobData)
      .then((response: any) => {
    
        if (response.data.insertedId) {
          toast.success("Job Posted Successfully", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
          });
          setLoading(false)
        } else if(response.data.message === 'Please update subscription') {
          toast.error("You've reached your job posting limit. Please update your subscription", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
          });
          setLoading(false)
        }
        
      })
      .catch((error: any) => {
        console.log(error);
        toast.error("Job Posting Failed", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
         
        });
        setLoading(false)
      });
  };

  const handlePosted = ()=>{
    navigate('/dashboard/postedJobs')
  }

  return (
    <>
      <CandidateNav
        text="Post Job"
        btn="Go Back"
        btn2=""
        handleClick={() => {handlePosted()}}
        handleClick2={() => {}}
      />
      <div className="min-h-screen">
        <div className="py-5">
          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            {/* Company Info */}
            <div className="md:flex bg-white md:space-x-10 p-10">
              <div className="form-control w-full">
                <input
                  type="text"
                  {...register("title")}
                  className="py-4 outline-none font-bold bg-transparent border-b-2
                 w-full border-gray-300 text-xl hover:border-accent duration-500"
                  placeholder="Job Title"
                />
              </div>
              <div className=" form-control w-full">
                <input
                  type="text"
                  {...register("sectorType")}
                  className="py-4 outline-none font-bold bg-transparent border-b-2
                w-full border-gray-300 text-xl hover:border-accent duration-500"
                  placeholder="Sector"
                />
              </div>
              <div className="form-control w-full">
                <input
                  type="text"
                  {...register("location")}
                  className="py-4 outline-none font-bold bg-transparent border-b-2
                w-full border-gray-300 text-xl hover:border-accent duration-500"
                  placeholder="location"
                />
              </div>
            </div>

            {/* Job Details */}
            <div className="pb-10 space-y-6">
              <div className="flex bg-white p-10 space-x-10">
                <div className="form-control w-full">
                  <textarea
                    rows={3}
                    {...register("description")}
                    className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-500"
                    placeholder="Job Description"
                  />
                </div>
              </div>

              <div className="flex bg-white p-10 space-x-10">
                <div className="form-control w-full">
                  <textarea
                    rows={3}
                    {...register("positionOverview")}
                    className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-500"
                    placeholder="Position Overview"
                  />
                </div>
              </div>

              {/* Requirements */}
              <div className="form-control bg-white p-10 w-full pt-10">
                <label
                  className="font-bold text-gray-400 text-xl"
                  htmlFor="requirements"
                >
                  Requirements
                </label>
                <ul>
                  {requirements.map((index) => (
                    <li key={index} className="relative">
                      <input
                        {...register(`requirements[${index}]`)}
                        className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-500"
                      />
                      <button
                        type="button"
                        onClick={() => removeRequirement(index)}
                        className="text-red-500 ml-2 absolute right-5 top-1/2 -translate-y-1/2  text-2xl"
                      >
                        <MdDeleteForever />
                      </button>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={addRequirement}
                  className="text-blue-500 text-lg text-right font-semibold py-5"
                >
                  Add More
                </button>
              </div>

              {/* Responsibility */}
              <div className="form-control bg-white p-10 w-full">
                <label
                  className="font-bold text-gray-400 text-xl"
                  htmlFor="requirements"
                >
                  Responsibilities
                </label>
                <ul>
                  {responsibilities.map((index) => (
                    <li key={index} className="relative">
                      <input
                        {...register(`responsibilities[${index}]`)}
                        className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-500"
                      />
                      <button
                        type="button"
                        onClick={() => removeResponsibilities(index)}
                        className="text-red-500 ml-2 absolute right-5 top-1/2 -translate-y-1/2  text-2xl"
                      >
                        <MdDeleteForever />
                      </button>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={addResponsibilities}
                  className="text-blue-500 text-lg text-right font-semibold py-5"
                >
                  Add More
                </button>
              </div>

              {/* Skills */}
              <div className="form-control bg-white p-10 w-full">
                <label
                  className="font-bold text-gray-400 text-xl"
                  htmlFor="requirements"
                >
                  Skills
                </label>
                <ul>
                  {skills.map((index) => (
                    <li key={index} className="relative">
                      <input
                        {...register(`skills[${index}]`)}
                        className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-500"
                      />
                      <button
                        type="button"
                        onClick={() => removeSkills(index)}
                        className="text-red-500 ml-2 absolute right-5 top-1/2 -translate-y-1/2  text-2xl"
                      >
                        <MdDeleteForever />
                      </button>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={addSkills}
                  className="text-blue-500 text-lg text-right font-semibold py-5"
                >
                  Add More
                </button>
              </div>

              {/* Perks */}
              <div className="form-control bg-white p-10 w-full">
                <label
                  className="font-bold text-gray-400 text-xl"
                  htmlFor="requirements"
                >
                  Perks
                </label>
                <ul>
                  {perks.map((index) => (
                    <li key={index} className="relative">
                      <input
                        {...register(`perks[${index}]`)}
                        className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-500"
                      />
                      <button
                        type="button"
                        onClick={() => removePerks(index)}
                        className="text-red-500 ml-2 absolute right-5 top-1/2 -translate-y-1/2  text-2xl"
                      >
                        <MdDeleteForever />
                      </button>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={addPerks}
                  className="text-blue-500 text-lg text-right font-semibold py-5 "
                >
                  Add More
                </button>
              </div>

              {/* Job type */}
              <div className="flex bg-white p-10 space-x-10">
                <div className="form-control w-full">
                  <select
                    defaultValue="Job Type"
                    className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-500"
                    {...register("jobType", {
                      required: "Job Type is required",
                    })}
                  >
                    <option value="Job Type" disabled>
                      Job Type
                    </option>
                    <option value="Office">On-Site</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Remote">Remote</option>
                  </select>
                </div>
                <div className="form-control w-full">
                  <select
                    defaultValue="Work"
                    className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-500"
                    {...register("workTime", {
                      required: "Job Type is required",
                    })}
                  >
                    <option value="Work" disabled>Work Time</option>
                    <option value="Part Time">Part Time</option>
                    <option value="Full Time">Full Time</option>
                  </select>
                </div>
              </div>
              {/* Deadline Experience */}
              <div className="md:flex bg-white p-10 md:space-x-10">
                <div className="form-control w-full">
                  <DatePicker
                    selected={dates}
                    onChange={(date) => {
                      setDate(date || undefined); // Handle null case
                      setValue("deadline", date !== null ? date : new Date());
                    }}
                    className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-500"
                    placeholderText="Submission Deadline"
                  />
                </div>
                <div className="form-control w-full">
                  <input
                    type="text"
                    {...register("experience")}
                    className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-500"
                    placeholder="Experience Required"
                  />
                </div>
              </div>

              {/* Salary Range */}
              <div className="flex bg-white p-10 space-x-10">
                <div className="form-control w-full">
                  <input
                    type="number"
                    {...register("salaryRange.min")}
                    className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-500"
                    placeholder="$ Min Salary"
                  />
                </div>
                <div className="form-control w-full">
                  <input
                    type="number"
                    {...register("salaryRange.max")}
                    className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-500"
                    placeholder="$ Max Salary"
                  />
                </div>
              </div>
              <div>
                <div className="form-control bg-white p-10 w-full">
                  <textarea
                    {...register("application")}
                    className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-500"
                    placeholder="Summury"
                  />
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-accent mb-10 w-full">
              {loading ? (
                <span className="loading loading-ring loading-lg"></span>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
        <ToastContainer/>
      </div>
    </>
  );
};

export default JobPostingForm;
