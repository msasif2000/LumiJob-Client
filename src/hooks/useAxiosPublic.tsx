import axios from 'axios'

const axiosPublic = axios.create({
    baseURL: '' 
    // add link of server inside 'https://lumi-job-server.vercel.app'
})

const useAxiosPublic = () =>{
    return axiosPublic;
}

export default useAxiosPublic;