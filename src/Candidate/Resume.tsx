import React, { useEffect, useState } from 'react';
import { LuDot } from 'react-icons/lu';


interface Candidate {
    name: string;
    email: string;
    phone: string;
    location: string;
    education: string;
    work_experience: string;
    positions_responsibility: string;
    training_courses: string;
    academic_personal_projects: string;
    skills: string[];
    portfolio: string;
    accomplishment: string;
}

const Resume: React.FC = () => {
    const [candidates, setCandidates] = useState<Candidate[] | null>(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('../../public/singleCandidate.json');
                const data = await response.json();
                setCandidates(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    console.log(candidates);

    return (
        <div className="mx-auto max-w-2xl">
            <h2 className="text-center text-4xl font-semibold my-6">Resume</h2>
            {candidates ? (
                candidates.map((candidate, index) => (
                    <div key={index} className="mb-8 border-2 p-10 text-gray-700 ">
                        <div>
                            <h1 className="text-xl font-bold mb-1">{candidate.name}</h1>
                            <p className="text-sm text-gray-700 mb-1">
                                 {candidate.email}
                            </p>
                            <p className="text-sm text-gray-700 mb-1">
                                 {candidate.phone}
                            </p>
                            <p className="text-xs text-gray-700">{candidate.location}</p>
                        </div>
                        <hr className="my-2" />
                        <div className="text-sm flex">
                            <h2 className=" w-1/3 font-bold mb-2">Education</h2>
                            <p className=' w-2/3'>{candidate.education}</p>
                        </div>
                        <hr className="my-2" />
                        <div className="text-sm flex">
                            <h2 className=" w-1/3 font-bold mb-2">Work Experience</h2>
                            <div className='w-2/3'><p>{candidate.positions_responsibility}</p>
                            <p>{candidate.work_experience}</p></div>
                        </div>
                        <hr className="my-2" />
                        <div className="text-sm flex">
                            <h2 className=" font-bold mb-2 w-1/3">Training Courses</h2>
                            <p className=' w-2/3'>{candidate.training_courses}</p>
                        </div>
                        <hr className="my-2" />
                        <div className="text-sm flex">
                            <h2 className=" font-bold mb-2 w-1/3">
                                Projects</h2>
                            <p className=' w-2/3'>{candidate.academic_personal_projects}</p>
                        </div>
                        <hr className="my-2" />
                        <div className="text-sm flex">
                            <h2 className=" font-bold mb-2 w-1/3">Skills</h2>
                            <ul className=' w-2/3'>
                                {candidate.skills.map((skill, skillIndex) => (
                                    <li key={skillIndex}><p className="flex items-center"><LuDot /> {skill}</p></li>
                                ))}
                            </ul>
                        </div>
                        <hr className="my-2" />
                        <div className="text-sm flex">
                            <h2 className=" font-bold mb-2 w-1/3">Portfolio</h2>
                            <p className=' w-2/3'>
                                <a href={candidate.portfolio} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                                    {candidate.portfolio}
                                </a>
                            </p>
                        </div>
                        <hr className="my-2" />
                        <div className="text-sm flex">
                            <h2 className=" w-1/3 font-bold mb-2">Accomplishment</h2>
                            <p className=' w-2/3'>{candidate.accomplishment}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Resume;
