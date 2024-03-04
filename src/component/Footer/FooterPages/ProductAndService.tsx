import React from "react";
import { FaBriefcase, FaUserFriends, FaBullhorn, FaSearch, FaChartLine, FaCalendarAlt, FaCommentAlt, FaStar } from 'react-icons/fa';

const ProductAndService: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-3xl mx-auto text-justify">
                <h1 className="text-3xl font-bold mb-8">Services</h1>
                <div className="mb-6 text-xs md:text-lg lg:text-xl">
                    <span >LumiJobs Platform,</span> A feature-rich platform connecting companies and job seekers, providing real-time job listings, personalized dashboards, and more.
                </div>
                <div>
                    <h3 className="text-lg md:text-2xl font-bold mb-2"><FaBriefcase className="inline-block mr-2" /> Job Posting & Management</h3>
                    <p className="mb-4 text-xs md:text-lg lg:text-xl">
                        Allow employers to easily post job openings with detailed descriptions, requirements, and benefits. Provide tools to manage applications, shortlist candidates, and schedule interviews. Offer features like job distribution to relevant platforms and social media integration for wider reach.
                    </p>
                    <h3 className="text-lg md:text-2xl font-bold mb-2"><FaUserFriends className="inline-block mr-2" /> Candidate Search & Sourcing</h3>
                    <p className="mb-4 text-xs md:text-lg lg:text-xl">
                        Provide access to a large pool of qualified candidates through a searchable database. Offer advanced search filters based on skills, experience, location, and other relevant criteria. Include features like candidate matching algorithms to connect employers with the most suitable candidates.
                    </p>
                    <h3 className="text-lg md:text-2xl font-bold mb-2"><FaBullhorn className="inline-block mr-2" /> Employer Branding</h3>
                    <p className="mb-4 text-xs md:text-lg lg:text-xl">
                        Allow employers to create company profiles showcasing their work culture, values, and employee benefits. Offer tools to promote employer branding and attract top talent, such as company videos and testimonials.
                    </p>
                    <h3 className="text-lg md:text-2xl font-bold mb-2"><FaSearch className="inline-block mr-2" /> Advanced Job Filtering</h3>
                    <p className="mb-4 text-xs md:text-lg lg:text-xl">
                        Incorporate intuitive search filters to help users refine job searches based on various criteria such as location, salary range, date and time, job experiences, job category, skills, etc. Filter job listings to find relevant opportunities that match your preferences and qualifications, enhancing the job search experience.
                    </p>
                   
                    <h3 className="text-lg md:text-2xl font-bold mb-2"><FaChartLine className="inline-block mr-2" /> Personalized Dashboard</h3>
                    <p className="mb-4 text-xs md:text-lg lg:text-xl">
                        Create a personalized dashboard for each user, displaying a summary of their job applications, bookmarked listings, and relevant notifications for a quick overview of their activity. Customize your dashboard layout and preferences to prioritize the information that matters most to you, making it easier to stay organized and focused during your job search.
                    </p>
                    <h3 className="text-lg md:text-2xl font-bold mb-2"><FaCalendarAlt className="inline-block mr-2" /> Application Tracking</h3>
                    <p className="mb-4 text-xs md:text-lg lg:text-xl">
                        Offer a feature that allows candidates to track the status of their applications, providing transparency in the hiring process. Monitor the progress of your job applications from submission to final decision, receive notifications for application updates, and stay informed about the next steps in the recruitment process.
                    </p>
                    <h3 className="text-lg md:text-2xl font-bold mb-2"><FaCommentAlt className="inline-block mr-2" /> Interview Scheduling</h3>
                    <p className="mb-4 text-xs md:text-lg lg:text-xl">
                        Facilitate interview scheduling and provide real-time notifications to job seekers. Coordinate interview dates and times seamlessly within the platform, receive instant updates on interview invitations, rescheduling requests, and other interview-related communications, ensuring a smooth and efficient interview process for both candidates and employers.
                    </p>
                    <h3 className="text-lg md:text-2xl font-bold mb-2"><FaStar className="inline-block mr-2" /> Feedback and Ratings</h3>
                    <p className="mb-4 text-xs md:text-lg lg:text-xl">
                        Collect and display feedback from candidates and hiring managers, including ratings and reviews for recruiters. Share your experiences with other users by leaving feedback on job postings, interview processes, and overall recruitment experiences, helping to build trust and transparency within the LumiJobs community.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductAndService;
