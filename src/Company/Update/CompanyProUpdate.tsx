// import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import CandidateNav from "../../Candidate/CommonNavbar/CandidateNav";
// import useAxiosDev from "../../hooks/useAxiosDev";
// import useAuth from "../../hooks/useAuth";


const CompanyProUpdate = () => {
  const navigate = useNavigate();
  const loading = false;
  // const axiosDev = useAxiosDev();
  // const { user } = useAuth();

  const {
    register,
    handleSubmit,
    setValue,
  } = useForm();

  const handleBack = () => {
    navigate(-1);
  };

  const onSubmit: SubmitHandler<any> = async (data: any) => {
    console.log(data)
   
  };

  return (
    <div>
      <CandidateNav
        text="Update Profile"
        btn="Profile"
        handleClick={handleBack}
        btn2=""
        handleClick2={() => {}}
      />
      <div className=" bg-white px-2 py-5">
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex space-x-10 py-10 ">
            <div className="form-control w-full">
              <label
                className="font-bold text-gray-400 text-xl"
                htmlFor="photo"
              >
                Profile Picture
              </label>

              <input
                type="file"
                name="photo"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setValue("photo", file);
                  }
                }}
                className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-500"
              />
            </div>
          </div>

          <div className="pb-10 space-y-6">
            {/* Second div group */}
            <div className="flex space-x-10">
              <div className="form-control w-full">
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  placeholder="Company Name"
                  className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-500"
                />
              </div>
              <div className="form-control w-full">
                <input
                  type="text"
                  {...register("industry", {
                    required: "Company type is required",
                  })}
                  placeholder="Company type"
                  className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-500"
                />
              </div>
              <div className="form-control w-full">
                <input
                  type="text"
                  {...register("phone", { required: "phone is required" })}
                  className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-500"
                  placeholder="Phone Number"
                />
              </div>
            </div>
            {/* Second div group */}
            <div className="flex space-x-10">
              <div className="form-control w-full">
                <input
                  type="text"
                  {...register("registration")}
                  className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-500"
                  placeholder="Registration no"
                />
              </div>

              <div className="form-control w-full">
                <input
                  type="text"
                  {...register("founding", { required: "Country is required" })}
                  className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-500"
                  placeholder="Established Year"
                />
              </div>
              <div className="form-control w-full">
                <input
                  type="text"
                  {...register("service")}
                  className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-500"
                  placeholder="service/product"
                />
              </div>
            </div>
            {/* Third div group */}
            <div className="flex space-x-10">
              <div className="form-control w-full">
                <input
                  type="text"
                  {...register("city", { required: "City is required" })}
                  className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-500"
                  placeholder="City"
                />
              </div>

              <div className="form-control w-full">
                <input
                  type="text"
                  {...register("country", { required: "Country is required" })}
                  className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-500"
                  placeholder="Country"
                />
              </div>
              <div className="form-control w-full">
                <input
                  type="text"
                  {...register("postal", { required: "Postal is required" })}
                  className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-500"
                  placeholder="Postal Code"
                />
              </div>
            </div>
          </div>

          <div className="pb-10 space-y-6">
            <div className="form-control w-full">
              <textarea
                rows={3}
                {...register("bio", { required: "bio is required" })}
                className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-500"
                placeholder="Company Bio"
              ></textarea>
            </div>

            <div className="flex space-x-10">
              <select
                {...register("availability", {
                  required: "availability is required",
                })}
                name="availability"
                id="availability"
                className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-500"
              >
                <option value="" disabled selected>
                  Company Size
                </option>
                <option value="Big">Big</option>
                <option value="Medium">Medium</option>
                <option value="Start-Up">Start-Up</option>
              </select>
              <div className="form-control w-full">
                <input
                  type="text"
                  {...register("website")}
                  placeholder="Website Address"
                  className="py-4 outline-none font-bold bg-transparent border-b-2 w-full border-gray-300 text-xl hover:border-accent duration-500"
                />
              </div>
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

export default CompanyProUpdate;
