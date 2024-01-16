import React from "react";
import LoginArt from "../../assets/Login Art.svg";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SocialLogin from "./SocialLogin";

interface LoginData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginData>();

  const onSubmit = (data: LoginData) => {
    try {
      toast.success("Login Successful");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen flex">
      {/* form div */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="px-40  space-y-10">
          <h1 className="text-5xl font-semibold">
            Welcome Back <span className="text-5xl">👋🏻</span>
          </h1>
          <p className="text-2xl text-gray-500 font-medium ">
            Today is a new day. It's your day. You shape it. Sign in to start
            managing your Career path.
          </p>
          {/* from starts here */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="form-control w-full">
              <label htmlFor="email" className="font-bold text-lg ">
                Email
              </label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                placeholder="Example@gmail.com"
                className="input-lg rounded-lg border-b-4 hover:border-b-teal-500 duration-500 outline-none bg-[#F7FBFF]"
              />
            </div>
            <div className="form-control w-full">
              <label htmlFor="password" className="font-bold text-lg ">
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
                placeholder="at least 6 character"
                className="input-lg border-b-4 outline-none rounded-lg  bg-[#F7FBFF] hover:border-b-teal-500 duration-500"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>
            <div className="flex justify-end">
              <p className="hover:text-red-500 cursor-pointer text-violet-400 font-semibold">
                Forgot Password?
              </p>
            </div>
            <input
              type="submit"
              value="Sign in"
              className="btn btn-lg w-full bg-[#162D3A] text-white hover:bg-green-400 hover:text-black duration-500 "
            />
          </form>
          <div className="divider divider-neutral">Or</div>
          {/* Social Login Section */}
          <SocialLogin/>

          <div className="flex justify-between text-xl">
          <p>Dont have an account?</p>
          <Link to="/signup">
            <p className="hover:text-green-500 cursor-pointer text-violet-400 font-semibold">
              Sign up
            </p>
          </Link>
          </div>
        </div>
      </div>

      {/* Image Div */}
      <div className="w-1/2 object-cover m-5 rounded ">
        <img
          src={LoginArt}
          className="w-full h-full object-cover rounded-xl"
          alt="abstract painting"
        />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
