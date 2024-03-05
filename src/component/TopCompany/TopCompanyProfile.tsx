import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import SmallCards from "./SmallCards"
import Job from "../../Pages/Home/PopularJobs/Job";
//import FeaturedArticle from "../../Pages/Blogs/components/FeaturedArticle";
import Seminers from "../../Pages/Blogs/components/Seminers";
import TopCompanyBlogs from "./TopCompanyBlogs";
import { Helmet } from "react-helmet-async";
import "./styles.css";
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
         
        })
        .catch((err) => console.log(err));
    }
  }, [CompanyProfile]);

  return (
    <div>
      <Helmet>
        <title>{`${CompanyProfile?.name}`} | Company Profile</title>
      </Helmet>

      <div className="">

        {/* company details pages  */}
        <div className=" pt-5 pb-5  px-7 bg-[#e1e8ff]">
          {/* company information */}
          <div className="max-w-screen-xl mx-auto flex gap-4 md:gap-10 my-10">
            <img
              className=" w-20 h-20 md:w-64 md:h-64 bg-white p-2"
              src={CompanyProfile?.photo}
            />
            <div className="grid grid-cols-5 mt-5">
              <p className=" col-span-2 text-xs md:text-sm opacity-80 uppercase">
                Company Name{" "}
              </p>
              <p className="col-span-3 text-xs md:text-sm pl-1">
                {CompanyProfile?.name}
              </p>

              <p className="col-span-2 text-xs md:text-sm opacity-80 uppercase">
                Founding Year
              </p>
              <p className="col-span-3 text-xs md:text-sm pl-1">
                {CompanyProfile?.founding}
              </p>

              <p className="col-span-2 text-xs md:text-sm opacity-80 uppercase ">
                Industry
              </p>
              <p className="col-span-3 text-xs md:text-sm pl-1">
                {CompanyProfile?.industry}
              </p>

              <p className="col-span-2 text-xs md:text-sm opacity-80 uppercase">
                address{" "}
              </p>
              <div className="col-span-3 ">
                <p className="text-xs md:text-sm  pl-1">
                  {CompanyProfile?.city} - {CompanyProfile?.postal},{" "}
                  {CompanyProfile?.country}
                </p>
                <p className="text-xs md:text-sm uppercase pt-1 pl-1">
                  Phone: {CompanyProfile?.phone}
                </p>
                <p className=" text-xs md:text-sm md:pt-1 pl-1">
                  E-mail: {CompanyProfile?.email}
                </p>
                <p className=" text-xs md:text-sm md:pt-1 pl-1">
                  Website: {CompanyProfile?.website}
                </p>
              </div>

            </div>



          </div>
        </div>


        {/* tab sessions */}
        <div className="max-w-screen-xl mx-auto">
          <Tabs>
            <TabList className={`text-lg font-bold pt-4 mt-12`}>
              <Tab>About</Tab>
              <Tab>Posted Jobs</Tab>
              <Tab>Blogs</Tab>
              <Tab>Seminar</Tab>
            </TabList>
            <div className=" border border-b-2"></div>
            <TabPanel>
              <div className="flex-1 bg-[#ffffff] pt-16 mb-5 px-10 rounded-2xl">
                <p className=" text-sm md:text-base text-justify text-[#282829] ">
                  Established on {CompanyProfile?.founding},{" "}
                  {CompanyProfile?.name} is a leading force in the{" "}
                  {CompanyProfile?.industry} industry, headquartered in{" "}
                  {CompanyProfile?.city} - {CompanyProfile?.postal},{" "}
                  {CompanyProfile?.country}. With a focus on leveraging
                  technology for positive societal impact, our company is
                  registered under Company No. {CompanyProfile?.registration}.
                  Specializing in fostering digital connectivity and community
                  empowerment, we offer innovative solutions to meet evolving
                  needs. Reach out to us at {CompanyProfile?.phone} or{" "}
                  {CompanyProfile?.email} for inquiries or collaborations. Visit
                  our website {CompanyProfile?.website} to discover our diverse
                  range of initiatives aimed at driving meaningful change in the
                  digital landscape. Join us in shaping a brighter future
                  through the power of {CompanyProfile?.industry}.
                </p>
              </div>
            </TabPanel>
            <TabPanel className={`pt-6`}>
              <div className=" items-center mb-3">
                <div>
                  <div>
                    <h4 className="font-semibold font-heading">
                      <span className="text-[#486DD9]">
                        {companyPostedJobs?.length}
                      </span>{" "}
                      Jobs Available
                    </h4>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-8 mx-auto mb-8">
                {companyPostedJobs?.map((job: Job) => (
                  <SmallCards key={job._id} job={job}></SmallCards>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              {CompanyProfile?.email && (
                <TopCompanyBlogs key={CompanyProfile._id} email={CompanyProfile.email} />
              )}
              {/* <FeaturedArticle /> */}
            </TabPanel>
            <TabPanel>
              <Seminers />
            </TabPanel>
          </Tabs>
        </div>

        {/* company posted jobs */}
      </div>
    </div>
  );
};

export default TopCompanyProfile;