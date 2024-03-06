import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";
import { FaDollarSign } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import UniLoader from "../../component/err & loading/UniLoader";
import { ToastContainer, toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import { PiShieldWarning } from "react-icons/pi";
import { BiShareAlt } from "react-icons/bi";
import Share from "./Share";
import { IoPeopleOutline } from "react-icons/io5";
import GoToTop from "../../component/GoToTop/GoToTop";
import { useDropzone } from "react-dropzone";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { storage } from "../../config/Firebase.config";

interface JobDetails {
  _id: string;
  title: string;
  modalId: string;
  location: string;
  salaryRange: {
    min: number;
    max: number;
  };
  sectorType: string;
  description: string;
  requirements: string[];
  platform: string;
  post_time: string;
  aboutUs: string;
  positionOverview: string;
  responsibilities: string[];
  skills: string[];
  experience: string;
  perks: string[];
  application: string;
  [key: string]: any;
}

const JobsDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const axiosPublic = useAxiosPublic();
  const [job, setJobs] = useState<JobDetails>();
  const { user, role, premium } = useAuth();
  const [showProfileModal, setShowProfileModal] = useState(false);
  const navigate = useNavigate();
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const onDrop = (acceptedFiles: File[]) => {
    setSelectedFile(acceptedFiles[0]);
  };

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    axiosPublic
      .get(`/single-job/${id}`)
      .then((res) => {
        setJobs(res.data);
        
      })
      .catch((error) => console.log(error));
  }, []);

  const {
    title,
    location,
    salaryRange = { min: 0, max: 0 },
    sectorType,
    description,
    requirements,
    platform,
    post_time,
    aboutUs,
    positionOverview,
    responsibilities,
    skills,
    experience,
    perks,
    application
  } = job || {};

  const formatDateTime = (dateTimeString: any) => {
    const date = new Date(dateTimeString);

    const timeOptions: Intl.DateTimeFormatOptions = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    const formattedTime = new Intl.DateTimeFormat("en-US", timeOptions).format(
      date
    );

    const dateOptions: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "short",
      year: "numeric",
    };
    const formattedDate = new Intl.DateTimeFormat("en-GB", dateOptions).format(
      date
    );

    return `${formattedTime} - ${formattedDate}`;
  };

  const formattedPostTime = post_time ? formatDateTime(post_time) : "";

  const handlePremiumApply = () => {
    const { _id, ...jobWithoutId } = job as JobDetails;

    const jobDetails = {
      ...jobWithoutId,
      candidate: user?.email,
      appliedTime: new Date(),
      jobId: job?._id,
      status: "unopened",
    };

    axiosPublic
      .post(`/apply-to-jobs`, jobDetails)
      .then((res) => {
  
        if (res.data.insertedId) {
          toast.success("Applied Successfully", {
            position: "top-center",
            hideProgressBar: true,
            autoClose: 2000,
            closeOnClick: true,
          });
        } else if (res.data.message === "Please fill profile information") {
          setShowProfileModal(true);
        } else if (
          res.data.message === "You have already applied for this job"
        ) {
          toast.success("You have Already Applied", {
            position: "top-center",
            hideProgressBar: true,
            autoClose: 2000,
            closeOnClick: true,
          });
        } else if (res.data.message === "Please update subscription") {
        } else if (res.data.message === "Already applied") {
          toast.success("You have Already Applied", {
            position: "top-center",
            hideProgressBar: true,
            autoClose: 2000,
            closeOnClick: true,
          });
        } else if (res.data.message === "Please upload a resume") {
          toast.warn("Please upload a resume", {
            position: "top-center",
            hideProgressBar: true,
            autoClose: 2000,
            closeOnClick: true,
          });
        } else if (res.data.message === "Please update subscription") {
          toast.success("You've reached your apply limit", {
            position: "top-center",
            hideProgressBar: true,
            autoClose: 2000,
            closeOnClick: true,
          });
        }
      })
      .catch((error) => {
        console.log(error);
        toast.warn("Something went wrong", {
          position: "top-center",
          hideProgressBar: true,
          autoClose: 2000,
          closeOnClick: true,
        });
      });
  };

  const handleNotPremium = () => {
    toast.warn("For premium members only.", {
      position: "top-center",
      hideProgressBar: true,
      autoClose: 4000,
      closeOnClick: true,
    });
  };

  const handleCompleteProfile = () => {
    navigate("/dashboard/candidateProfile/update");
  };

  // share related
  // const modal = ;

  const shareUrl = window.location.href;
  const modalId: string = "my_modal_3";

  const handleUpload = () => {
    if (selectedFile) {
      if (selectedFile.size > 500 * 1024) {
        toast.warn("Please upload a file smaller than 500 KB.", {
          position: "top-center",
          hideProgressBar: true,
          autoClose: 4000,
          closeOnClick: true,
        });
        return;
      }

      const storageRef = ref(storage, `resume/${selectedFile.name}`);

      // Upload file to Firebase Storage
      uploadBytes(storageRef, selectedFile)
        .then((snapshot) => {
          // Get download URL
          getDownloadURL(snapshot.ref)
            .then((downloadURL) => {
              // axios post to database
              const data = {
                resume: downloadURL,
                user: user?.email,
              };
              axiosPublic
                .post("/set-resume", data)
                .then((res) => {
                
                  if (res.data.message === "true") {
                    const { _id, ...jobWithoutId } = job as JobDetails;

                    const jobDetails = {
                      ...jobWithoutId,
                      candidate: user?.email,
                      appliedTime: new Date(),
                      jobId: job?._id,
                      status: "unopened",
                    };


                    axiosPublic
                      .post(`/apply-to-jobs`, jobDetails)
                      .then((res) => {
                       
                        if (res.data.insertedId) {
                          toast.success("Applied Successfully", {
                            position: "top-center",
                            hideProgressBar: true,
                            autoClose: 2000,
                            closeOnClick: true,
                          });
                        } else if (
                          res.data.message === "Please fill profile information"
                        ) {
                          setShowProfileModal(true);
                        } else if (
                          res.data.message ===
                          "You have already applied for this job"
                        ) {
                          toast.success("You have Already Applied", {
                            position: "top-center",
                            hideProgressBar: true,
                            autoClose: 2000,
                            closeOnClick: true,
                          });
                        } else if (
                          res.data.message === "Please update subscription"
                        ) {
                        } else if (res.data.message === "Already applied") {
                          toast.success("You have Already Applied", {
                            position: "top-center",
                            hideProgressBar: true,
                            autoClose: 2000,
                            closeOnClick: true,
                          });
                        } else if (
                          res.data.message === "Please upload a resume"
                        ) {
                          toast.warn("Please upload a resume", {
                            position: "top-center",
                            hideProgressBar: true,
                            autoClose: 2000,
                            closeOnClick: true,
                          });
                        } else if (
                          res.data.message === "Please update subscription"
                        ) {
                          toast.success("You've reached your apply limit", {
                            position: "top-center",
                            hideProgressBar: true,
                            autoClose: 2000,
                            closeOnClick: true,
                          });
                        }
                      })
                      .catch((error) => {
                        console.log(error);
                        toast.warn("Something went wrong", {
                          position: "top-center",
                          hideProgressBar: true,
                          autoClose: 2000,
                          closeOnClick: true,
                        });
                      });
                  }
                })
                .catch((error) => console.log(error));

              setShowResumeModal(false);
            })
            .catch((error) => {
              console.error("Error getting download URL: ", error);
              toast.error("Failed to get download URL", {
                position: "top-center",
                hideProgressBar: true,
                autoClose: 2000,
                closeOnClick: true,
              });
            });
        })
        .catch((error) => {
          console.error("Error uploading resume: ", error);
          toast.error("Failed to upload resume", {
            position: "top-center",
            hideProgressBar: true,
            autoClose: 2000,
            closeOnClick: true,
          });
        });
    } else {
      toast.error("Please select a file to upload", {
        position: "top-center",
        hideProgressBar: true,
        autoClose: 2000,
        closeOnClick: true,
      });
    }
  };

  const isApplied = job?.applicants?.find(
    (applicant: any) => applicant.email === user?.email
  );

  return (
    <>
      <Helmet>
        <title> {`${title}`} | LumiJobs</title>
      </Helmet>
      <GoToTop />
      <div className="max-w-screen-2xl mx-auto py-8 px-4">
        <div>
          {/* Display jobs */}
          {job ? (
            <div className="lg:flex justify-between">
              {/* left side */}
              <div className=" lg:w-8/12">
                <div className="space-y-4">
                  <p className="text-xl opacity-80">{formattedPostTime}</p>
                  <h1 className=" text-4xl md:text-3xl lg:text-5xl font-bold mb-2">
                    {title}
                  </h1>
                  <p className="text-xl opacity-80">{description}</p>
                </div>
                <div className="mt-5 mb-2 flex gap-6">
                  <div className="flex items-center gap-2">
                    {" "}
                    <FaLocationDot />{" "}
                    <p className="text-xl md:text-base">{location}</p>
                  </div>
                  <p className="flex items-center gap-2">
                    <FaDollarSign />
                    <p className="text-lg md:text-base">
                      {salaryRange.min} - {salaryRange.max}
                    </p>
                  </p>
                </div>
                <hr />
                <div className="mt-6">
                  {" "}
                  <p>
                    <span className="font-semibold text-xl">Sector</span>:{" "}
                    <span className=" bg-slate-200 py-1 px-2">
                      {sectorType}
                    </span>
                  </p>
                </div>
                <div className="mt-6">
                  {" "}
                  <p>
                    <span className="font-semibold text-xl">platform</span>:{" "}
                    <span className=" bg-slate-200 py-1 px-2">{platform}</span>
                  </p>
                </div>

                <div>
                  <p className=" font-semibold text-xl mt-5 mb-2">About Us</p>
                  <p className="text-lg opacity-90">{aboutUs}</p>
                </div>
                <div>
                  <p className="font-semibold text-xl mt-5 mb-2">
                    Position Overview
                  </p>
                  <p className="text-lg opacity-90">{positionOverview}</p>
                </div>
                <div></div>
                <div>
                  <h2 className=" font-semibold text-xl mt-5 mb-2">
                    Responsibilities
                  </h2>
                  <ul>
                    {responsibilities &&
                      responsibilities.map(
                        (responsibility: string, index: number) => (
                          <li key={index}>
                            <p className="flex items-center ms-3 gap-2 text-lg opacity-90">
                              <LuDot />
                              {responsibility}
                            </p>
                          </li>
                        )
                      )}
                  </ul>
                </div>
                <div>
                  <h2 className="font-semibold text-xl mt-5 mb-2">
                    Requirements
                  </h2>
                  <ul>
                    {requirements &&
                      requirements.map((requirement: string, index: number) => (
                        <li key={index}>
                          <p className="flex items-center ms-3 gap-2 text-lg opacity-90">
                            <LuDot /> {requirement}
                          </p>
                        </li>
                      ))}
                  </ul>
                </div>
                <div>
                  <h2 className="font-semibold text-xl mt-5 mb-2">Skills</h2>
                  <ul>
                    {skills &&
                      skills.map((skill: string, index: number) => (
                        <li key={index}>
                          <p className="flex items-center ms-3 gap-2 text-lg opacity-90">
                            <LuDot /> {skill}
                          </p>
                        </li>
                      ))}
                  </ul>
                </div>
                <div>
                  {" "}
                  <h4 className="font-semibold text-xl mt-5 mb-2">
                    Experience
                  </h4>{" "}
                  <p className="text-lg opacity-90">{experience}</p>
                </div>
                <div>
                  <h2 className="font-semibold text-xl mt-5 mb-2">Perks</h2>
                  <ul>
                    {perks &&
                      perks.map((perk: string, index: number) => (
                        <li key={index}>
                          <p className="flex items-center ms-3 gap-2 text-lg opacity-90">
                            <LuDot /> {perk}
                          </p>
                        </li>
                      ))}
                  </ul>
                </div>

                <div className="mt-5 mb-2">
                  {" "}
                  <p className="text-lg opacity-90">{application}</p>
                </div>
              </div>
              {/* right side */}
              {role === "company" ? (
                <div className=" md:w-1/2 mx-auto mt-10 lg:mt-0 lg:w-4/12 xl:w-3/12 ">
                  {/* i want to implement dnd here  */}

                  <h2 className="text-2xl font-semibold text-gray-400 my-8">
                    {" "}
                    Applicants
                  </h2>
                  <div>
                    <div className="space-x-4">
                      {job?.applicants?.map((details: any, index: number) => (
                        <div key={index} className="avatar">
                          <div className=" w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={details?.profile} alt="user Image" />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4">
                      {job?.applicants?.length > 0 ? (
                        job?.email === user?.email && (
                          <Link to={`/manage-applicants/${job?._id}`}>
                            <button className="btn w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 mb-5">
                              Manage Applicants
                            </button>
                          </Link>
                        )
                      ) : (
                        <button className="btn w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 mb-5">
                          No Applicants
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className=" md:w-1/2 mx-auto mt-10 lg:mt-0 lg:w-4/12 xl:w-3/12">
                  {isApplied ? (
                    <p className="p-5 my-2 text-xl bg-blue-50 text-center">
                      Already applied
                    </p>
                  ) : (
                    <>
                      {premium === "premium" ? (
                        <div>
                          <button
                            onClick={() => handlePremiumApply()}
                            className="btn w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 mb-5"
                          >
                            Quick Apply
                          </button>
                        </div>
                      ) : (
                        <div>
                          <button
                            className="btn w-full bg-blue-300 text-white py-2 px-4 rounded hover:bg-red-300 mb-5 duration-500 border-none"
                            onClick={() => {
                              handleNotPremium();
                            }}
                          >
                            Quick Apply
                          </button>
                        </div>
                      )}
                      <div>
                        <button
                          onClick={() => {
                            setShowResumeModal(true);
                          }}
                          className="btn w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 mb-5"
                        >
                          Apply
                        </button>
                      </div>
                    </>
                  )}
                  <div className="skeleton flex flex-col bg-[#F2F5FE] items-center p-8">
                    <hr className="border-b-2 border-gray-400 mb-4" />

                    <div className="mb-12">
                      {/* Content for the component */}
                      <span className="text-gray-600">
                        Share this position with your friends and get
                        <span className=" text-orange-500"> CAD $500</span> when
                        they are hired
                      </span>
                    </div>

                    {user ? (
                      <>
                        <button
                          className="btn"
                          onClick={() => {
                            const modal = document.getElementById(
                              "my_modal_3"
                            ) as HTMLDialogElement | null;
                            if (modal) {
                              modal.showModal();
                            }
                          }}
                        >
                          <div>
                            <div className="flex justify-center items-center gap-2">
                              Share
                              <BiShareAlt></BiShareAlt>
                            </div>
                          </div>
                        </button>
                        <Share
                          id={modalId}
                          shareUrl={shareUrl}
                          title={title}
                        ></Share>
                      </>
                    ) : (
                          <Link className=" hover:text-white py-2 border-2 text-blue-700 border-blue-700 px-4 rounded hover:bg-blue-700" to={"/login"}>
                        Login to get your link
                      </Link>
                    )}
                  </div>

                  <div className="mt-2">
                    {user && (
                      <div className="flex items-center gap-2 text-lg font-semibold p-1 rounded-lg bg-blue-50">
                        <IoPeopleOutline className="text-xl m-2"></IoPeopleOutline>
                        {job?.applicants?.length > 0 ? (
                          <p className="py-2">
                            {job?.applicants?.length} People have applied
                          </p>
                        ) : (
                          <p className="py-2">Be the first one to apply :)</p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <UniLoader />
          )}
        </div>

        <ToastContainer />
        {/* Resume modal Starts */}
        {showResumeModal && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
              &#8203;
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div
                      {...getRootProps()}
                      className="dropzone bg-blue-100 hover:bg-blue-300 duration-1000 p-10 w-full rounded-2xl cursor-pointer"
                    >
                      <input {...getInputProps()} />

                      {acceptedFiles.length > 0 ? (
                        <div>
                          <h4>Selected File:</h4>
                          <ul>
                            {acceptedFiles.map((file, idx) => (
                              <li key={idx}>
                                {file.name} - {file.size / 1000} KB
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <p className="font-black text-center">
                          Drag 'n' drop your resume file here, or click to
                          select a file
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex  justify-center">
                  <button onClick={handleUpload} className="btn">
                    Apply Now
                  </button>

                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-red-400 text-base font-medium text-gray-700 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => {
                      setShowResumeModal(false);
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Resume Modal Ends */}
        {showProfileModal && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
              &#8203;
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <PiShieldWarning />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3
                        className="text-lg leading-6 font-medium text-gray-900"
                        id="modal-title"
                      >
                        Complete Your Profile
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          You need to complete your profile before applying to
                          jobs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex  justify-center">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-300 text-base font-medium text-white hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => handleCompleteProfile()}
                  >
                    Complete Profile
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-red-400 text-base font-medium text-gray-700 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => {
                      setShowProfileModal(false);
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default JobsDetails;
