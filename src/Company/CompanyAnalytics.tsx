import { FunctionComponent, useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import {
    Pie,
    PieChart,
    Cell,
    Legend
} from "recharts";
import { PiBagSimpleFill } from "react-icons/pi";
import { IoIosPeople } from "react-icons/io";
import { GiConfirmed } from "react-icons/gi";

interface JobData {
    name: string;
    value: number;
}

const CompanyAnalytics: FunctionComponent = () => {
    const axiosSecure = useAxiosSecure();
    const [profile, setProfile] = useState<any>(null);
    const [companyPostedJobs, setCompanyPostedJobs] = useState<any | null>(null);
    const { user } = useAuth();


    useEffect(() => {
        if (user?.email) {
            axiosSecure
                .get(`/get-company-posted-jobs/${user?.email}`)
                .then((res) => {
                    setCompanyPostedJobs(res.data);
                   
                })
                .catch((err) => console.log(err));
        }
    }, [user]);

    const jobPosts = companyPostedJobs ? companyPostedJobs.length : 0;

    useEffect(() => {
        if (user?.email) {
            axiosSecure
                .get(`/get-applied-jobs-com/${user?.email}`)
                .then((res) => {
                    setProfile(res.data);
                })
                .catch((err) => console.log(err));
        }
    }, [user]);

    let appliedJobs = 0;
    let candidatesApplied = new Set<string>();
    let confirmedJobs = 0;
    let pieChartData: JobData[] = [];

    if (profile) {
        appliedJobs = profile.length;
        profile.forEach((job: any) => {
            candidatesApplied.add(job.candidate);
            if (job.status === "selected") {
                confirmedJobs++;
            }
        });

        pieChartData = [
            { name: "Applied", value: appliedJobs },
            { name: "In Process", value: appliedJobs - confirmedJobs },
            { name: "Confirm", value: confirmedJobs },
        ];
    }

    const colors = ["#0088FE", "#00C49F", "#f682d3"];

    return (
        <div>
            <div className="min-h-20 mt-4  rounded-md pb-10">
                <h3 className="text-3xl p-6  font-medium text-[#688696]">
                    Company analytics
                </h3>
                <div className="flex flex-wrap gap-2 justify-around items-center mt-10">
                    <div className="flex justify-between items-center md:gap-2 lg:gap-3 xl:gap-5 border-4 border-gray-100 rounded-lg shadow-xl p-5">
                        <div className="bg-[#B6F4F6] p-2 rounded-full">
                            <PiBagSimpleFill className="text-4xl text-[#00939A]" />
                        </div>
                        <div className="text-end">
                            <h3 className="text-lg font-semibold text-gray-600">
                                Posted Jobs
                            </h3>
                            <p className="text-3xl font-semibold">{jobPosts}</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center md:gap-2 lg:gap-3 xl:gap-5 border-4 border-gray-100 rounded-lg shadow-xl p-5">
                        <div className="bg-[#DFF1FC] p-2 rounded-full">
                            <IoIosPeople className="text-4xl text-[#699BBA]" />
                        </div>
                        <div className="text-end">
                            <h3 className="text-lg font-semibold text-gray-600">
                                Candidates Applied
                            </h3>
                            <p className="text-3xl font-semibold">{candidatesApplied.size}</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center md:gap-2 lg:gap-3 xl:gap-5 border-4 border-gray-100 rounded-lg shadow-xl p-5">
                        <div className="bg-[#D4FAE5] p-2 rounded-full">
                            <GiConfirmed className="text-4xl text-[#23AA5D]" />
                        </div>
                        <div className="text-end">
                            <h3 className="text-lg font-semibold text-gray-600">
                                Total Confirm jobs
                            </h3>
                            <p className="text-3xl font-semibold">{confirmedJobs}</p>
                        </div>
                    </div>
                </div>
                {
                    appliedJobs > 0 && (
                        <div className="mt-10">
                            <h3 className="text-3xl p-6 font-medium text-[#688696]">
                                Job Analytics
                            </h3>
                            <PieChart width={400} height={400} className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto">
                                <Pie
                                    data={pieChartData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    paddingAngle={5}
                                    dataKey="value"
                                    label
                                >
                                    {pieChartData.map((_entry, index) => (
                                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                                    ))}
                                </Pie>
                                <Legend />
                            </PieChart>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default CompanyAnalytics;