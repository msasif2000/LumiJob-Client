const ChallengeCard = () => {
  return (
    <div className="min-h-32 bg-[#EFEBFD] border rounded-md p-4">
      <h2 className="text-xl text-gray-700 font-normal mb-5">
        Reactify - Building Dynamic Web Applications with React
      </h2>
      <div className="flex justify-around py-6 text-center">
        <div>
          <h2 className="text-2xl font-semibold">50</h2>
          <p className="text-gray-500">Teams</p>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div>
          <h2 className="text-2xl font-semibold">50</h2>
          <p className="text-gray-500">Teams</p>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div>
          <h2 className="text-2xl font-semibold">50</h2>
          <p className="text-gray-500">Teams</p>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="text-[#690BDD] text-sm font-bold border bg-white hover:bg-white rounded-full px-6 lg:px-12 py-2 mt-6">
          View Full Details
        </button>
      </div>
    </div>
  );
};

export default ChallengeCard;
