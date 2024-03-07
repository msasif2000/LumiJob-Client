import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Job from "./Job";
import JobCard from "./JobCard";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useSectorAndSkills from "../../../hooks/useSectorAndSkills";
import PopularJobsLoading from "../../../component/err & loading/PopularJobsLoading";

const PopularJobs = () => {
  const [popularJobs, setPopularJobs] = useState<Job[]>([]);
  const [tabIndex, setTabIndex] = useState(0);
  const axiosPublic = useAxiosPublic();
  const [loading, setLoading] = useState(true);

  const { sectors } = useSectorAndSkills();

  useEffect(() => {
    axiosPublic.get("/all-job-posts")
      .then((res) => {
        setPopularJobs(res.data);
    
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const slicedSectors = sectors.slice(0, 8);

  // sort popular jobs by date here only show jobs that are away by 5 days from current date

  const filterJob = popularJobs?.filter(
    (job) => job.sectorType === sectors[tabIndex]?.sectorType
  );

  const slicedJobs = filterJob?.slice(0, 6);

  return (
    <>
      <div className="max-w-screen-2xl mx-auto py-16 px-4 lg:px-20 pjob">
        <div className="mb-14">
          <h3 className="text-3xl md:text-4xl lg:text-5xl 2xl:6xl font-heading font-semibold text-center mb-4 xl:mb-7">
            Most <span className="text-accentTwo">popular</span> jobs for you
          </h3>
          <p className="text-sm md:text-lg lg:text-xl 2xl:text-2xl text-[#999999] text-center mx-4">
            The most updated platform about jobs that are open
          </p>
        </div>

        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            {slicedSectors?.map((sector: any) => (
              <Tab key={sector._id}>{sector.sectorType}</Tab>
            ))}
          </TabList>
          {sectors?.map((sector: any) => (
            <TabPanel key={sector._id}>
              {loading ? (
                <PopularJobsLoading />
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 my-20">
                  {slicedJobs?.map((job) => (
                    <JobCard key={job._id} job={job}></JobCard>
                  ))}
                </div>
              )}
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </>
  );
};

export default PopularJobs;