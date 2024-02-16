import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import FindJobCard from "../../Pages/FindJob/FindJobCard";
import Job from "../../Pages/Home/PopularJobs/Job";
//import FeaturedArticle from "../../Pages/Blogs/components/FeaturedArticle";
import Seminers from "../../Pages/Blogs/components/Seminers";
// import TopCompanyBlogs from "./TopCompanyBlogs";


const TopCompanyProfile = () => {
  const { id } = useParams<{ id: string }>();
  const axiosPublic = useAxiosPublic();
  const [companyPostedJobs, setCompanyPostedJobs] = useState<any | null>(null);
  const [CompanyProfile, setCompanyProfile] = useState<any>(null);

  useEffect(() => {
    axiosPublic
      .get(`/company-profile/${id}`)
      .then((res) => {
        setCompanyProfile(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);


  // company posted jobs
  useEffect(() => {
    if (CompanyProfile?.email) {
      axiosPublic
        .get(`/company-postedJobs/${CompanyProfile?.email}`)
        .then((res) => {
          setCompanyPostedJobs(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [CompanyProfile]);

  

  return (
    <div className="">
      <div>
        {/* company details pages  */}
        <div className=" pt-5 pb-5  px-7 bg-[#e1e8ff]">
          <p className=" pb-8 lg:text-4xl font-bold text-center   ">
            Company Profile {`> `}
            {CompanyProfile?.name}{" "}
          </p>
          {/* company information */}
          <div className="flex gap-10 lg:px-16 lg:pt-2">
            {/* company title img adreess ect */}
            <div className="flex-1">
              <div className="flex gap-4 md:gap-10 mb-10">
                <img
                  className=" w-20 h-20 md:w-28 md:h-28 rounded-full bg-white p-2"
                  src={CompanyProfile?.photo}
                />
                <div>
                  <p className="text-sm md:text-base font-semibold uppercase  mb-1">
                    Company Name{" "}
                  </p>
                  <p className="text-sm md:text-lg pl-1">
                    {CompanyProfile?.name}
                  </p>
                  <div className="flex flex-col justify-center   mt-5 mb-5">
                    <p className="text-sm md:text-base font-semibold uppercase  mb-1 ">
                      Founding Year
                    </p>
                    <p className="text-sm md:text-lg pl-1">
                      {CompanyProfile?.founding}
                    </p>
                  </div>
                  <p className="text-sm md:text-base font-semibold uppercase  mb-1">
                    Industry
                  </p>
                  <p className="text-sm md:text-lg pl-1">
                    {CompanyProfile?.industry}
                  </p>
                  <div className="mt-5">
                    <p className="text-sm md:text-base font-semibold uppercase  mb-1 ">
                      address{" "}
                    </p>
                    <p className="text-sm md:text-lg  pl-1">
                      {CompanyProfile?.city} - {CompanyProfile?.postal},{" "}
                      {CompanyProfile?.country}
                    </p>
                    <p className="text-sm md:text-lg uppercase pt-1 pl-1">
                      Phone: {CompanyProfile?.phone}
                    </p>
                    <p className=" text-sm md:text-lg md:pt-1 pl-1">
                      E-mail: {CompanyProfile?.email}
                    </p>
                    <p className=" text-sm md:text-lg md:pt-1 pl-1">
                      Website: {CompanyProfile?.website}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* company details */}
            <div className="flex-1 bg-[#ffffff] pt-16 mb-5 px-10 rounded-2xl shadow-2xl">
              <p className="text-sm md:text-base font-semibold  text-black mb-2 uppercase">
                {CompanyProfile?.name} Details
              </p>
              <p className=" text-sm md:text-base text-justify text-[#282829] ">
                Established on {CompanyProfile?.founding},{" "}
                {CompanyProfile?.name} is a leading force in the{" "}
                {CompanyProfile?.industry} industry, headquartered in{" "}
                {CompanyProfile?.city} - {CompanyProfile?.postal},{" "}
                {CompanyProfile?.country}. With a focus on leveraging technology
                for positive societal impact, our company is registered under
                Company No. {CompanyProfile?.registration}. Specializing in
                fostering digital connectivity and community empowerment, we
                offer innovative solutions to meet evolving needs. Reach out to
                us at {CompanyProfile?.phone} or {CompanyProfile?.email} for
                inquiries or collaborations. Visit our website{" "}
                {CompanyProfile?.website} to discover our diverse range of
                initiatives aimed at driving meaningful change in the digital
                landscape. Join us in shaping a brighter future through the
                power of {CompanyProfile?.industry}.
              </p>
            </div>
          </div>
        </div>

        
        
      </div>
      {/* tab sessions */}
      <div className=" " >
          <Tabs>
            <TabList className={`text-2xl font-bold text-center pt-4 pb-10`}>
              <Tab >Posted Jobs</Tab>
              <Tab>Blog</Tab>
              <Tab>Seminar</Tab>
            </TabList>

            <TabPanel>
            <div className=" items-center mb-3">
                <h4 className="font-semibold font-heading text-2xl text-center"> Currently Posted jobs for {CompanyProfile?.name} : {` `}
                  <span className="text-[#486DD9] text-4xl">{companyPostedJobs?.length}</span> Jobs Available
                </h4>
              </div>
            <div className="grid grid-cols-2 gap-8 w-10/12 mx-auto ">
                {
                  companyPostedJobs?.map((job: Job) => (
                    <FindJobCard key={job._id} job={job}></FindJobCard>
                  ))
                }
              </div>
            </TabPanel>
            <TabPanel>
              
                {/* <FeaturedArticle /> */}
            </TabPanel>
            <TabPanel>
            <Seminers />
            </TabPanel>
          </Tabs>
        </div>

      {/* company posted jobs */}
    </div>
  );
};

export default TopCompanyProfile;
