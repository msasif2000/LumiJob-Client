import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
// import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin: React.FC = () => {
  const { googleSignIn, githubSignIn } = useAuth();
  //   const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignin = () => {
    googleSignIn().then((res) => {
      console.log(res);

      // post user to database
      // const userInfo = {
      //   email: res?.email,
      //   name: res?.displayName,
      //   profile: res?.photoURL,
      // };

      // axiosPublic.post("/users", userInfo).then((res) => {
      //   console.log(res.data);
      // });

      navigate("/");
    });
  };

  const handleGithubSignin = () => {
    githubSignIn().then((res) => {
      console.log(res);

      // post user to database
      // const userInfo = {
      //   email: res?.email,
      //   name: res?.displayName,
      //   profile: res?.photoURL,
      // };

      // axiosPublic.post("/users", userInfo).then((res) => {
      //   console.log(res.data);
      // });

      navigate("/");
  })
  };

  return (
    <div className="space-y-5">
      <div>
        <button
          onClick={() => handleGoogleSignin()}
          className="btn w-full bg-[#F3F9FA] text-lg hover:bg-green-400"
        >
          <FaGoogle /> Google
        </button>
      </div>
      <div>
        <button
          onClick={() => handleGithubSignin()}
          className="btn w-full bg-[#F3F9FA] text-lg hover:bg-green-400"
        >
          <FaGithub /> Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
