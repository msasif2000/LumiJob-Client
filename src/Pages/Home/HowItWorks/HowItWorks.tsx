const HowItWorks = () => {
  return (
    <section className="max-w-screen-2xl mx-auto px-4 py-12">
      {/* =========> Section Title <========= */}
      <div className="py-12 grid grid-cols-1 lg:grid-cols-2 gap-4 ">
        <div>
          <h4 className="text-6xl font-hanken font-semibold">
            Navigating Success Through LumiJobs in
            <span className="font-bold text-gray-500"> 4</span> Simple Steps
          </h4>
        </div>
        <div className="flex justify-between items-center">
          <div className="w-3/4">
            <p>
              Your tech journey is not just a job search; it's an immersive
              experience with LumiJobs, guiding you toward professional triumphs
              in the dynamic world of technology.
            </p>
          </div>
          <button className="py-1 px-6 border border-gray-300 bg-black hover:bg-[#486DD9] text-white font-semibold text-base rounded h-10">
            Apply Now
          </button>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-5">
        {/* =========> Step: 1 <========= */}
        <div className="col-span-2 p-6 border rounded-md min-h-[25rem]">
          <div>
            <h4 className="text-2xl font-hanken font-semibold mb-4">
              Discover Opportunities
            </h4>
            <p>
              Uncover a myriad of tech opportunities tailored to your skills and
              aspirations. Explore real-time job listings from leading companies
              in diverse sectors. Our intuitive search filters empower you to
              find the perfect match, ensuring your journey begins with
              precision.
            </p>
          </div>
        </div>

        {/* =========> Step: 2 <========= */}
        <div className="col-span-4 p-6 border rounded-md">
          <div className="max-w-[75%]">
            <h4 className="text-2xl font-hanken font-semibold mb-4">
              Craft Your Profile
            </h4>
            <p>
              Elevate your professional presence with a personalized profile
              that showcases your skills, experience, and unique qualities.
              Tailor your digital resume to stand out in the competitive tech
              landscape. The platform's user-friendly interface makes profile
              customization a seamless experience.
            </p>
          </div>
        </div>

        {/* =========> Step: 3 <========= */}
        <div className="col-span-4 p-6 border rounded-md">
          <div className="max-w-[75%]">
            <h4 className="text-2xl font-hanken font-semibold mb-4">
              Effortless Application Process
            </h4>
            <p>
              Navigate through the hiring process with a one-click "Quick Apply"
              feature. Express your interest efficiently and effectively,
              streamlining your applications across a spectrum of tech
              opportunities. Track the status of your applications in real-time,
              providing transparency and control over your job-seeking journey.
            </p>
          </div>
        </div>

        {/* =========> Step: 4 <========= */}
        <div className="col-span-2 p-6 border rounded-md min-h-[25rem]">
          <div>
            <h4 className="text-2xl font-hanken font-semibold mb-4">
              Engage and Excel
            </h4>
            <p>
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
