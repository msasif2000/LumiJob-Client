import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://lumi-job-server.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
