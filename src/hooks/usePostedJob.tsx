import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";


const usePostedJob = () => {
    const axiosPublic = useAxiosPublic();
    const {user} = useAuth();
    const {refetch, data: PostedData = [] } = useQuery({
        queryKey: ['PostedData', user?.email],
        queryFn: async() => {
            const res = await axiosPublic.get('/all-job-posts');
            return res.data;
        }
    })
    return [PostedData, refetch]

};

export default usePostedJob;