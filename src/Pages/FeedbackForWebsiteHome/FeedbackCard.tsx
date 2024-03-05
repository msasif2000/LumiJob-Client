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

  function extractFirst100Words(text: string): string {
    // Split the text into words
    const words: string[] = text.trim().split(/\s+/);
  
    // Slice the array to get the first 100 words
    const first100Words: string[] = words.slice(0, 50);
  
    // Join the first 100 words back into a string
    const extractedText: string = first100Words.join(' ');
  
    return extractedText;
  }


  const top = extractFirst100Words(anyComments);
  return (
    <div className="mx-8 ">
      <div className="card1 backdrop-blur-xl">
        
        
        <p className="message text-justify ">
          { top } 
        </p>
        <div className="header1 mt-4">
          
          <div className="">
            <div className="">
              {/* rating */}
              {renderStarRating(interfaceRating)}
            </div>
            <p className="name1 grid "> <span>{UserNames}, {role}.</span></p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default FeedbackCard;
