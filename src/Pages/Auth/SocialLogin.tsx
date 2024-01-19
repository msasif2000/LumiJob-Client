import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin: React.FC = () => {
  const { googleSignIn, githubSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  

  const handleGoogleSignin = () => {
    googleSignIn().then((res: any) => {
      console.log(res);

      const userInfo = {
        email: res.user?.email,
        name: res.user?.displayName,
        profile: res.user?.photoURL,
      };

      console.log(userInfo);

      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
      });

      navigate("/");
    });
  };

  const handleGithubSignin = () => {
    githubSignIn().then((res: any) => {
      console.log(res);

      const userInfo = {
        email: res.user?.email,
        name: res.user?.displayName,
        profile: res.user?.photoURL,
      };

      console.log(userInfo);

      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
      });

      navigate("/");
    });
  };

  return (
    <div className="space-y-5">
      <div>
        <button
          onClick={() => handleGoogleSignin()}
          className="btn md:btn-lg w-full bg-[#F3F9FA] text-lg hover:bg-green-400"
        >
          <FaGoogle /> Google
        </button>
      </div>
      <div>
        <button
          onClick={() => handleGithubSignin()}
          className="btn md:btn-lg w-full bg-[#F3F9FA] text-lg hover:bg-green-400"
        >
          <FaGithub /> Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
