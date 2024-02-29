import { Link } from "react-router-dom";
import actionImg from "../../../assets/image/action.jpg";

const CallToAction = () => {
    return (
        <div className="xl:px-12 lg:px-8 md:px-6 px-2">
            <section className="max-w-7xl lg:my-4 mx-auto rounded relative overflow-hidden" style={{
                backgroundImage: `url(${actionImg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: "500px",
            }}>
                <div className="md:flex  items-center h-full lg:px-20 py-4 absolute top-0 left-0 right-0 bottom-0">
                    <div className="text-center text-white pl-4">
                        <h2 className="text-4xl font-bold font-heading mt-10 md:text-left text-center text-white">
                            Ready to get started?
                        </h2>
                        <p className="mt-2 text-slate-100">
                            "The secret of getting ahead is getting started."
                        </p>
                        <Link to="/signup" className="flex ">
                            <button className="bg-btnbg text-white px-8 py-2 rounded-lg mt-6">
                                Start Now
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CallToAction;
