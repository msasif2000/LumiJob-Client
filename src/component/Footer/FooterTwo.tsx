const FooterTwo = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-screen-2xl px-4 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-center sm:justify-start">
              <h3 className="text-3xl font-bold">
                Lumi<span className="text-[#4869DD]">Jobs</span>
              </h3>
            </div>

            <p className="max-w-md mx-auto mt-6 leading-relaxed text-center text-gray-500 sm:max-w-xs sm:mx-0 sm:text-left text-sm font-normal">
              LumiJobs is designed to revolutionize the hiring process by
              providing a feature-rich platform that caters to the diverse needs
              of both companies and job seekers.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 md:grid-cols-4">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium ">About</p>

              <nav className="mt-8">
                <ul className="space-y-4 text-base">
                  <li>
                    <a className=" transition hover:/75" href="/">
                      About Lumijobs
                    </a>
                  </li>

                  <li>
                    <a className=" transition hover:/75" href="/">
                      Terms & Conditions
                    </a>
                  </li>

                  <li>
                    <a className=" transition hover:/75" href="/">
                      Privacy Policy
                    </a>
                  </li>

                  <li>
                    <a className=" transition hover:/75" href="/">
                      Feedback
                    </a>
                  </li>
                  <li>
                    <a className=" transition hover:/75" href="/">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium ">Job Seekers</p>

              <nav className="mt-8">
                <ul className="space-y-4 text-base">
                  <li>
                    <a className=" transition hover:/75" href="/">
                      Find Jobs
                    </a>
                  </li>

                  <li>
                    <a className=" transition hover:/75" href="/">
                      Create Account
                    </a>
                  </li>

                  <li>
                    <a className=" transition hover:/75" href="/">
                      List of Features
                    </a>
                  </li>

                  <li>
                    <a className=" transition hover:/75" href="/">
                      Video Guides
                    </a>
                  </li>
                  <li>
                    <a className=" transition hover:/75" href="/">
                      FAQ
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium ">Recruiter</p>

              <nav className="mt-8">
                <ul className="space-y-4 text-base">
                  <li>
                    <a className=" transition hover:/75" href="/">
                      Create Account
                    </a>
                  </li>

                  <li>
                    <a className=" transition hover:/75" href="/">
                      Products/Service
                    </a>
                  </li>
                  <li>
                    <a className=" transition hover:/75" href="/">
                      Post a Job
                    </a>
                  </li>
                  <li>
                    <a className=" transition hover:/75" href="/">
                      FAQ
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium ">Helpful Links</p>

              <nav className="mt-8">
                <ul className="space-y-4 text-base">
                  <li>
                    <a className=" transition hover:/75" href="/">
                      FAQs
                    </a>
                  </li>

                  <li>
                    <a className=" transition hover:/75" href="/">
                      Support
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <div className="pt-6 mt-12 border-t border-gray-300">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-base text-gray-400">
              <a
                className="inline-block text-[#4E4AC1] underline transition"
                href="/"
              >
                Terms & Conditions
              </a>

              <span>&middot;</span>

              <a
                className="inline-block text-[#4E4AC1] underline transition "
                href="/"
              >
                Privacy Policy
              </a>
            </p>

            <p className="mt-4 text-base text-gray-500 sm:order-first sm:mt-0">
              <b>LumiJobs</b> &copy; {new Date().getFullYear()} all rights
              reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
