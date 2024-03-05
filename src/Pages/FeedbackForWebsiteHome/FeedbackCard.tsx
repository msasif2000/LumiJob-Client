import { useEffect } from "react";
import info from "./info";
import Aos from "aos";
import './feedbackCard.css'
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
  const jobPostId = _id;

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="mx-8">
      <div className="card1">
        <div className="header1">
          <div className="image"></div>
          <div>
            <div className="stars1">
              {/* rating */}
            </div>
            <p className="name1">John Doe</p>
          </div>
        </div>

        <p className="message">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          voluptatem alias ut provident sapiente repellendus.
        </p>
      </div>
    </div>
  );
};

export default FeedbackCard;
