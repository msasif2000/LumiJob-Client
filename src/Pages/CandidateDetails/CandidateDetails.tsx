import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";

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

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toISOString().split('T')[0];
    }

    return (
        <div>
            <div className="container mx-auto mt-8">
                {candidate && ( // eta chara fetch howar agei load hoye undefined dekhabe
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/4">
                            <img
                                src={candidate.photo}
                                alt={candidate.name}
                                className="rounded-full w-40 h-40 mx-auto"
                            />
                            <h2 className="text-xl font-bold text-center mt-4">{candidate.name}</h2>
                            <p className="text-gray-500 text-center mt-2">{candidate.position}</p>
                            <div className="mt-4">
                                <h3 className="text-lg font-semibold">Contact Information</h3>
                                <p>Email: {candidate.email}</p>
                                <p>Phone: {candidate.phone}</p>
                                <p>Location: {candidate.city}, {candidate.country}</p>
                            </div>
                            <div className="mt-4">
                                <h3 className="text-lg font-semibold">Availability</h3>
                                <p>{candidate.availability}</p>
                            </div>
                            <div className="mt-4">
                                <h3 className="text-lg font-semibold">Work Preference</h3>
                                <p>{candidate.work}</p>
                            </div>
                            <div className="mt-4">
                                <h3 className="text-lg font-semibold">Salary Range</h3>
                                <p>{candidate.salaryRangeMin} - {candidate.salaryRangeMax}</p>
                            </div>
                        </div>
                        <div className="md:w-3/4 mt-4 md:mt-0 md:ml-8">
                            <h3 className="text-lg font-semibold">About Me</h3>
                            <p>{candidate.bio}</p>
                            <h3 className="text-lg font-semibold mt-4">Skills</h3>
                            <ul className="list-disc list-inside">
                                {candidate.skills.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                            <h3 className="text-lg font-semibold mt-4">Education</h3>
                            <ul>
                                {candidate.education.map((edu, index) => (
                                    <li key={index}>
                                        <p>{edu.degree} in {edu.subject}</p>
                                        <p>{edu.university}</p>
                                        <p>{formatDate(edu.fromDate)} - {formatDate(edu.toDate)}</p>
                                    </li>
                                ))}
                            </ul>
                            <h3 className="text-lg font-semibold mt-4">Experience</h3>
                            <ul>
                                {candidate.experienceDetails.map((exp, index) => (
                                    <li key={index}>
                                        <p>{exp.position} at {exp.company}</p>
                                        <p>{formatDate(exp.fromDate)} - {formatDate(exp.toDate)}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CandidateDetails;
