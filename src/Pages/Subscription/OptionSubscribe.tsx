import React from 'react';
import { Link } from 'react-router-dom';

const OptionSubscribe: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-[#f0f0f0] via-[#fdf5f5] to-[#fffbfb] min-h-screen">
      <div className="max-w-screen-2xl mx-auto">
        <div className="hero min-h-screen">
          <div className="hero-content text-center">
            <div className="space-y-8">
              <h1 className="text-3xl font-bold">
                What kind of packages you want to see?
              </h1>
              <div className="md:flex justify-center space-x-5">

                <Link to={"/subscriptionsUiCompany"}>
                  <div className="card card-compact md:w-96 bg-base-100 hover:shadow-xl duration-500 ease-linear cursor-pointer">
                    <figure>
                      <img
                        src="https://i.postimg.cc/PJnXCF5v/1904-i402-011-Web-development-isometric-concept-infographics.jpg"
                        alt="Web Development"
                        className="h-72 w-full overflow-hidden"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="text-xl font-bold text-center">Company Subscription Packages</h2>
                    </div>
                  </div>
                </Link>

                <Link to={"/subscriptionsUiCandidate"}>
                  <div className="card card-compact md:w-96 bg-base-100 hover:shadow-xl duration-500 ease-linear cursor-pointer">
                    <figure>
                      <img
                        src="https://i.postimg.cc/LXm0Ct5g/18771.jpg"
                        alt="Job Seeker"
                        className="h-72 w-full overflow-hidden"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="text-xl font-bold text-center">
                        Candidate Subscription Packages
                      </h2>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionSubscribe;
