
import { Link } from "react-router-dom";
import Candidate from "./CandidateType";

interface CandidateCardsProps {
    candidate: Candidate;
}


const FindCandidateCard: React.FC<CandidateCardsProps> = ({ candidate }) => {

    const { _id, photo, name, position, city , country } = candidate;

    return (
        <div className="">
            <div>
                <div className="group grid grid-cols-12 space-x-8 overflow-hidden rounded-lg border hover:border-accent py-8 text-gray-700 bg-white ">
                    <div className="order-2 col-span-1 mt-4 -ml-14 text-left text-gray-600 hover:text-gray-700 sm:-order-1 sm:ml-4">
                        <div className="group relative h-16 w-16 overflow-hidden rounded-lg">
                            <img src={photo} alt="logo" className="w-full  text-gray-700" />
                        </div>
                    </div>
                    <div className="col-span-11 flex flex-col pr-8 text-left sm:pl-4">
                        
                        <div className="flex justify-between">
                            <h3 className="mb-1 overflow-hidden pr-7 text-xl font-semibold sm:text-xl">
                                {name}
                            </h3>
                        </div>
                        <p className="text-sm opacity-90">{position}</p>
                        <h3 className="text-xs text-gray-600 text-opacity-90 mb-1">
                        {city}, {country}</h3>



                        <Link className="md:flex justify-end hidden" 
                        to={`/candidate-detailsProfile/${_id}`}>
                            <button className="mt-4 py-1 px-8 border border-gray-300 hover:bg-accent hover:text-white font-semibold text-base rounded-lg">
                                Profile
                            </button>
                        </Link>
                        {/* <div className="flex items-center justify-center mt-4 gap-2 md:hidden">
                            <BookmarkButton job={job} />
                            <Link className="flex justify-end" to={`/details/${_id}`}>
                                <button className=" py-1 px-8 border border-gray-300 hover:bg-accent hover:text-white font-semibold text-base rounded-lg">
                                    Details
                                </button>
                            </Link>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindCandidateCard;
