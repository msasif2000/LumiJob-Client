import CollaborationHubCard from "./CollaborationHubCard";

const CollaborationHub = () => {
    return (
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
            <CollaborationHubCard></CollaborationHubCard>
            <CollaborationHubCard></CollaborationHubCard>
            <CollaborationHubCard></CollaborationHubCard>
            <CollaborationHubCard></CollaborationHubCard>
        </div>
    );
};

export default CollaborationHub;