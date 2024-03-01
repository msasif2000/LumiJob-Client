import { FormEvent, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

interface Comments {
  anyCements: string;
  comments: string;
}


const Feedback = () => {
  const [InterfaceRating, setRating] = useState<number>(0);
  const [supportRating, setRating1] = useState<number>(0);
  const websiteInterfaceRating = (value: number) => {
    setRating(value);
  };
  const supportTeamRating = (value: number) => {
    setRating1(value);
  };

//const [comments, setComments] = useState<string | any>("");
const feedBack = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = e.currentTarget;
  const anyCements = (form.elements.namedItem("additionalInfo") as HTMLInputElement).value;
  const allFeedback = {
    anyCements, InterfaceRating, supportRating
  }

  console.log(allFeedback);
};
  return (
    <div className="pt-8 ">
      <h1 className="text-4xl font-bold text-center">
        Lumi-Jobs website Feedback
      </h1>
      <form onSubmit={feedBack} className="space-y-4 mt-4">
        {/* Rating our website interface */}
        <div className="p-4 bg-white rounded-2xl">
          <label
            htmlFor="additionalInfo"
            className="block text-xl font-bold text-black"
          >
            Could you please Rating our website interface?
          </label>
          <Rating
          className="my-4 text-2xl"
            emptySymbol={<FaRegStar />}
            fullSymbol={<FaStar />}
            fractions={2}
            onChange={websiteInterfaceRating}
          />
        </div>
        {/* support team Rating */}
        <div className="p-4 bg-white rounded-2xl">
          <label
            htmlFor="additionalInfo"
            className="block text-xl font-bold text-black"
          >
            How would you rating the support team at Lumijobs website?
          </label>
          <Rating
          className="my-4 text-2xl"
            emptySymbol={<FaRegStar />}
            fullSymbol={<FaStar />}
            fractions={2}
            onChange={supportTeamRating}
          />
        </div>

        <div className="p-4 bg-white rounded-2xl">
          <label
            htmlFor="additionalInfo"
            className="block text-xl font-bold text-black"
          >
            Anything Feedback for Lumi-Jobs Website?
          </label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            className="mt-1   p-2 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-400 rounded-md border-2 "
            rows={4}
            placeholder="Enter Your Feedback..."
          ></textarea>
        </div>
        <input
          className="w-full btn bg-green-600 hover:bg-green-600 text-white "
          type="submit"
          value="submit"
        />
      </form>
    </div>
  );
};

export default Feedback;
