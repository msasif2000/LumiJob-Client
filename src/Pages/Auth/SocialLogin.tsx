import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
// import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import useAxiosDev from "../../hooks/useAxiosDev";

const SocialLogin: React.FC = () => {
  const { googleSignIn, githubSignIn } = useAuth();
  // const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  // for dev only
  const axiosDev = useAxiosDev();

  // check if roles exist
  const checkRole = (email: string) => {
    // for Dev
    axiosDev
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

    // for prod
    // axiosPublic
    //   .get(`/check-role/${email}`)
    //   .then((response) => {
    //     const userRole = response.data.role;
    //     if (userRole === "true") {
    //       navigate("/");
    //     } else {
    //       navigate("/signup/role");
    //     }
    //   })
    //   .catch((error) => {
    //     console.error("Error checking user role:", error);
    //   });
  };

  const handleGoogleSignin = () => {
    googleSignIn().then((res: any) => {
      console.log(res);

      const userInfo = {
        email: res.user?.email,
        name: res.user?.displayName,
        photo: res.user?.photoURL,
      };

      console.log(userInfo);

      // for dev
      axiosDev.post("/users", userInfo).then((res) => {
        console.log(res.data);
        checkRole(userInfo.email);
      });

      // for prod
      // axiosPublic.post("/users", userInfo).then((res) => {
      //   console.log(res.data);
      // checkRole(userInfo.email);
      // });

      navigate("/");
    });
  };

  const handleGithubSignin = () => {
    githubSignIn().then((res: any) => {
      console.log(res);

      const userInfo = {
        email: res.user?.email,
        name: res.user?.displayName,
        photo: res.user?.photoURL,
      };

      console.log(userInfo);

      // for dev
      axiosDev.post("/users", userInfo).then((res) => {
        console.log(res.data);
        checkRole(userInfo.email);
      });

      // for prod
      // axiosPublic.post("/users", userInfo).then((res) => {
      //   console.log(res.data);
      // checkRole(userInfo.email);
      // });

      navigate("/");
    });
  };

  return (
    <div className="space-y-5">
      <div>
        <button
          onClick={() => handleGoogleSignin()}
          className="btn md:btn-lg w-full bg-[#F3F9FA] text-lg hover:bg-green-300 border-none"
        >
          <FaGoogle /> Google
        </button>
      </div>
      <div>
        <button
          onClick={() => handleGithubSignin()}
          className="btn md:btn-lg w-full bg-[#F3F9FA] text-lg hover:bg-green-300 border-none"
        >
          <FaGithub /> Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
