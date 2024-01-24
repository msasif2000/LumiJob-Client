import { MdOutlineModeEdit } from "react-icons/md";


const CompanyProfile = () => {
    return (
        <div>
            <div className="h-60 mt-10 px-7 bg-gradient-to-r from-[#228bedde] to-[#6565C7]">
                <div className="flex justify-between  my-2 pt-2">
                    <div>
                        <p className="text-2xl p-2 text-white ">Company Profile</p>
                    </div>
                    <div className="flex justify-center items-center bg-white rounded-3xl px-2 py-1">
                        <div className="bg-[#6f6aff] p-1 rounded-full">
                            <MdOutlineModeEdit className="text-2xl text-white" />
                        </div>
                        <p className="text-xl font-semibold text-[#6f6aff] p-2  ">Edit Profile</p>
                    </div>
                </div>
                <div className="flex gap-5">
                    <img className="w-28 h-28 rounded-full bg-white p-2" src="https://i.ibb.co/5cBJy9v/Tesla-logo.png" />
                    <div >
                        <p className="uppercase text-white ">Company Name </p>
                        <p className="text-2xl font-bold text-white ">Tesla</p>
                        <p className="uppercase text-white mt-5">Industry</p>
                        <p className="text-xl font-semibold text-white ">Electric vehicle</p>
                    </div>
                    <div >
                        <p className="uppercase text-white ">Location</p>
                        <p className="text-lg font-semibold text-white ">Corporate Secretary
                            Tesla, Inc.
                            1 Tesla Road <br />
                            Austin, TX 78725
                            United States</p>
                        <p className="uppercase text-white pt-1">Phone: +1-888-518-3752</p>
                        <p className=" text-white pt-1">E-mail: support@tesla.com</p>

                    </div>
                    <div >
                        <p className="uppercase text-white ">Website</p>
                        <p className="text-lg font-semibold text-white ">www.tesla.com</p>
                        <p className="uppercase text-white font-semibold pt-1">Founded: 2000</p>

                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default CompanyProfile;