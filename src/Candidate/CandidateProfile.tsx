import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { GoVerified } from "react-icons/go";
import { BiEdit } from "react-icons/bi";
import { Helmet } from "react-helmet-async";
import GoToTop from "../component/GoToTop/GoToTop";
import { ToastContainer, toast } from "react-toastify";
import { useDropzone } from "react-dropzone";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { MdOutlineContactPage } from "react-icons/md";
import { storage } from "../config/Firebase.config";

interface UserProfile {
  _id: string;
  email: string;
  availability: string;
  bio: string;
  city: string;
  country: string;
  education: {
    university: string;
    degree: string;
    subject: string;
    fromDate: string;
    toDate: string;
    experience: string;
  }[];
  experienceDetails: {
    company: string;
    position: string;
    fromDate: string;
    toDate: string;
    name: string;
    phone: string;
    photo: string;
    role: string;
    salaryRangeMax: string;
    salaryRangeMin: string;
  }[];
  skills: string[];
  userId: string;
  village: string;
  work: string;
  photo: string;
  name: string;
  phone: string;
  position: string;
  experience: number;
  salaryRangeMin: number;
  salaryRangeMax: number;
}

const CandidateProfile = () => {
  const { user, premium } = useAuth();
  const [activeTab, setActiveTab] = useState("experience");
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const axiosPublic = useAxiosPublic();
  const [resume, setResume] = useState<any | null>(null);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const onDrop = (acceptedFiles: File[]) => {
    setSelectedFile(acceptedFiles[0]);
  };

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    if (user?.email) {
      axiosPublic
        .get(`/specific-candidate/${user.email}`)
        .then((res) => {
          setProfile(res.data);
          setResume(res.data.resume);
          // console.log(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const renderTabContent = () => {
    switch (activeTab) {
      case "experience":
        return (
          <div>
            {profile?.experienceDetails?.map((job: any, index: number) => {
              // Convert fromDate and toDate to Date objects
              const startDate = new Date(job.fromDate);
              const endDate = new Date(job.toDate);

              // Format dates in the desired format (e.g., "31/01/2024")
              const formattedStartDate = `${startDate
                .getDate()
                .toString()
                .padStart(2, "0")}/${(startDate.getMonth() + 1)
                .toString()
                .padStart(2, "0")}/${startDate.getFullYear()}`;
              const formattedEndDate = `${endDate
                .getDate()
                .toString()
                .padStart(2, "0")}/${(endDate.getMonth() + 1)
                .toString()
                .padStart(2, "0")}/${endDate.getFullYear()}`;

              return (
                <div key={index} className="mb-4 pl-2">
                  <div>
                    <p className="text-sm md:text-xl font-bold">
                      {job?.position}
                    </p>
                    <p className="text-xs md:text-lg font-bold text-gray-400">
                      {job?.company}
                    </p>
                    {job?.fromDate ? (
                      <p className="text-xs md:text-lg font-semibold text-gray-400">
                        {formattedStartDate} - {formattedEndDate}{" "}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                  {job?.fromDate ? (
                    <div className="mt-4">
                      <hr />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </div>
        );
      case "education":
        return (
          <>
            <Helmet>
              <title>Candidate Profile | Dashboard</title>
            </Helmet>
            <GoToTop />
            {profile?.education?.map((uni: any, index: number) => {
              // Convert startDate and endDate to Date objects
              const startDate = new Date(uni.fromDate);
              const endDate = new Date(uni.toDate);

              // Format dates in the desired format (e.g., "31/01/2024")
              const formattedStartDate = `${startDate
                .getDate()
                .toString()
                .padStart(2, "0")}/${(startDate.getMonth() + 1)
                .toString()
                .padStart(2, "0")}/${startDate.getFullYear()}`;
              const formattedEndDate = `${endDate
                .getDate()
                .toString()
                .padStart(2, "0")}/${(endDate.getMonth() + 1)
                .toString()
                .padStart(2, "0")}/${endDate.getFullYear()}`;
              return (
                <div key={index} className="mb-4 pl-2">
                  <div>
                    <p className="text-sm md:text-xl font-bold">
                      {uni.university}
                    </p>
                    <p className="text-xs md:text-lg font-bold text-gray-400">
                      {uni.subject}
                    </p>
                    <p className="text-xs md:text-lg font-semibold text-gray-400">
                      {formattedStartDate} - {formattedEndDate}
                    </p>
                  </div>

                  <div className="mt-4">
                    <hr />
                  </div>
                </div>
              );
            })}
          </>
        );
    }
  };

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
                  console.log(res.data);
                  if (res.data.message === "true") {
                    toast.success("Resume update successfull", {
                      position: "top-center",
                      hideProgressBar: true,
                      autoClose: 2000,
                      closeOnClick: true,
                    });
                    setShowResumeModal(false);
                  } else {
                    toast.error("Failed to upload resume", {
                      position: "top-center",
                      hideProgressBar: true,
                      autoClose: 2000,
                      closeOnClick: true,
                    });
                    setShowResumeModal(false);
                  }
                })
                .catch((error) => {
                  console.error("Error posting resume to database: ", error);
                  toast.error("Failed to upload resume", {
                    position: "top-center",
                    hideProgressBar: true,
                    autoClose: 2000,
                    closeOnClick: true,
                  });
                  setShowResumeModal(false);
                });
            })
            .catch((error) => {
              console.error("Error getting download URL: ", error);
              toast.error("Failed to get download URL", {
                position: "top-center",
                hideProgressBar: true,
                autoClose: 2000,
                closeOnClick: true,
              });
              setShowResumeModal(false);
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
          setShowResumeModal(false);
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

  return (
    <div className="min-h-screen relative">
      <div className="flex justify-between items-center px-5 pt-3">
        <div className="text-xl md:text-3xl font-semibold">Profile</div>
        <div className="space-x-2">
          {premium === "premium" ? (
            <>
              {resume ? (
                <>
                  <button
                    onClick={() => {
                      setShowResumeModal(true);
                    }}
                    className="btn"
                  >
                    <BiEdit></BiEdit>
                    Update resume
                  </button>
                  <Link to={resume} className="btn" title="Download resume">
                    <MdOutlineContactPage></MdOutlineContactPage>
                  </Link>
                </>
              ) : (
                <button
                  onClick={() => {
                    setShowResumeModal(true);
                  }}
                  className="btn"
                >
                  <BiEdit></BiEdit>
                  Upload resume
                </button>
              )}
            </>
          ) : (
            ""
          )}

          <Link to="update">
            <button className="btn">
              <BiEdit></BiEdit>
              Edit profile
            </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 xl:space-x-10 lg:space-x-4 py-5">
        {/* profile card div */}
        <div className="bg-white h-fit lg:w-1/3 rounded-2xl space-y-5 p-5 relative">
          <div className="bg-accent h-48 rounded-2xl relative">
            {/* image */}
            <div className="flex justify-center">
              <div className="avatar">
                <div className="w-40 rounded-full">
                  <img
                    src={profile?.photo}
                    className="absolute top-20 rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Name */}
          <div className="pt-14 space-y-2">
            <div className="flex items-center space-x-3">
              <h1 className=" text-base md:text-3xl font-bold">
                {profile?.name}
              </h1>
              {premium === "premium" ? (
                <p className="text-3xl text-blue-500">
                  {" "}
                  <GoVerified />
                </p>
              ) : (
                ""
              )}
            </div>
            <p className="text-md md:text-lg font-semibold">
              {profile?.position}
            </p>
          </div>
          {/* Bio */}
          <div>
            <h1 className="font-medium text-sm md:text-lg">{profile?.bio}</h1>
          </div>
          {/* skills */}
          <div className="space-y-5">
            <h1 className="text-sm md:text-2xl font-bold">Skills</h1>
            <ul className="flex flex-wrap">
              {profile?.skills?.map((skill, idx) => (
                <li
                  key={idx}
                  className="badge badge-accent m-1 p-5 font-semibold text-md text-gray-800"
                >
                  <p>{skill}</p>
                </li>
              ))}
            </ul>
          </div>
          {/* end */}
        </div>

        {/* end profile card div */}

        <div className="flex flex-col lg:flex-grow space-y-4">
          {/* address div */}
          <div className="bg-white h-1/2 lg:w-full rounded-2xl p-10 space-y-4">
            <p className="text-base md:text-2xl font-bold">
              Personal Information
            </p>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              <div className="space-y-2">
                <p className="text-xs md:text-lg">Name</p>
                <p className=" text-sm md:text-xl font-semibold">
                  {profile?.name}
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-xs md:text-lg">Contact</p>
                <p className=" text-sm md:text-xl font-semibold">
                  {profile?.phone}
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-xs md:text-lg">Location</p>
                <p className=" text-sm md:text-xl font-semibold">
                  {profile ? (
                    <>
                      {" "}
                      {profile?.city}, {profile?.country}
                    </>
                  ) : (
                    ""
                  )}
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-xs md:text-lg">Years of experience</p>
                <p className=" text-sm md:text-xl font-semibold">
                  {profile ? <> {profile?.experience} years</> : ""}
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-xs md:text-lg">Availability</p>
                <p className=" text-sm md:text-xl font-semibold">
                  {profile ? (
                    <>
                      {profile?.availability} - {profile?.work}
                    </>
                  ) : (
                    ""
                  )}
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-xs md:text-lg">Expected salary</p>
                <p className=" text-sm md:text-xl font-semibold">
                  {profile ? (
                    <>
                      ${profile?.salaryRangeMin} - ${profile?.salaryRangeMax}
                    </>
                  ) : (
                    ""
                  )}
                </p>
              </div>
            </div>
          </div>
          {/* Skills div */}
          <div className="bg-white lg:w-full rounded-2xl md:p-10">
            <div role="tablist" className="tabs tabs-bordered relative">
              <a
                role="tab"
                className={`tab ${
                  activeTab === "experience" ? "tab-active" : ""
                } text-sm md:text-xl font-bold`}
                onClick={() => handleTabClick("experience")}
              >
                Experience
              </a>
              <a
                role="tab"
                className={`tab ${
                  activeTab === "education" ? "tab-active" : ""
                } text-sm md:text-xl font-bold`}
                onClick={() => handleTabClick("education")}
              >
                Education
              </a>

              <div
                className={`tab-indicator ${activeTab}-indicator`}
                style={{ top: "calc(100% + 5px)" }}
              ></div>
            </div>
            <div className="pt-5">{renderTabContent()}</div>
          </div>
        </div>
        {/*  */}
      </div>
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
                        Drag 'n' drop your resume file here, or click to select
                        a file
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex  justify-center">
                <button onClick={handleUpload} className="btn">
                  Update
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
      <ToastContainer />
    </div>
  );
};

export default CandidateProfile;
