import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Job from "./Job";
import Sector from "./sector";
import JobCard from "./JobCard";

const PopularJobs = () => {
  const [popularJobs, setPopularJobs] = useState<Job[]>([]);
  const [sectors, setSectors] = useState<Sector[]>([]);
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    fetch("popular.json")
      .then((res) => res.json())
      .then((data: Job[]) => setPopularJobs(data));
  }, []);

  useEffect(() => {
    fetch("sectors.json")
      .then((res) => res.json())
      .then((data: Sector[]) => setSectors(data));
  }, []);

  const filterJob = popularJobs?.filter(
    (job) => job.sector == sectors[tabIndex].sectorType
  );

  return (
    <>
      <div className="max-w-screen-2xl mx-auto py-16 px-4">
        <div className="mb-8">
          <h3 className="text-4xl md:text-5xl xl:text-7xl font-bold text-center mb-4 xl:mb-7">
            Most <span className="text-[#4869DD]">popular</span> jobs for you
          </h3>
          <p className="text-sm md:text-lg xl:text-2xl text-[#999999] text-center mx-4">
            The most updated platform about jobs that are open
          </p>
        </div>

        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            {sectors?.map((sector) => (
              <Tab key={sector._id}>{sector.sectorType}</Tab>
            ))}
          </TabList>
          {sectors?.map((sector) => (
            <TabPanel key={sector._id}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-20">
                {filterJob?.map((job) => (
                  <JobCard key={job._id} job={job}></JobCard>
                ))}
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </>
  );
};

export default PopularJobs;
