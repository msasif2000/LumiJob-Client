
import { MdDateRange } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { PiMoney, PiSuitcaseSimpleLight } from "react-icons/pi";
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
    const { _id, picture, location, title, salaryRange, deadline } = job;
  

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
                <div className=" px-3 pt-3 ">
                    <div className="bg-[#dbe4ff] min-h-48 rounded-md p-4">
                        <div className="flex justify-between items-center">
                            <div>
                                <img src={picture} alt="logo" className=" h-8 " />
                            </div>

                            {/* =============> Bookmark Button <============= */}
                            <button>
                            <BookmarkButton job={job} />
                            </button>

                        </div>

                        <div className="py-4">
                            <h3 className="text-3xl mb-2">{title}</h3>
                            <p className="text-lg flex items-center gap-2 mb-4">
                                <FaMapMarkerAlt /> {location}
                            </p>
                        </div>

                        {/* =============>  Job Details <<=========== */}

                        <div className="flex flex-wrap gap-3 items-center">
                            <span className="bg-white py-1 px-3 rounded flex items-center text-sm">
                                <IoMdTime className="mr-1" /> Full Time
                            </span>
                            <span className="bg-white py-1 px-3 rounded flex items-center text-sm">
                                <PiSuitcaseSimpleLight className="mr-1" /> 5-7 Years
                            </span>
                            <span className="bg-white py-1 px-3 rounded flex items-center text-sm">
                                <PiMoney className="mr-1" /> {salaryRange?.min}-{salaryRange?.max}
                            </span>
                            <span className="bg-white py-1 px-3 rounded flex items-center text-sm">
                                <MdDateRange className="mr-1" /> {deadline.split("T")[0]}
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default JobCard;
