import { useEffect, useState } from "react";
import CandidateNav from "./CommonNavbar/CandidateNav";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAxiosDev from "../hooks/useAxiosDev";



const CandidateProfile = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("experience");
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const axiosDev = useAxiosDev();

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    if (user?.email) {
      axiosDev
        .get(`/user-profile/${user.email}`)
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
            {profile?.experienceDetails?.map((job, index) => (
              <div key={index} className="mb-4">
                <div>
                  <p className="text-xl font-bold">{job.position}</p>
                  <p className="text-lg font-bold text-gray-400">
                    {job.company}
                  </p>
                  <p className="text-lg font-semibold text-gray-400">
                    {job.startDate} - {job.endDate}
                  </p>
                </div>

                <div className="mt-4">
                  <hr />
                </div>
              </div>
            ))}
          </div>
        );
      case "education":
        return (
          <div>
            {profile?.education?.map((uni, index) => (
              <div key={index} className="mb-4">
                <div>
                  <p className="text-xl font-bold">{uni.university}</p>
                  <p className="text-lg font-bold text-gray-400">
                    {uni.subject}
                  </p>
                  <p className="text-lg font-semibold text-gray-400">
                    {/* {job.startDate} - {job.endDate} */}
                  </p>
                </div>

                <div className="mt-4">
                  <hr />
                </div>
              </div>
            ))}
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
      <div className="flex space-x-10">
        {/* profile card div */}
        <div className="bg-white h-fit w-1/3 rounded-2xl space-y-5 p-5 relative">
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
            <h1 className="text-3xl font-bold">{profile?.name}</h1>
            <p className="">{profile?.position}</p>
          </div>
          {/* Bio */}
          <div>
            <h1 className="font-medium text-lg">{profile?.bio}</h1>
          </div>
          {/* skills */}
          <div className="space-y-5">
            <h1 className="text-2xl font-bold">Skills</h1>
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

        <div className="flex flex-col space-y-10 h-full w-2/3">
          {/* address div */}
          <div className="bg-white h-1/2 w-full rounded-2xl p-10 space-y-4">
            <p className="text-2xl font-bold">Personal Information</p>
            <div className="grid grid-cols-3 gap-7 ">
              <div className="space-y-2">
                <p className="text-lg">Name</p>
                <p className="text-xl font-semibold">{profile?.name}</p>
              </div>

              <div className="space-y-2">
                <p className="text-lg">Contact</p>
                <p className="text-xl font-semibold">{profile?.phone}</p>
              </div>
              <div className="space-y-2">
                <p className="text-lg">Location</p>
                <p className="text-xl font-semibold">
                  {profile?.city}, {profile?.country}
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-lg">Years of experience</p>
                <p className="text-xl font-semibold">
                  {profile?.experience} years
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-lg">Availability</p>
                <p className="text-xl font-semibold">
                  {profile?.availability} - {profile?.work}
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-lg">Expected salary</p>
                <p className="text-xl font-semibold">$5000 - $8000</p>
              </div>
            </div>
          </div>
          {/* Skills div */}
          <div className="bg-white w-full rounded-2xl p-10">
            <div role="tablist" className="tabs tabs-bordered relative">
              <a
                role="tab"
                className={`tab ${
                  activeTab === "experience" ? "tab-active" : ""
                } text-xl font-bold`}
                onClick={() => handleTabClick("experience")}
              >
                Experience
              </a>
              <a
                role="tab"
                className={`tab ${
                  activeTab === "education" ? "tab-active" : ""
                } text-xl font-bold`}
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
