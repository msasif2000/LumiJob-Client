import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useBookmark = () => {
    const axiosPublic = useAxiosPublic()
    const { user} = useAuth();
    const { refetch, data: bookmark = [] } = useQuery({
        queryKey: ['bookmark', user?.email],
        queryFn: async() => {
            const res = await axiosPublic.get(`/bookmarks?email=${user.email}`);
            return res.data;
        }
    })

    return [bookmark, refetch]
};

export default useBookmark;