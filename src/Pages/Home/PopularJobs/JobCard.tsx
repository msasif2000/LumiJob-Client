import { HiOutlineSparkles } from "react-icons/hi2";
import { MdDateRange } from "react-icons/md";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoMdTime } from "react-icons/io";
import { PiMoney, PiSuitcaseSimpleLight } from "react-icons/pi";
import { FaMapMarkerAlt } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import BookmarkButton from "../../../component/Shared/BookmarkButton";
import Job from "./Job";
import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import useAuth from "../../../hooks/useAuth";
import './quickly-button.css';
interface JobCardsProps {
  job: Job;
}

const JobCard: React.FC<JobCardsProps> = ({ job }) => {
  const { user } = useAuth();

  const { _id, picture, location, title, salaryRange, deadline } = job;
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [contactEmail, setContactEmail] = useState<string>("");
  const jobPostId = _id;
  let applierEmail: string;

  if (user && user.email) {
    applierEmail = user.email;
  }

  const onDrop = (acceptedFiles: File[]) => {
    // Handle the dropped file
    const file = acceptedFiles[0];
    setCvFile(file);
  };
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const modalId = `my_modal_${_id}`;
  // console.log(modalId);

  const handelApplications = (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      name,
      address,
      phoneNumber,
      contactEmail,
      jobPostId,
      applierEmail,
    };
    console.log(data);
    setName("");
    setCvFile(null);
    setAddress("");
    setPhoneNumber("");
    setContactEmail("");
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

            <BookmarkButton job={job} />
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
              <PiMoney className="mr-1" /> {salaryRange?.min}-{salaryRange?.max}
            </span>
            <span className="bg-white py-1 px-3 rounded flex items-center text-sm">
              <MdDateRange className="mr-1" /> {deadline.split("T")[0]}
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
            className="py-3 px-8 border border-gray-300 hover:bg-accent hover:text-white font-semibold text-base rounded-3xl"
            onClick={() =>
              (
                document.getElementById(modalId) as HTMLDialogElement
              )?.showModal()
            }
          >
            Quickly Apply
          </button>
          <dialog id={modalId} className="modal">
            <div className="modal-box w-9/12 lg:max-w-3xl">
              {/* Form content part */}
              <div>
                <h3 className=" font-extrabold lg:font-bold text-lg lg:text-3xl text-center pb-2 pt-1">
                Quickly Job Application Form
                </h3>
                <p className="text-center  lg:font-semibold">
                  Please complete the form below to apply for a position with
                  us.
                </p>
                <div className="divider divider-neutral w-full"></div>
                <form
                  onSubmit={handelApplications}
                  className="space-y-3 w-11/12 md:w-10/12 mx-auto "
                >
                  {/* Name */}
                  <div className=" md:flex  md:justify-center md:items-center space-y-2 md:space-y-0 space-x-3 lg:space-x-0 ">
                    <label
                      htmlFor="FullName"
                      className="text-lg font-semibold  w-3/12 text-start ml-3 md:ml-0 "
                    >
                      Full Name :
                    </label>
                    <input
                      id="FullName"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      required
                      placeholder="Your Full Name...."
                      className=" md:w-7/12 rounded-md border-l-neutral-950 bg-[#E8F0FE]  px-2 py-2 "
                    />
                  </div>
                  {/* address */}
                  <div className=" md:flex  md:justify-center md:items-center space-y-2 md:space-y-0 space-x-3 lg:space-x-0">
                    <label
                      htmlFor="Address"
                      className=" text-lg font-semibold w-3/12 text-start ml-3 md:ml-0 "
                    >
                     Address :
                    </label>
                    <input
                      required
                      id="Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      type="text"
                      placeholder="Your Address...."
                      className=" md:w-7/12  rounded-md border-l-neutral-950 bg-[#E8F0FE]  px-2 py-2 "
                    />
                  </div>
                  {/* phone */}
                  <div className=" md:flex  md:justify-center md:items-center space-y-2 md:space-y-0 space-x-3 lg:space-x-0">
                    <label
                      htmlFor="Phone-Number"
                      className=" text-lg font-semibold w-3/12 text-start ml-3 md:ml-0 "
                    >
                      Phone  :
                    </label>
                    <input
                      required
                      id="Phone-Number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      type="text"
                      placeholder=" Your Phone Number...."
                      className=" md:w-7/12 rounded-md border-l-neutral-950 bg-[#E8F0FE]  px-2 py-2 "
                    />
                  </div>
                  {/* Email */}
                  <div className=" md:flex  md:justify-center md:items-center space-y-2 md:space-y-0 space-x-3 lg:space-x-0">
                    <label
                      htmlFor="Email"
                      className=" text-lg font-semibold w-3/12 lg:text-start   ml-3 md:ml-0 "
                    >
                      Email :
                    </label>
                    <input
                      required
                      id="Email"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      type="email"
                      placeholder="Your Email...."
                      className=" md:w-7/12 rounded-md border-l-neutral-950 bg-[#E8F0FE]  px-2 py-2 "
                    />
                  </div>
                   
                  <h1 className="text-lg font-semibold ml-3 lg:mb-5 lg:ml-12">
                      Resume :
                    </h1>
                  <div  {...getRootProps({ className: "dropzone" })}>
                    <input {...getInputProps()} />
                    
                    {cvFile ? (
                      <p className="py-10 border-2 bg-[#E8F0FE]  text-center">
                        File Selected: {cvFile.name}
                      </p>
                    ) : (
                      <p className="py-10 border-2  bg-gray-200  text-center">
                        click to select a file
                      </p>
                    )}
                  </div>

                  {/* from button submit and cancel */}
                  <div className="flex justify-center gap-10 ">
                  <button className="contactButton mt-5">
  Submit
  <div className="iconButton">
    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path>
    </svg>
  </div>
</button>


                    <div className="modal-action">
                      <form method="dialog">
                        {/* if there is a button, it will close the modal */}
                        <button className="button1">
  <span className="X"></span>
  <span className="Y"></span>
  <div className="close">Close</div>
</button>

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
