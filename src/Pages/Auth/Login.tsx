import React from "react";
import LoginArt from "../../assets/Login Art.svg";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SocialLogin from "./SocialLogin";
import useAuth from "../../hooks/useAuth";

interface LoginData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { signInUser } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginData>();

  const onSubmit = (data: LoginData) => {
    try {
      toast.success("Login Successful");
      signInUser(data.email, data.password).then((res: { data: any }) => {
        console.log(res.data);
        toast.success("Login Successful");
        navigate("/");
      });
      console.log(data);
    } catch (error) {
      toast.error("Login Failed");
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen flex px-3 md:px-10 lg:px-0">
      {/* form div */}
      <div className="lg:w-1/2 flex items-center justify-center">
        <div className="space-y-5 lg:px-5 xl:px-40  md:space-y-10">
          <h1 className="text-2xl md:text-4xl xl:text-5xl font-semibold">
            Welcome Back <span className="lg:text-5xl">👋🏻</span>
          </h1>
          <p className="md:text-xl xl:text-2xl text-gray-500 font-medium ">
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
                className="input-md md:input-lg rounded-lg border-b-4 hover:border-b-teal-500 duration-500 outline-none bg-[#F7FBFF]"
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
                className="input-md md:input-lg border-b-4 outline-none rounded-lg  bg-[#F7FBFF] hover:border-b-teal-500 duration-500"
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
              className="btn md:btn-lg w-full bg-[#162D3A] text-white hover:bg-green-400 hover:text-black duration-500 "
            />
          </form>
          <div className="divider divider-neutral">Or</div>
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
  );
};

export default Login;
