import { FormEvent, useState } from "react";

interface Comments {
     anyCements: string;
    comments: string;
  }

//const [comments, setComments] = useState<string | any>("");
const feedBack = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = e.currentTarget;
  const anyCements = (form.elements.namedItem("additionalInfo") as HTMLInputElement).value;
  
  console.log(anyCements);
};

const Feedback = () => {
  return (
    <div className="pt-8 ">
      <h1 className="text-4xl font-bold text-center">
        Lumi-Jobs website Feedback
      </h1>
      <form onSubmit={feedBack}  className="space-y-4 ">

        
        
        
        <div
          className="p-4 bg-white rounded-2xl"
        >
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
