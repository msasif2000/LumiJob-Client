import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { TbHomeShare } from "react-icons/tb";
// import SignupArt from "../../assets/Art (1).svg";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import { LuEyeOff } from "react-icons/lu";
import { GiBleedingEye } from "react-icons/gi";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import signInImage from "../../assets/image/sign-in.jpg";
import { Helmet } from "react-helmet-async";

interface SignUpFormData {
  name: string;
  photo: FileList;
  email: string;
  password: string;
}
const Signup: React.FC = () => {
  const axiosPublic = useAxiosPublic();
  const { createUser, updateUserProfile, loading, setLoading } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignUpFormData>();

  const onSubmit = async (data: SignUpFormData) => {
    setLoading(true);
    try {
      const userCredential = await createUser(data.email, data.password);
      console.log(userCredential);

      await updateUserProfile(data.name);

      const userInfo = {
        name: data.name,
        email: data.email,
        password: data.password,
      };

      // for dev Delete in prod
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        toast.success("User created successfully", {
          position: "top-center",
          hideProgressBar: true,
          autoClose: 2000,
        });
      });

      setLoading(false);
      navigate("/signup/role");
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        // Firebase error indicating that the email already exists
        toast.warn("Email already exists. Please use a different email.", {
          position: "top-center",
          hideProgressBar: true,
          autoClose: 2000,
        });
      } else {
        // Other errors
        toast.warn("Something went wrong. Please try again.", {
          position: "top-center",
          hideProgressBar: true,
          autoClose: 2000,
        });
      }

      console.error("Error creating user:", error);
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>SignUp | LumiJobs</title>
      </Helmet>
      <div className="w-full min-h-screen flex px-3 mb-4">
        {/* form Div */}
        <div className="lg:w-1/2 flex flex-col items-center justify-center">
          <div className="w-full md:px-10 lg:px-4 xl:px-28">
            <div className="space-y-6">
              <h1 className="text-2xl md:text-4xl xl:text-5xl font-semibold">
                Hey There
              </h1>
              <p className="xl:text-2xl text-gray-500 pb-3">
                Create an account and start you career journey with us &
                recruiters from all around globe.
              </p>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-3 w-full"
            >
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
              <div className="form-control w-full relative">
                <label
                  htmlFor="password"
                  className="text-xl font-semibold py-1"
                >
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
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
                <span
                  className="absolute top-[50px] md:top-[55px] md:text-lg right-3 cursor-pointer lg:text-2xl"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <GiBleedingEye /> : <LuEyeOff />}
                </span>
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>
              {
                <button
                  type="submit"
                  className="btn md:btn-lg w-full bg-[#162D3A] text-white hover:bg-green-400 hover:text-black duration-500"
                >
                  {loading ? (
                    <span className="loading loading-dots loading-md"></span>
                  ) : (
                    "Create account"
                  )}
                </button>
              }
              <div className="divider divider-neutral">
                <Link to="/" className="text-2xl">
                  <TbHomeShare />
                </Link>
              </div>
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
            src={signInImage}
            className="w-full h-full object-cover rounded-xl"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Signup;
