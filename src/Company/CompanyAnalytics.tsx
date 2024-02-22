import { FunctionComponent, useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
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
    const axiosPublic = useAxiosPublic();
    const [profile, setProfile] = useState<any>(null);
    const { user } = useAuth();

    useEffect(() => {
        if (user?.email) {
            axiosPublic
                .get(`/get-applied-jobs-com/${user?.email}`)
                .then((res) => {
                    setProfile(res.data);
                })
                .catch((err) => console.log(err));
        }
    }, [user]);

    let postedJobs = 0;
    let candidatesApplied = new Set<string>();
    let confirmedJobs = 0;
    let pieChartData: JobData[] = [];

    if (profile) {
        postedJobs = profile.length;
        profile.forEach((job: any) => {
            candidatesApplied.add(job.candidate);
            if (job.status === "selected") {
                confirmedJobs++;
            }
        });

        pieChartData = [
            { name: "Posted Job", value: postedJobs },
            { name: "Interview", value: candidatesApplied.size },
            { name: "Confirm", value: confirmedJobs },
        ];
    }

    return (
        <div>
            <div className="min-h-20 mt-4  rounded-md p-6 pb-10">
                <h3 className="text-3xl font-medium text-[#688696]">
                    Company analytics
                </h3>
                <div className="flex flex-wrap gap-2 justify-around items-center mt-10">
                    <div className="flex justify-between items-center gap-5 border-4 border-gray-100 rounded-lg shadow-xl p-5">
                        <div className="bg-[#B6F4F6] p-2 rounded-full">
                            <PiBagSimpleFill className="text-4xl text-[#00939A]" />
                        </div>
                        <div className="text-end">
                            <h3 className="text-lg font-semibold text-gray-600">
                                Posted Jobs
                            </h3>
                            <p className="text-3xl font-semibold">{postedJobs}</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center gap-5 border-4 border-gray-100 rounded-lg shadow-xl p-5">
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
                    <div className="flex justify-between items-center gap-5 border-4 border-gray-100 rounded-lg shadow-xl p-5">
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
                <div className="">
                    <div className="md:flex items-center justify-center">
                        <PieChart width={420} height={420}>
                            <Pie
                                data={pieChartData}
                                cx={200}
                                cy={200}
                                labelLine={false}
                                label={(entry: any) => `${entry.name}: ${entry.value}`}
                                outerRadius={100}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {pieChartData.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
                                    />
                                ))}
                            </Pie>
                            <Legend />
                        </PieChart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyAnalytics;
