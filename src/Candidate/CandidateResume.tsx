// CandidateResume.tsx

import { Link} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { BiEdit } from "react-icons/bi";
import { useEffect, useState } from "react";

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

const CandidateResume: React.FC = () => {
    const [candidate, setCandidates] = useState<Candidate | null>(null);
    const { user } = useAuth();
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


    return (
        <>
            <div className="flex justify-between items-center px-5 pt-5">
                <div className="text-xl md:text-3xl font-semibold">Update Your Resume</div>
                <Link to="update">
                    <button className="btn">
                        <BiEdit></BiEdit>
                        Edit
                    </button>
                </Link>
            </div>
            <div className="p-5 bg-base-100">
                <div className="border-2 p-20">
                    {/* Head */}
                    <div>
                        <p className="text-[3rem]">{candidate?.name}</p>
                        <p className="text-[1.5rem]">{candidate?.position}</p>
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
                                                        <p>Node Js - Express Js - MongoDB</p>
                                                        <p>Firebase - REST Api - Redux</p>
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
                                                <p className="font-semibold text-violet-400 underline">
                                                    Portfolio
                                                </p>
                                                <p className="font-semibold text-violet-400 underline">
                                                    LinkedIn
                                                </p>
                                                <p className="font-semibold text-violet-400 underline">
                                                    Github
                                                </p>
                                                <p className="font-semibold text-violet-400 underline">
                                                    Certificates
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* right column */}
                        <div className="w-2/3">
                            {/* main container */}
                            <div className="space-y-10">
                                {/* Objective */}
                                <div className="space-y-3">
                                    <p className="text-[1.5rem] font-semibold">Objective</p>
                                    <p>
                                        I am a budding front-end developer with expertise in HTML,
                                        CSS, JavaScript, and React. I am passionate about crafting
                                        visually captivating and user-friendly interfaces. I have a
                                        strong command in both independent and collaborative
                                        projects. At present, I am actively pursuing opportunities
                                        for employment or internships to expand my skills and make
                                        meaningful contributions to significant projects.
                                    </p>
                                </div>
                                {/* Experience */}
                                <div className="space-y-3">
                                    <p className="text-[1.5rem] font-semibold">Experience</p>
                                    {/* exp1 */}
                                    <div>
                                        <p className="text-lg font-semibold">
                                            Sr Frontend Developer
                                        </p>
                                        <p>Google</p>
                                        <p className="py-3">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Tempore totam maxime mollitia nostrum perspiciatis
                                            consequuntur quibusdam incidunt, fuga corrupti quod, vel
                                            sequi, excepturi consequatur sunt. Non provident quibusdam
                                            placeat veniam.
                                        </p>
                                        <p>01/01/2020 - Current</p>
                                        <hr className="border-1 my-4" />
                                    </div>
                                    {/* exp2 */}
                                    <div>
                                        <p className="text-lg font-semibold">
                                            Jr Frontend Developer
                                        </p>
                                        <p>Google</p>
                                        <p className="py-3">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Tempore totam maxime mollitia nostrum perspiciatis
                                            consequuntur quibusdam incidunt, fuga corrupti quod, vel
                                            sequi, excepturi consequatur sunt. Non provident quibusdam
                                            placeat veniam.
                                        </p>
                                        <p>01/04/2017 - 01/01/2020</p>
                                        <hr className="border-1 my-4" />
                                    </div>
                                </div>
                                {/* Project */}
                                <div className="space-y-3">
                                    <p className="text-[1.5rem] font-semibold">Project</p>
                                    {/* exp1 */}
                                    <div>
                                        <p className="text-lg font-semibold">InventiSync</p>
                                        <p>Inventory Management Software</p>
                                        <ul className="py-3 list-disc ml-10">
                                            <li>Simple dashboard for business management</li>
                                            <li>Product management functionality</li>
                                            <li>Sales tracking and stock summury</li>
                                            <li>Qr code for easy product tracking</li>
                                            <li>User friendly design</li>
                                        </ul>
                                        <p>Duration - 10 Days</p>
                                        <div className="my-4">
                                            <p className="font-semibold text-violet-400 underline">
                                                Github
                                            </p>
                                           
                                        </div>
                                    </div>
                                </div>

                                {/* Education */}
                                <div className="space-y-3">
                                    <p className="text-[1.5rem] font-semibold">Education</p>
                                    {/* exp1 */}
                                    <div>
                                        <p className="text-lg font-semibold">CSE</p>
                                        <p>Daffodil International University</p>
                                        <p className="py-3">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Tempore totam maxime mollitia nostrum perspiciatis
                                            consequuntur quibusdam incidunt, fuga corrupti quod, vel
                                            sequi, excepturi consequatur sunt. Non provident quibusdam
                                            placeat veniam.
                                        </p>
                                        <p>01/01/2020 - Current</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CandidateResume;



