import { useEffect, useState } from "react";
import CandidateNav from "./CommonNavbar/CandidateNav";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";



interface UserProfile {
  _id: string;
  email: string;
  availability: string;
  bio: string;
  city: string;
  country: string;
  education: {
    university: string;
    degree: string;
    subject: string;
    fromDate: string;
    toDate: string;
    experience: string;
  }[];
  experienceDetails: {
    company: string;
    position: string;
    fromDate: string;
    toDate: string;
    name: string;
    phone: string;
    photo: string;
    role: string;
    salaryRangeMax: string;
    salaryRangeMin: string;
  }[];
  skills: string[];
  userId: string;
  village: string;
  work: string;
  photo: string;
  name: string;
  phone: string;
  position: string;
  experience: number;
  salaryRangeMin: number;
  salaryRangeMax: number;

}

const CandidateProfile = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("experience");
  const navigate = useNavigate();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const axiosPublic = useAxiosPublic()

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    if (user?.email) {
      axiosPublic
        .get(`/specific-candidate/${user.email}`)
        .then((res) => {
          setProfile(res.data);
          // console.log(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);
  const renderTabContent = () => {
    switch (activeTab) {
      case "experience":
        return (
          <div>
            {profile?.experienceDetails?.map((job: any, index: number) => {
              // Convert fromDate and toDate to Date objects
              const startDate = new Date(job.fromDate);
              const endDate = new Date(job.toDate);

              // Format dates in the desired format (e.g., "21-Jan-2024")
              const formattedStartDate = `${startDate.getDate()}-${startDate.toLocaleString(
                "en-us",
                { month: "short" }
              )}-${startDate.getFullYear()}`;
              const formattedEndDate = `${endDate.getDate()}-${endDate.toLocaleString(
                "en-us",
                { month: "short" }
              )}-${endDate.getFullYear()}`;

              return (
                <div key={index} className="mb-4">
                  <div>
                    <p className="text-xs md:text-xl font-bold">{job.position}</p>
                    <p className="text-xs md:text-lg font-bold text-gray-400">
                      {job.company}
                    </p>
                    <p className="text-xs md:text-lg font-semibold text-gray-400">
                      {formattedStartDate} - {formattedEndDate}
                    </p>
                  </div>

                  <div className="mt-4">
                    <hr />
                  </div>
                </div>
              );
            })}
          </div>
        );
      case "education":
        return (
          <div>
            {profile?.education?.map((uni: any, index: number) => {
              // Convert startDate and endDate to Date objects
              const startDate = new Date(uni.fromDate);
              const endDate = new Date(uni.toDate);

              // Format dates in the desired format (e.g., "21-Jan-2024")
              const formattedStartDate = `${startDate.getDate()}-${startDate.toLocaleString(
                "en-us",
                { month: "short" }
              )}-${startDate.getFullYear()}`;
              const formattedEndDate = `${endDate.getDate()}-${endDate.toLocaleString(
                "en-us",
                { month: "short" }
              )}-${endDate.getFullYear()}`;

              return (
                <div key={index} className="mb-4">
                  <div>
                    <p className="">{uni.university}</p>
                    <p className="text-xs md:text-lg font-bold text-gray-400">
                      {uni.subject}
                    </p>
                    <p className="text-xs md:text-lg font-semibold text-gray-400">
                      {formattedStartDate} - {formattedEndDate}
                    </p>
                  </div>

                  <div className="mt-4">
                    <hr />
                  </div>
                </div>
              );
            })}
          </div>
        );
    }
  };

  const buttonClicked = () => {
    navigate("/dashboard/candidateProfile/update");
  };
  const buttonClicked2 = () => {
    navigate("/dashboard/candidateProfile/resume");
  };

  return (
    <div className="min-h-screen">
      <CandidateNav
        text={"Profile"}
        btn={"Update Information"}
        btn2={"Resume"}
        handleClick2={buttonClicked2}
        handleClick={buttonClicked}
      />
      <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-10">
        {/* profile card div */}
        <div className="bg-white h-fit lg:w-1/3 rounded-2xl space-y-5 p-5 relative">
          <div className="bg-accent h-48 rounded-2xl relative">
            {/* image */}
            <div className="flex justify-center">
              <div className="avatar">
                <div className="w-40 rounded-full">
                  <img
                    src={profile?.photo}
                    className="absolute top-20 rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Name */}
          <div className="pt-10">
            <h1 className=" text-base md:text-3xl font-bold">{profile?.name}</h1>
            <p className="text-xs md:text-sm">{profile?.position}</p>
          </div>
          {/* Bio */}
          <div>
            <h1 className="font-medium text-xs md:text-lg">{profile?.bio}</h1>
          </div>
          {/* skills */}
          <div className="space-y-5">
            <h1 className="text-sm md:text-2xl font-bold">Skills</h1>
            <ul className="flex flex-wrap">
              {profile?.skills?.map((skill, idx) => (
                <li
                  key={idx}
                  className="badge badge-accent m-1 p-5 font-semibold text-md text-gray-800"
                >
                  <p>{skill}</p>
                </li>
              ))}
            </ul>
          </div>
          {/* end */}
        </div>

        {/* end profile card div */}

        <div className="flex flex-col lg:flex-grow">
          {/* address div */}
          <div className="bg-white h-1/2 lg:w-full rounded-2xl p-10 space-y-4">
            <p className="text-base md:text-2xl font-bold">Personal Information</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 ">
              <div className="space-y-2">
                <p className="text-xs md:text-lg">Name</p>
                <p className=" text-xs md:text-xl font-semibold">{profile?.name}</p>
              </div>

              <div className="space-y-2">
                <p className="text-xs md:text-lg">Contact</p>
                <p className=" text-xs md:text-xl font-semibold">{profile?.phone}</p>
              </div>
              <div className="space-y-2">
                <p className="text-xs md:text-lg">Location</p>
                <p className=" text-xs md:text-xl font-semibold">
                  {profile?.city}, {profile?.country}
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-xs md:text-lg">Years of experience</p>
                <p className=" text-xs md:text-xl font-semibold">
                  {profile?.experience} years
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-xs md:text-lg">Availability</p>
                <p className=" text-xs md:text-xl font-semibold">
                  {profile?.availability} - {profile?.work}
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-xs md:text-lg">Expected salary</p>
                <p className=" text-xs md:text-xl font-semibold">
                  ${profile?.salaryRangeMin} - ${profile?.salaryRangeMax}
                </p>
              </div>
            </div>
          </div>
          {/* Skills div */}
          <div className="bg-white lg:w-full rounded-2xl md:p-10">
            <div role="tablist" className="tabs tabs-bordered relative">
              <a
                role="tab"
                className={`tab ${activeTab === "experience" ? "tab-active" : ""
                  } text-xs md:text-xl font-bold`}
                onClick={() => handleTabClick("experience")}
              >
                Experience
              </a>
              <a
                role="tab"
                className={`tab ${activeTab === "education" ? "tab-active" : ""
                  } text-xs md:text-xl font-bold`}
                onClick={() => handleTabClick("education")}
              >
                Education
              </a>

              <div
                className={`tab-indicator ${activeTab}-indicator`}
                style={{ top: "calc(100% + 5px)" }}
              ></div>
            </div>
            <div className="pt-5">{renderTabContent()}</div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>

  );
};

export default CandidateProfile;
