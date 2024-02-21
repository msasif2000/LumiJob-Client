import cta from "../../../assets/signUp.jpg"

const CallToAction = () => {
    return (
        <div className="max-w-7xl m-4">
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-4xl font-bold text-center mt-10">
                    Ready to get started?
                </h2>
                <p className="text-lg text-center mt-4">
                    Create an account to find the best jobs that match your skills
                </p>
                <div className="">
                    <img src={cta} alt="" className="h-[400px] w-full"/>
                </div>
                <button className="bg-accent text-white px-8 py-2 rounded-lg mt-6">
                    Create Account
                </button>
            </div>

        </div>
    );
};

export default CallToAction;