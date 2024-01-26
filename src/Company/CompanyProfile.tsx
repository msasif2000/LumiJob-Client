import { MdOutlineModeEdit } from "react-icons/md";
import { Bar, BarChart, Cell, Legend, Pie, PieChart, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { PiBagSimpleFill } from "react-icons/pi";
import { LiaIndustrySolid } from "react-icons/lia";
import { IoIosPeople } from "react-icons/io";
import { IoMailOpen } from "react-icons/io5";
import { GiConfirmed } from "react-icons/gi";
import { FunctionComponent } from 'react';

interface CustomizedLabelProps {
    cx: number;
    cy: number;
    midAngle: number;
    innerRadius: number;
    outerRadius: number;
    percent: number;
}

interface JobData {
    name: string;
    value: number;
}

interface JobChartData {
    name: string;
    pv: number;
}

const CompanyProfile = () => {
    const data: JobData[] = [
        { name: "Total job", value: 8 },
        { name: "Total applied", value: 4 },
        { name: "Total visitor", value: 10 },
    ];
    const data2: JobChartData[] = [
        {
            name: 'Controls Engineer',
            pv: 55,
        },
        {
            name: 'Software Engineer',
            pv: 100,
        },
        {
            name: 'Designer',
            pv: 80,
        },
        {
            name: 'Supervisor',
            pv: 90,

        },
        {
            name: 'Project Engineer at Tesla',
            pv: 70,

        },
        {
            name: 'Data Specialist',
            pv: 150,

        },
        {
            name: 'Solar Installer at Tesla',
            pv: 300,
        },

    ]
    const COLORS = ["#0088FE", "#00C49F", "#FF8042"];

    const renderCustomizedLabel: FunctionComponent<CustomizedLabelProps> = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
        const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div className="">
            <div className="h-60 mt-10 px-7 bg-gradient-to-r from-[#228bedde] to-[#6565C7]">
                <div className="flex justify-between my-2 pt-2">
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
                <div className="flex gap-10">
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

            <div className="border-2 border-[#6886968f] min-h-20 mt-4 rounded-md p-6 pb-10">
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
            <div className="min-h-20 mt-4  rounded-md p-6 pb-10"> {/* border-2 border-[#6886968f] */}

                <h3 className="text-3xl font-medium text-[#688696]">Company analytics</h3>
                <div className="flex flex-wrap gap-2 justify-around items-center mt-10">
                    <div className="flex justify-between items-center gap-5 border-4 border-gray-100 rounded-lg shadow-xl p-5">
                        <div className="bg-[#B6F4F6] p-2 rounded-full">
                            <PiBagSimpleFill className="text-4xl text-[#00939A]" />
                        </div>
                        <div className="text-end">
                            <h3 className="text-lg font-semibold text-gray-600">Total Jobs</h3>
                            <p className="text-3xl font-semibold">500</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center gap-5 border-4 border-gray-100 rounded-lg shadow-xl p-5">
                        <div className="bg-[#FEF7CD] p-2 rounded-full">
                            <LiaIndustrySolid className="text-4xl text-[#E7C154]" />
                        </div>
                        <div className="text-end">
                            <h3 className="text-lg font-semibold text-gray-600">Total Company</h3>
                            <p className="text-3xl font-semibold">60</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center gap-5 border-4 border-gray-100 rounded-lg shadow-xl p-5">
                        <div className="bg-[#DFF1FC] p-2 rounded-full">
                            <IoIosPeople className="text-4xl text-[#699BBA]" />
                        </div>
                        <div className="text-end">
                            <h3 className="text-lg font-semibold text-gray-600">Total Candidate</h3>
                            <p className="text-3xl font-semibold">5000</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center gap-5 border-4 border-gray-100 rounded-lg shadow-xl p-5">
                        <div className="bg-[#FFD6CC] p-2 rounded-full">
                            <IoMailOpen className="text-4xl text-[#F88652]" />
                        </div>
                        <div className="text-end">
                            <h3 className="text-lg font-semibold text-gray-600">Total Applied</h3>
                            <p className="text-3xl font-semibold">3500</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center gap-5 border-4 border-gray-100 rounded-lg shadow-xl p-5">
                        <div className="bg-[#D4FAE5] p-2 rounded-full">
                            <GiConfirmed className="text-4xl text-[#23AA5D]" />
                        </div>
                        <div className="text-end">
                            <h3 className="text-lg font-semibold text-gray-600">Total Confirm jobs</h3>
                            <p className="text-3xl font-semibold">1000</p>
                        </div>
                    </div>


                </div>
                <div className="">
                    <div className="flex items-center justify-center">
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
                                {data.map((_entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Legend></Legend>
                        </PieChart>
                    </div>
                    <div className="mt-10 flex items-center justify-center">
                        <BarChart
                            width={500}
                            height={380}
                            data={data2}
                            margin={{
                                top: 5,
                                right: 5,
                                left: 5,
                                bottom: 5,
                            }}
                            barSize={25}
                        >
                            <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                            <YAxis />
                            <Tooltip />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
                        </BarChart>
                        <h2 className="text-lg font-semibold text-center">Job response</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyProfile;