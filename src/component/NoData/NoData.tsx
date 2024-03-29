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
                <div className="flex flex-col items-center gap-3 justify-center mt-4">
                    <img src={noDataImg} alt="" />
                    <a className="text-xl md:text-3xl font-semibold pb-2">{text}!</a>
                    <div className=" flex justify-end gap-2 text-xs mb-5 md:hidden">
                        {
                            btn ? <a onClick={noDataClick} className="btn bg-accent text-white">{btn}</a> : null
                        }
                    </div>

                </div>
            </div>
            {/* for large device  */}
            <div className="lg:w-2/3 xl:w-3/5 hidden md:flex flex-col items-center justify-center mx-auto mt-12">
                <img src={noDataImg} alt="" className='md:h-[400px] 2xl:h-[600px] 2xl:w-[600px] xl:h-[490px] xl:w-2/3'/>
                <a className="text-xl md:text-3xl font-semibold mt-1">{text}!</a>
                <ul className="menu menu-horizontal px-1">
                    {
                        btn ? <a onClick={noDataClick} className="btn bg-accent text-white">{btn}</a>: null
                    }
                </ul>
            </div>
        </div>
    );
};

export default NoData;