import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import toast, { Toaster } from 'react-hot-toast';
interface TeamData {
    teamName: string;
    coloredText: any;
    id: number;
    _id: string;
    name: string;
    title: string;
    img: string;
    members: any;
    member: string;
    designation: string;
}

interface Prop {
    teams: TeamData[],
    challengeId: any | null

}

const TeamCard: React.FC<Prop> = ({ teams, challengeId }) => {
    const { user, name, photo } = useAuth()
    const [isOpen, setIsOpen] = useState<number | null>(null);
    const axiosPublic = useAxiosPublic()
    const [leader, setLeader] = useState(false)
    console.log(leader);

    const handleToggle = (idx: number) => setIsOpen(prevIdx => prevIdx === idx ? null : idx);

    const handleJoin = (id: string) => {
        const memberName = name;
        const memberEmail = user.email;
        const memberImg = photo;

        const designation = "Member";
        const teamId = id;
        const cId = challengeId;

        const teamData = { memberName, memberEmail, memberImg, designation, teamId, cId }
        console.log(teamData);
        axiosPublic.post("/add-team-member", teamData)
            .then(res => {
                console.log(res.data);

                if (res.data.message === "Join Request Sent") {
                    toast.success("Join Request Sent");
                }
                if (res.data.message === "Already have a team with this member") {
                    toast.error("Already joined");
                }
              
            })
    }

    const handleRemove = (email: string, teamId: string) => {

        const data = { email, id: challengeId, teamId: teamId };

        axiosPublic
            .post("/remove-team-member", data)
            .then((res) => {
                if (res.data.message === "Member removed successfully") {
                    toast.success("Member remove successfully",)

                } else {
                    toast.error("Remove failed");
                }
              
            })
            .catch((error) => {
                console.log(error);
                toast.error("Something went wrong");
            });
    };

    const handleAccept = (email: string, teamId: string) => {
        const data = { email, id: challengeId, teamId: teamId };
        console.log(data);
        axiosPublic
            .post("/approveMember", data)
            .then((res) => {
                if (res.data.message === "Member approved successfully") {
                    toast.success("Member approved successfully",)

                } else {
                    toast.error("Add failed");
                }

            })
            .catch((error) => {
                console.log(error);
                toast.error("Something went wrong");
            });
    }




    return (
        <div className="my-5  rounded-lg">
            {teams?.map((data, idx) => (
                <div key={data._id} className='border-2 rounded-lg my-2'>
                    <div onClick={() => handleToggle(idx)} className={`${idx === teams.length - 1 ? "border-none" : "border-b border-gray-400/10"} py-4 px-6 flex items-center gap-4`}>
                        <div className="flex-1">
                            <div className='flex justify-between items-center'>
                                <p className="font-medium text-lg ">{data?.teamName}</p>

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
                                    {
                                        user ?
                                            <button onClick={() => handleJoin(data._id)} className="btn btn-sm bg-blue-400">Join Request</button> :
                                            <button className="btn btn-sm bg-blue-400 disabled">Join Request</button>
                                    }
                                </div>
                                {
                                    data?.members?.map((member: {
                                        img: string | undefined; name: string | undefined; email: string | undefined; designation: string | undefined; status: string | undefined; title: string | undefined

                                    }, idx: React.Key | null | undefined) => (
                                        <div>
                                            {
                                                member?.status === "pending" ?

                                                    <div key={idx} className='opacity-30'>
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



                                                            {
                                                                leader ? <div className='flex items-center gap-2'>
                                                                    <button onClick={() => member?.email && handleRemove(member.email, data._id)}> ❌ </button>
                                                                    <button onClick={() => member?.email && handleAccept(member.email, data._id)}> ✔️ </button>
                                                                </div> :
                                                                    <div className="badge badge-primary">
                                                                        Pending
                                                                    </div>
                                                            }


                                                        </div>

                                                    </div>
                                                    :
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
                                                            <div className="badge badge-primary badge-sm">
                                                                {member.designation}
                                                            </div>
                                                            <div className='hidden'>
                                                                {
                                                                    `${user?.email === member?.email && member?.designation === "Leader" ?
                                                                        useEffect(() => { setLeader(true) }) : useEffect(() => { setLeader(false) })}`
                                                                }
                                                            </div>
                                                        </div>

                                                    </div>
                                            }
                                        </div>

                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            ))
            }
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div >
    );
};

export default TeamCard;