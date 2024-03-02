import { Helmet } from "react-helmet-async";
import { FaPlusSquare } from "react-icons/fa";

const Challenges = () => {
  return (
    <>
      <Helmet>
        <title>Challenges | Dashboard</title>
      </Helmet>
      <div className="p-12">
        <div className="bg-white border rounded-md min-h-[70vh] p-6">
          <div className="flex justify-between">
            <h2 className="text-2xl">All Challenges</h2>
            <button className="btn text-light text-md font-heading font-bold border-none px-6 lg:px-7 bg-accent hover:bg-accent rounded-full flex">
              <FaPlusSquare />
              <span>Add New</span>
            </button>
          </div>
          <div className="grid grid-cols-1 2xl:grid-cols-4 gap-5 mt-12">
            <div className="min-h-32 bg-[#EFEBFD] border rounded-md p-4">
              <h2 className="text-xl font-semibold mb-5">
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
                <button className="text-[#690BDD] text-sm font-bold border-none bg-white hover:bg-white rounded-full px-6 lg:px-12 py-2 mt-6">
                  View Full Details
                </button>
              </div>
            </div>
            <div className="min-h-32 bg-[#EFEBFD] border rounded-md p-4">
              <h2 className="text-xl font-semibold mb-5">
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
                <button className="text-[#690BDD] text-sm font-bold border-none bg-white hover:bg-white rounded-full px-6 lg:px-12 py-2 mt-6">
                  View Full Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Challenges;
