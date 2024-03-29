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

  const slicedSectors = sectors.slice(0, 6);

  // sort popular jobs by date here only show jobs that are away by 5 days from current date

  const filterJob = popularJobs?.filter(
    (job) => job.sectorType === sectors[tabIndex]?.sectorType
  );
   
  //slice responsive
  let sliceEnd = 6;
  if (window.innerWidth >= 1600) {
    sliceEnd = 8;
  }
  const slicedJobs = filterJob?.slice(0, sliceEnd);

  return (
    <>
      <div className="max-w-screen-2xl mx-auto pt-12 pb-6 px-4 lg:px-20 pjob">
        <div className="mb-6">
          <h3 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-heading font-semibold text-center mb-4">
            Most <span className="text-accentTwo">popular</span> jobs for you
          </h3>
          <p className="text-sm md:text-lg xl:text-xl 2xl:text-2xl text-[#999999] text-center mx-4">
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
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 my-12">
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