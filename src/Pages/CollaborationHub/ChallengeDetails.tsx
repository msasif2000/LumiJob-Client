import { useEffect, useState } from "react";
import TeamCard from "./TeamCard";
import useAuth from "../../hooks/useAuth";
import { Link, useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Loading from "../Blogs/components/err/Loading";
<<<<<<< HEAD
import toast, { Toaster } from 'react-hot-toast';
const ChallengeDetails = () => {
    const { id } = useParams()
    const { user, photo } = useAuth()
    const [openModal, setOpenModal] = useState(false);
    const [challengeData, setChallengeData] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const axiosPublic = useAxiosPublic();
    const { challengeTitle, description, img, time, type } = challengeData || {};



    const formatDateTime = (dateTimeString: any) => {
        const date = new Date(dateTimeString);
=======
import toast, { Toaster } from "react-hot-toast";

const ChallengeDetails = () => {
  const { id } = useParams();
  const { user, photo } = useAuth();
  const [openModal, setOpenModal] = useState(false);
  const [challengeData, setChallengeData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const axiosPublic = useAxiosPublic();
  const { challengeTitle, description, img, time, type } = challengeData || {};
  const formatDateTime = (dateTimeString: any) => {
    const date = new Date(dateTimeString);
>>>>>>> 75051edb22410bb5b063af8e92d0c20b5f745e26

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

  useEffect(() => {
    setLoading(true);
    axiosPublic
      .get(`/challenge/${id}`)

      .then((res) => {
        console.log(res.data);
        setLoading(false);
        const time = formatDateTime(res.data.submissionDate);
        setChallengeData({ ...res.data, time });
      })
      .catch((error) => {
        console.error("Error fetching challenge details:", error);
        setLoading(false);
      });
  }, [id]);

  const handleSubmitTeamForm = (e: any) => {
    e.preventDefault();
    const teamName = e.target.teamName.value;
    const memberName = e.target.memberName.value;
    const memberEmail = user.email;
    const memberImg = photo || user.photoURL;
    const discordLink = e.target.discordLink.value;
    const challengeId = id;
    const designation = "Leader";
    const teamData = {
      teamName,
      memberName,
      memberEmail,
      memberImg,
      discordLink,
      challengeId,
      designation,
    };

    axiosPublic
      .post("/teams", teamData)
      .then((res) => {
        if (res.data.message === "data inserted") {
          toast.success("Team Create Successfully");
          e.target.reset();
          setOpenModal(false);
        } else {
          toast.error("You have already in a team");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to post team");
      });
  };

  return (
    <div className=" max-w-screen-2xl mx-auto px-4 lg:px-20 py-3">
      {loading ? (
        <Loading />
      ) : (
        <div className="lg:flex py-6">
          <div className="flex flex-col lg:w-3/5 2xl:w-3/4  space-y-3 pb-10 lg:pb-0">
            <img src={img} className="w-full" alt="" />
            <h2 className="text-3xl font-heading font-semibold">
              {challengeTitle}
            </h2>
            <div>
              <p className="flex items-center gap-2 text-gray-600 text-lg font-medium">
                {type}
              </p>
            </div>
            <div className="text-lg font-normal text-gray-500">
              <p>{time}</p>
            </div>
            <div className="text-lg font-normal">
              <p className="text-lg xl:text-xl ">{description}</p>
            </div>
          </div>
          {/* article */}
          <div className="lg:w-2/5 2xl:w-1/4 lg:ml-10">
            <div className="p-4 border-2 rounded-lg flex justify-between items-center">
              <div>
                <p className="text-lg font-semibold">Create Team</p>
                <p className="text-sm text-gray-500">
                  Each team required 6 member
                </p>
              </div>
              {user ? (
                <button
                  onClick={() => setOpenModal(true)}
                  className="bg-gray-700 text-white p-2 rounded-lg"
                >
                  Create
                </button>
              ) : (
                <Link
                  to={"/login"}
                  className="bg-gray-700 text-white p-2 rounded-lg"
                >
                  Login
                </Link>
              )}
              <div
                onClick={() => setOpenModal(false)}
                className={`fixed flex justify-center items-center z-[100] ${
                  openModal ? "visible opacity-1" : "invisible opacity-0"
                } inset-0 w-full h-full backdrop-blur-sm bg-black/20 duration-100`}
              >
                <div
                  onClick={(e_) => e_.stopPropagation()}
                  className={`absolute w-full lg:w-[500px] bg-white drop-shadow-2xl rounded-lg ${
                    openModal
                      ? "opacity-1 duration-300 translate-y-0"
                      : "-translate-y-20 opacity-0 duration-150"
                  }`}
                >
                  <form onSubmit={handleSubmitTeamForm} className="p-12">
                    <svg
                      onClick={() => setOpenModal(false)}
                      className="w-10 mx-auto mr-0 cursor-pointer"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
                          fill="#000000"
                        ></path>
                      </g>
                    </svg>
                    <h1 className="backdrop-blur-sm text-4xl pb-8">
                      Create Team
                    </h1>
                    <div className="space-y-5">
                      <label htmlFor="teamName" className="block">
                        Team Name*
                      </label>
                      <div className="relative">
                        <input
                          id="teamName"
                          name="teamName"
                          type="text"
                          required
                          placeholder="Enter Team Name"
                          className="p-3 block w-full  drop-shadow-lg rounded-lg outline-none"
                        />
                      </div>

                      {/* Leader */}
                      <label htmlFor="memberName" className="block">
                        Leader Name*
                      </label>
                      <div className="relative">
                        <input
                          id="memberName"
                          name="memberName"
                          defaultValue={user?.displayName}
                          type="text"
                          disabled
                          required
                          placeholder={user?.displayName}
                          className="p-3 block w-full  drop-shadow-lg rounded-lg outline-none"
                        />
                      </div>

                      {/* Link  */}
                      <label htmlFor="discordLink" className="block">
                        Discord Channel Link
                      </label>
                      <div className="relative">
                        <input
                          id="discordLink"
                          name="discordLink"
                          type="text"
                          placeholder="Enter Discord Channel Link"
                          className="p-3 block w-full  drop-shadow-lg rounded-lg outline-none"
                        />
                      </div>

                      <div className="relative">
                        <input id="rules" type="checkbox" required />
                        <label htmlFor="rules" className="ml-2">
                          Accept Collabration Rules
                        </label>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="py-2 px-5 w-full bg-blue-400 mb-4 mt-6 text-white shadow-lg rounded-lg before:block before:-left-1 before:-top-1 before:bg-black before:rounded-lg before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-black after:rounded-lg after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 relative inline-block"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>

<<<<<<< HEAD


    const handleSubmitTeamForm = (e: any) => {
        e.preventDefault();
        const teamName = e.target.teamName.value;
        const memberName = e.target.memberName.value;
        const memberEmail = user.email;
        const memberImg = photo || user.photoURL;
        const discordLink = e.target.discordLink.value;
        const challengeId = id;
        const designation = "Leader"
        const teamData = { teamName, memberName, memberEmail, memberImg, discordLink, challengeId, designation };

        axiosPublic.post("/teams", teamData)
            .then(res => {
                if (res.data.message === "data inserted") {
                    toast.success("Team Create Successfully");
                    e.target.reset()
                    setOpenModal(false)
                }
                else {
                    toast.error("You have already in a team");
                }
            })
            .catch(err => {
                console.log(err);
                toast.error("Failed to post team");
            })
    }

    return (
        <div className="max-w-screen-2xl mx-auto py-3 px-4">
            {
                loading ? <Loading /> :
                    <div className="lg:flex py-6">
                        <div className="flex flex-col lg:w-3/4 space-y-3 pb-10 lg:pb-0">
                            <img src={img} className="w-full" alt="" />
                            <h2 className="text-3xl font-heading font-semibold">
                                {challengeTitle}
                            </h2>
                            <div>
                                <p className="flex items-center gap-2 text-gray-600 text-lg font-medium">
                                    {type}
                                </p>
                            </div>
                            <div className="text-lg font-normal text-gray-500">
                                <p>{time}</p>
                            </div>
                            <div className="text-lg font-normal">
                                <p
                                    className="text-lg xl:text-xl "
                                >
                                    {description}
                                </p>
                            </div>

                        </div>
                        {/* article */}
                        <div className="lg:w-1/4 lg:ml-10 ">
                            <div className="p-4 border-2 rounded-lg flex justify-between items-center">
                                <div>
                                    <p className="text-lg font-semibold">Create Team</p>
                                    <p className="text-sm text-gray-500">Each team required 6 member</p>
                                </div>
                                <button onClick={() => setOpenModal(true)} className="bg-gray-700 text-white p-2 rounded-lg">Create</button>
                                <div onClick={() => setOpenModal(false)} className={`fixed flex justify-center items-center z-[100] ${openModal ? 'visible opacity-1' : 'invisible opacity-0'} inset-0 w-full h-full backdrop-blur-sm bg-black/20 duration-100`}>
                                    <div onClick={(e_) => e_.stopPropagation()} className={`absolute w-full lg:w-[500px] bg-white drop-shadow-2xl rounded-lg ${openModal ? 'opacity-1 duration-300 translate-y-0' : '-translate-y-20 opacity-0 duration-150'}`}>
                                        <form onSubmit={handleSubmitTeamForm} className="p-12">
                                            <svg onClick={() => setOpenModal(false)} className="w-10 mx-auto mr-0 cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="#000000"></path></g></svg>
                                            <h1 className="backdrop-blur-sm text-4xl pb-8">Create Team</h1>
                                            <div className="space-y-5">
                                                <label htmlFor="teamName" className="block">Team Name*</label>
                                                <div className="relative">
                                                    <input id="teamName" name="teamName" type="text" required placeholder="Enter Team Name" className="p-3 block w-full  drop-shadow-lg rounded-lg outline-none" />

                                                </div>

                                                {/* Leader */}
                                                <label htmlFor="memberName" className="block">Leader Name*</label>
                                                <div className="relative">
                                                    <input id="memberName" name="memberName" defaultValue={user?.displayName} type="text" disabled required placeholder={user?.displayName} className="p-3 block w-full  drop-shadow-lg rounded-lg outline-none" />
                                                </div>

                                                {/* Link  */}
                                                <label htmlFor="discordLink" className="block">Discode Channel Link</label>
                                                <div className="relative">
                                                    <input id="discordLink" name="discordLink" type="text" placeholder="Enter Discode Channel Link" className="p-3 block w-full  drop-shadow-lg rounded-lg outline-none" />
                                                </div>


                                                <div className="relative">
                                                    <input id="rules" type="checkbox" required />
                                                    <label htmlFor="rules" className="ml-2">Accept Collabration Rules</label>

                                                </div>
                                            </div>
                                            <button type="submit" className="py-2 px-5 w-full bg-blue-400 mb-4 mt-6 text-white shadow-lg rounded-lg before:block before:-left-1 before:-top-1 before:bg-black before:rounded-lg before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-black after:rounded-lg after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 relative inline-block">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="p-3 hover:bg-blue-100 duration-500 mt-4 border-2 rounded-lg flex justify-between items-center">
=======
            {/* <div className="p-3 hover:bg-blue-100 duration-500 mt-4 border-2 rounded-lg flex justify-between items-center">
>>>>>>> 75051edb22410bb5b063af8e92d0c20b5f745e26
                        <div>
                            <p className="text-lg font-semibold text-center">Rules</p>
                        </div>
                    </div> */}
            <p className="text-lg font-semibold mt-6 mb-1">Available Team</p>
            <div className="space-y-4">
              <TeamCard teams={challengeData?.teams} challengeId={id} />
            </div>
          </div>
        </div>
      )}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default ChallengeDetails;
