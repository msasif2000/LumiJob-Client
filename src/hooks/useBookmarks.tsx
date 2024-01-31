import { useQuery } from "@tanstack/react-query";

import useAxiosDev from "./useAxiosDev";
import useAuth from "./useAuth";

const useBookmark = () => {
    const axiosDev = useAxiosDev();
    const { user} = useAuth();
    const { refetch, data: bookmark = [] } = useQuery({
        queryKey: ['bookmark', user?.email],
        queryFn: async() => {
            const res = await axiosDev.get(`/bookmarks?email=${user.email}`);
            return res.data;
        }
    })

    return [bookmark, refetch]
};

export default useBookmark;