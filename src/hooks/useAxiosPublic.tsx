import axios from "axios";

const axiosPublic = axios.create({
  // baseURL: "https://lumi-job-server.vercel.app",
  baseURL: "https://lumi-job-server-five.vercel.app/",
  // baseURL: "http://localhost:5000",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
