import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";
import { FaDollarSign } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import UniLoader from "../../component/err & loading/UniLoader";

interface JobDetails {
  _id: string;
  title: string;
  location: string;
  salaryRange: {
    min: number;
    max: number;
  };
  sectorType: string;
  description: string;
  requirements: string[];
  platform: string;
  post_time: string;
  aboutUs: string;
  positionOverview: string;
  responsibilities: string[];
  skills: string[];
  experience: string;
  perks: string[];
  application: string;
  [key: string]: any;
}

const JobsDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const axiosPublic = useAxiosPublic();
  const [job, setJobs] = useState<JobDetails>();

  // console.log(id);

  useEffect(() => {
    axiosPublic
      .get(`/single-job/${id}`)
      .then((res) => {
        setJobs(res.data);
        // console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const {
    title,
    location,
    salaryRange = { min: 0, max: 0 },
    sectorType,
    description,
    requirements,
    platform,
    post_time,
    aboutUs,
    positionOverview,
    responsibilities,
    skills,
    experience,
    perks,
    application,
  } = job || {};

  const formatDateTime = (dateTimeString: any) => {
    const date = new Date(dateTimeString);
  
    const timeOptions: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
    const formattedTime = new Intl.DateTimeFormat('en-US', timeOptions).format(date);
  
    const dateOptions: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-GB', dateOptions).format(date);
  
    return `${formattedTime} - ${formattedDate}`;
  };
  
  
  const formattedPostTime = post_time ? formatDateTime(post_time) : "";

  return (
    <>
      <div className="max-w-screen-2xl mx-auto py-8 px-4">
        <div>
          {/* Display jobs */}
          {job ? (
            <div className="lg:flex justify-between">
              {/* left side */}
              <div className=" lg:w-8/12">
                <div className="space-y-4">
                  <p className="text-xl opacity-80">{formattedPostTime}</p>
                  <h1 className=" text-4xl md:text-3xl lg:text-5xl font-bold mb-2">
                    {title}
                  </h1>
                  <p className="text-xl opacity-80">{description}</p>
                </div>
                <div className="mt-5 mb-2 flex gap-6">
                  <p className="flex items-center gap-2">
                    {" "}
                    <FaLocationDot />{" "}
                    <p className="text-xl md:text-base">{location}</p>
                  </p>
                  <p className="flex items-center gap-2">
                    <FaDollarSign />
                    <p className="text-lg md:text-base">
                      {salaryRange.min} - {salaryRange.max}
                    </p>
                  </p>
                </div>
                <hr />
                <div className="mt-6">
                  {" "}
                  <p>
                    <span className="font-semibold text-xl">Sector</span>:{" "}
                    <span className=" bg-slate-200 py-1 px-2">
                      {sectorType}
                    </span>
                  </p>
                </div>
                <div className="mt-6">
                  {" "}
                  <p>
                    <span className="font-semibold text-xl">platform</span>:{" "}
                    <span className=" bg-slate-200 py-1 px-2">{platform}</span>
                  </p>
                </div>

                <div>
                  <p className=" font-semibold text-xl mt-5 mb-2">About Us</p>
                  <p className="text-lg opacity-90">{aboutUs}</p>
                </div>
                <div>
                  <p className="font-semibold text-xl mt-5 mb-2">Position Overview</p>
                  <p className="text-lg opacity-90">{positionOverview}</p>
                </div>
                <div></div>
                <div>
                  <h2 className=" font-semibold text-xl mt-5 mb-2">Responsibilities</h2>
                  <ul>
                    {responsibilities &&
                      responsibilities.map(
                        (responsibility: string, index: number) => (
                          <li key={index}>
                            <p className="flex items-center ms-3 gap-2 text-lg opacity-90">
                              <LuDot />
                              {responsibility}
                            </p>
                          </li>
                        )
                      )}
                  </ul>
                </div>
                <div>
                  <h2 className="font-semibold text-xl mt-5 mb-2">Requirements</h2>
                  <ul>
                    {requirements &&
                      requirements.map((requirement: string, index: number) => (
                        <li key={index}>
                          <p className="flex items-center ms-3 gap-2 text-lg opacity-90">
                            <LuDot /> {requirement}
                          </p>
                        </li>
                      ))}
                  </ul>
                </div>
                <div>
                  <h2 className="font-semibold text-xl mt-5 mb-2">Skills</h2>
                  <ul>
                    {skills &&
                      skills.map((skill: string, index: number) => (
                        <li key={index}>
                          <p className="flex items-center ms-3 gap-2 text-lg opacity-90">
                            <LuDot /> {skill}
                          </p>
                        </li>
                      ))}
                  </ul>
                </div>
                <div>
                  {" "}
                  <h4 className="font-semibold text-xl mt-5 mb-2">Experience</h4>{" "}
                  <p className="text-lg opacity-90">{experience}</p>
                </div>
                <div>
                  <h2 className="font-semibold text-xl mt-5 mb-2">Perks</h2>
                  <ul>
                    {perks &&
                      perks.map((perk: string, index: number) => (
                        <li key={index}>
                          <p className="flex items-center ms-3 gap-2 text-lg opacity-90">
                            <LuDot /> {perk}
                          </p>
                        </li>
                      ))}
                  </ul>
                </div>

                <div className="mt-5 mb-2">
                  {" "}
                  <p className="text-lg opacity-90">{application}</p>
                </div>
              </div>
              {/* right side */}
              <div className=" md:w-1/2 mx-auto mt-10 lg:mt-0 lg:w-4/12 xl:w-3/12">
                <div>
                  <button className=" w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 mb-5">
                    APPLY HERE
                  </button>
                </div>
                <div className="skeleton flex flex-col bg-[#F2F5FE] items-center p-8">
                  <hr className="border-b-2 border-gray-400 mb-4" />

                  <div className="mb-12">
                    {/* Content for the component */}
                    <span className="text-gray-600">
                      Share this position with your friends and get
                      <span className=" text-orange-500"> CAD $500</span> when
                      they are hired
                    </span>
                  </div>

                  <button className=" hover:text-white py-2 border-2 text-blue-700 border-blue-700 px-4 rounded hover:bg-blue-700">
                    Login to get your link
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <UniLoader />
          )}
        </div>
      </div>
    </>
  );
};

export default JobsDetails;
