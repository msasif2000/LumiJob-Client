import { HiOutlineSparkles } from "react-icons/hi2";
import { MdDateRange } from "react-icons/md";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoMdTime } from "react-icons/io";
import { PiMoney, PiSuitcaseSimpleLight } from "react-icons/pi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Aos from "aos"
import "aos/dist/aos.css"
import BookmarkButton from "../../../component/Shared/BookmarkButton";
import Job from "./Job";
import { useEffect, useState } from "react";
import { useDropzone } from 'react-dropzone';

interface JobCardsProps {
  job: Job;
}

const JobCard: React.FC<JobCardsProps> = ({ job }) => {
  const { picture, location, title, salary, post_time, _id } = job;
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [name, setName] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const onDrop = (acceptedFiles: File[]) => {
    // Handle the dropped file
    const file = acceptedFiles[0];
    setCvFile(file);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handelApplications = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Address:', address);
    console.log('Phone Number:', phoneNumber);
    console.log('Email:', email);
    console.log('CV File:', cvFile);
    
    setName('');
    setCvFile(null);
    setAddress('');
    setPhoneNumber('');
    setEmail('');

  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      data-aos="fade-up"
      className="card w-full bg-base-100 border rounded-md "
    >
      {/*================ >> Content Box <<=============== */}

      <div className=" px-3 pt-3 ">
        <div className="bg-[#DCE3F8] min-h-48 rounded-md p-4">
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <span className="bg-[#F9CB5B] py-1 px-4 rounded flex items-center text-sm text-gray-600">
                <HiOutlineSparkles className="mr-1" /> Featured
              </span>
              <span className="bg-[#CF474A] py-1 px-4 rounded flex items-center text-sm text-white">
                <AiOutlineThunderbolt className="mr-1" /> Urgent
              </span>
            </div>

            {/* =============> Bookmark Button <============= */}

            <BookmarkButton job={job}/>
          </div>

          <div className="py-4">
            <h3 className="text-3xl mb-2">{title}</h3>
            <p className="text-lg flex items-center gap-2 mb-4">
              <FaMapMarkerAlt /> {location}
            </p>
          </div>

          {/* =============>  Job Details <<=========== */}

          <div className="flex flex-wrap gap-3 items-center">
            <span className="bg-white py-1 px-3 rounded flex items-center text-sm">
              <IoMdTime className="mr-1" /> Full Time
            </span>
            <span className="bg-white py-1 px-3 rounded flex items-center text-sm">
              <PiSuitcaseSimpleLight className="mr-1" /> 5-7 Years
            </span>
            <span className="bg-white py-1 px-3 rounded flex items-center text-sm">
              <PiMoney className="mr-1" /> {salaryRange.min}-{salaryRange.max}
            </span>
            <span className="bg-white py-1 px-3 rounded flex items-center text-sm">
              <MdDateRange className="mr-1" /> {post_time}
            </span>
          </div>
        </div>
      </div>

      {/* =========> Company Logo And Action <============== */}

      <div className="flex items-center justify-between py-4 px-10">
        <div>
          <img src={picture} alt="logo" className=" h-6 " />
        </div>
        {/*Quickly Apply button with model react form */}
        <div>
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="py-1 px-8 border border-gray-300 hover:bg-[#486DD9] hover:text-white font-semibold text-base rounded-3xl"
            onClick={() => document.getElementById("my_modal_4").showModal()}
          >
            Quickly Apply
          </button>
          <dialog id="my_modal_4" className="modal">
            <div className="modal-box w-9/12 max-w-5xl">
              {/* Form content part */}
              <div>
                <h3 className="font-bold text-lg text-center">
                  Job Application Form
                </h3>
                <p className="text-center">
                  Please complete the form below to apply for a position with
                  us.
                </p>
                <div className="divider divider-neutral w-full"></div>
                <form onSubmit={handelApplications} className="space-y-3 w-10/12 mx-auto" >
                  <div className=" flex justify-center items-center">
                    <label htmlFor="FullName" className="text-lg font-semibold  w-3/12 text-start">
                      Your Full Name :  
                    </label>
                    <input
                      id="FullName"
                      value={name}
                     onChange={(e) => setName(e.target.value)}
                      type="text"
                      required
                      placeholder="Full Name...."
                      className=" w-7/12 rounded-md border-l-neutral-950 px-2 py-2 "
                    />
                  </div>
                  <div className=" flex justify-center items-center">
                    <label htmlFor="Address" className=" text-lg font-semibold w-3/12 text-start ">
                    Address :  
                    </label>
                    <input
                    required
                      id="Address"
                      value={address}
                    onChange={(e) => setAddress(e.target.value)}
                      type="text"
                      placeholder="Address...."
                      className=" w-7/12 rounded-md border-l-neutral-950 px-2 py-2 "
                    />
                  </div>
                  <div className=" flex justify-center items-center">
                    <label htmlFor="Phone-Number" className=" text-lg font-semibold w-3/12 text-start ">
                    Phone Number :  
                    </label>
                    <input
                    required
                      id="Phone-Number"
                      value={phoneNumber}
                   onChange={(e) => setPhoneNumber(e.target.value)}
                      type="number"
                      placeholder="Phone Number...."
                      className=" w-7/12 rounded-md border-l-neutral-950 px-2 py-2 "
                    />
                  </div>
                  <div className=" flex justify-center items-center">
                    <label htmlFor="Email" className=" text-lg font-semibold w-3/12 text-start ">
                    Email :  
                    </label>
                    <input
                    required
                      id="Email"
                      value={email}
                   onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="Email...."
                      className=" w-7/12 rounded-md border-l-neutral-950 px-2 py-2 "
                    />
                  </div>


                  <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <h1 className="text-lg font-semibold mb-5 ml-16">CV or Resume : </h1>
        {
          cvFile ?<p className="py-10 border-2 bg-gray-100 text-center">
          File Selected: {cvFile.name}
        </p>  : <p className="py-10 border-2 bg-gray-100 text-center" >click to select a file</p>
        }
        
      </div>
                  

                  {/* from button submit and cancel */}
                  <div className="flex justify-center gap-10 ">
                  
                    <button type="submit" className=" btn mt-6  bg-green-300 hover:bg-green-600 hover:text-white">
                      Submit
                    </button>
                    
                    <div className="modal-action">
                      <form method="dialog">
                        {/* if there is a button, it will close the modal */}
                        <button className="btn hover:bg-red-600 hover:text-white bg-red-400 ">Close</button>
                      </form>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
