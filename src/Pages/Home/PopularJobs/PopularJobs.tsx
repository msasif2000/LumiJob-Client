import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Job from "./Job";
import Sector from "./sector";
import JobCard from "./JobCard";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import axios from "axios";

const PopularJobs = () => {
  const [popularJobs, setPopularJobs] = useState<Job[]>([]);
  const [sectors, setSectors] = useState<Sector[]>([]);
  const [tabIndex, setTabIndex] = useState(0);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic
      .get("/all-job-posts")
      .then((res) => {
        setPopularJobs(res.data);
        //console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios.get("/sectors.json").then((res) => {
      setSectors(res.data);
      //console.log("Sectors:", res.data); // Log sector data
    });
  }, []);

  const slicedSectors = sectors.slice(0, 10)

  const filterJob = popularJobs?.filter(
    (job) => job.sectorType === sectors[tabIndex]?.sectorType
  );


  const slicedJobs = filterJob?.slice(0, 6);


  return (
    <>
      <div className="max-w-screen-2xl mx-auto py-16 px-4">
        <div className="mb-14">
          <h3 className="text-4xl md:text-6xl lg:text-7xl font-heading font-semibold text-center mb-4 xl:mb-7">
            Most <span className="text-accentTwo">popular</span> jobs for you
          </h3>
          <p className="text-sm md:text-lg xl:text-2xl text-[#999999] text-center mx-4">
            The most updated platform about jobs that are open
          </p>
        </div>

        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            {slicedSectors?.map((sector) => (
              <Tab key={sector._id}>{sector.sectorType}</Tab>
            ))}
          </TabList>
          {sectors?.map((sector) => (
            <TabPanel key={sector._id}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-20">
                {slicedJobs?.map((job) => (
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
