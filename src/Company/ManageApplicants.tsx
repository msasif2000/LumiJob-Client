import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { ToastContainer, toast } from "react-toastify";
import { useQuery, useQueryClient } from '@tanstack/react-query';

const ManageApplicants = () => {
    // const [info, setInfo] = useState(null);
    const axiosPublic = useAxiosPublic();
    const { id } = useParams();
    const queryClient = useQueryClient();

    useEffect(() => {
        // Manually trigger the queries when user data is available
        if (id) {
            queryClient.refetchQueries(['info']);
            queryClient.refetchQueries(['preSelected']);
            queryClient.refetchQueries(['interview']);
            queryClient.refetchQueries(['selected']);
        }
    }, [id, queryClient]);

    const { data: info, refetch: refetchInfo, isLoading: infoLoading } = useQuery({
        queryKey: ['info', id],
        queryFn: async () => {

            const res = await axiosPublic.get(`/single-job/${id}`);
            return res.data;
        },
        enabled: !!id,
    });
    const infos = info?.applicants;
    console.log(infos);

    const { data: preSelect, refetch: refetchPreSelect, isLoading: preSelectLoading } = useQuery({
        queryKey: ['preSelect', id],
        queryFn: async () => {

            const res = await axiosPublic.get(`/single-job/${id}`);
            return res.data;
        },
        enabled: !!id,
    });
    const preSelected = preSelect?.applicants;
    console.log(preSelected);

    const { data: interview, refetch: refetchInterview, isLoading: interviewLoading } = useQuery({
        queryKey: ['interview', id],
        queryFn: async () => {

            const res = await axiosPublic.get(`/single-job/${id}`);
            return res.data;
        },
        enabled: !!id,
    });
    const interviews = interview?.applicants;
    console.log(interviews);

    const { data: select, refetch: refetchSelect, isLoading: selectLoading } = useQuery({
        queryKey: ['select', id],
        queryFn: async () => {

            const res = await axiosPublic.get(`/single-job/${id}`);
            return res.data;
        },
        enabled: !!id,
    });
    const selected = select?.applicants;
    console.log(selected);

    // Drag and Drop Functions
    const onDragEnd = (result) => {
        const { destination, source, draggableId } = result;

        if (!destination || (destination.droppableId === source.droppableId && destination.index === source.index)) {
            return;
        }

        const updatedTasks = Array.from(tasks);
        const [movedTask] = updatedTasks.splice(source.index, 1);
        updatedTasks.splice(destination.index, 0, movedTask);

        axiosPublic.put(`/updateTaskStatus/${draggableId}`, {
            newStatus: destination.droppableId,
        }).then((res) => {
            console.log(res.data);
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
                                <h1 className="text-center bg-green-300 p-3 font-bold text-base-300 rounded-t-xl">{
                                    infos?.length > 0 ? `${infos?.length} Applicants` : 'Applicants'
                                }</h1>
                                <div>
                                    {infos?.map((task, index) => (
                                        <Draggable key={task._id} draggableId={task._id} index={index}>
                                            {(provided) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    className="card card-compact m-2 bg-base-100 bg-opacity-50 shadow-xl"
                                                >
                                                    <div className="card-body space-y-1">
                                                        <div className="flex justify-between items-center">
                                                            <h2 className="font-bold">{task.email}</h2>
                                                        </div>
                                                        <p className="text-xs">{task?.name}</p>
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
                                <h1 className="text-center bg-green-400 p-3 font-bold text-base-300 rounded-t-xl">{
                                    preSelected?.length > 0 ? `${preSelected?.length} Pre-Selected` : 'Pre-Selected'
                                }</h1>
                                <div>
                                    {preSelected?.map((task, index) => (
                                        <Draggable key={task._id} draggableId={task._id} index={index}>
                                            {(provided) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    className="card card-compact m-2 bg-base-100 bg-opacity-50 shadow-xl"
                                                >
                                                    <div className="card-body space-y-1">
                                                        <p className="text-xs">{task?.email}</p>
                                                        <div className="md:flex justify-between">
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
                                <h1 className="text-center bg-green-400 p-3 font-bold text-base-300 rounded-t-xl">{
                                    interviews?.length > 0 ? `${interviews?.length} Interviews` : 'Interviews'
                                }</h1>
                                <div>
                                    {interviews?.map((task, index) => (
                                        <Draggable key={task._id} draggableId={task._id} index={index}>
                                            {(provided) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    className="card card-compact m-2 bg-base-100 bg-opacity-50 shadow-xl"
                                                >
                                                    <div className="card-body space-y-1">
                                                        <p className="text-xs">{task?.email}</p>
                                                        <div className="md:flex justify-between">
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
                                <h1 className="text-center bg-green-400 p-3 font-bold text-base-300 rounded-t-xl">{
                                    selected?.length > 0 ? `${selected?.length} Selected` : 'Selected'
                                }</h1>
                                <div>
                                    {selected?.map((task, index) => (
                                        <Draggable key={task._id} draggableId={task._id} index={index}>
                                            {(provided) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    className="card card-compact m-2 bg-base-100 bg-opacity-50 shadow-xl"
                                                >
                                                    <div className="card-body space-y-1">
                                                        <p className="text-xs">{task?.email}</p>
                                                        <div className="md:flex justify-between">
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
