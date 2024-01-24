import { useState } from "react";
import CandidateNav from "./CommonNavbar/CandidateNav";
import { useNavigate } from "react-router-dom";

const skills = [
  { id: 1, name: "React.js" },
  { id: 2, name: "JavaScript (ES6+)" },
  { id: 3, name: "HTML5" },
  { id: 4, name: "CSS3" },
  { id: 5, name: "Redux" },
  { id: 6, name: "Responsive Design" },
  { id: 7, name: "Git" },
  { id: 8, name: "Webpack" },
  { id: 9, name: "GraphQL" },
  { id: 14, name: "Typescript" },
  { id: 10, name: "Tailwind Css" },
  { id: 11, name: "Github" },
  { id: 12, name: "Framer Motion" },
  { id: 13, name: "SASS" },
  { id: 14, name: "Next JS" },
];

const jobs = [
  {
    company: "ABC Corp",
    position: "Software Engineer",
    startDate: "2020-01-01",
    endDate: "2022-05-31",
  },
  {
    company: "DEF Ltd",
    position: "Senior Frontend Developer",
    startDate: "2018-03-15",
    endDate: "2020-12-31",
  },
  {
    company: "GHI Ltd",
    position: "Senior Frontend Developer",
    startDate: "2018-03-15",
    endDate: "2020-12-31",
  },
];

const CandidateProfile = () => {
  const [activeTab, setActiveTab] = useState("experience");
  const navigate = useNavigate()

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "experience":
        return (
          <div>
            {jobs.map((job, index) => (
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
           
          </div>
        );
      case "certifications":
        return (
          <div>
         
          </div>
        );
      default:
    }
  };

  const buttonClicked = () =>{
    navigate('/dashboard/candidateProfile/update')
  }

  return (
    <div className="min-h-screen bg-base-200">
      <CandidateNav text={"Profile"} btn={"Update Information"} handleClick={buttonClicked}/>
      <div className="flex p-5 space-x-10">
        {/* profile card div */}
        <div className="bg-white h-fit w-1/3 rounded-2xl space-y-5 p-5 relative">
          <div className="bg-accent h-48 rounded-2xl relative">
            {/* image */}
            <div className="flex justify-center">
              <div className="avatar">
                <div className="w-40 rounded-full">
                  <img
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    className="absolute top-20 rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Name */}
          <div className="pt-10">
            <h1 className="text-3xl font-bold">Lamia Islam</h1>
            <p className="">Front-end Developer</p>
          </div>
          {/* Bio */}
          <div>
            <h1 className="font-medium text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              ex, odit dolor eligendi voluptates eum, fugiat quas consectetur at
              temporibus tempore quis sapiente recusandae magni est vitae
              similique ad perspiciatis.
            </h1>
          </div>
          {/* skills */}
          <div className="space-y-5">
            <h1 className="text-2xl font-bold">Skills</h1>
            <ul className="flex flex-wrap">
              {skills.map((skill) => (
                <li
                  key={skill.id}
                  className="badge badge-accent m-1 p-5 font-semibold text-md text-gray-800"
                >
                  {skill.name}
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
                <p className="text-xl font-semibold">Lamia Islam</p>
              </div>

              <div className="space-y-2">
                <p className="text-lg">Contact</p>
                <p className="text-xl font-semibold">+880199xxxx306</p>
              </div>
              <div className="space-y-2">
                <p className="text-lg">Location</p>
                <p className="text-xl font-semibold">Dhaka, Bangladesh</p>
              </div>
              <div className="space-y-2">
                <p className="text-lg">Years of experience</p>
                <p className="text-xl font-semibold">5 years</p>
              </div>
              <div className="space-y-2">
                <p className="text-lg">Availability</p>
                <p className="text-xl font-semibold">Remote - Full Time</p>
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
              <a
                role="tab"
                className={`tab ${
                  activeTab === "certifications" ? "tab-active" : ""
                } text-xl font-bold`}
                onClick={() => handleTabClick("certifications")}
              >
                Certification
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
