import Job from "../../Pages/Home/PopularJobs/Job";
import { IoLocationOutline } from "react-icons/io5";

interface TopCompanyCardProps {
  job: Job;
}

const TopCompanyCard: React.FC<TopCompanyCardProps> = ({ job }) => {
  const { platform, picture, location } = job;

  return (
    <div className="border p-4 rounded-lg shadow-none lg:shadow-sm transform transition-transform hover:translate-y-[-3px] ease-in-out duration-300 hover:border-accent cursor-pointer">
      <div className="flex flex-col lg:flex-row gap-4 items-center">
        <img src={picture} className=" w-[70%] lg:w-20 " alt="" />
        <p className="text-xl font-bold text-gray-700 text-center lg:text-left">
          {platform}
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center pt-4">
        <div className="flex items-center gap-1">
          <IoLocationOutline />
          <p className="font-normal text-gray-500">{location}</p>
        </div>
        <p className="font-normal text-gray-500">
          Opened Job <b>20</b>
        </p>
      </div>
    </div>
  );
};

export default TopCompanyCard;
