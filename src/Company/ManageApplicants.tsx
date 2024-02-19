import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { ToastContainer } from "react-toastify";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const ManageApplicants = () => {
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();
  const queryClient = useQueryClient();

  useEffect(() => {
    // Manually trigger the queries when user data is available
    if (id) {
      queryClient.refetchQueries([
        { queryKey: ["info", id] },
        { queryKey: ["preSelect", id] },
        { queryKey: ["interview", id] },
        { queryKey: ["selected", id] }
      ]);
    }
  }, [id, queryClient]);

  const { data: infos, refetch: refetchInfo } = useQuery({
    queryKey: ["info", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/dnd-applicants/${id}`);
      return res.data;
    },
    enabled: !!id,
  });

  console.log(infos);

  const { data: preSelected, refetch: refetchPreSelect } = useQuery({
    queryKey: ["preSelect", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/dnd-pre-select/${id}`);
      return res.data;
    },
    enabled: !!id,
  });

  console.log(preSelected);

  const { data: interviews, refetch: refetchInterview } = useQuery({
    queryKey: ["interview", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/dnd-interview/${id}`);
      return res.data;
    },
    enabled: !!id,
  });

  console.log(interviews);

  const { data: selected, refetch: refetchSelect } = useQuery({
    queryKey: ["select", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/dnd-selected/${id}`);
      return res.data;
    },
    enabled: !!id,
  });

  console.log(selected);

  // Drag and Drop Functions
  const onDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;

    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return;
    }

    const updatedTasks = Array.from(infos);
    const [movedTask] = updatedTasks.splice(source.index, 1);
    updatedTasks.splice(destination.index, 0, movedTask);

    axiosPublic
      .put(`/updateTaskStatus/${draggableId}`, {
        newStatus: destination.droppableId,
      })
      .then(() => {
        refetchInfo();
        refetchInterview();
        refetchPreSelect();
        refetchSelect();
      });
  };

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1 px-1">
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
                  {infos?.map((task:any, index:number) => (
                    <Draggable
                      key={task.email}
                      draggableId={task.email}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="card card-compact m-2 bg-base-100 bg-opacity-50 duration-500 hover:shadow-xl"
                        >
                          <div className="card-body space-y-1">
                            <div className="flex justify-between items-center">
                              <h2 className="font-bold">{task.email}</h2>
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
                  {preSelected?.map((task: any, index:number) => (
                    <Draggable
                      key={task.email}
                      draggableId={task.email}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="card card-compact m-2 bg-base-100 bg-opacity-50 shadow-xl"
                        >
                          <div className="card-body space-y-1">
                            <p className="text-xs">{task?.email}</p>
                            <div className="md:flex justify-between"></div>
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
                  {interviews?.map((task:any, index:number) => (
                    <Draggable
                      key={task.email}
                      draggableId={task.email}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="card card-compact m-2 bg-base-100 bg-opacity-50 shadow-xl"
                        >
                          <div className="card-body space-y-1">
                            <p className="text-xs">{task?.email}</p>
                            <div className="md:flex justify-between"></div>
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
                  {selected?.map((task:any, index:number) => (
                    <Draggable
                      key={task.email}
                      draggableId={task.email}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="card card-compact m-2 bg-base-100 bg-opacity-50 shadow-xl"
                        >
                          <div className="card-body space-y-1">
                            <p className="text-xs">{task?.email}</p>
                            <div className="md:flex justify-between"></div>
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
