import { Link } from "react-router-dom";
import Candidate from "./CandidateType";
import { MdArrowOutward  } from "react-icons/md";

interface CandidateCardsProps {
    candidate: Candidate;
}

const FindCandidateCard: React.FC<CandidateCardsProps> = ({ candidate }) => {
    const { _id, photo, name, position, city, country } = candidate;

    return (
        <div className="border rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <Link to={`/candidate-detailsProfile/${_id}`} className="flex p-2">
                <div className="flex-shrink-0 mr-4">
                    <img src={photo} alt="Candidate" className="w-20 h-20 rounded-full" />
                </div>
                <div className="flex flex-col justify-between flex-grow">
                    <div>
                        <h3 className="text-sm lg:text-lg font-semibold text-gray-800">{name}</h3>
                        <p className=" text-xs lg:text-sm text-gray-600">{position}</p>
                        <p className="text-xs lg:text-sm text-gray-600">{city}, {country}</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <button className="hidden md:inline-block p-1 -mt-12 border border-gray-300 hover:bg-btnbg bg-accent text-white font-semibold text-sm rounded-lg ml-1">
                        <MdArrowOutward className="text-xl"/>
                    </button>
                    <button className="md:hidden p-2 border border-gray-300 bg-accent hover:bg-btnbg text-white rounded-lg">
                        <MdArrowOutward className="text-xl"/>
                    </button>
                </div>
            </Link>
        </div>
    );
};

export default FindCandidateCard;
