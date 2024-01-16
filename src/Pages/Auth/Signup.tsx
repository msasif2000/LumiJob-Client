import React, { useState } from "react";
import { useForm } from "react-hook-form";

import SignupArt from "../../assets/Art (1).svg";
import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";

interface SignUpFormData {
  name: string;
  photo: FileList;
  email: string;
  password: string;
}
const Signup: React.FC = () => {
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignUpFormData>();

  const onSubmit = async (data: SignUpFormData) => {
    console.log(data);

    // for uploading user images and profile creation

    // try {
    //   setIsCreatingAccount(true);
    //   const { name, photo, email, password } = data;
    //   const photoRef = ref(storage, `photo/${name}-photo.jpg`);
    //   await uploadBytes(photoRef, photo[0]);
    //   const imageURL = await getDownloadURL(photoRef);

    //   await createUser(email, password);
    //   await updateUser(name, imageURL);

    //   const userInfo = { name, profile: imageURL, email, password };
    //   axiosPublic.post('/users', userInfo).then((res) => {
    //     if (res.data.insertedId) {
    //       toast.success('Account created successfully');
    //     } else {
    //       toast.warn('Something went wrong');
    //     }
    //   });
    // } catch (error) {
    //   toast.error(error.message);
    // } finally {
    //   setIsCreatingAccount(false);
    // }

  };
  return (
    <div className="w-full h-screen flex">
     
      {/* form Div */}
      <div className="w-1/2 flex flex-col items-center justify-center">
        <div className="w-full px-36">
          <div className="space-y-6">
            <h1 className="text-5xl font-semibold">Hey There</h1>
            <p className="text-2xl text-gray-500 pb-3">
              Create an account and start you career journey with us & recruiters from
              all around globe.
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
                className="input-lg rounded-lg border-b-4 hover:border-b-teal-500 duration-500 outline-none bg-[#F7FBFF]"
              />
            </div>
            <div className="form-control w-full">
              <label htmlFor="photo" className="text-xl font-semibold py-1">
                Profile Picture
              </label>
              <input
                type="file"
                {...register("photo", { required: "Photo is required" })}
                accept="image/*"
                className="input-lg border-b-4 hover:border-b-teal-500 duration-500 outline-none bg-[#F7FBFF] mt-1 p-2 border rounded-md w-full"
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
                className="input-lg rounded-lg border-b-4 hover:border-b-teal-500 duration-500 outline-none bg-[#F7FBFF]"
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
                className="input-lg border-b-4 hover:border-b-teal-500 duration-500 outline-none bg-[#F7FBFF] mb-4"
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
                className="btn btn-lg w-full bg-[#162D3A] text-white hover:bg-green-400 hover:text-black duration-500"
              />
            )}
            <div className="divider divider-neutral">Or</div>
            {/* Social Login Section */}
            <SocialLogin />

            <div className="flex justify-between text-xl">
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
       <div className="w-1/2 object-cover m-4">
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
