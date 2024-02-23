import { FcBriefcase } from "react-icons/fc";
import { FcDecision } from "react-icons/fc";

const Add_Data = () => {
    return (
        <div className="h-screen max-w-2xl mx-auto">
            <div className="flex justify-center items-center h-full gap-4">
                <div className="w-[200px] h-[200px] mx-auto bg-slate-300 flex flex-col justify-center items-center">
                    <button className="p-10 flex flex-col justify-center items-center text-2xl"><FcBriefcase className="text-7xl" /> Add Job Sector</button>
                </div>
                <div className="w-[200px] h-[200px] mx-auto bg-slate-300 flex flex-col justify-center items-center">
                    <button className="p-10 flex flex-col justify-center items-center text-2xl"><FcDecision className="text-7xl" /> Add Skills</button>
                </div>
            </div>
        </div>
    );
};

export default Add_Data;