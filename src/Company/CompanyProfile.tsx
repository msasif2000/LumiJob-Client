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

            <div className="border-2 border-[#6886968f] min-h-20 mt-4 m-2 rounded-md p-6 pb-10">
                <div className="flex justify-between">
                    <h3 className="text-3xl font-medium text-[#688696]">Company details</h3>
                    <div className="flex justify-center items-center bg-[#6886964f] rounded-xl px-2 py-1">
                        <p className="text-xl font-semibold text-[#6560fb] p-2 ">See All Jobs</p>
                    </div>
                </div>
                <div className="flex mt-5 gap-16">
                    <div className="flex flex-col justify-center">
                        <p className="text-lg font-medium text-[#688696]">Company Registration No</p>
                        <p className="text-2xl ">11111</p>
                    </div>
                    <div className="flex flex-col justify-center ">
                        <p className="text-lg font-medium text-[#688696]">Founding Year</p>
                        <p className="text-2xl ">2010</p>
                    </div>
                    <div className="flex flex-col justify-center">
                        <p className="text-lg font-medium text-[#688696]">Company Type</p>
                        <p className="text-2xl ">Automotive and energy</p>
                    </div>
                    <div className="flex flex-col justify-center">
                        <p className="text-lg font-medium text-[#688696]">Service/Product</p>
                        <p className="text-2xl ">Electric Vehicles</p>
                    </div>
                    <div className="flex flex-col justify-center">
                        <p className="text-lg font-medium text-[#688696]">Status</p>
                        <p className="text-2xl ">Active</p>
                    </div>
                </div>
            </div>
            <div className="border-2 border-[#6886968f] min-h-20 mt-4 m-2 rounded-md p-6 pb-10">
                <h3 className="text-3xl font-medium text-[#688696]">Company analytics</h3>
                <div className="flex justify-center ">
                    <div>
                        <PieChart width={400} height={400}>
                            <Pie
                                data={data}
                                cx={200}
                                cy={200}
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={100}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Legend></Legend>
                        </PieChart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyProfile;