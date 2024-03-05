import React, { useState } from "react";
// import LoginArt from "../../assets/Login Art.svg";
import LoginArt from "../../assets/image/auth.jpg";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SocialLogin from "./SocialLogin";
import { LuEyeOff } from "react-icons/lu";
import { GiBleedingEye } from "react-icons/gi";
import useAuth from "../../hooks/useAuth";
import { TbHomeShare } from "react-icons/tb";
import { Helmet } from "react-helmet-async";

interface LoginData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { signInUser, loading, setLoading } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginData>();

  const onSubmit = async (data: LoginData) => {
    try {
      setLoading(true);
      await signInUser(data.email, data.password);
      toast.success("Login Successful", {
        position: "top-center",
        hideProgressBar: true,
        autoClose: 2000,
      });
      setLoading(false);
     
      navigate("/");
    } catch (error) {
      toast.error("Invalid user credentials.", {
        position: "top-center",
        hideProgressBar: true,
        autoClose: 2000,
      });
      setLoading(false);
     
    }
  };

  return (
    <>
      <Helmet>
        <title>Login | LumiJobs</title>
      </Helmet>
      <div className="w-full min-h-screen flex lg:px-3 md:px-12 px-8  mb-4 mt-8">
        {/* form div */}
        <div className="lg:w-1/2 flex flex-col items-center justify-center">
          <div className="w-full md:px-10 lg:px-4 xl:px-28">
            <div className="space-y-3">
              <h1 className="text-2xl md:text-4xl xl:text-5xl font-semibold">
                Welcome Back <span className="lg:text-5xl">👋🏻</span>
              </h1>
              <p className="md:text-xl xl:text-2xl text-gray-500 font-normal">
                Today is a new day. It's your day. You shape it. Sign in to
                start managing your Career path.
              </p>
            </div>
            {/* from starts here */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 mt-4">
              <div className="form-control w-full">
                <label htmlFor="email" className="font-bold text-lg ">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  placeholder="Example@gmail.com"
                  className="input-md md:input-lg rounded-lg border-b-4 hover:border-b-teal-500 duration-500 outline-none bg-[#F7FBFF]"
                />
              </div>
              <div className="form-control w-full relative">
                <label htmlFor="password" className="font-bold text-lg ">
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
                  placeholder="at least 6 character"
                  className="input-md md:input-lg border-b-4 outline-none rounded-lg  bg-[#F7FBFF] hover:border-b-teal-500 duration-500"
                />
                <span
                  className="absolute top-[44px] md:top-[48px] md:text-lg right-3 cursor-pointer lg:text-2xl"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <GiBleedingEye /> : <LuEyeOff />}
                </span>
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>
              <div className="flex justify-end">
                <p className="hover:text-red-500 cursor-pointer text-violet-400 font-semibold">
                  Forgot Password?
                </p>
              </div>
              <button
                type="submit"
                value=""
                className="btn md:btn-lg w-full bg-[#162D3A] text-white hover:bg-green-400 hover:text-black duration-500 "
              >
                {loading ? (
                  <span className="loading loading-dots loading-md"></span>
                ) : (
                  "Sign in"
                )}
              </button>
            </form>
            <div className="divider divider-neutral">
              <Link to="/" className="text-2xl">
                <TbHomeShare />
              </Link>
            </div>
            {/* Social Login Section */}
            <SocialLogin />

            <div className="flex justify-between lg:text-xl">
              <p>Don't have an account?</p>
              <Link to="/signup">
                <p className="hover:text-green-500 cursor-pointer text-violet-400 font-semibold underline">
                  Sign up
                </p>
              </Link>
            </div>
          </div>
        </div>

        {/* Image Div */}
        <div className="lg:w-1/2 object-cover m-5 rounded hidden lg:block">
          <img
            src={LoginArt}
            className="w-full h-full object-cover rounded-xl"
            alt="abstract painting"
          />
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
