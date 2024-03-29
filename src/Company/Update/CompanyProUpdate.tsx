
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import CandidateNav from "../../Candidate/CommonNavbar/CandidateNav";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";

interface FormData {
  photo: File;
  name: string;
  industry: string;
  phone: string;
  registration?: string;
  founding: string;
  service?: string;
  city: string;
  country: string;
  postal: string;
  bio: string;
  companySize: string;
  website?: string;
}

interface CompanyData {
  email: string;
  _id: string;
  role: string;
}

const CompanyProUpdate = () => {
  const navigate = useNavigate();
  const loading = false;
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [company, setCompany] = useState<CompanyData | null>(null);
  const { register, handleSubmit, setValue } = useForm<FormData>();

  const api = import.meta.env.VITE_IMAGEBB_API_KEY;

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (user?.email) {
      axiosSecure.get(`/user-profile/${user.email}`)
        .then((res) => {
          setCompany(res.data);
        
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {

    const companyData = {
      ...data,
      email: company?.email,
      userId: company?._id,
      role: company?.role,
    };

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

        // Prepare company data with the image URL
        const updatedCompanyData = {
          ...companyData,
          photo: imageUrl,
        };

        // Send the updated company data to your database
        const updateUserDataResponse = await axiosSecure.put(
          `/user-update/${user?.email}`,
          updatedCompanyData
        );

        // Handle response accordingly
        if (updateUserDataResponse.data.message === "true") {
          toast.success("Profile Updated Successfully");
          navigate("/dashboard/companyProfile");
        } else {
          toast.error("Failed to update profile data");
        }
      } else {
        toast.error("Failed to upload profile photo to ImageBB");
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while updating profile");
    }
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
                Company Logo
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
                defaultValue="company"
                className="py-4 outline-none font-bold bg-transparent border-b-2 w-1/3 border-gray-300 text-xl hover:border-accent duration-500"
                {...register("companySize", {
                  required: "companySize is required",
                })}
              >
                <option value="company" disabled>
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
