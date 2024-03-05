import { useEffect } from "react";
import info from "./info";
import Aos from "aos";
import './feedbackCard.css'
import { FaRegStar, FaStar } from "react-icons/fa";
interface Data {
  info: info;
}

const FeedbackCard: React.FC<Data> = ({ info }) => {
  const {
    _id,
    anyComments,
    interfaceRating,
    supportRating,
    UserNames,
    email,
    role,
    PostedDate,
  } = info;
  

  useEffect(() => {
    Aos.init();
  }, []);


  const renderStarRating = (value: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, index) => {
          const starRating = index + 1;
          return (
            <span key={index}>
              {value >= starRating ? (
                <FaStar className="text-[#4869DD] cursor-pointer text-xl mx-1" />
              ) : (
                <FaRegStar className="text-[#4869DD] cursor-pointer text-xl mx-1" />
              )}
            </span>
          );
        })}
      </div>
    );
  };
  
  return (
    <div className="mx-8">
      <div className="card1">
        <div className="header1">
          
          <div>
            <div className="stars1">
              {/* rating */}
              {renderStarRating(interfaceRating)}
            </div>
            <p className="name1 grid "> <span>{UserNames}</span></p>
          </div>
        </div>
        
        <p className="message">
          {anyComments}
        </p>
      </div>
    </div>
  );
};

export default FeedbackCard;
