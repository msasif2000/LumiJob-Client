import { Link } from "react-router-dom";
import actionImg from "../../../assets/image/action.jpg";

const CallToAction = () => {
    return (
        <div className="max-w-screen-2xl mx-auto py-16 px-4">
            <div className="md:flex justify-center gap-20 bg-accent rounded-xl">
                <div className=" flex flex-col items-start justify-center w-full lg:px-12 md:px-4 px-2">
                    <h2 className="text-4xl font-bold font-heading mt-10 md:text-left text-center text-white">
                        Ready to get started?
                    </h2>
                    <p className="my-2 text-sm md:text-lg xl:text-2xl text-slate-300">
                        "Ready to revolutionize your hiring process and enhance communication? Join us today and unlock the power of seamless recruitment and effective collaboration!"
                    </p>
                    <Link to="/signup" className="flex  pl-0 mb-8">
                        <button className="bg-btnbg text-white px-8 py-2 rounded-lg mt-2">
                            Start Now
                        </button>
                    </Link>
                </div>
                <div className="flex items-center justify-center py-2 w-full lg:px-12 px-2">
                    <img src={actionImg} alt="" className="xl:h-[350px] h-[300px]  w-full" />
                </div>
            </div>
        </div>
    );
};

export default CallToAction;
