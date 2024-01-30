interface CandidateNavProps {
  text: string;
  btn: string;
  btn2: string;
  handleClick: () => void;
  handleClick2: () => void;
}

const CandidateNav: React.FC<CandidateNavProps> = ({
  text,
  btn,
  btn2,
  handleClick,
  handleClick2,
}) => {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
        </div>
        <a className="text-xl font-semibold">{text}</a>
      </div>

      <div className="navbar-end space-x-2">
        <a onClick={handleClick2} className="btn">
          {btn2}
        </a>
        <a onClick={handleClick} className="btn">
          {btn}
        </a>
      </div>
   
    </div>
  );
};

export default CandidateNav;
