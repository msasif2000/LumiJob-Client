import React, { FormEvent, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

interface FeedbackFormData {
  anyComments: string;
  interfaceRating: number;
  supportRating: number;
}

const Feedback: React.FC = () => {
  const [interfaceRating, setInterfaceRating] = useState<number>(0);
  const [supportRating, setSupportRating] = useState<number>(0);
  const [anyComments, setAnyComments] = useState<string>("");

  const handleInterfaceRatingChange = (value: number) => {
    setInterfaceRating(value);
  };

  const handleSupportRatingChange = (value: number) => {
    setSupportRating(value);
  };

  const handleCommentsChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAnyComments(event.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData: FeedbackFormData = {
      anyComments,
      interfaceRating,
      supportRating,
    };

    console.log(formData);
  };

  const renderStarRating = (value: number, onChange: (value: number) => void) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, index) => {
          const ratingValue = index + 1;
          return (
            <span key={index} onClick={() => onChange(ratingValue)}>
              {value >= ratingValue ? (
                <FaStar className="text-[#4869DD] cursor-pointer text-2xl" />
              ) : (
                <FaRegStar className="text-[#4869DD] cursor-pointer text-2xl" />
              )}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <div className="pt-8">
      <h1 className="text-4xl font-extrabold text-center">
        Lumi-Jobs website Feedback
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        <div className="p-4 bg-white rounded-2xl">
          <label
            htmlFor="interfaceRating"
            className="block text-xl font-bold text-black"
          >
             Could you please rate our website interface?
          </label>
          { renderStarRating(interfaceRating, handleInterfaceRatingChange)}
        </div>
        <div className="p-4 bg-white rounded-2xl">
          <label
            htmlFor="supportRating"
            className="block text-xl font-bold text-black"
          >
            How would you rate the support team at Lumi-Jobs website?
          </label>
          {renderStarRating(supportRating, handleSupportRatingChange)}
        </div>
        <div className="p-4 bg-white rounded-2xl">
          <label
            htmlFor="additionalInfo"
            className="block text-xl font-bold text-black"
          >
            Any feedback for Lumi-Jobs Website?
          </label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            className="mt-1 p-2 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-400 rounded-md border-2"
            rows={4}
            placeholder="Enter Your Feedback..."
            value={anyComments}
            onChange={handleCommentsChange}
          />
        </div>
        <input
          className="w-full btn bg-[#4869DD] hover:bg-[#3150c0] text-white"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default Feedback;
