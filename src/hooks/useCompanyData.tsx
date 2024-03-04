import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";


const useCompanyData = () => {
    const axiosPublic = useAxiosPublic();
    const {user} = useAuth();
    const {refetch, data: companyData = [] } = useQuery({
        queryKey: ['companyData', user?.email],
        queryFn: async() => {
            const res = await axiosPublic.get('/user?role=company');
            return res.data;
        }
    })

    return [companyData, refetch]
};

export default useCompanyData;