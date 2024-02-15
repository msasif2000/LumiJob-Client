// Resume.tsx

import React, { useEffect, useState } from "react";
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
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    if (user?.email) {
      axiosPublic
        .get(`/specific-candidate/${user.email}`)
        .then((res) => {
          setCandidates(res.data);
          console.log(res.data);
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
        btn2="Complete Resume"
        handleClick2={handleUpdate}
      />
      <div className="p-5 bg-base-100">
        <div className="border-2 p-20">
          {/* Head */}
          <div>
            <p className="text-[3rem]">{candidate?.name}</p>
            <p className="text-[1.5rem]">{candidate?.position}</p>
          </div>

          {/* Body */}
          <div className="w-full pt-16">
            {/* left column */}
            <div className="w-1/3">
              {/* contact information */}
              <div className="space-y-3">
                <p className="text-[1.5rem] font-semibold">Details</p>
                {/* Per section */}

                <div className="space-y-10">
                  {/* Details section */}
                  <div>
                    <div className="space-y-3">
                      <>
                        <div className="space-y-2">
                          <p className="font-semibold">Address</p>
                          <div>
                            <p>Kalma</p>
                            <p>Savar, Dhaka 1341</p>
                            <p>Bnagladesh</p>
                          </div>
                        </div>
                      </>

                      <>
                        <div className="space-y-2">
                          <p className="font-semibold">Phone</p>

                          <p>+8801992787306</p>
                        </div>
                      </>

                      <>
                        <div className="space-y-2">
                          <p className="font-semibold">Email</p>

                          <p>rifat@gmail.com</p>
                        </div>
                      </>
                    </div>
                  </div>
                  {/* Skills section */}
                  <div>
                    <div className="space-y-3">
                      <p className="text-[1.5rem] font-semibold">Skills</p>

                      <>
                        <div className="space-y-2">
                          <p className="font-semibold">Expert</p>

                          <p>HTML - CSS - Tailwind CSS</p>
                        </div>
                      </>

                      <>
                        <div className="space-y-2">
                          <p className="font-semibold">Comfortable</p>

                          <p>React Js - Javascript - Typescript</p>
                        </div>
                      </>

                      <>
                        <div className="space-y-2">
                          <p className="font-semibold">Familiar</p>

                          <div>
                            <p>React Js - Javascript - Typescript</p>
                            <p>React Js - Javascript - Typescript</p>
                            <p>React Js - Javascript - Typescript</p>
                          </div>
                        </div>
                      </>

                      <>
                        <div className="space-y-2">
                          <p className="font-semibold">Tools</p>

                          <p>Vs Code - Git - Github</p>
                        </div>
                      </>
                    </div>
                  </div>
                  {/* Soft Skills */}
                  <div>
                    <div className="space-y-3">
                      <p className="text-[1.5rem] font-semibold">Soft Skills</p>

                      <div className="space-y-1">
                        <p>Empathy</p>
                        <p>Time Management</p>
                        <p>Adaptability</p>
                        <p>Determination</p>
                      </div>
                    </div>
                  </div>
                  {/* Languages */}
                  <div>
                    <div className="space-y-3">
                      <p className="text-[1.5rem] font-semibold">Languages</p>

                      <div className="space-y-1">
                        <p>Bangla</p>
                        <p>English</p>
                        <p>Hindi</p>
                        <p>Urdu</p>
                      </div>
                    </div>
                  </div>
                  {/* Links */}
                  <div>
                    <div className="space-y-3">
                      <p className="text-[1.5rem] font-semibold">Links</p>

                      <div className="space-y-1">
                        <p className="underline">Portfolio</p>
                        <p className="underline">LinkedIn</p>
                        <p className="underline">Github</p>
                        <p className="underline">Certificates</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            {/* right column */}
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
