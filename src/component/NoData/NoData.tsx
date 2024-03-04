import noDataImg from '../../assets/image/noData.jpg'
interface NoDataProps {
    text: string;
    btn: string;
    noDataClick: () => void;
}

const NoData: React.FC<NoDataProps> = ({ text, btn, noDataClick }) => {
    return (
        <div className="navbar">

            <div className="md:navbar-start md:hidden">
                {/* for small device */}
                <div className="flex flex-col items-center gap-3 justify-center">
                    <img src={noDataImg} alt="" />
                    <a className="text-xl md:text-3xl font-semibold py-2">{text}!</a>
                    <div className=" flex justify-end gap-2 text-xs mb-5 md:hidden">
                        <a onClick={noDataClick} className="btn bg-accent text-white">{btn}</a>
                    </div>

                </div>
            </div>
            {/* for large device  */}
            <div className="xl:navbar-end hidden md:flex flex-col items-center justify-center mx-auto mt-12">
                <img src={noDataImg} alt="" className=''/>
                <a className="text-xl md:text-3xl font-semibold py-2">{text}!</a>
                <ul className="menu menu-horizontal px-1 gap-2">
                    <a onClick={noDataClick} className="btn bg-accent text-white">{btn}</a>
                </ul>
            </div>
        </div>
    );
};

export default NoData;