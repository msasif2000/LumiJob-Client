interface CandidateNavProps {
  text: string;
  btn: string;
  btn2?: string;
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

      <div className="md:navbar-start">
        {/* for small device */}
        <div className="flex gap-5 justify-end">
          <a className="text-xl md:text-3xl font-semibold">{text}</a>
          <div className=" flex justify-end gap-2 text-xs mb-5 md:hidden">
            {
              btn2 && <button className="border-2 bg-slate-100 py-1 px-2 hover:bg-slate-200 text-accent font-bold text-xl"><a onClick={handleClick2} className="">{btn2}</a></button>
            }
            <button className="border-2 bg-accentTwo hover:bg-btnbg text-white py-1 px-2"><a onClick={handleClick} className="">{btn}</a></button>
          </div>
        </div>
      </div>
      {/* for large device  */}
      <div className="navbar-end hidden md:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          {
            btn2 && <a onClick={handleClick2} className="btn text-accent font-bold text-xl">{btn2}</a>
          }
          <a onClick={handleClick} className="btn bg-accentTwo hover:bg-btnbg text-white">{btn}</a>
        </ul>
      </div>
    </div>

  );
};

export default CandidateNav;
