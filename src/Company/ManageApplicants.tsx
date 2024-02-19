import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";

const ManageApplicants = () => {
    const [info, setInfo] = useState(null);
    const axiosPublic = useAxiosPublic();
    const { id } = useParams();
    useEffect(() => {
        axiosPublic.get(`/single-job/${id}`)
            .then(res => {
                setInfo(res.data.applicants);
            })
            .catch(err => {
                console.error(err);
            });
    }, [axiosPublic, id]);

    console.log(info);

    return (
        <div>
            <NavDash title={`Welcome ${user?.displayName}`} btn='Add Task' profile={user?.photoURL} refetch={refetchTasks} />
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1 px-1">
                    <Droppable droppableId="todo">
                        {(provided) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                className="flex-1 bg-base-300 min-h-screen"
                            >
                                <h1 className="text-center bg-green-300 p-3 font-bold text-base-300 rounded-t-xl">{
                                    tasks?.length > 0 ? `${tasks?.length} To-Do` : 'To-Do'
                                }</h1>
                                <div>
                                    {tasks?.map((task, index) => (
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
                                                            <h2 className="font-bold">{task.title}</h2>
                                                            <div className='space-x-1'>
                                                                {/* The button to open modal */}
                                                                <label htmlFor={`my_modal_${task._id}`} className="btn btn-xs">
                                                                    <MdOutlineUpdate />
                                                                </label>


                                                                {/* Put this part before </body> tag */}
                                                                <input type="checkbox" id={`my_modal_${task._id}`} className="modal-toggle" />

                                                                <div className="modal" role="dialog">
                                                                    <div className="modal-box">
                                                                        <form onSubmit={(event) => handleUpgrade(event, task._id)} className="space-y-4 font-normal">
                                                                            <div className="form-control w-full">
                                                                                <input
                                                                                    type="text"
                                                                                    name="title"
                                                                                    placeholder="Task Title"
                                                                                    className="input input-bordered"
                                                                                    required
                                                                                />
                                                                            </div>
                                                                            <div className="form-control w-full">
                                                                                <input
                                                                                    type="text"
                                                                                    name="description"
                                                                                    placeholder="Task Description"
                                                                                    className="input input-bordered"
                                                                                    required
                                                                                />
                                                                            </div>
                                                                            <div className="flex space-x-1">
                                                                                <div className="form-control w-full">
                                                                                    <input
                                                                                        type="date"
                                                                                        name="deadline"
                                                                                        placeholder="Select Deadline"
                                                                                        className="input input-bordered"
                                                                                        min={new Date().toISOString().split('T')[0]}
                                                                                        required
                                                                                    />
                                                                                </div>
                                                                                <div className="form-control w-full">
                                                                                    <select
                                                                                        name="priority"
                                                                                        className="input input-bordered"
                                                                                        required
                                                                                    >
                                                                                        <option value="" disabled>Select Priority</option>
                                                                                        <option value="Low">Low</option>
                                                                                        <option value="Moderate">Moderate</option>
                                                                                        <option value="High">High</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                            <input type="submit" value="Submit" className="btn w-full" />
                                                                        </form>

                                                                    </div>
                                                                    <label className="modal-backdrop" htmlFor={`my_modal_${task._id}`}></label>
                                                                </div>

                                                                <button
                                                                    onClick={() => handleDelete(task._id)}
                                                                    className="btn btn-xs text-red-500"
                                                                >
                                                                    <RiDeleteBin2Fill />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <p className="text-xs">{task.description}</p>
                                                        <div className="md:flex justify-between">
                                                            <div className="flex items-center text-xs space-x-2">
                                                                <p className="font-semibold">Priority :</p>
                                                                {task?.priority === 'High' ? (
                                                                    <FcHighPriority />
                                                                ) : task?.priority === 'Moderate' ? (
                                                                    <FcMediumPriority />
                                                                ) : (
                                                                    <FcLowPriority />
                                                                )}
                                                                <span> {task.priority}</span>
                                                            </div>
                                                            <div className="flex items-center text-xs space-x-1">
                                                                <p className="font-semibold">Deadline:</p>
                                                                <span style={{ color: isDeadlineNear(task.deadline) }}>
                                                                    <FaCalendar />
                                                                </span>
                                                                <span>{task.deadline}</span>
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

                    <Droppable droppableId="ongoing">
                        {(provided) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                className="flex-1 bg-base-300 min-h-screen"
                            >
                                <h1 className="text-center bg-green-400 p-3 font-bold text-base-300 rounded-t-xl">{
                                    ongoingTasks?.length > 0 ? `${ongoingTasks?.length} On Going` : 'On Going'
                                }</h1>
                                <div>
                                    {ongoingTasks?.map((task, index) => (
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
                                                            <h2 className="font-bold">{task.title}</h2>
                                                            <button
                                                                onClick={() => handleDelete(task._id)}
                                                                className="btn btn-xs text-red-500"
                                                            >
                                                                <RiDeleteBin2Fill />
                                                            </button>
                                                        </div>
                                                        <p className="text-xs">{task.description}</p>
                                                        <div className="md:flex justify-between">
                                                            <div className="flex items-center text-xs space-x-2">
                                                                <p className="font-semibold">Priority :</p>
                                                                {task?.priority === 'High' ? (
                                                                    <FcHighPriority />
                                                                ) : task?.priority === 'Moderate' ? (
                                                                    <FcMediumPriority />
                                                                ) : (
                                                                    <FcLowPriority />
                                                                )}
                                                                <span> {task.priority}</span>
                                                            </div>
                                                            <div className="flex items-center text-xs space-x-1">
                                                                <p className="font-semibold">Deadline:</p>
                                                                <span style={{ color: isDeadlineNear(task.deadline) }}>
                                                                    <FaCalendar />
                                                                </span>
                                                                <span>{task.deadline}</span>
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

                    <Droppable droppableId="completed">
                        {(provided) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                className="flex-1 bg-base-300 min-h-screen"
                            >
                                <h1 className="text-center bg-green-500 p-3 font-bold text-base-300 rounded-t-xl">{
                                    completedTasks?.length > 0 ? `${completedTasks?.length} Completed` : 'Completed'
                                }</h1>
                                <div>
                                    {completedTasks?.map((task, index) => (
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
                                                            <h2 className="font-bold">{task.title}</h2>
                                                            <button
                                                                onClick={() => handleDelete(task._id)}
                                                                className="btn btn-xs text-green-500"
                                                            >
                                                                <FaCheckSquare />
                                                            </button>
                                                        </div>
                                                        <p className="text-xs">{task.description}</p>
                                                        <div className="md:flex justify-between">
                                                            <div className="flex items-center text-xs space-x-2">
                                                                <p className="font-semibold">Priority :</p>
                                                                {task?.priority === 'High' ? (
                                                                    <FcHighPriority />
                                                                ) : task?.priority === 'Moderate' ? (
                                                                    <FcMediumPriority />
                                                                ) : (
                                                                    <FcLowPriority />
                                                                )}
                                                                <span> {task.priority}</span>
                                                            </div>
                                                            <div className="flex items-center text-xs space-x-1">
                                                                <p className="font-semibold">Deadline:</p>
                                                                <span className='text-green-500'>
                                                                    <FaCalendar />
                                                                </span>
                                                                <span>{task.deadline}</span>
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
