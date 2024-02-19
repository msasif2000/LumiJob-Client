import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Link, useParams } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { ToastContainer } from "react-toastify";
import { useQuery } from "@tanstack/react-query";

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
    ;

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

        const updatedState = Array.from(infos);
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

    return (
        <div className="max-w-7xl mx-auto my-3">
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
                                            key={info.email}
                                            draggableId={info.email}
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
                                                            <h2 className="font-bold">{info.email}</h2>
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
                                    {preSelected?.map((preSelects: any, index: number) => (
                                        <Draggable
                                            key={preSelects.email}
                                            draggableId={preSelects.email}
                                            index={index}
                                        >
                                            {(provided) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    className="card card-compact m-2 bg-base-100 bg-opacity-50 duration-500 hover:shadow-xl"
                                                >
                                                    <div className="space-y-1 flex">
                                                        <div>
                                                            <img src={preSelects?.profile} alt="" className=" rounded-full h-[]"/>
                                                            <Link to={``}><button className="btn ">Profile</button></Link>
                                                        </div>
                                                        <div>
                                                            <h2 className="font-bold">{preSelects.email}</h2>
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
                                    {interviews?.map((interview: any, index: number) => (
                                        <Draggable
                                            key={interview.email}
                                            draggableId={interview.email}
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
                                                        <h2 className="font-bold">{interview.email}</h2>
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
                                    {selected?.map((marked: any, index: number) => (
                                        <Draggable
                                            key={marked.email}
                                            draggableId={marked.email}
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
                                                        <h2 className="font-bold">{marked.email}</h2>
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
