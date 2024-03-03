interface NoDataProps {
    text: string;
    btn: string;
    noDataClick: () => void;
}

const NoData: React.FC<NoDataProps> = ({ text, btn, noDataClick }) => {
    return (
        <div className="navbar">

            <div className="md:navbar-start">
                {/* for small device */}
                <div className="flex gap-5 justify-end">
                    <a className="text-xl md:text-3xl font-semibold">{text}</a>
                    <div className=" flex justify-end gap-2 text-xs mb-5 md:hidden">
                        
                        <button className="border-2 bg-slate-100 py-1 px-2 hover:bg-slate-200"><a onClick={noDataClick} className="">{btn}</a></button>
                    </div>
                </div>
            </div>
            {/* for large device  */}
            <div className="navbar-end hidden md:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                <button className="border-2 bg-slate-100 py-1 px-2 hover:bg-slate-200"><a onClick={noDataClick} className="">{btn}</a></button>
                </ul>
            </div>
        </div>
    );
};

export default NoData;