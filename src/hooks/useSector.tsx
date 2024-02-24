import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useSector = () => {
    const axiosPublic = useAxiosPublic();
    const {refetch, data: sectors = [] } = useQuery({
        queryKey: ['sectors'],
        queryFn: async() => {
            const res = await axiosPublic.get('/get-sectors');
            return res.data;
        }
    })
    return [sectors, refetch]
};

export default useSector;