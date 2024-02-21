import { Link } from "react-router-dom";
import cta from "../../../assets/signUp.jpg"

const CallToAction = () => {
    return (
        <div className="max-w-7xl lg:my-4 bg-[#dbe4ff] mx-auto">
            <div className="md:flex  justify-between items-center lg:px-12 px-4 py-4">
                <div>
                    <h2 className="text-4xl font-bold font-heading mt-10 md:text-left text-center">
                        Ready to get started?
                    </h2>
                    <Link to="/signup" className="flex justify-center md:justify-start">
                        <button className="bg-btnbg text-white px-8 py-2 rounded-lg mt-6">
                            Create Account
                        </button>
                    </Link>
                </div>
                <div className="md:flex md:mt-0 mt-4">
                    <img src={cta} alt="" className="h-[400px] w-full rounded-xl shadow-lg shadow-pink-400" />
                </div>

            </div>

        </div>
    );
};

export default CallToAction;