import { CiLocationOn } from "react-icons/ci";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { ToastContainer } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import { GoVerified } from "react-icons/go";
import { FormEvent, useState } from "react";
import { MdCancel } from "react-icons/md";

const ManageApplicants = () => {
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();

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
  interface Comments {
    anyCements: string;
    additionalInfo: string;
    
  }
  const [additionalInfo, setAdditionalInfo] = useState<string>('');
  const feedBack = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const anyCements = (form.elements.namedItem("anyCements") as HTMLInputElement).value;

    const allText: Comments = { anyCements, additionalInfo };
    console.log(allText);

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

                              <div className="flex justify-center  ">
                                <label
                                  htmlFor="my_modal_6"
                                  className="btn btn-sm bg-accent hover:bg-accent
                                 text-white px-10 pt-3 pb-7"
                                >
                                  Feedback
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
                                    <form onSubmit={feedBack} className="space-y-4 ">
                                      
                                      <div className="p-4
                                     bg-white rounded-2xl">
                                        <label
                                          htmlFor="additionalInfo"
                                          className="block text-xl font-bold text-black"
                                        >
                                          Anything than can be improved?
                                        </label>
                                        <textarea
                                          id="additionalInfo"
                                          name="additionalInfo"
                                          value={additionalInfo}
                                          onChange={(e) =>
                                            setAdditionalInfo(e.target.value)
                                          }
                                          className="mt-1 p-2 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-400 rounded-md border-2 "
                                          rows={4}
                                          placeholder="Enter Your Feedback..."
                                        ></textarea>
                                      </div>
                                     <input  className="w-full btn bg-green-600 hover:bg-green-600 text-white " type="submit" value="submit" />
                                     

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
                              <div className="flex justify-center ">
                                <button
                                  className="btn btn-sm bg-accent
                                 text-white px-10 pt-3 pb-7"
                                >
                                  Feedback
                                </button>
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
                              <div className="flex justify-center ">
                                <button
                                  className="btn btn-sm bg-accent
                                 text-white px-10 pt-3 pb-7"
                                >
                                  Feedback
                                </button>
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
                              <div className="flex justify-center ">
                                <button
                                  className="btn btn-sm bg-accent
                                 text-white px-10 pt-3 pb-7"
                                >
                                  Feedback
                                </button>
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
