
import { useQuery } from "@tanstack/react-query";
import useAxiosDev from "../hooks/useAxiosDev";
import PostedJobsCard from "./PostedJobsCard";
import Job from "../Pages/Home/PopularJobs/Job";


const PostedJobs = () => {
    const axiosPublic = useAxiosDev();
    const { data: popularJobs = [] } = useQuery({
        queryKey: ["popularJobs"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/all-job-posts`);
            return res.data;
        },
    });

    return (
        <div className="flex flex-col  items-center">
            {popularJobs.map((job: Job) => (
                <PostedJobsCard key={job._id} job={job} />
            ))}
        </div>
    );
};

export default PostedJobs;
