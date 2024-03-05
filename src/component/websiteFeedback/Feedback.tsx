import React, { FormEvent, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";

interface FeedbackFormData {
  anyComments: string;
  interfaceRating: number;
  supportRating: number;
  UserNames: string;
  email: string;
  role: string;
  PostedDate: Date;
}

const Feedback: React.FC = () => {
  const [interfaceRating, setInterfaceRating] = useState<number>(0);
  const [supportRating, setSupportRating] = useState<number>(0);
  const [anyComments, setAnyComments] = useState<string>("");

  const { user, role } = useAuth();
  const axiosPublic = useAxiosPublic();

  // console.log(user.displayName, user.email);

  const handleInterfaceRatingChange = (value: number) => {
    setInterfaceRating(value);
  };

  const handleSupportRatingChange = (value: number) => {
    setSupportRating(value);
  };

  const handleCommentsChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setAnyComments(event.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData: FeedbackFormData = {
      anyComments,
      interfaceRating,
      supportRating,
      UserNames: user?.displayName,
      email: user?.email,
      role: role,
      PostedDate: new Date(),
    };

    axiosPublic
      .post("/websiteFeedback", formData)
      .then((response: any) => {
        // console.log(response.data);
        if (response.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Thank for Your Feedback",
            showConfirmButton: false,
            timer: 1500,
          });
          setInterfaceRating(0);
          setSupportRating(0);
          setAnyComments("");
          console.log(response.data);
        } else {
          toast.error("didn't receive  your  feedback");
        }
      })

      .catch((error: any) => {
        console.log(error);
        toast.error("Failed your feedback", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
        });
      });
  };

  const renderStarRating = (
    value: number,
    onChange: (value: number) => void
  ) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, index) => {
          const ratingValue = index + 1;
          return (
            <span key={index} onClick={() => onChange(ratingValue)}>
              {value >= ratingValue ? (
                <FaStar className="text-[#4869DD] cursor-pointer text-4xl mx-1" />
              ) : (
                <FaRegStar className="text-[#4869DD] cursor-pointer text-4xl mx-1" />
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
            className="block text-xl font-bold text-black mb-4"
          >
            Please Rating our website over all interface?
          </label>
          {renderStarRating(interfaceRating, handleInterfaceRatingChange)}
        </div>
        <div className="p-4 bg-white rounded-2xl">
          <label
            htmlFor="supportRating"
            className="block text-xl font-bold text-black mb-4"
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
      <ToastContainer />
    </div>
  );
};

export default Feedback;
