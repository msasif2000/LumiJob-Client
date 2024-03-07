import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import GoToTop from "../../component/GoToTop/GoToTop";

interface Education {
  degree: string;
  subject: string;
  university: string;
  fromDate: string;
  toDate: string;
}

interface Experience {
  position: string;
  company: string;
  fromDate: string;
  toDate: string;
}

interface Candidate {
  name: string;
  photo: string;
  position: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  availability: string;
  work: string;
  salaryRangeMin: number;
  salaryRangeMax: number;
  bio: string;
  skills: string[];
  education: Education[];
  experienceDetails: Experience[];
}

const CandidateDetails = () => {
  const { id } = useParams<{ id: string }>();
  const axiosPublic = useAxiosPublic();
  const [candidate, setCandidate] = useState<Candidate | null>(null);

  useEffect(() => {
    axiosPublic
      .get(`/single-candidate/${id}`)
      .then((res) => {
        setCandidate(res.data as Candidate);
      })
      .catch((error) => console.log(error));
  }, [axiosPublic, id]);

  const formatDate = (dateString: string): string => {
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        throw new Error("Invalid date string");
      }
      return date.toISOString().split("T")[0];
    } catch (error) {
      console.error("Error formatting date");
      return "";
    }
  };

  return (
    <>
      <Helmet>
        <title> {`${candidate?.name}`} | Candidate Details</title>
      </Helmet>
      <GoToTop />

      <div className="max-w-screen-2xl mx-auto">
        <div className="mx-auto my-8 px-4 md:px-6 lg:px-20 2xl:px-12">
          {candidate && ( // eta chara fetch howar agei load hoye undefined dekhabe
            <div className="flex justify-between flex-col md:flex-row">
              <div className=" md:w-2/5 lg:w-1/4 xl:w-1/5">
                <img
                  src={candidate.photo}
                  alt={candidate.name}
                  className="rounded-full mx-auto"
                />
                <h2 className="text-xl font-bold  mt-4">{candidate.name}</h2>
                <p className="text-gray-500">{candidate.position}</p>

                <div className="mt-2">
                  <h3 className=" text-sm lg:text-base font-semibold">
                    Contact Information
                  </h3>
                  <p className=" text-xs opacity-90 md:text-sm">
                    Email: {candidate.email}
                  </p>
                  <p className=" text-xs opacity-90 md:text-sm">
                    Phone: {candidate.phone}
                  </p>
                  <p className=" text-xs opacity-90 md:text-sm">
                    Location: {candidate.city}, {candidate.country}
                  </p>
                </div>
                <div className="mt-2">
                  <h3 className=" text-sm lg:text-base font-semibold">
                    Availability
                  </h3>
                  <p className=" text-xs opacity-90 md:text-sm">
                    {candidate.availability}
                  </p>
                </div>
                <div className="mt-2">
                  <h3 className=" text-sm lg:text-base font-semibold">
                    Work Preference
                  </h3>
                  <p className=" text-xs opacity-90 md:text-sm">
                    {candidate.work}
                  </p>
                </div>
                <div className="mt-2">
                  <h3 className=" text-sm lg:text-base font-semibold">
                    Salary Range
                  </h3>
                  <p className=" text-xs opacity-90 md:text-sm">
                    {candidate.salaryRangeMin}$ - {candidate.salaryRangeMax}$
                  </p>
                </div>
              </div>
              <div className="md:w-3/5 lg:w-3/4 xl:w-4/6 mt-4 md:mt-0 md:ml-8">
                <h3 className="text-lg font-semibold">About Me</h3>
                <p>{candidate.bio}</p>
                <h3 className="text-lg font-semibold mt-4">Skills</h3>
                <ul className="list-disc list-inside grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {candidate.skills.map((skill, index) => (
                    <li
                      className="text-xs md:text-sm xl:text-base opacity-90"
                      key={index}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
                <h3 className="text-lg font-semibold mt-4">Education</h3>
                <ul>
                  {candidate.education.map((edu, index) => (
                    <li className="my-2" key={index}>
                      <p className="text-sm">
                        {edu.degree} in {edu.subject}
                      </p>
                      <p className="text-sm opacity-90">{edu.university}</p>
                      <p className=" opacity-80 text-sm">
                        From {formatDate(edu.fromDate)} to{" "}
                        {formatDate(edu.toDate)}
                      </p>
                    </li>
                  ))}
                </ul>
                <h3 className="text-lg font-semibold mt-4">Experience</h3>
                <ul>
                  {candidate.experienceDetails.map((exp, index) => (
                    <li className="my-2" key={index}>
                      <p className="text-sm">
                        {exp.position} at {exp.company}
                      </p>
                      <p className=" opacity-80 text-sm">
                        From {formatDate(exp.fromDate)} to{" "}
                        {formatDate(exp.toDate)}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CandidateDetails;
