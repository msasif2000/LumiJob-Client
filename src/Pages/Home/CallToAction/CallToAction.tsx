import { FcFlashOn, FcFactory, FcEmptyFilter, FcWorkflow, FcAndroidOs, FcApprove, FcDebt, FcConferenceCall, FcCollaboration, FcCalendar, FcBusinessman, FcApproval, FcBullish, FcBriefcase, FcBiotech, FcAssistant } from "react-icons/fc";
import { MdOutlineTroubleshoot, MdMonetizationOn } from "react-icons/md";
import { GiNetworkBars } from "react-icons/gi";
import { FaBattleNet } from "react-icons/fa";
import { Link } from "react-router-dom";
import backgroundImage from "../../../assets/image/banner-bg1.jpg";

const CallToAction = () => {
    const icons = [
        <FaBattleNet />,
        <GiNetworkBars />,
        <MdMonetizationOn />,
        <MdOutlineTroubleshoot />,
        <FcWorkflow />,
        <FcAndroidOs />,
        <FcApprove />,
        <FcApproval />,
        <FcAssistant />,
        <FcBiotech />,
        <FcBriefcase />,
        <FcBullish />,
        <FcBusinessman />,
        <FcCalendar />,
        <FcCollaboration />,
        <FcConferenceCall />,
        <FcDebt />,
        <FcEmptyFilter />,
        <FcFactory />,
        <FcFlashOn />
    ];

    const getRandomNumber = (min: number, max: number, exclude: number[] = []): number => {
        let num: number = Math.floor(Math.random() * (max - min)) + min;
        if (exclude.includes(num)) {
            return getRandomNumber(min, max, exclude);
        }
        return num;
    };

    const randomNumbers: number[] = [];
    for (let i = 0; i < icons.length; i++) {
        const num: number = getRandomNumber(0, 100, randomNumbers);
        randomNumbers.push(num);
    }

    return (
        <section className="bg-gray-50 max-w-7xl lg:my-4 mx-auto rounded-b-xl" style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        }}>
            <div className="md:flex justify-between items-center lg:px-20 px-4 py-4">
                <div className="w-full">
                    <h2 className="text-4xl font-bold font-heading mt-10 md:text-left text-center">
                        Ready to get started?
                    </h2>
                    <p className="mt-2">
                        "The secret of getting ahead is getting started."
                    </p>
                    <Link to="/signup" className="flex justify-center md:justify-start">
                        <button className="bg-btnbg text-white px-8 py-2 rounded-lg mt-6">
                            Start Now
                        </button>
                    </Link>
                </div>
                <div className="flex justify-center items-center h-96 w-full py-8">
                    <div className="h-full w-full relative">
                        {icons.map((Icon, index) => (
                            <div
                                key={index}
                                className="absolute text-5xl p-2 shadow-sm shadow-pink-200"
                                style={{
                                    top: `${randomNumbers[index]-6}%`,
                                    left: `${getRandomNumber(0, 80, randomNumbers)}%`,
                                    transform: `translate(-${getRandomNumber(0, 10)}%, -${getRandomNumber(0, 10)}%)`
                                }}
                            >
                                {Icon}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
