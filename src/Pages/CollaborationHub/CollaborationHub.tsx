import { Link } from "react-router-dom";
import CollaborationHubCard from "./CollaborationHubCard";

const CollaborationHub = () => {
    return (
        <div className="max-w-screen-2xl mx-auto px-4 py-10 min-h-[70vh] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
            <Link to="/task-details">
                <CollaborationHubCard></CollaborationHubCard>
            </Link>
            <Link to="/task-details">
                <CollaborationHubCard></CollaborationHubCard>
            </Link>
            <Link to="/task-details">
                <CollaborationHubCard></CollaborationHubCard>
            </Link>
            <Link to="/task-details">
                <CollaborationHubCard></CollaborationHubCard>
            </Link>

        </div>
    );
};

export default CollaborationHub;