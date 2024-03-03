import TeamCard from "./TeamCard";

const TaskDetails = () => {
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
                        <button className="btn btn-primary">Create</button>
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