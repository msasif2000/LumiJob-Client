import { CiLocationOn } from "react-icons/ci";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Link, useParams } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { ToastContainer, toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import { GoVerified } from "react-icons/go";
import { FormEvent, useState } from "react";
import { MdCancel } from "react-icons/md";
import { LuCalendarRange } from "react-icons/lu";
import { VscFeedback } from "react-icons/vsc";
import { SiGooglemeet } from "react-icons/si";
import { Helmet } from "react-helmet-async";
import { MdOutlineContactPage } from "react-icons/md";
import GoToTop from "../component/GoToTop/GoToTop";
import useAxiosSecure from "../hooks/useAxiosSecure";

interface Comments {
  // anyCements: string;
  comments: string;
  position: string;
  companyEmail: string;
  cadetteEmail: string | null;
  CandiedId: string | any;
  status: string;
  jobId: string | any;
}

const ManageApplicants = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const [openModal, setOpenModal] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState<any | null>(null);
  const [selectedId, setSelectedId] = useState<any | null>(null);
  const [comments, setComments] = useState<string>("");

  // Getting job info
  const { data: infosJobs } = useQuery({
    queryKey: ["infosJobs", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/jobInfo/${id}`);
      return res.data;
    },
    enabled: !!id,
  });

  // console.log(infosJobs);

  // For dnd
  const { data: infos, refetch: refetchInfo } = useQuery({
    queryKey: ["infos", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/dnd-applicants/${id}`);
      return res.data;
    },
    enabled: !!id,
  });
  //console.log(infos);

  const { data: preSelected, refetch: refetchPreSelect } = useQuery({
    queryKey: ["preSelected", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/dnd-pre-select/${id}`);
      return res.data;
    },
    enabled: !!id,
  });
  //console.log(preSelected);

  const { data: interviews, refetch: refetchInterview } = useQuery({
    queryKey: ["interview", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/dnd-interview/${id}`);
      return res.data;
    },
    enabled: !!id,
  });
  //console.log(interviews);
  const { data: selected, refetch: refetchSelect } = useQuery({
    queryKey: ["select", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/dnd-selected/${id}`);
      return res.data;
    },
    enabled: !!id,
  });
  //console.log(selected);
  // Dnd data fetching ends here

  // Drag and drop logical func
  const onDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;

    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return;
    }

    if (!infos || !Array.isArray(infos)) {
      console.error("Invalid `infos` data:", infos);
      return;
    }

    const updatedState = [...infos];
    // console.log(updatedState);

    const [movedCard] = updatedState.splice(source.index, 1);
    updatedState.splice(destination.index, 0, movedCard);

    const payload = {
      jobId: id,
      dndStats: destination.droppableId,
    };

    axiosSecure
      .put(`/updateApplicantsStatus/${draggableId}`, payload)
      .then(() => {
        refetchInfo();
        refetchInterview();
        refetchPreSelect();
        refetchSelect();
      });
  };

  // For converting candidate salary to hourly rate
  const perHour = (n: any) => {
    const salary = parseFloat(n);
    const daily = salary / 30;
    const hourly = daily / 24;
    return hourly.toFixed(2);
  };

  // logical func for feedback
  const feedBack = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const form = e.currentTarget;
    // const anyCements = (form.elements.namedItem("anyCements") as HTMLInputElement).value;

    if (infos[0]?.name) {
      const position = infos[0].position;
      const cadetteEmail = infos[0]?.email;
      const CandiedId = infos[0]?.id;
      const status = "Applicants";
      const companyEmail = infosJobs.email;
      const jobId = infosJobs._id;
      const allText: Comments = {
        comments,
        position,
        cadetteEmail,
        companyEmail,
        CandiedId,
        status,
        jobId,
      };
      //console.log(allText);
      // console.log(infosJobs)
      axiosSecure
        .post("/sendFeedback", allText)
        .then((response: any) => {
          // console.log(response.data);
          if (response.data.insertedId) {
            toast.success("Successfully your feedback receive !");
          } else {
            toast.error("didn't receive  your  message");
          }
        })
        .catch((error: any) => {
          console.log(error);
          toast.error("Failed your feedback", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
          });
        });
    }

    if (preSelected[0]?.dndStats === "pre-selected") {
      const position = preSelected[0].position;
      const cadetteEmail = preSelected[0]?.email;
      const CandiedId = preSelected[0]?.id;
      const status = preSelected[0]?.dndStats;
      const companyEmail = infosJobs.email;
      const jobId = infosJobs._id;
      const allText: Comments = {
        jobId,
        comments,
        position,
        cadetteEmail,
        companyEmail,
        CandiedId,
        status,
      };
      //console.log(allText);
      // console.log(infosJobs)
      axiosSecure
        .post("/sendFeedback", allText)
        .then((response: any) => {
          // console.log(response.data);
          if (response.data.insertedId) {
            toast.success("Successfully your feedback receive !");
          } else {
            toast.error("didn't receive  your  message");
          }
        })
        .catch((error: any) => {
          console.log(error);
          toast.error("Failed your feedback session", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
          });
        });
    }

    if (interviews[0]?.dndStats === "interview") {
      const position = interviews[0].position;
      const cadetteEmail = interviews[0]?.email;
      const CandiedId = interviews[0]?.id;
      const status = interviews[0]?.dndStats;
      const companyEmail = infosJobs.email;
      const jobId = infosJobs._id;
      const allText: Comments = {
        jobId,
        comments,
        position,
        cadetteEmail,
        companyEmail,
        CandiedId,
        status,
      };
      //console.log(allText);
      // console.log(infosJobs)
      axiosSecure
        .post("/sendFeedback", allText)
        .then((response: any) => {
          //console.log(response.data);
          if (response.data.insertedId) {
            toast.success("Successfully your feedback receive !");
          } else {
            toast.error("didn't receive  your  message");
          }
        })
        .catch((error: any) => {
          console.log(error);
          toast.error("Failed your Feedback", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
          });
        });
    }
    if (selected[0]?.dndStats === "selected") {
      const position = selected[0].position;
      const cadetteEmail = selected[0]?.email;
      const CandiedId = selected[0]?.id;
      const status = selected[0]?.dndStats;
      const companyEmail = infosJobs.email;
      const jobId = infosJobs._id;
      const allText: Comments = {
        jobId,
        comments,
        position,
        cadetteEmail,
        companyEmail,
        CandiedId,
        status,
      };
      //console.log(allText);
      // console.log(infosJobs)
      axiosSecure
        .post("/sendFeedback", allText)
        .then((response: any) => {
          //console.log(response.data);
          if (response.data.insertedId) {
            toast.success("Successfully your feedback receive !");
          } else {
            toast.error("didn't receive  your  message");
          }
        })
        .catch((error: any) => {
          console.log(error);
          toast.error("Failed your feedback", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
          });
        });
    }
  };

  // func for opening modal of interview scheduling
  const handleOpenModal = (candidate: any) => {
    setSelectedCandidate(candidate);
    setOpenModal(true);
    setSelectedId(candidate.id);
  };

  // func for submitting interview time for candidates
  const handleSubmit = (event: any) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const googleMeetLink = formData.get("googleMeetLink");
    const time = formData.get("time");
    const date = formData.get("date");
    const candidate = selectedId;
    const jobId = id;
    const email = selectedCandidate.email;

    const interviewData = {
      googleMeetLink,
      time,
      date,
      candidate,
      jobId,
      email,
    };

    //console.log(interviewData);

    axiosSecure
      .post("/schedule-interview", interviewData)
      .then((res) => {
        //console.log(res.data);
        if (res.data.message === "Interview scheduled successfully") {
          toast.success("Interview Scheduled Successfully", {
            autoClose: 2000,
            hideProgressBar: true,
            position: "top-center",
            closeOnClick: true,
          });

          setOpenModal(false);
          refetchInterview();
        } else {
          toast.warning("Something went wrong!");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error scheduling interview!");
      });
  };

  // convert time
  function convertTo12HourFormat(time24: any) {
    let [hours, minutes] = time24.split(":").map(Number);

    let period = "AM";

    if (hours === 0) {
      hours = 12;
    } else if (hours === 12) {
      period = "PM";
    } else if (hours > 12) {
      hours -= 12;
      period = "PM";
    }

    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}:${paddedMinutes} ${period}`;
  }

  function formatDate(dateString: any) {
    const parts = dateString.split("-");
    const formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
    return formattedDate;
  }

  return (
    <>
      <Helmet>
        <title>Manage Applicants</title>
      </Helmet>
      <GoToTop />
      <div className=" mx-auto my-3">
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 px-1">
            <Droppable droppableId="applicant">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="flex-1 bg-base-300 min-h-screen"
                >
                  <h1 className="text-center bg-violet-300 p-3 font-bold text-base-100 rounded-t-xl">
                    {infos?.length > 0
                      ? `${infos?.length} Applicants`
                      : "Applicants"}
                  </h1>
                  <div>
                    {infos?.map((info: any, index: number) => (
                      <Draggable
                        key={info.id}
                        draggableId={info.id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="card card-compact m-2 bg-base-100 bg-opacity-50 duration-500 hover:shadow-xl"
                          >
                            <div className="space-x-3 flex p-2">
                              <div className="p-5 bg-blue-100 rounded-xl">
                                <img
                                  src={info?.profile}
                                  alt=""
                                  className=" rounded-full h-[80px] w-[80px] p-2"
                                />
                              </div>
                              <div className="space-y-1 relative">
                                <h2 className="font-bold text-xs bg-blue-100 p-2 w-fit rounded-lg">
                                  {info?.position}
                                </h2>
                                <div className="flex space-x-1 items-center">
                                  <p className="font-bold p-1">{info?.name}</p>
                                  {info?.premium === "premium" ? (
                                    <GoVerified />
                                  ) : (
                                    ""
                                  )}
                                </div>
                                <div className="flex space-x-3 pl-1">
                                  <p className="text-sm">
                                    ${perHour(info?.maxSalary)} / hr
                                  </p>
                                  <p className="flex items-center text-sm space-x-1">
                                    <CiLocationOn className="text-sm" />
                                    {info?.city}, {info?.country}
                                  </p>
                                </div>
                                {/* Resume */}
                                <div className="absolute top-0 right-10 xl:-right-12">
                                  <Link
                                    to={info ? info.resume : ""}
                                    className="cursor-pointer ... text-xl"
                                    title="Resume"
                                  >
                                    <MdOutlineContactPage />
                                  </Link>
                                </div>
                                {/* Feedback */}
                                <div className="absolute top-0 right-0 xl:-right-20">
                                  <label
                                    htmlFor="my_modal_6"
                                    className="cursor-pointer ... text-xl"
                                    title="Feedback"
                                  >
                                    <VscFeedback />
                                  </label>
                                  <input
                                    type="checkbox"
                                    id="my_modal_6"
                                    className="modal-toggle"
                                  />
                                  <div className="modal " role="dialog">
                                    <div className="modal-box bg-gray-100 mb-10">
                                      <div className="modal-action flex justify-end -mt-5 -mr-5">
                                        <label
                                          htmlFor="my_modal_6"
                                          className=" btn  text-black text-2xl "
                                        >
                                          <MdCancel />
                                        </label>
                                      </div>
                                      <form
                                        onSubmit={feedBack}
                                        className="space-y-4 "
                                      >
                                        <div
                                          className="p-4
                                     bg-white rounded-2xl"
                                        >
                                          <label
                                            htmlFor="additionalInfo"
                                            className="block text-xl font-bold text-black"
                                          >
                                            Anything than can be improved?
                                          </label>
                                          <textarea
                                            id="additionalInfo"
                                            name="additionalInfo"
                                            value={comments}
                                            onChange={(e) =>
                                              setComments(e.target.value)
                                            }
                                            className="mt-1 p-2 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-400 rounded-md border-2 "
                                            rows={4}
                                            placeholder="Enter Your Feedback..."
                                          ></textarea>
                                        </div>
                                        <input
                                          className="w-full btn bg-green-600 hover:bg-green-600 text-white "
                                          type="submit"
                                          value="submit"
                                        />
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                  </div>
                  {provided.placeholder}
                </div>
              )}
            </Droppable>

            <Droppable droppableId="pre-selected">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="flex-1 bg-base-300 min-h-screen"
                >
                  <h1 className="text-center bg-violet-400 p-3 font-bold text-base-300 rounded-t-xl">
                    {preSelected?.length > 0
                      ? `${preSelected?.length} Pre-Selected`
                      : "Pre-Selected"}
                  </h1>
                  <div>
                    {preSelected?.map((info: any, index: number) => (
                      <Draggable
                        key={info.id}
                        draggableId={info.id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="card card-compact m-2 bg-base-100 bg-opacity-50 duration-500 hover:shadow-xl"
                          >
                            <div className="space-x-3 flex p-2">
                              <div className="p-5 bg-blue-100 rounded-xl">
                                <img
                                  src={info?.profile}
                                  alt=""
                                  className=" rounded-full h-[80px] w-[80px] p-2"
                                />
                              </div>
                              <div className="space-y-1">
                                <h2 className="font-bold text-xs bg-blue-100 p-2 w-fit rounded-lg">
                                  {info?.position}
                                </h2>
                                <div className="flex space-x-1 items-center">
                                  <p className="font-bold p-1">{info?.name}</p>
                                  {info?.premium === "premium" ? (
                                    <GoVerified />
                                  ) : (
                                    ""
                                  )}
                                </div>
                                <div className="flex space-x-3 pl-1">
                                  <p className="text-sm">
                                    ${perHour(info?.maxSalary)} / hr
                                  </p>
                                  <p className="flex items-center text-sm space-x-1">
                                    <CiLocationOn className="text-sm" />
                                    {info?.city}, {info?.country}
                                  </p>
                                </div>
                                  {/* Resume */}
                                  <div className="absolute top-2 right-10 xl:right-12">
                                  <Link
                                    to={info ? info.resume : ""}
                                    className="cursor-pointer ... text-xl"
                                    title="Resume"
                                  >
                                    <MdOutlineContactPage />
                                  </Link>
                                </div>
                                {/* feedback for pre - selected */}
                                <div className="absolute top-2 right-4">
                                  <label
                                    htmlFor="my_modal_6"
                                    className="cursor-pointer ... text-xl"
                                    title="Feedback"
                                  >
                                    <VscFeedback />
                                  </label>
                                  <input
                                    type="checkbox"
                                    id="my_modal_6"
                                    className="modal-toggle"
                                  />
                                  <div className="modal " role="dialog">
                                    <div className="modal-box bg-gray-100 mb-10">
                                      <div className="modal-action flex justify-end -mt-5 -mr-5">
                                        <label
                                          htmlFor="my_modal_6"
                                          className=" btn  text-black text-2xl "
                                        >
                                          <MdCancel />
                                        </label>
                                      </div>
                                      <form
                                        onSubmit={feedBack}
                                        className="space-y-4 "
                                      >
                                        <div
                                          className="p-4
                                     bg-white rounded-2xl"
                                        >
                                          <label
                                            htmlFor="additionalInfo"
                                            className="block text-xl font-bold text-black"
                                          >
                                            Anything than can be improved?
                                          </label>
                                          <textarea
                                            id="additionalInfo"
                                            name="additionalInfo"
                                            value={comments}
                                            onChange={(e) =>
                                              setComments(e.target.value)
                                            }
                                            className="mt-1 p-2 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-400 rounded-md border-2 "
                                            rows={4}
                                            placeholder="Enter Your Feedback..."
                                          ></textarea>
                                        </div>
                                        <input
                                          className="w-full btn bg-green-600 hover:bg-green-600 text-white "
                                          type="submit"
                                          value="submit"
                                        />
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                  </div>
                  {provided.placeholder}
                </div>
              )}
            </Droppable>

            <Droppable droppableId="interview">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="flex-1 bg-base-300 min-h-screen"
                >
                  <h1 className="text-center bg-violet-500 p-3 font-bold text-base-300 rounded-t-xl">
                    {interviews?.length > 0
                      ? `${interviews?.length} Interviews`
                      : "Interviews"}
                  </h1>
                  <div>
                    {interviews?.map((info: any, index: number) => (
                      <Draggable
                        key={info.id}
                        draggableId={info.id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="card card-compact m-2 bg-base-100 bg-opacity-50 duration-500 hover:shadow-xl"
                          >
                            <div className="space-x-3 flex p-2 relative">
                              <div
                                className={`p-5 ${
                                  info?.scheduleInterview
                                    ? "bg-green-100"
                                    : "bg-blue-100"
                                } rounded-xl`}
                              >
                                <img
                                  src={info?.profile}
                                  alt=""
                                  className=" rounded-full h-[80px] w-[80px] p-2"
                                />
                              </div>
                              <div className="space-y-1">
                                <h2
                                  className={`font-bold text-xs  ${
                                    info?.scheduleInterview
                                      ? "bg-green-100"
                                      : "bg-blue-100"
                                  } p-2 w-fit rounded-lg`}
                                >
                                  {info?.position}
                                </h2>
                                <div className="flex space-x-1 items-center">
                                  <p className="font-bold p-1">{info?.name}</p>
                                  {info?.premium === "premium" ? (
                                    <GoVerified />
                                  ) : (
                                    ""
                                  )}
                                </div>
                                <div className="flex space-x-3 pl-1">
                                  <p className="text-sm">
                                    ${perHour(info?.maxSalary)} / hr
                                  </p>
                                  <p className="flex items-center text-sm space-x-1">
                                    <CiLocationOn className="text-sm" />
                                    {info?.city}, {info?.country}
                                  </p>
                                </div>
                                <div>
                                  {info?.scheduleInterview ? (
                                    <div className="flex items-center text-sm space-x-2 pt-1">
                                      <p className="pl-1">Interview at:</p>
                                      <div className="flex items-center text-sm space-x-3">
                                        <Link
                                          to={
                                            info?.scheduleInterview?.googleMeet
                                          }
                                          target="_blank"
                                          title="Google Meet"
                                          className="hover:scale-150 duration-500"
                                        >
                                          <SiGooglemeet />
                                        </Link>
                                        <p>
                                          {convertTo12HourFormat(
                                            info?.scheduleInterview
                                              ?.interviewTime
                                          )}
                                        </p>
                                        <p>
                                          {" "}
                                          {formatDate(
                                            info?.scheduleInterview
                                              ?.interviewDate
                                          )}
                                        </p>
                                      </div>
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                </div>
                                {/* Resume */}
                                <div className="absolute top-2 right-10 xl:right-20">
                                  <Link
                                    to={info ? info.resume : ""}
                                    className="cursor-pointer ... text-xl"
                                    title="Resume"
                                  >
                                    <MdOutlineContactPage />
                                  </Link>
                                </div>
                                {/* Candide feedback for Interview */}
                                <div className="absolute top-2 right-11">
                                  <label
                                    htmlFor="my_modal_6"
                                    className="cursor-pointer ... text-xl"
                                    title="Feedback"
                                  >
                                    <VscFeedback />
                                  </label>
                                  <input
                                    type="checkbox"
                                    id="my_modal_6"
                                    className="modal-toggle"
                                  />
                                  <div className="modal " role="dialog">
                                    <div className="modal-box bg-gray-100 mb-10">
                                      <div className="modal-action flex justify-end -mt-5 -mr-5">
                                        <label
                                          htmlFor="my_modal_6"
                                          className=" btn  text-black text-2xl "
                                        >
                                          <MdCancel />
                                        </label>
                                      </div>
                                      <form
                                        onSubmit={feedBack}
                                        className="space-y-4 "
                                      >
                                        <div
                                          className="p-4
                                     bg-white rounded-2xl"
                                        >
                                          <label
                                            htmlFor="additionalInfo"
                                            className="block text-xl font-bold text-black"
                                          >
                                            Anything than can be improved?
                                          </label>
                                          <textarea
                                            id="additionalInfo"
                                            name="additionalInfo"
                                            value={comments}
                                            onChange={(e) =>
                                              setComments(e.target.value)
                                            }
                                            className="mt-1 p-2 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-400 rounded-md border-2 "
                                            rows={4}
                                            placeholder="Enter Your Feedback..."
                                          ></textarea>
                                        </div>
                                        <input
                                          className="w-full btn bg-green-600 hover:bg-green-600 text-white "
                                          type="submit"
                                          value="submit"
                                        />
                                      </form>
                                    </div>
                                  </div>
                                </div>
                                <div className="absolute top-1 right-2">
                                  <button
                                    className="text-xl p-1 hover:text-green-300 duration-1000"
                                    title="Schedule Interview"
                                    onClick={() => handleOpenModal(info)}
                                  >
                                    <LuCalendarRange />
                                  </button>
                                </div>
                              </div>
                              {openModal && selectedCandidate && (
                                <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
                                  <form
                                    onSubmit={handleSubmit}
                                    className="bg-white p-8 rounded-lg"
                                  >
                                    <h2 className="text-lg font-bold mb-4">
                                      Schedule Interview for{" "}
                                      {selectedCandidate?.name}
                                    </h2>

                                    <div className="mb-4">
                                      <input
                                        type="text"
                                        name="googleMeetLink"
                                        placeholder="Google meet link"
                                        className="w-full border border-gray-300 rounded-md p-2"
                                      />
                                    </div>
                                    <div className="flex space-x-3">
                                      <div className="mb-4">
                                        <input
                                          type="time"
                                          name="time"
                                          className="border border-gray-300 rounded-md p-2 w-[180px]"
                                        />
                                      </div>
                                      <div className="mb-4">
                                        <input
                                          type="date"
                                          name="date"
                                          className="border border-gray-300 rounded-md p-2 w-[180px]"
                                        />
                                      </div>
                                    </div>
                                    <div className="flex justify-end">
                                      <button
                                        type="submit"
                                        className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600 w-1/2"
                                      >
                                        Schedule
                                      </button>
                                      <button
                                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 w-1/2"
                                        onClick={() => {
                                          setOpenModal(false);
                                        }}
                                      >
                                        Cancel
                                      </button>
                                    </div>
                                  </form>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                  </div>
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <Droppable droppableId="selected">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="flex-1 bg-base-300 min-h-screen"
                >
                  <h1 className="text-center bg-violet-600 p-3 font-bold text-base-300 rounded-t-xl">
                    {selected?.length > 0
                      ? `${selected?.length} Selected`
                      : "Selected"}
                  </h1>
                  <div>
                    {selected?.map((info: any, index: number) => (
                      <Draggable
                        key={info.id}
                        draggableId={info.id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="card card-compact m-2 bg-base-100 bg-opacity-50 duration-500 hover:shadow-xl"
                          >
                            <div className="space-x-3 flex p-2">
                              <div className="p-5 bg-blue-100 rounded-xl">
                                <img
                                  src={info?.profile}
                                  alt=""
                                  className=" rounded-full h-[80px] w-[80px] p-2"
                                />
                              </div>
                              <div className="space-y-1">
                                <h2 className="font-bold text-xs bg-blue-100 p-2 w-fit rounded-lg">
                                  {info?.position}
                                </h2>
                                <div className="flex space-x-1 items-center">
                                  <p className="font-bold p-1">{info?.name}</p>
                                  {info?.premium === "premium" ? (
                                    <GoVerified />
                                  ) : (
                                    ""
                                  )}
                                </div>
                                <div className="flex space-x-3 pl-1">
                                  <p className="text-sm">
                                    ${perHour(info?.maxSalary)} / hr
                                  </p>
                                  <p className="flex items-center text-sm space-x-1">
                                    <CiLocationOn className="text-sm" />
                                    {info?.city}, {info?.country}
                                  </p>
                                  <div className="absolute top-3 right-5">
                                    <label
                                      htmlFor="my_modal_6"
                                      className="cursor-pointer ... text-xl"
                                      title="Feedback"
                                    >
                                      <VscFeedback />
                                    </label>
                                    <input
                                      type="checkbox"
                                      id="my_modal_6"
                                      className="modal-toggle"
                                    />
                                    <div className="modal " role="dialog">
                                      <div className="modal-box bg-gray-100 mb-10">
                                        <div className="modal-action flex justify-end -mt-5 -mr-5">
                                          <label
                                            htmlFor="my_modal_6"
                                            className=" btn  text-black text-2xl "
                                          >
                                            <MdCancel />
                                          </label>
                                        </div>
                                        <form
                                          onSubmit={feedBack}
                                          className="space-y-4 "
                                        >
                                          <div
                                            className="p-4
                                     bg-white rounded-2xl"
                                          >
                                            <label
                                              htmlFor="additionalInfo"
                                              className="block text-xl font-bold text-black"
                                            >
                                              Anything than can be improved?
                                            </label>
                                            <textarea
                                              id="additionalInfo"
                                              name="additionalInfo"
                                              value={comments}
                                              onChange={(e) =>
                                                setComments(e.target.value)
                                              }
                                              className="mt-1 p-2 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-400 rounded-md border-2 "
                                              rows={4}
                                              placeholder="Enter Your Feedback..."
                                            ></textarea>
                                          </div>
                                          <input
                                            className="w-full btn bg-green-600 hover:bg-green-600 text-white "
                                            type="submit"
                                            value="submit"
                                          />
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                  </div>
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </DragDropContext>
        <ToastContainer />
      </div>
    </>
  );
};

export default ManageApplicants;
