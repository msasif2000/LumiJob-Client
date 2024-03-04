import { useState } from "react";
import TeamCard from "./TeamCard";
const TaskDetails = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="max-w-screen-2xl mx-auto py-3 px-4">

            <div className="lg:flex py-6">
                <div className="flex flex-col lg:w-3/4 space-y-3 pb-10 lg:pb-0">
                    <img src="https://i.ibb.co/KxKCszF/1-Svz-Kct-RCi8bw-B0-QPd-OZk-BP0p-Rhs-Oq-Zpl0wjs6y0.png" className="w-full" alt="" />
                    <h2 className="text-3xl font-heading font-semibold">
                        Task management website
                    </h2>
                    <div>
                        <p className="flex items-center gap-2 text-gray-600 text-lg font-medium">
                            Website
                        </p>
                    </div>
                    <div className="text-lg font-normal text-gray-500">
                        <p>2-2-2024</p>
                    </div>
                    <div className="text-lg font-normal">
                        <p
                            className="text-lg xl:text-xl "
                        >
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur fugit, veniam dolore minus, ab voluptate ut illo dicta necessitatibus earum vero. Voluptas nulla doloribus nisi modi maiores, earum, iure cum facere repellendus, eligendi officiis beatae quaerat possimus praesentium eaque quae fuga tenetur. Quibusdam ullam sit repudiandae, possimus, cum delectus in laborum animi iusto quisquam similique impedit eveniet quis sunt debitis maxime. Unde omnis ipsam rerum vel vero sequi aspernatur distinctio architecto ad. Explicabo ullam veniam id iusto optio, suscipit alias doloribus eligendi necessitatibus qui,<br /> voluptates officia ipsam consequatur labore! Eos nisi porro quaerat tenetur illo expedita temporibus quos! Aliquid quos animi nesciunt rerum reprehenderit doloribus impedit eum inventore commodi! Sed odio minus repellat dolores laborum, dolorum dicta architecto nemo id similique obcaecati voluptates assumenda ipsam blanditiis quas omnis? Libero soluta cupiditate dicta deserunt odio sunt esse ab. Dicta rerum aperiam placeat id at nostrum tempore enim officia laudantium? Minus, veniam dolor? Earum blanditiis veniam autem mollitia quo esse molestias modi accusantium exercitationem assumenda atque excepturi explicabo iure quas officiis quidem ut soluta fugiat rerum, itaque rem. Saepe iste voluptatem nobis similique ullam obcaecati! Voluptatibus, vero, itaque maiores temporibus ipsum aperiam mollitia ea minima unde porro praesentium eaque modi recusandae. Porro, sit consequatur? Quia laboriosam ex eveniet, doloribus perspiciatis cumque cum itaque ab repudiandae temporibus omnis nesciunt, aperiam mollitia beatae cupiditate eligendi facilis, optio quisquam voluptate asperiores ratione obcaecati minima. Magnam, fugiat doloribus perspiciatis laudantium nesciunt placeat corrupti esse sint sunt enim iusto voluptate repellendus suscipit, quasi eos, sit eaque exercitationem <br /> sapiente eius accusamus! Similique minima animi blanditiis veritatis esse vel temporibus et fugiat fuga, quidem nesciunt eius consequuntur earum dolor quaerat autem. Doloribus labore eius deserunt mollitia maxime quaerat reprehenderit impedit adipisci eligendi. At voluptas, quisquam sed, rem enim, incidunt fugit obcaecati atque molestiae fugiat nulla dignissimos aut dolor vel? <br />
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur fugit, veniam dolore minus, ab voluptate ut illo dicta necessitatibus earum vero. Voluptas nulla doloribus nisi modi maiores, earum, iure cum facere repellendus, eligendi officiis beatae quaerat possimus praesentium eaque quae fuga tenetur. Quibusdam ullam sit repudiandae, possimus, cum delectus in laborum animi iusto quisquam similique impedit eveniet quis sunt debitis maxime. Unde omnis ipsam rerum vel vero sequi aspernatur distinctio architecto ad. Explicabo ullam veniam id iusto optio, suscipit alias doloribus eligendi necessitatibus qui,<br /> voluptates officia ipsam consequatur labore! Eos nisi porro quaerat tenetur illo expedita temporibus quos! Aliquid quos animi nesciunt rerum reprehenderit doloribus impedit eum inventore commodi! Sed odio minus repellat dolores laborum, dolorum dicta architecto nemo id similique obcaecati voluptates assumenda ipsam blanditiis quas omnis? Libero soluta cupiditate dicta deserunt odio sunt esse ab. Dicta rerum aperiam placeat id at nostrum tempore enim officia laudantium? Minus, veniam dolor? Earum blanditiis veniam autem mollitia quo esse molestias modi accusantium exercitationem assumenda atque excepturi explicabo iure quas officiis quidem ut soluta fugiat rerum, itaque rem. Saepe iste voluptatem nobis similique ullam obcaecati! Voluptatibus, vero, itaque maiores temporibus ipsum aperiam mollitia ea minima unde porro praesentium eaque modi recusandae. Porro, sit consequatur? Quia laboriosam ex eveniet, doloribus perspiciatis cumque cum itaque ab repudiandae temporibus omnis nesciunt, aperiam mollitia beatae cupiditate eligendi facilis, optio quisquam voluptate asperiores ratione obcaecati minima. Magnam, fugiat doloribus perspiciatis laudantium nesciunt placeat corrupti esse sint sunt enim iusto voluptate repellendus suscipit, quasi eos, sit eaque exercitationem <br /> sapiente eius accusamus! Similique minima animi blanditiis veritatis esse vel temporibus et fugiat fuga, quidem nesciunt eius consequuntur earum dolor quaerat autem. Doloribus labore eius deserunt mollitia maxime quaerat reprehenderit impedit adipisci eligendi. At voluptas, quisquam sed, rem enim, incidunt fugit obcaecati atque molestiae fugiat nulla dignissimos aut dolor vel?
                        </p>
                    </div>
                </div>
                {/* article */}
                <div className="lg:w-1/4 lg:ml-10 ">
                    <div className="p-4 border-2 rounded-lg flex justify-between items-center">
                        <div>
                            <p className="text-lg font-semibold">Create Team</p>
                            <p className="text-sm text-gray-500">Each team required 6 member</p>
                        </div>
                        <button onClick={() => setOpenModal(true)} className="bg-gray-700 text-white p-2 rounded-lg">Create</button>
                        <div onClick={() => setOpenModal(false)} className={`fixed flex justify-center items-center z-[100] ${openModal ? 'visible opacity-1' : 'invisible opacity-0'} inset-0 w-full h-full backdrop-blur-sm bg-black/20 duration-100`}>
                            <div onClick={(e_) => e_.stopPropagation()} className={`absolute w-full lg:w-[500px] bg-white drop-shadow-2xl rounded-lg ${openModal ? 'opacity-1 duration-300 translate-y-0' : '-translate-y-20 opacity-0 duration-150'}`}>
                                <form  className="p-12">
                                    <svg onClick={() => setOpenModal(false)} className="w-10 mx-auto mr-0 cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="#000000"></path></g></svg>
                                    <h1 className="backdrop-blur-sm text-4xl pb-8">Create Team</h1>
                                    <div className="space-y-5">
                                        <label htmlFor="teamName" className="block">Team Name*</label>
                                        <div className="relative">
                                            <input id="teamName" name="teamName" type="text" required placeholder="Enter Team Name" className="p-3 block w-full  drop-shadow-lg rounded-lg outline-none" />

                                        </div>

                                        {/* Leader */}
                                        <label htmlFor="leaderName" className="block">Leader Name*</label>
                                        <div className="relative">
                                            <input id="leaderName" name="leaderName" type="text" required placeholder="Enter Leader Name" className="p-3 block w-full  drop-shadow-lg rounded-lg outline-none" />
                                        </div>

                                        {/* Link  */}
                                        <label htmlFor="discordLink" className="block">Discode Channel Link</label>
                                        <div className="relative">
                                            <input id="discordLink" name="discordLink" type="text" placeholder="Enter Discode Channel Link" className="p-3 block w-full  drop-shadow-lg rounded-lg outline-none" />
                                        </div>


                                        <div className="relative">
                                            <input id="rules" type="checkbox" required />
                                            <label htmlFor="rules" className="ml-2">Accept Collabration Rules</label>

                                        </div>
                                    </div>
                                    <button type="submit" className="py-2 px-5 mb-4 mt-6 shadow-lg rounded-lg before:block before:-left-1 before:-top-1 before:bg-black before:rounded-lg before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-black after:rounded-lg after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white relative inline-block">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* <div className="p-3 hover:bg-blue-100 duration-500 mt-4 border-2 rounded-lg flex justify-between items-center">
                        <div>
                            <p className="text-lg font-semibold text-center">Rules</p>
                        </div>
                    </div> */}



                    <p className="text-lg font-semibold mt-6 mb-1">Available Team</p>
                    <div className="space-y-4">
                        <TeamCard />


                    </div>

                </div>
            </div>
        </div>

    );
};

export default TaskDetails;