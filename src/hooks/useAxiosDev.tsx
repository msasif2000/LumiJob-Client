// for development purpose only

import axios from "axios";

const axiosDev = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosDev = () => {
  return axiosDev;
};

export default useAxiosDev;
