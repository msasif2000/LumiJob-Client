
import { MdDateRange } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { PiSuitcaseSimpleLight } from "react-icons/pi";
import { FaMapMarkerAlt } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import BookmarkButton from "../Shared/BookmarkButton";
import Job from "../../Pages/Home/PopularJobs/Job";
interface JobCardsProps {
    job: Job;
}

const JobCard: React.FC<JobCardsProps> = ({ job }) => {
    const { _id, picture, location, title, deadline } = job;


    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div
            data-aos="fade-up"
            className="card w-full bg-base-100 border rounded-md"
        >
            {/*================ >> Content Box <<=============== */}
            <Link to={`/details/${_id}`}>
                <div className="px-3 pt-3">
                    <div className="bg-[#dbe4ff] min-h-48 p-3 rounded-md shadow-md">
                        <div className="flex justify-between items-center">
                            <div>
                                <img src={picture} alt="logo" className="h-8" />
                            </div>
                            <div>
                                <BookmarkButton job={job} />
                            </div>
                        </div>

                        <div className="py-4">
                            <h3 className="text-xl mb-2 font-semibold">{title}</h3>
                            <p className="text-sm flex items-center gap-2">
                                <FaMapMarkerAlt />
                                <span>{location}</span>
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3 items-center">
                            <span className="border-x-2 py-1 px-3 rounded flex items-center text-xs">
                                <IoMdTime className="mr-1" />
                                Full Time
                            </span>
                            <span className="border-x-2 py-1 px-3 rounded flex items-center text-xs">
                                <PiSuitcaseSimpleLight className="mr-1" />
                                5-7 Years
                            </span>
                            <span className="border-x-2 py-1 px-3 rounded flex items-center text-xs">
                                <MdDateRange className="mr-1" />
                                {deadline.split("T")[0]}
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default JobCard;
