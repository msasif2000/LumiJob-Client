import React from "react";
import { FaEnvelope, FaPhone, FaQuestionCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Supports: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto text-justify">
        <h1 className="text-3xl font-bold mb-8">Support</h1>
        
        <div className="mb-8">
          <h2 className="text-sm md:text-2xl font-bold mb-4">Contact Us</h2>
          <p className="mb-4 text-xs md:text-lg lg:text-xl">Have a question or need assistance? Reach out to our support team.</p>
          <div className="flex items-center mb-4 text-xs md:text-lg lg:text-xl">
            <FaEnvelope className="mr-2 text-blue-500" />
            <span>Email: lumijobs@gmail.com</span>
          </div>
          <div className="flex items-center text-xs md:text-lg lg:text-xl">
            <FaPhone className="mr-2 text-blue-500" />
            <span>Phone: +1 (123) 456-7890</span>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-sm md:text-2xl font-bold mb-4">FAQs (Frequently Asked Questions)</h2>
          <p className="mb-4 text-xs md:text-lg lg:text-xl">Find answers to common questions about using LumiJobs.</p>
          <div className="flex items-start mb-2">
            <FaQuestionCircle className="mr-2 mt-1 text-blue-500" />
            <div>
              <h3 className="font-bold mb-1">How do I create an account?</h3>
              <p className="mb-4 text-xs md:text-lg lg:text-xl">Creating an account is easy. Simply click on the <Link className="text-blue-600" to={"/signup"}>"Sign Up"</Link> button and follow the prompts to enter your information and create your account.</p>
            </div>
          </div>
          <div className="flex items-start mb-2">
            <FaQuestionCircle className="mr-2 mt-1 text-blue-500" />
            <div>
              <h3 className="font-bold mb-1">How can I search for jobs?</h3>
              <p className="mb-4 text-xs md:text-lg lg:text-xl">To search for jobs, use the search bar on the jobs page to enter keywords related to the type of job you're looking for. You can also use filters to narrow down your search results.</p>
            </div>
          </div>
          <Link className=" text-blue-600" to={"/faqs"}>More</Link>
         
        </div>

        <div>
          <h2 className="text-sm md:text-2xl font-bold mb-4">Still Need Help?</h2>
          <p className="mb-4 text-xs md:text-lg lg:text-xl">If you still have questions or need further assistance, please don't hesitate to <Link className=" text-blue-600" to={"/Contact"}> contact </Link> our support team. We're here to help!</p>
        </div>
      </div>
    </div>
  );
};

export default Supports;
