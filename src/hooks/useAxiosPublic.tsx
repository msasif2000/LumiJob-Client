import axios from "axios";

const axiosPublic = axios.create({
<<<<<<< HEAD
  //baseURL: "https://lumi-job-server.vercel.app",  /* Asif bhai's server */
=======
  // baseURL: "https://lumi-job-server.vercel.app",  /* Asif bhai's server */
>>>>>>> 1662340843aba2c084b3eb9b15e3f1c8a08f26b8
  // baseURL: "https://lumi-job-server-five.vercel.app/",  /* Rifat bhai's server */
  //baseURL: "https://test-lumijob-server.vercel.app/" /* Sejan bhai's server */,
  baseURL: "http://localhost:5000",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
