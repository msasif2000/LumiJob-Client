import { useNavigate } from "react-router-dom";
import CandidateNav from "../CommonNavbar/CandidateNav";

const CandidateProUpdate = () => {
  const navigate = useNavigate();

  const backToProfile = () => {
    navigate(-1);
  };
  return (
    <div>
      <CandidateNav
        text="Upgrade your information"
        btn="Return"
        handleClick={backToProfile}
      />
    </div>
  );
};

export default CandidateProUpdate;
