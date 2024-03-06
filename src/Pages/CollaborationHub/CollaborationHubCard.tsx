

const CollaborationHubCard = (task: any) => {
    //console.log(task);
    return (
        <div >
            <div className="rounded overflow-hidden border h-96">
                <img
                    className="w-full h-48 object-cover"
                    src={task.task.img}
                    alt="card image"
                />
                <div className="px-6 py-4">
                    <h3 className="text-xl font-bold text-gray-900">{task.task.challengeTitle}</h3>
                    <p className="text-sm text-gray-600">{task.task?.type}</p>
                    <p className="text-sm text-gray-600 mt-3">{task.task?.submissionDate?.slice(0, 10)}</p>
                    <p className="text-sm text-gray-600 mt-3">{task.task?.description?.slice(0, 70)}</p>
                </div>
            </div>
        </div>
    );
};

export default CollaborationHubCard;