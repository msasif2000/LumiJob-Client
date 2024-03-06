import { Link } from "react-router-dom";
import CollaborationHubCard from "./CollaborationHubCard";
import collabBg from "../../assets/image/collab-bg.webp";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Loading from "../Blogs/components/err/Loading";
interface TaskData {
    _id: number;
    title: string;
    description: string;
    date: number;
    img: string;
}
const CollaborationHub = () => {
    const [taskData, setTaskData] = useState<TaskData[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const axiosPublic = useAxiosPublic()
    console.log(taskData);

    useEffect(() => {
        axiosPublic.get("/challenges").then((res) => {
            setTaskData(res.data);
            setLoading(false);
        });
    }, []);




    return (
        <div className=" pb-10 min-h-[70vh]">
            <div className="hero min-h-40 mb-7 rounded-lg" style={{ backgroundImage: `url(${collabBg})` }}>
                <div className="hero-overlay opacity-95 rounded-lg bg-[#d4a8f8]"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-2xl">
                        <h1 className="mb-5 text-6xl text-black font-bold">Collabration Hub</h1>

                    </div>
                </div>
            </div>
            {/* <div className="mb-5">
                <img className="rounded-lg opacity-70" src={collabBg} alt="" />
                
            </div> */}
            <div className=" max-w-screen-2xl mx-auto px-4 lg:px-20 py-20 min-h-[70vh] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3  2xl:grid-cols-4 gap-5">

                {
                    loading ? <Loading /> : taskData?.map((task, idx) =>
                        <Link to={`/task-details/${task._id}`} key={idx} >
                            <CollaborationHubCard task={task} ></CollaborationHubCard>
                        </Link>
                    )
                }
            </div>
        </div>
    );
};

export default CollaborationHub;