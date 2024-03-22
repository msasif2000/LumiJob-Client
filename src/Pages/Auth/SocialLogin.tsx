import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialLogin: React.FC = () => {
  const { googleSignIn, githubSignIn } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic()

  // check if roles exist
  const checkRole = (email: string) => {
    axiosPublic
      .get(`/check-role/${email}`)
      .then((response) => {
        const userRole = response.data.role;
        if (userRole === "true") {
          navigate("/");
        } else {
          navigate("/signup/role");
        }
      })
      .catch((error) => {
        console.error("Error checking user role:", error);
      });

  };

  const handleGoogleSignin = () => {
    googleSignIn().then((res: any) => {
   

      const userInfo = {
        email: res.user?.email,
        name: res.user?.displayName,
        photo: res.user?.photoURL,
      };

  

      // for dev
      axiosPublic.post("/users", userInfo)
        .then(() => {
         
          checkRole(userInfo.email);
        });

      navigate("/");
    });
  };

  const handleGithubSignin = () => {
    githubSignIn().then((res: any) => {
    

      const userInfo = {
        email: res.user?.email,
        name: res.user?.displayName,
        photo: res.user?.photoURL,
      };

     

      // for dev
      axiosPublic.post("/users", userInfo)
        .then(() => {
       
          checkRole(userInfo.email);
        });
      navigate("/");
    });
  };

  return (
    <div className="space-y-5">
      <div>
        <button
          onClick={() => handleGoogleSignin()}
          className="btn md:btn-lg w-full bg-[#F3F9FA] text-lg hover:bg-accent hover:text-white border-none"
        >
          <FaGoogle /> Google
        </button>
      </div>
      <div>
        <button
          onClick={() => handleGithubSignin()}
          className="btn md:btn-lg w-full bg-[#F3F9FA] text-lg hover:bg-accent hover:text-white border-none"
        >
          <FaGithub /> Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
