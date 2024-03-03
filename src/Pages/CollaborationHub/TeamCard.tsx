import React, { useState } from 'react';

interface AccordionData {
    title: string;
    coloredText: string;
    description: string;
}

const TeamCard: React.FC = () => {
    const [isOpen, setIsOpen] = useState<number | null>(null);

    const accordionsData: AccordionData[] = [{ title: "Dav Dynasty", coloredText: "fix now", description: 'To create an account, click on the "Sign Up" button and fill out the required information. Once done, you can enjoy the benefits of being a registered member.', }, { title: "Team Alpa", coloredText: "", description: "Our return policy allows you to return items within 30 days of purchase. Please visit our returns page for detailed instructions and to initiate a return.", }, { title: "Shaka Laka Boom Boom", coloredText: "Complete your profile", description: "Yes, you can change your shipping address before your order is shipped. Go to your account settings and update the shipping information accordingly.", }]
    const handleToggle = (idx: number) => setIsOpen(prevIdx => prevIdx === idx ? null : idx);

    return (
        <div className="my-5  rounded-lg">
            {accordionsData.map((data, idx) => (
                <div key={idx}>
                    <div onClick={() => handleToggle(idx)} className={`${idx === accordionsData.length - 1 ? "border-none" : "border-b border-gray-400/10"} py-4 px-6 flex items-center gap-4`}>
                        <div className="flex-1">
                            <div className='flex justify-between items-center'>
                                <p className="font-medium text-lg ">{data?.title}</p>
                                <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                                    <div className="avatar">
                                        <div className="w-8">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-8">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-8">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-8">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
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
                                <div >
                                    <div className="flex justify-between items-center">
                                        <p className="text-lg font-semibold">Team Members</p>
                                        <button className="btn btn-sm bg-blue-400">Join Request</button>
                                    </div>
                                    <div className="flex justify-between items-center my-3 border-2 rounded-lg  p-2">
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src="https://i.ibb.co/qdh1BmN/christopher-campbell-r-DEOVt-E7v-Os-unsplash.jpg" alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Hart Hagerty</div>
                                                <div className="text-sm opacity-50">United States</div>
                                            </div>
                                        </div>
                                        <div className="badge badge-primary">
                                            Leader
                                        </div>

                                    </div>
                                    <div className="flex justify-between items-center my-3 border-2 rounded-lg  p-2">
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src="https://i.ibb.co/x2RN8Pq/vince-veras-AJIq-ZDAUD7-A-unsplash.jpgg" alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Hart Hagerty</div>
                                                <div className="text-sm opacity-50">United States</div>
                                            </div>
                                        </div>
                                        <div className="badge badge-primary">
                                            Member
                                        </div>

                                    </div>
                                    <div className="flex justify-between items-center my-3 border-2 rounded-lg  p-2">
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src="https://i.ibb.co/x2RN8Pq/vince-veras-AJIq-ZDAUD7-A-unsplash.jpgg" alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Hart Hagerty</div>
                                                <div className="text-sm opacity-50">United States</div>
                                            </div>
                                        </div>
                                        <div className="badge badge-primary">
                                            Member
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center my-3 border-2 rounded-lg  p-2">
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src="https://i.ibb.co/x2RN8Pq/vince-veras-AJIq-ZDAUD7-A-unsplash.jpgg" alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Hart Hagerty</div>
                                                <div className="text-sm opacity-50">United States</div>
                                            </div>
                                        </div>
                                        <div className="badge badge-primary">
                                            Member
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TeamCard;
