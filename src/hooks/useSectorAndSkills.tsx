import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useSectorAndSkills = () => {
    const axiosPublic = useAxiosPublic();
    const { refetch: refetchSectors, data: sectors = [] } = useQuery({
        queryKey: ['sectors'],
        queryFn: async () => {
            const res = await axiosPublic.get('/get-sectors');
            return res.data;
        }
    });

    const { refetch: refetchSkills, data: skills = [] }: { refetch: () => void, data?: any[] } = useQuery({
        queryKey: ['skills'],
        queryFn: async () => {
            const res = await axiosPublic.get('/get-skills');
            return res.data;
        }
    });

    const refetch = () => {
        refetchSectors();
        refetchSkills();
    };

    return { sectors, skills, refetch };
};

export default useSectorAndSkills;
