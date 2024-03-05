import React, { useEffect, useState } from 'react';
interface TeamData {
    team_name: string;
    coloredText: any;
    id: number;
    name: string;
    title: string;
    img: string;
    members: any;
    member: string;
    designation: string;
}

const TeamCard: React.FC = () => {
    const [isOpen, setIsOpen] = useState<number | null>(null);
    const [teamData, setTeamData] = useState<TeamData[] | null>(null);

    useEffect(() => {
        fetch("../../../public/teams.json")
            .then((res) => res.json())
            .then((data) => {
                setTeamData(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);


    const handleToggle = (idx: number) => setIsOpen(prevIdx => prevIdx === idx ? null : idx);

    return (
        <div className="my-5  rounded-lg">
            {teamData?.map((data, idx) => (
                <div key={idx} className='border-2 rounded-lg my-2'>
                    <div onClick={() => handleToggle(idx)} className={`${idx === teamData.length - 1 ? "border-none" : "border-b border-gray-400/10"} py-4 px-6 flex items-center gap-4`}>
                        <div className="flex-1">
                            <div className='flex justify-between items-center'>
                                <p className="font-medium text-lg ">{data?.team_name}</p>

                                <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                                    {data?.members?.map((member: { img: string | undefined; }, idx: React.Key | null | undefined) => (
                                        <div key={idx} className="avatar">
                                            <div className="w-8">
                                                <img src={member.img} />
                                            </div>
                                        </div>
                                    ))}

                                </div>



                            </div>
                        </div>
                        <div className={`duration-300 ease-in-out ${isOpen === idx ? "-rotate-90 " : null}`}>
                            <svg width={25} className="rotate-180" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <svg width={25} className="rotate-180" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M10 7L15 12L10 17" stroke="#a8a8a8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
                            </svg>
                        </div>
                    </div>
                    <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 ${isOpen === idx ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                        <div className='overflow-hidden'>
                            <div className={` p-6  `}>
                                    <div className="flex justify-between items-center">
                                        <p className="text-lg font-semibold">Team Members</p>
                                        <button className="btn btn-sm bg-blue-400">Join Request</button>
                                    </div>
                                {
                                    data?.members?.map((member: {
                                        title: string | undefined;
                                        img: string | undefined; name: string | undefined; designation: string | undefined;
                                    }, idx: React.Key | null | undefined) => (
                                        <div key={idx} >
                                            <div className="flex justify-between items-center my-3 border-2 rounded-lg  p-2">
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={member.img} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{member.name}</div>
                                                        <div className="text-sm opacity-50">{member.title}</div>
                                                    </div>
                                                </div>
                                                <div className="badge badge-primary">
                                                    {member.designation}
                                                </div>
                                            </div>

                                        </div>

                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TeamCard;
