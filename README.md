# LumiJobs - Where Opportunities Meet Expertise


## Overview

LumiJobs is a cutting-edge hiring agency and communication platform crafted to connect companies with skilled professionals in the tech industry. This platform streamlines the hiring process, enhances user experience, and nurtures a vibrant community for networking and knowledge sharing.

## Features

- **User Roles:**
  - Admin: Manages overall platform functionality, user roles, and system configurations.
  - Company: Represents organizations posting job listings and conducting hiring processes.
  - Hiring Team: Members within a company responsible for reviewing applications and conducting interviews.
  - Job Seeker: Individuals seeking job opportunities, creating profiles, and applying for jobs.

- **Profile Customization:**
  Users can create detailed profiles showcasing their skills, experience, and preferences, providing comprehensive insights for both job seekers and companies.

- **Real-time Job Listing:**
  Enables companies to post and manage job listings with real-time synchronization, ensuring accurate and timely information for job seekers.

- **Interactive Forums:**
  Builds a community with forums for tech discussions, networking, and knowledge sharing, enhancing user engagement.

- **Event Integration:**
  Facilitates industry-related events and webinars organized by registered companies, promoting continuous learning and networking opportunities.

- **Quick Apply Button:**
  Allows job seekers to express interest efficiently through a one-click "Quick Apply" or "Apply Now" button for job listings.

- **Job Bookmarking:**
  Enables users to bookmark or save job listings for future reference, providing a convenient way to revisit preferred opportunities.

- **Search Filters:**
  Incorporates intuitive search filters to refine job searches based on various criteria, including location, salary range, date and time, job experiences, and skills.

- **Personalized Dashboard:**
  Creates a personalized dashboard for each user, displaying a summary of job applications, bookmarked listings, and relevant notifications for quick overviews.

- **Application Tracking:**
  Offers a feature allowing candidates to track the status of their applications, providing transparency in the hiring process.

- **Interview Scheduling:**
  Enables companies to schedule interviews with job seekers and provides real-time notifications to streamline the process.

- **Feedback and Ratings:**
  Collects and displays feedback from candidates and hiring managers, including ratings and reviews for recruiters.

## Future Additions

In future releases, we plan to introduce additional features such as:

- **Advanced Analytics:**
  Providing insights and analytics for companies to optimize their hiring processes.

- **Advance Suggesion Integration:**
  Enhancing job recommendations based on user preferences and skills.

- **Collaborative Tools:**
  Introducing collaborative tools for hiring teams to streamline communication.

## Technology Used

- **Frontend:**
  - React.js for the user interface.
  - React Hook Form for efficient form handling.
  - Axios for making HTTP requests.
  - TypeScript for a strongly typed codebase.

- **Backend:**
  - Node.js for server-side development.
 

- **Database:**
 
  - MongoDB (to be added in future releases).

- **Authentication:**
  - Firebase Authentication for secure user authentication.

## Setup Environment

1. Clone the repository:

    ```bash
    git clone https://github.com/msasif2000/LumiJob-Client
    ```

2. Install dependencies:

    ```bash
    cd LumiJob-Client
    npm install
    ```

3. Set up Firebase:
   - Create a Firebase project and obtain configuration details.
   - Create a `.env` file in the root directory and add Firebase configuration:

     ```env
     VITE_APIKEY=xxxxxxxxxxxxxxxxx
     VITE_AUTHDOMAIN=xxxxxxxxxxxxxxxxx
     VITE_PROJECTID=xxxxxxxxxxxxxxxxxx
     VITE_STORAGEBUCKET=xxxxxxxxxxxxxxx
     VITE_MESSAGINGSENDERID=xxxxxxxxxxxxxxxxxx
     VITE_APPID=1:xxxxxxxxxxxxxxxxxxxxxxxxxx
     ```
    


4. Your firebase.config.ts file should look like this 
    ```
    const firebaseConfig: FirebaseConfig = {
     apiKey: import.meta.env.VITE_APIKEY,
     authDomain: import.meta.env.VITE_AUTHDOMAIN,
     projectId: import.meta.env.VITE_PROJECTID,
     storageBucket: import.meta.env.VITE_STORAGEBUCKET,
     messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
     appId: import.meta.env.VITE_APPID,
    };
    ```

5. Run the application:

    ```bash
    npm start
    ```
    

## Conclusion

LumiJobs aims to revolutionize the hiring process by providing a feature-rich platform that caters to the diverse needs of both companies and job seekers. With an emphasis on real-time information, community building, and user-friendly interfaces, the platform ensures a seamless and transparent experience throughout the hiring journey. The implementation of features such as personalized dashboards and interactive forums further enhances user engagement, making LumiJobs a go-to platform for connecting opportunities with expertise in the tech industry. Join us on this journey of redefining recruitment and career growth!

---
- PS: This project is in development. More information about this project and technologies used will be updated.
---