import React from "react";
import { FaHandshake, FaLightbulb, FaUsers } from "react-icons/fa";

const AboutUs: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto text-justify">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <p className="text-xs md:text-lg lg:text-xl mb-8">
          Welcome to LumiJobs, a revolutionary hiring agency and communication platform that connects talented professionals with top-notch companies in the tech industry. Our mission is to facilitate seamless interactions between job seekers and employers, creating opportunities where expertise meets innovation.
        </p>
        <div className="mb-8">
          <h2 className="text-lg md:text-2xl font-bold mb-4">Our Story</h2>
          <p className="mb-4 text-xs md:text-lg lg:text-xl">LumiJobs was founded in 2024 with a vision to revolutionize the hiring process and connect talented professionals with meaningful job opportunities. Our journey began with a passion for technology and a desire to create a platform that empowers both job seekers and employers.</p>
          <p className="mb-4 text-xs md:text-lg lg:text-xl">Over the years, we've grown into a trusted name in the recruitment industry, serving thousands of companies and millions of job seekers worldwide. Our commitment to innovation, integrity, and excellence drives everything we do, as we continue to evolve and adapt to meet the changing needs of the workforce.</p>
        </div>

        <div className="mb-8">
          <h2 className="text-lg md:text-2xl font-bold mb-4">Our Mission</h2>
          <p className="mb-4 text-xs md:text-lg lg:text-xl">At LumiJobs, our mission is to connect opportunities with expertise, empowering individuals and organizations to achieve their full potential. We strive to foster a diverse and inclusive community where talent thrives, innovation flourishes, and meaningful connections are made.</p>
        </div>

        <div className="mb-8">
          <h2 className="text-lg md:text-2xl font-bold mb-4">Our Values</h2>
          <div className="flex flex-col text-xs md:text-lg lg:text-xl">
            <div className="flex items-start mb-4 md:mr-8">
              <FaLightbulb className="mr-2 text-blue-500" />
              <span className="font-bold mr-2">Innovation: </span> We embrace creativity and strive for continuous improvement in everything we do.
            </div>
            <div className="flex items-start mb-4 md:mr-8">
              <FaHandshake className="mr-2 text-blue-500" />
              <span className="font-bold mr-2">Integrity: </span> We operate with honesty, transparency, and ethical principles at all times.
            </div>
            <div className="flex items-start mb-4">
              <FaUsers className="mr-2 text-blue-500" />
              <span className="font-bold mr-2">Inclusivity: </span> We celebrate diversity and promote a culture of inclusion, respect, and equality.
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className=" text-lg md:text-2xl font-semibold mb-4">Perfect Sectors for LumiJobs</h2>
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
