import { useEffect, useState } from "react";
import Job from "../../Pages/Home/PopularJobs/Job";
import TopCompanyCard from "./TopCompanyCard";

const TopCompany = () => {
    const [allJobs, setAllJobs] = useState<Job[]>([]);


    useEffect(() => {
        fetch("popular.json")
            .then((res) => res.json())
            .then((data: Job[]) => setAllJobs(data));
    }, []);


    const filterJob = allJobs.slice(0,12)


    return (
        <div className="max-w-screen-2xl mx-auto py-16 px-4">
            <div className="mb-8">
                <h3 className="text-4xl md:text-5xl xl:text-7xl font-bold text-center mb-4 xl:mb-7">
                    Most <span className="text-[#4869DD]">requited</span> company
                </h3>
               <div className="grid grid-cols-4 gap-10 mt-16">
                    {
                        filterJob?.map(job => <TopCompanyCard key={job._id} job={job}></TopCompanyCard>)
                    }
               </div>
            </div>

        </div>
    );
};

export default TopCompany;