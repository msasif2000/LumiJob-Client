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
    // <div className="navbar">
    //   <div className="navbar-start">
    //     <div className="dropdown">
    //       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-5 w-5"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M4 6h16M4 12h8m-8 6h16"
    //           />
    //         </svg>
    //       </div>
    //     </div>
    //     <a className="text-xl font-semibold">{text}</a>
    //   </div>

    //   <div className="navbar-end space-x-2">
    //     <a onClick={handleClick2} className="btn">
    //       {btn2}
    //     </a>
    //     <a onClick={handleClick} className="btn">
    //       {btn}
    //     </a>
    //   </div>
    // </div>
    <div className="navbar bg-base-100">
        
      <div className="md:navbar-start">
         {/* for small device */}
        <div>
          <div className=" flex justify-end gap-2 text-xs mb-5 lg:hidden">
            <button className="border-2 bg-slate-100 py-1 px-2 hover:bg-slate-200"> <a onClick={handleClick2} className="">{btn2}</a></button>
            <button className="border-2 bg-slate-100 py-1 px-2 hover:bg-slate-200"><a onClick={handleClick} className="">{btn}</a></button>
          </div>
          <a className="text-xl md:text-3xl font-semibold">{text}</a>
        </div>
      </div>
           {/* for large device  */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <a onClick={handleClick2} className="btn">{btn2}</a>
          <a onClick={handleClick} className="btn">{btn}</a>
        </ul>
      </div>
    </div>

  );
};

export default CandidateNav;
