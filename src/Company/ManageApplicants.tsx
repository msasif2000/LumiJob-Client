import { CiLocationOn } from "react-icons/ci";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { ToastContainer } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import { GoVerified } from "react-icons/go";
import { AiOutlineSchedule } from "react-icons/ai";
import { useState } from "react";

const ManageApplicants = () => {
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();
  const [openModal, setOpenModal] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState<any | null>(null);
  const [selectedId, setSelectedId] = useState<any | null>(null)

  const { data: infos, refetch: refetchInfo } = useQuery({
    queryKey: ["infos", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/dnd-applicants/${id}`);
      return res.data;
    },
    enabled: !!id,
  });

  const { data: preSelected, refetch: refetchPreSelect } = useQuery({
    queryKey: ["preSelected", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/dnd-pre-select/${id}`);
      return res.data;
    },
    enabled: !!id,
  });

  const { data: interviews, refetch: refetchInterview } = useQuery({
    queryKey: ["interview", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/dnd-interview/${id}`);
      return res.data;
    },
    enabled: !!id,
  });

  const { data: selected, refetch: refetchSelect } = useQuery({
    queryKey: ["select", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/dnd-selected/${id}`);
      return res.data;
    },
    enabled: !!id,
  });

  const onDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;

    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return;
    }

    // Check if `infos` is defined and iterable
    if (!infos || !Array.isArray(infos)) {
      console.error("Invalid `infos` data:", infos);
      return;
    }

    const updatedState = [...infos];
    console.log(updatedState);

    const [movedCard] = updatedState.splice(source.index, 1);
    updatedState.splice(destination.index, 0, movedCard);

    const payload = {
      jobId: id,
      dndStats: destination.droppableId,
    };

    axiosPublic
      .put(`/updateApplicantsStatus/${draggableId}`, payload)
      .then(() => {
        refetchInfo();
        refetchInterview();
        refetchPreSelect();
        refetchSelect();
      });
  };

  const perHour = (n: any) => {
    const salary = parseFloat(n);
    const daily = salary / 30;
    const hourly = daily / 24;
    return hourly.toFixed(2);
  };

  const handleOpenModal = (candidate: any) => {
    setSelectedCandidate(candidate);
    setOpenModal(true);
    setSelectedId(candidate.id)
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const googleMeetLink = formData.get("googleMeetLink");
    const time = formData.get("time");
    const date = formData.get("date");
    const candidate = selectedId;
    const jobId = id

    // Now you have access to the values of the form fields
    console.log("Google Meet Link:", googleMeetLink);
    console.log("Time:", time);
    console.log("Date:", date);
    console.log("Candidate:", candidate);
    console.log("jobId:", jobId);


    // Perform any further actions such as validation or submitting the form data
  };

  return (
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
                              <div className="absolute top-1 right-2">
                                <button
                                  className="text-xl bg-blue-100 p-1 rounded-full hover:bg-green-300 duration-1000"
                                  title="Schedule Interview"
                                  onClick={() => handleOpenModal(info)}
                                >
                                  <AiOutlineSchedule />
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
  );
};

export default ManageApplicants;
