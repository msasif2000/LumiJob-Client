// CandidateResume.tsx

import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { BiEdit } from "react-icons/bi";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import GoToTop from "../component/GoToTop/GoToTop";
import useAxiosPublic from "../hooks/useAxiosPublic";

interface ExperienceData {
  company: string;
  position: string;
  details: string;
  fromDate: string | null;
  toDate: string | null;
}

interface LinkData {
  name: string;
  link: string;
}
interface ProjectData {
  title: string;
  link: string;
  description: string;
}

interface EducationData {
  university: string;
  degree: string;
  subject: string;
  fromDate: string | null;
  toDate: string | null;
}

interface Candidate {
  name: string;
  email: string;
  phone: string;
  designation: string;
  objective: string;
  skills: string[];
  experience: number;
  education: EducationData[];
  experienceDetails: ExperienceData[];
  link: LinkData[];
  project: ProjectData[];
  photo: string;
  village: string;
  city: string;
  country: string;
  availability: string;
  position: string;
  work: string;
  salaryRangeMin: number;
  salaryRangeMax: number;
}

const CandidateResume: React.FC = () => {
  const [candidate, setCandidates] = useState<Candidate | null>(null);
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();


  useEffect(() => {
    const fetchData = async () => {
      if (user?.email) {
        try {
          const res = await axiosPublic.get(`/specific-candidate/${user.email}`);
          setCandidates(res.data);
        } catch (err) {
          console.log(err);
        }
      }
    };

    fetchData();
  }, [user]);

  const {
    name,
    email,
    phone,
    designation,
    objective,
    skills,
    education,
    experienceDetails,
    link,
    project,
    photo,
    village,
    city,
    country,
  } = candidate || {};


  return (
    <>
      <Helmet>
        <title>Resume | Dashboard</title>
      </Helmet>
      <GoToTop />
      <div className="flex justify-between items-center px-5 pt-3">
        <div className="text-xl md:text-3xl font-semibold">
          Update Your Resume
        </div>
        <Link to="update">
          <button className="btn">
            <BiEdit></BiEdit>
            Edit
          </button>
        </Link>
      </div>
      <div className="p-5 bg-base-100">
        <div className="border-2 p-16">
          {/* Head */}
          <div className="flex justify-between items-center">
            <div>
              {name ? <p className="text-[3rem]">{name}</p> : null}
              {designation ? (
                <p className="text-[1.5rem]">{designation}</p>
              ) : null}
            </div>
            <div>
              {photo ? (
                <div className="avatar">
                  <div className="w-40 rounded border p-1">
                    <img src={photo} />
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          {/* Body */}
          <div className="w-full flex pt-16">
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
                        {city || village || country ? (
                          <div className="space-y-2">
                            <p className="font-semibold">Address</p>
                            <div>
                              <p>{village}</p>
                              <p>{city}</p>
                              <p>{country}</p>
                            </div>
                          </div>
                        ) : null}
                      </>

                      <>
                        {phone ? (
                          <div className="space-y-2">
                            <p className="font-semibold">Phone</p>

                            <p>{phone}</p>
                          </div>
                        ) : null}
                      </>

                      <>
                        {email ? (
                          <div className="space-y-2">
                            <p className="font-semibold">Email</p>

                            <p>{email}</p>
                          </div>
                        ) : null}
                      </>
                    </div>
                  </div>
                  {/* Skills section */}
                  <div>
                    {skills?.length ? (
                      <div className="space-y-3">
                        <p className="text-[1.5rem] font-semibold">Skills</p>

                        <>
                          <div className="space-y-2">
                            {skills.map((skill, index) => (
                              <p key={index}>{skill}</p>
                            ))}
                          </div>
                        </>
                      </div>
                    ) : null}
                  </div>
                  {/* Soft Skills */}
                  {/* <div>
                                        <div className="space-y-3">
                                            <p className="text-[1.5rem] font-semibold">Soft Skills</p>

                                            <div className="space-y-1">
                                                <p>Empathy</p>
                                                <p>Time Management</p>
                                                <p>Adaptability</p>
                                                <p>Determination</p>
                                            </div>
                                        </div>
                                    </div> */}
                  {/* Languages */}
                  {/* <div>
                                        <div className="space-y-3">
                                            <p className="text-[1.5rem] font-semibold">Languages</p>

                                            <div className="space-y-1">
                                                <p>Bangla</p>
                                                <p>English</p>
                                                <p>Hindi</p>
                                                <p>Urdu</p>
                                            </div>
                                        </div>
                                    </div> */}

                  {/* Links */}
                  {link?.length ? (
                    <div>
                      <div className="space-y-3">
                        <p className="text-[1.5rem] font-semibold">Links</p>
                        {link.map((link, index) => (
                          <div className="space-y-1" key={index}>
                            <a
                              className="font-semibold text-violet-400 underline"
                              href={link.link}
                            >
                              {link.name}
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>

            {/* right column */}
            <div className="w-2/3">
              {/* main container */}
              <div className="space-y-10">
                {/* Objective */}
                {objective ? (
                  <div className="space-y-3">
                    <p className="text-[1.5rem] font-semibold">Objective</p>
                    <p>{objective}</p>
                  </div>
                ) : null}
                {/* Experience */}
                {experienceDetails ? (
                  <div className="space-y-3">
                    <p className="text-[1.5rem] font-semibold">Experience</p>
                    {experienceDetails.map((experience, index) => (
                      <div key={index}>
                        <p className="text-lg font-semibold">
                          {experience.position}
                        </p>
                        <p>{experience.company}</p>
                        <p className="py-3">{experience.details}</p>
                        <p>
                          {experience?.fromDate?.slice(0, 10)} -{" "}
                          {experience?.toDate?.slice(0, 10)}
                        </p>
                        <hr className="border-1 my-4" />
                      </div>
                    ))}
                  </div>
                ) : null}
                {/* Project */}
                {project ? (
                  <div className="space-y-3">
                    <p className="text-[1.5rem] font-semibold">Project</p>
                    {/* exp1 */}
                    {project.map((proj, index) => (
                      <div key={index}>
                        <p className="text-lg font-semibold">{proj.title}</p>
                        <p>{proj.description}</p>

                        <div className="my-4">
                          <a
                            href={proj.link}
                            className="font-semibold text-violet-400 underline"
                          >
                            Github
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}

                {/* Education */}
                {education ? (
                  <div className="space-y-4">
                    <p className="text-[1.5rem] font-semibold">Education</p>
                    {education.map((edu, index) => (
                      <div key={index}>
                        <p className="text-lg font-semibold">{edu.degree}</p>
                        <p>{edu.subject}</p>
                        <p className="font-semibold">{edu.university}</p>
                        <p>
                          {edu?.fromDate?.slice(0, 10)} -{" "}
                          {edu?.toDate?.slice(0, 10)}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CandidateResume;
