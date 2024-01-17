import axios from 'axios'

const axiosPublic = axios.create({
    baseURL: '' 
    // add link of server inside ''
})

const useAxiosPublic = () =>{
    return axiosPublic;
}

export default useAxiosPublic;