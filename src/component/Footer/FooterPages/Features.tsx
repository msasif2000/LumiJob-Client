import React from "react";

const FeaturesPage: React.FC = () => {
  const featuresData = [
    {
      title: "User Roles",
      description: "Differentiate between Admin, Company, Hiring Team, and Job Seeker roles for efficient management."
    },
    {
      title: "Profile Customization",
      description: "Allow users to create detailed profiles showcasing their skills, experience, and preferences."
    },
    {
      title: "Real-time Job Listing",
      description: "Post and manage job listings with real-time synchronization for accurate updates."
    },
    {
      title: "Interactive Forums",
      description: "Engage with a community of tech professionals through forums for discussions and networking."
    },
    {
      title: "Event Integration",
      description: "Facilitate industry-related events and webinars to promote continuous learning and networking organized by registered companies."
    },
    {
      title: "Quick Apply Button",
      description: "Enable a one-click 'Quick Apply' or 'Apply Now' button for job listings, allowing candidates to express interest efficiently."
    },
    {
      title: "Job Bookmarking",
      description: "Allow users to bookmark or save job listings for future reference, providing a convenient way to revisit preferred opportunities."
    },
    {
      title: "Search Filters",
      description: "Incorporate intuitive search filters to help users refine job searches based on various criteria such as location, salary range, date and time, job experiences, job category, skills, etc."
    },
    {
      title: "Personalized Dashboard",
      description: "Create a personalized dashboard for each user, displaying a summary of their job applications, bookmarked listings, and relevant notifications for a quick overview of their activity."
    },
    {
      title: "Application Tracking",
      description: "Offer a feature that allows candidates to track the status of their applications, providing transparency in the hiring process."
    },
    {
      title: "Interview Scheduling",
      description: "Facilitate interview scheduling and provide real-time notifications to job seekers."
    },
    {
      title: "Feedback and Ratings",
      description: "Collect and display feedback from candidates and hiring managers, including ratings and reviews for recruiters."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">List of Features</h2>
        <div className="grid gap-6">
          {featuresData.map((feature, index) => (
            <div key={index} className="border border-gray-300 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
