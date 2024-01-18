import React, { useState } from "react";
import { useForm } from "react-hook-form";

import SignupArt from "../../assets/Art (1).svg";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { toast } from "react-toastify";

interface SignUpFormData {
  name: string;
  photo: FileList;
  email: string;
  password: string;
}
const Signup: React.FC = () => {
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignUpFormData>();

  const onSubmit = async (data: SignUpFormData) => {
    setIsCreatingAccount(true);
    console.log(data);
    try {
      const userCredential = await createUser(data.email, data.password);
      console.log(userCredential);

      await updateUserProfile(data.name);

      const userInfo = {
        name: data.name,
        email: data.email,
        password: data.password,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        toast.success("User created successfully");
      });

      setIsCreatingAccount(false);
      navigate("/");
    } catch (error: any) {
      console.error("Error creating user:", error);
      setIsCreatingAccount(false);
    }
  };
  return (
    <div className="w-full h-screen flex px-3">
      {/* form Div */}
      <div className="lg:w-1/2 flex flex-col items-center justify-center">
        <div className="w-full md:px-10 lg:px-5 xl:px-36">
          <div className="space-y-6">
            <h1 className="text-2xl md:text-4xl xl:text-5xl font-semibold">
              Hey There
            </h1>
            <p className="xl:text-2xl text-gray-500 pb-3">
              Create an account and start you career journey with us &
              recruiters from all around globe.
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 w-full">
            <div className="form-control w-full">
              <label htmlFor="name" className="text-xl font-semibold py-1">
                Name
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                placeholder="Your Name"
                className="input-md md:input-lg rounded-lg border-b-4 hover:border-b-teal-500 duration-500 outline-none bg-[#F7FBFF]"
              />
            </div>

            <div className="form-control w-full">
              <label htmlFor="email" className="text-xl font-semibold py-1">
                Email
              </label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                placeholder="example@gmail.com"
                className="input-md md:input-lg rounded-lg border-b-4 hover:border-b-teal-500 duration-500 outline-none bg-[#F7FBFF]"
              />
            </div>
            <div className="form-control w-full">
              <label htmlFor="password" className="text-xl font-semibold py-1">
                Password
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                    message:
                      "Password must meet the requirements: at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 6 characters long.",
                  },
                })}
                placeholder="at least 6 character long"
                className="input-md md:input-lg border-b-4 hover:border-b-teal-500 duration-500 outline-none bg-[#F7FBFF] mb-4"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>
            {isCreatingAccount ? (
              <div className="flex items-center justify-center">
                <span className="loading loading-infinity loading-lg"></span>
              </div>
            ) : (
              <input
                type="submit"
                value="Create account"
                className="btn md:btn-lg w-full bg-[#162D3A] text-white hover:bg-green-400 hover:text-black duration-500"
              />
            )}
            <div className="divider divider-neutral">Or</div>
            {/* Social Login Section */}
            <SocialLogin />

            <div className="flex justify-between md:text-xl">
              <p>Already have an account?</p>
              <Link to="/login">
                <p className="hover:text-green-500 cursor-pointer text-violet-400 font-semibold underline">
                  Login
                </p>
              </Link>
            </div>
          </form>
        </div>
      </div>
      {/* image div */}
      <div className="lg:w-1/2 object-cover m-4 hidden lg:block">
        <img
          src={SignupArt}
          className="w-full h-full object-cover rounded-xl"
          alt=""
        />
      </div>
    </div>
  );
};

export default Signup;
