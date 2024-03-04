import React from "react";
import { FaListAlt, FaUserEdit, FaComments, FaCalendarCheck, FaFilter, FaBookmark, FaHandPointer, FaChartBar, FaClipboardCheck, FaClock, FaStar } from 'react-icons/fa';

const Features: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-3xl mx-auto text-justify">
                <h1 className="text-3xl font-bold mb-8">Key Features</h1>
                
                <div>
                    <div className="border-b-2 border-gray-300 pb-4 mb-8">
                        <h3 className="text-lg font-bold mb-2"><FaListAlt className="inline-block mr-2" /> Real-time Job Listings</h3>
                        <p className="text-sm md:text-base">
                            Access the latest job postings as soon as they are published, ensuring you stay ahead of the competition and never miss out on a relevant opportunity. Benefit from the platform's up-to-date job listings, synchronized to provide accurate and timely information, saving you time and effort in searching for jobs elsewhere.
                        </p>
                    </div>
                    <div className="border-b-2 border-gray-300 pb-4 mb-8">
                        <h3 className="text-lg font-bold mb-2"><FaUserEdit className="inline-block mr-2" /> Profile Customization</h3>
                        <p className="text-sm md:text-base">
                            Create a comprehensive profile that showcases your skills, experience, and career aspirations to potential employers. Tailor your profile to highlight your unique strengths and qualifications, making a strong first impression on recruiters and increasing your chances of landing your dream job.
                        </p>
                    </div>
                    <div className="border-b-2 border-gray-300 pb-4 mb-8">
                        <h3 className="text-lg font-bold mb-2"><FaComments className="inline-block mr-2" /> Interactive Forums</h3>
                        <p className="text-sm md:text-base">
                            Engage in discussions, network with fellow professionals, and share your knowledge and expertise within the platform's interactive forums. Connect with peers and industry experts to exchange insights, ask questions, and gain valuable advice throughout your job search journey.
                        </p>
                    </div>
                    <div className="border-b-2 border-gray-300 pb-4 mb-8">
                        <h3 className="text-lg font-bold mb-2"><FaCalendarCheck className="inline-block mr-2" /> Event Integration</h3>
                        <p className="text-sm md:text-base">
                            Participate in industry-related events and webinars hosted by registered companies, staying updated on the latest trends and developments in your field. Expand your professional network and enhance your skillset through valuable learning and networking opportunities offered by companies on the platform.
                        </p>
                    </div>
                    <div className="border-b-2 border-gray-300 pb-4 mb-8">
                        <h3 className="text-lg font-bold mb-2"><FaFilter className="inline-block mr-2" /> Advanced Job Filtering</h3>
                        <p className="text-sm md:text-base">
                            Utilize the platform's intuitive search filters to refine your job search based on specific criteria, such as location, salary range, job type, required skills, and more. Save time and effort by filtering out irrelevant postings and focusing only on opportunities that match your qualifications and preferences, leading to a more efficient job search.
                        </p>
                    </div>
                    <div className="border-b-2 border-gray-300 pb-4 mb-8">
                        <h3 className="text-lg font-bold mb-2"><FaBookmark className="inline-block mr-2" /> Job Bookmarking</h3>
                        <p className="text-sm md:text-base">
                            Save and organize interesting job postings for future reference using the platform's bookmarking feature. Keep track of promising opportunities you discover while searching, allowing you to easily revisit them later for review and application at your convenience.
                        </p>
                    </div>
                    <div className="border-b-2 border-gray-300 pb-4 mb-8">
                        <h3 className="text-lg font-bold mb-2"><FaHandPointer className="inline-block mr-2" /> Quick Apply</h3>
                        <p className="text-sm md:text-base">
                            Apply to jobs with a single click using the convenient "Quick Apply" button, streamlining the application process and allowing you to express your interest in opportunities efficiently. Save valuable time by skipping lengthy application forms and increasing your chances of being considered for the role before other candidates.
                        </p>
                    </div>
                    <div className="border-b-2 border-gray-300 pb-4 mb-8">
                        <h3 className="text-lg font-bold mb-2"><FaChartBar className="inline-block mr-2" /> Personalized Dashboard</h3>
                        <p className="text-sm md:text-base">
                            Access a personalized dashboard that provides a centralized overview of your job search activity, including your applications, bookmarked listings, and relevant notifications. Stay organized and focused during your job search by having all the essential information readily available in one place, allowing you to easily track your progress and manage your applications effectively.
                        </p>
                    </div>
                    <div className="border-b-2 border-gray-300 pb-4 mb-8">
                        <h3 className="text-lg font-bold mb-2"><FaClipboardCheck className="inline-block mr-2" /> Application Tracking</h3>
                        <p className="text-sm md:text-base">
                            Monitor the progress of your job applications from the moment you submit them to the final hiring decision. Receive timely notifications for application updates, allowing you to stay informed about the status of your applications and the next steps in the recruitment process.
                        </p>
                    </div>
                    <div className="border-b-2 border-gray-300 pb-4 mb-8">
                        <h3 className="text-lg font-bold mb-2"><FaClock className="inline-block mr-2" /> Interview Scheduling</h3>
                        <p className="text-sm md:text-base">
                            Schedule interviews seamlessly through the platform and receive real-time notifications to ensure you never miss an important appointment. Coordinate interview dates and times efficiently with potential employers, promoting a smooth and professional interview experience for both parties.
                        </p>
                    </div>
                    <div className="border-b-2 border-gray-300 pb-4 mb-8">
                        <h3 className="text-lg font-bold mb-2"><FaStar className="inline-block mr-2" /> Feedback and Ratings</h3>
                        <p className="text-sm md:text-base">
                            Provide feedback and ratings for job postings, interview processes, and your overall experience using the platform. Contribute to building a trusted and transparent community on LumiJobs by providing valuable insights that can help improve the platform's services for both job seekers and employers.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
