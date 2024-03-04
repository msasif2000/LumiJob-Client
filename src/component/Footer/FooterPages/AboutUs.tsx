import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <p className="text-xs md:text-lg lg:text-xl mb-8">
          Welcome to LumiJobs, a revolutionary hiring agency and communication platform that connects talented professionals with top-notch companies in the tech industry. Our mission is to facilitate seamless interactions between job seekers and employers, creating opportunities where expertise meets innovation.
        </p>
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc pl-6 text-xs md:text-lg lg:text-xl">
            <li className="mb-2">
              <strong>User Roles:</strong> Admin, Company, Hiring Team, and Job Seeker.
            </li>
            <li className="mb-2">
              <strong>Profile Customization:</strong> Allow users to create detailed profiles showcasing their skills, experience, and preferences.
            </li>
            <li className="mb-2">
              <strong>Real-time Job Listings:</strong> Post and manage job listings with real-time synchronization for accurate and timely information.
            </li>
            <li className="mb-2">
              <strong>Interactive Forums:</strong> Build a community by incorporating forums for tech discussions, networking, and knowledge sharing.
            </li>
            <li className="mb-2">
              <strong>Event Integration:</strong> Facilitate industry-related events and webinars to promote continuous learning and networking organized by registered companies.
            </li>
            <li className="mb-2">
              <strong>Quick Apply Button:</strong> Enable a one-click "Quick Apply" or “Apply Now” button for job listings, allowing candidates to express interest efficiently.
            </li>
            <li className="mb-2">
              <strong>Job Bookmarking:</strong> Allow users to bookmark or save job listings for future reference, providing a convenient way to revisit preferred opportunities.
            </li>
            <li className="mb-2">
              <strong>Search Filters:</strong> Incorporate intuitive search filters to help users refine job searches based on location, salary range, date and time, job experiences, job category, skills, and other relevant criteria.
            </li>
            <li className="mb-2">
              <strong>Personalized Dashboard:</strong> Create a personalized dashboard for each user, displaying a summary of their job applications, bookmarked listings, and relevant notifications for a quick overview of their activity.
            </li>
            <li className="mb-2">
              <strong>Application Tracking:</strong> Offer a feature that allows candidates to track the status of their applications, providing transparency in the hiring process.
            </li>
            <li className="mb-2">
              <strong>Interview Scheduling:</strong> Implement interview scheduling and real-time notifications for job seekers.
            </li>
            <li className="mb-2">
              <strong>Feedback and Ratings:</strong> Collect and display feedback from candidates and hiring managers, including ratings and reviews for recruiters.
            </li>
           
          </ul>
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Perfect Sectors for LumiJobs</h2>
          <p className="mb-4 text-xs md:text-lg lg:text-xl">
            LumiJobs primarily operates within the technology and IT job sector, connecting professionals with job opportunities in various fields including:
          </p>
          <ul className="list-disc pl-6 text-xs md:text-lg lg:text-xl">
            <li className="mb-2">
              <strong>Information Technology (IT):</strong> Software Development, Web Development, Mobile App Development, Database Administration, Systems Analysis, etc.
            </li>
            <li className="mb-2">
              <strong>Tech Services:</strong> IT Consulting, Project Management, Technical Support, Cloud Computing, etc.
            </li>
            <li className="mb-2">
              <strong>Networking and Security:</strong> Network Administration, Cybersecurity, Network Architecture, etc.
            </li>
            <li className="mb-2">
              <strong>UI/UX Design:</strong> User Interface Design, User Experience Design, Interaction Design, etc.
            </li>
            <li className="mb-2">
              <strong>Quality Assurance (QA) and Testing:</strong> Software Testing, QA Automation, Performance Testing, etc.
            </li>
            <li className="mb-2">
              <strong>Emerging Technologies:</strong> Blockchain Development, Internet of Things (IoT), Augmented Reality (AR) and Virtual Reality (VR), etc.
            </li>
            <li className="mb-2">
              <strong>Digital Marketing Technology:</strong> SEO and SEM, Social Media Technology, Marketing Automation, etc.
            </li>
            <li className="mb-2">
              <strong>E-commerce Technology:</strong> E-commerce Development, Online Retail Technology, etc.
            </li>
            <li className="mb-2">
              <strong>HealthTech and Bioinformatics:</strong> Health Information Technology, Bioinformatics and Computational Biology, etc.
            </li>
           
          </ul>
        </div>
        <p className="text-xs md:text-lg lg:text-xl">
          Our platform aims to provide a seamless and intuitive experience for both job seekers and employers, ensuring transparency, efficiency, and effectiveness in the hiring process. Join LumiJobs today and embark on a journey of endless opportunities!
        </p>
        <p className="text-xs md:text-lg lg:text-xl mt-8">
          LumiJobs will cater to a broad spectrum of tech-related fields, offering a platform for professionals and companies across these sectors to connect and collaborate.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
