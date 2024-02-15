
import { Link } from "react-router-dom";
import Candidate from "./CandidateType";
import { FaPlusSquare } from "react-icons/fa";

interface CandidateCardsProps {
    candidate: Candidate;
}


const FindCandidateCard: React.FC<CandidateCardsProps> = ({ candidate }) => {

    const { _id, photo, name, position, city, country } = candidate;

    return (
        <div className="">
            <div>
                <div className="group grid grid-cols-12 overflow-hidden rounded-lg border hover:border-accent p-2 text-gray-700 bg-white ">
                    <div className=" col-span-3 md:col-span-2 text-left text-gray-600 hover:text-gray-700  sm:ml-4">
                        <div className="group relative rounded-lg h-12 w-12 md:h-16 md:w-16 overflow-hidden">
                            <img src={photo} alt="logo" className="w-full  text-gray-700" />
                        </div>
                    </div>
                    <div className="col-span-8 md:col-span-7 flex flex-col pr-8 text-left sm:pl-4">

                        <div className="flex justify-between">
                            <h3 className="md:mb-1 overflow-hidden text-sm md:text-xl font-medium md:font-semibold ">
                                {name}
                            </h3>
                        </div>
                        <p className=" text-xs md:text-sm">{position}</p>
                        <h3 className="text-xs text-gray-600 text-opacity-90 mb-1">
                            {city}, {country}</h3>

                        {/* <div className="flex items-center justify-center mt-4 gap-2 md:hidden">
                            <BookmarkButton job={job} />
                            <Link className="flex justify-end" to={`/details/${_id}`}>
                                <button className=" py-1 px-8 border border-gray-300 hover:bg-accent hover:text-white font-semibold text-base rounded-lg">
                                    Details
                                </button>
                            </Link>
                        </div> */}
                    </div>
                    <div className=" col-span-1 md:col-span-3">
                        <Link className=" "
                            to={`/candidate-detailsProfile/${_id}`}>
                            <button className="hidden md:block mt-4 py-1 px-8 border border-gray-300 hover:bg-accent hover:text-white font-semibold text-base rounded-lg">
                                Profile
                            </button>
                            <button><p className=" mt-4 md:hidden"> <FaPlusSquare /></p></button>
                           
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindCandidateCard;
