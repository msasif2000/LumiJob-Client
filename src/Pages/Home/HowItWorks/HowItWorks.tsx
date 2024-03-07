import finding from "../../../assets/image/finding.png";
import profile from "../../../assets/image/profile.png";
import application from "../../../assets/image/application.png";
import communication from "../../../assets/image/communication.png";

const HowItWorks = () => {
  return (
    <section className="max-w-screen-2xl mx-auto px-4 lg:px-20 py-12">
      {/* =========> Section Title <========= */}
      <div className="py-12 grid grid-cols-1 lg:grid-cols-2 gap-4 ">
        <div>
          <h4 className="text-4xl md:text-5xl 2xl:text-6xl font-heading font-semibold text-center lg:text-left">
            Navigating
            <span className="font-bold text-accentTwo"> Success </span> Through
            LumiJobs in 4
            <span className="font-bold text-accentTwo"> Simple </span>
            Steps
          </h4>
        </div>
        <div className="flex lg:justify-end items-center">
          <div className="w-full lg:w-3/4 text-center lg:text-left">
            <p className="text-md md:text-lg xl:text-base text-gray-600">
              Your tech journey is not just a job search; it's an immersive
              experience with LumiJobs, guiding you toward professional triumphs
              in the dynamic world of technology.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5">
        {/* =========> Step: 1 <========= */}
        <div className="lg:col-span-2 p-6 border rounded-md ">
          <div>
            <figure>
              <img src={finding} alt="finding" className="w-3/4 mx-auto" />
            </figure>
            <h4 className="text-2xl font-heading font-semibold mb-4">
              Discover Opportunities
            </h4>
            <p className="text-md md:text-lg xl:text-base text-gray-600">
              Uncover a myriad of tech opportunities tailored to your skills and
              aspirations. Explore real-time job listings from leading companies
              in diverse sectors. Our intuitive search filters empower you to
              find the perfect match, ensuring your journey begins with
              precision.
            </p>
          </div>
        </div>

        {/* =========> Step: 2 <========= */}
        <div className="lg:col-span-4 p-6 border rounded-md">
          <div className="lg:max-w-[75%]">
            <h4 className="text-2xl font-heading font-semibold mb-4">
              Craft Your Profile
            </h4>
            <p className="text-md md:text-lg xl:text-base text-gray-600">
              Elevate your professional presence with a personalized profile
              that showcases your skills, experience, and unique qualities.
              Tailor your digital resume to stand out in the competitive tech
              landscape. The platform's user-friendly interface makes profile
              customization a seamless experience.
            </p>
          </div>
          <figure>
            <img
              src={profile}
              alt="finding"
              className="w-full lg:w-3/4 mx-auto"
            />
          </figure>
        </div>

        {/* =========> Step: 3 <========= */}
        <div className="lg:col-span-4 p-6 border rounded-md">
          <div className="lg:max-w-[75%]">
            <h4 className="text-2xl font-heading font-semibold mb-4">
              Effortless Application Process
            </h4>
            <p className="text-md md:text-lg xl:text-base text-gray-600">
              Navigate through the hiring process with a one-click "Quick Apply"
              feature. Express your interest efficiently and effectively,
              streamlining your applications across a spectrum of tech
              opportunities. Track the status of your applications in real-time,
              providing transparency and control over your job-seeking journey.
            </p>
          </div>
          <figure>
            <img
              src={application}
              alt="application"
              className="w-full lg:w-3/4 mx-auto"
            />
          </figure>
        </div>

        {/* =========> Step: 4 <========= */}
        <div className="lg:col-span-2 p-6 border rounded-md flex flex-col justify-around ">
          <figure>
            <img
              src={communication}
              alt="communication"
              className="w-full  mx-auto"
            />
          </figure>
          <div>
            <h4 className="text-2xl font-heading font-semibold mb-4">
              Engage and Excel
            </h4>
            <p className="text-md md:text-lg xl:text-base text-gray-600">
              Immerse yourself in a vibrant tech community through interactive
              forums and industry-related events. Connect with hiring teams,
              tech professionals, and experts in your field. Receive real-time
              interview notifications, schedule with ease, and gather feedback
              to continuously refine and excel in your tech career.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
