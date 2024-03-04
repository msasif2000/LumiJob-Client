import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineDocumentText, HiOutlineLockClosed } from "react-icons/hi";
import { BiCheckCircle } from "react-icons/bi";

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="container mx-auto px-4 md:py-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="md:text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
                <div className="text-gray-700 leading-relaxed">
                    <p className="mb-6 text-xs md:text-sm xl:text-lg">
                        At Lumijobs, accessible from <Link className="text-blue-700" to={"/"}>lumijobs.tech</Link>, we prioritize the privacy of our visitors. This Privacy Policy document outlines the types of information collected and recorded by Lumijobs and how we use it.
                    </p>
                    <p className="mb-6 text-xs md:text-sm xl:text-lg">
                        If you have additional questions or need more information about our Privacy Policy, feel free to <Link className="text-blue-700" to={"/contact"}>contact us</Link>.
                    </p>
                    <p className="mb-6 text-xs md:text-sm xl:text-lg">
                        This Privacy Policy applies solely to our online activities and is valid for visitors to our website regarding the information shared and collected on Lumijobs. It does not apply to any information collected offline or through channels other than this website.
                    </p>
                    <h2 className=" text-sm md:text-2xl font-bold mb-4 mt-8 flex items-center"><HiOutlineDocumentText className="mr-2" />Consent</h2>
                    <p className="mb-6 text-xs md:text-sm xl:text-lg">
                        By using our website, you hereby consent to our Privacy Policy and agree to its terms.
                    </p>
                    <h2 className=" text-sm md:text-2xl font-bold mb-4 flex items-center"><HiOutlineDocumentText className="mr-2" />Information we collect</h2>
                    <p className="mb-6 text-xs md:text-sm xl:text-lg">
                        The personal information we request and the reasons for its collection will be transparently communicated to you when we ask for it. This may include but is not limited to your name, email address, contact information, employment history, and any other details relevant to the services we provide. We collect this information to better understand your needs, provide you with personalized services, improve our products and services, and communicate with you effectively.
                    </p>
                    <h2 className=" text-sm md:text-2xl font-bold mb-4 flex items-center"><BiCheckCircle className="mr-2" />How we use your information</h2>
                    <ul className="list-disc pl-6 mb-6 text-xs md:text-sm xl:text-lg">
                        <li>Provide, operate, and maintain our website</li>
                        <li>Improve, personalize, and expand our website</li>
                        <li>Understand and analyze how you use our website</li>
                        <li>Communicate with you, including for customer service and marketing purposes</li>
                        <li>Send you emails</li>
                        <li>Find and prevent fraud</li>
                    </ul>
                    <h2 className=" text-sm md:text-2xl font-bold mb-4 flex items-center"><HiOutlineLockClosed className="mr-2" />Keeping your information secure</h2>
                    <p className="mb-6 text-xs md:text-sm xl:text-lg">
                        Your privacy and security are paramount to us. We employ advanced technical and organizational measures to ensure the confidentiality, integrity, and availability of your information. Rest assured, your data is protected with the utmost care and attention to detail.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PrivacyPolicy;
