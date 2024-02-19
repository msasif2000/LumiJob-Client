

const TrustedByCompany = () => {
    return (
        <div className="w-full h-24 bg-[#f8f7f7] flex items-center" >
            <div className="flex items-center justify-between w-9/12 lg:w-5/12 mx-auto  md:space-x-7 lg:md:space-x-0 ">
                <h1 className="text-2xl  font-medium text-[#C2C2C5] hidden lg:block">Trusted by : </h1>
                <h1 className="text-2xl font-bold text-[#C2C2C5] hidden md:block">BrainStation</h1>
                <h1 className="text-2xl font-bold text-[#C2C2C5]">Samsung</h1>
                <h1 className="text-2xl font-bold text-[#C2C2C5] ">NETFLIX</h1>
                <h1 className="text-2xl font-bold text-[#C2C2C5]">P&G</h1>
                <h1 className="text-2xl font-bold text-[#C2C2C5] hidden md:block">PayPal</h1>
                <h1 className="text-2xl font-bold text-[#C2C2C5] hidden lg:block">TigerIt</h1>
            </div>
        </div>
    );
};

export default TrustedByCompany;