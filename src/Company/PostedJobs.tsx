
import { useQuery } from "@tanstack/react-query";;
import PostedJobsCard from "./PostedJobsCard";
import Job from "../Pages/Home/PopularJobs/Job";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";


const PostedJobs = () => {
    const axiosPublic = useAxiosPublic()
    const { user } = useAuth();
    console.log(user?.email);
    const { data: popularJobs = [], refetch } = useQuery({
        queryKey: ["popularJobs"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/all-job-posts`);
            return res.data;
        },
    });
    console.log(popularJobs);
    const companyPostedJobs = popularJobs?.filter((job: { companyEmail: string; }) => job.companyEmail === user?.email)

    return (
        <div className="flex flex-col  items-center">
            {companyPostedJobs.map((job: Job) => (
                <PostedJobsCard key={job._id} job={job} refetch ={refetch} />
            ))}
        </div>
    );
};

export default PostedJobs;
