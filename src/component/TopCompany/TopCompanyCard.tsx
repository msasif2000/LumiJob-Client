import Job from "../../Pages/Home/PopularJobs/Job";
import { IoLocationOutline } from "react-icons/io5";

interface TopCompanyCardProps {
    job: Job;
}

const TopCompanyCard: React.FC<TopCompanyCardProps> = ({ job }) => {
    const { platform, picture, location } = job;

    return (
        <div className="border w-[295px] h-[110px] px-3 py-4 rounded-lg shadow-lg transform transition-transform hover:translate-y-[-2px] hover:border-gray-300">
            <div className="flex gap-4 items-center">
                <img src={picture} className="w-16 " alt="" />
                <p className="text-xl font-bold text-gray-700">{platform}</p>
            </div>
            <div className="flex justify-between items-center pt-4">
                <div className="flex items-center gap-1">
                    <IoLocationOutline />
                    <p className="font-semibold text-gray-500">{location}</p>
                </div>
                <p className="font-semibold text-gray-500">Open Job 20</p>
            </div>
        </div>
    );
};

export default TopCompanyCard;
