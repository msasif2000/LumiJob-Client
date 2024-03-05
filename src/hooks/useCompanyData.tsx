import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";



const useCompanyData = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const {refetch, data: companyData = [] } = useQuery({
        queryKey: ['companyData', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get('/user?role=company');
            return res.data;
        }
    })

    return [companyData, refetch]
};

export default useCompanyData;