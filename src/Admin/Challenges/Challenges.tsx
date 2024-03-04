import { Helmet } from "react-helmet-async";
import { FaPlusSquare } from "react-icons/fa";
import ChallengeCard from "./ChallengeCard";
import { useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Challenges = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<any>(null);
  const axiosPublic = useAxiosPublic();

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    const addChallenge = {
      challengeTitle: data.title,
      description: data.description,
      submissionDate: selectedDate,
    };

    // console.log(addChallenge);

    const Res = await axiosPublic.post("/add-challenge", addChallenge);
    console.log(Res.data);
    if (Res.data.insertedId) {
      toggleModal();
    }
  };

  return (
    <>
      <Helmet>
        <title>Challenges | Dashboard</title>
      </Helmet>
      <div className="p-12">
        <div className="bg-white border rounded-md min-h-[70vh] p-6">
          <div className="flex justify-between">
            <h2 className="text-2xl">All Challenges</h2>
            <button
              onClick={toggleModal}
              className="btn text-light text-md font-heading font-bold border-none px-6 lg:px-7 bg-accent hover:bg-accent rounded-full flex"
            >
              <FaPlusSquare />
              <span>Add New</span>
            </button>
          </div>
          <div className="grid grid-cols-1 2xl:grid-cols-4 gap-5 mt-12">
            <ChallengeCard />
            <ChallengeCard />
            <ChallengeCard />
            <ChallengeCard />
            <ChallengeCard />
            <ChallengeCard />
            <ChallengeCard />
          </div>
          {/* Modal */}
          {showModal && (
            <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-4 rounded-md w-full max-w-md">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex flex-wrap pb-3">
                    <div className="w-full px-4">
                      <label className="block  text-left text-gray-600 font-medium text-md mb-2 mt-8">
                        Title
                      </label>
                      <input
                        className="border rounded w-full py-2 px-3 text-gray-700"
                        {...register("title", { required: true })}
                        name="title"
                        type="text"
                        placeholder="Add Title"
                      />
                      {errors.title && (
                        <span className="text-red-600 mt-2">
                          Title is required
                        </span>
                      )}
                    </div>

                    <div className="w-full px-4">
                      <label className="block text-left text-gray-600 font-medium text-md mb-2 mt-8">
                        Description
                      </label>

                      <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        {...register("description", { required: true })}
                        name="description"
                        maxLength={200}
                        placeholder="note about the booking"
                        required
                      ></textarea>
                      {errors.description && (
                        <span className="text-red-600 mt-2">
                          Description is required
                        </span>
                      )}
                    </div>

                    <div className="w-full px-4">
                      <label className="block  text-left text-gray-600 font-medium text-md mb-2 mt-8">
                        Submission Date
                      </label>
                      <DatePicker
                        selected={selectedDate}
                        onChange={handleDateChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholderText="Select a date"
                        required
                      />
                    </div>

                    <div className="flex justify-center w-full px-4 mt-12 mb-12 md:mb-0">
                      <button
                        className="bg-accentTwo hover:bg-accent text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline mr-8"
                        type="submit"
                      >
                        Add New Challenge
                      </button>

                      <button
                        onClick={toggleModal}
                        className="bg-black hover:bg-red-600 text-white font-bold  py-2 px-6 rounded focus:outline-none focus:shadow-outline"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Challenges;
