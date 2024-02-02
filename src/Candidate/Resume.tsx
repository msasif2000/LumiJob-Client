import React, { useEffect, useState} from "react";
import CandidateNav from "./CommonNavbar/CandidateNav";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";

interface Candidate {
  name: string;
  email: string;
  phone: string;
  location: string;
  education: Education[];
  experience: string;
  position: string;
  training_courses: string;
  academic_personal_projects: string;
  skills: string[];
  portfolio: string;
  bio: string;

}

interface Education {
  university: string;
  subject: string;
  fromDate: string;
  toDate: string;
}

const Resume: React.FC = () => {
  const [candidate, setCandidates] = useState<Candidate | null>(null);
  const {user} = useAuth()
  // const resumeRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic()

  useEffect(() => {
    if (user?.email) {
      axiosPublic
        .get(`/specific-candidate/${user.email}`)
        .then((res) => {
          setCandidates(res.data);
          // console.log(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const handleGoBack = () => {
    navigate(-1);
  };
  const handleUpdate = () => {
    navigate("/dashboard/candidateProfile/update");
  };

  return (
    <>
      <CandidateNav
        text="Resume"
        btn="Go Back"
        handleClick={handleGoBack}
        btn2="Update Information"
        handleClick2={handleUpdate}
      />
      <div className="mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg 2xl:max-w-3xl">
       
            <div
            
              className="mb-8 border-2 p-4 md:p-10 "
              
            >
              <div>
                <h1 className="text-md md:text-xl font-bold mb-1">
                  {candidate?.name}
                </h1>
                <p className="text-[8px] md:text-sm mb-1">{candidate?.email}</p>
                <p className="text-[8px] md:text-sm mb-1">{candidate?.phone}</p>
                <p className="text-[8px] md:text-sm mb-1">
                  {candidate?.location}
                </p>
              </div>
              <hr className="my-2" />
              <div className="text-[8px] md:text-sm flex">
                <h2 className="w-1/3 font-bold mb-2">Education</h2>
                <div className="w-2/3">
                  {/* {candidate.education.map((edu, eduIndex) => (
                    <div key={eduIndex}>
                      <p>{edu.university}</p>
                      <p>{edu.subject}</p>
                      <p>
                        {edu.fromDate} - {edu.toDate}
                      </p>
                    </div>
                  ))} */}
                </div>
              </div>
              <hr className="my-2" />
              <hr className="my-2" />
              <div className="text-[8px] md:text-sm flex">
                <h2 className="w-1/3 font-bold mb-2">Work Experience</h2>
                <div className="w-2/3">
                  {/* <p>{candidate.position}</p>
                  <p>{candidate.experience} years</p> */}
                </div>
              </div>
              <hr className="my-2" />
              <div className="text-[8px] md:text-sm flex">
                <h2 className="font-bold mb-2 w-1/3">Training Courses</h2>
                {/* <p className="w-2/3">{candidate.training_courses}</p> */}
              </div>
              <hr className="my-2" />
              <hr className="my-2" />
              <div className="text-[8px] md:text-sm flex">
                <h2 className="font-bold mb-2 w-1/3">Skills</h2>
                <ul className="w-2/3">
                  {/* {candidate.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>
                      <p className="flex">
                        <LuDot></LuDot>
                        <p>{skill}</p>
                      </p>
                    </li>
                  ))} */}
                </ul>
              </div>
              <hr className="my-2" />
              <div className="text-[8px] md:text-sm flex">
                <h2 className="font-bold mb-2 w-1/3">Portfolio</h2>
                {/* <p className="w-2/3">
                  <a
                    href={candidate.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                  >
                    {candidate.portfolio}
                  </a>
                </p> */}
              </div>
              <hr className="my-2" />
              <div className="text-[8px] md:text-sm flex">
                <h2 className="w-1/3 font-bold mb-2">Accomplishment</h2>
                {/* <p className="w-2/3">{candidate.bio}</p> */}
              </div>
            </div>
       

        <button className="bg-blue-500 text-white px-2 py-1 mt-2 mb-6">
          <span>Download PDF</span>
        </button>
      </div>
    </>
  );
};

export default Resume;
