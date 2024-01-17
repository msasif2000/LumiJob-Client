import axios from "axios";
import { useEffect, useState } from "react";

const Seminers = () => {
  const [seminars, setSeminars] = useState([]);

  useEffect(() => {
    axios.get("/Seminers.json").then((res) => setSeminars(res.data));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#abf1c0] from-5% via-[#D0FBD0] via-20% to-[#F2F8F5] to-65% ...">
      <div className="max-w-screen-2xl mx-auto flex space-x-10">
        <div className="w-1/3 pt-32">
         <div className="space-y-8">
         <h1 className="text-7xl font-bold">Seminars</h1>
          <p className="text-lg font-semibold">
            Transform your mindset and elevate your career with our impactful
            seminars. Join us to revolutionize your thinking and stay ahead in
            your professional journey.
          </p>
         </div>
        </div>
        {/* actual seminars part */}
        <div className="w-2/3 pt-32">
          <div className="space-y-16 w-full">
            {seminars.map((seminar: any, idx) => {
              return (
                <div key={idx} className="grid grid-cols-5 gap-10">
                  <div className="space-y-2 ">
                    <p className="text-xl font-bold">{seminar.date}</p>
                  </div>
                  <div className="space-y-2 col-span-3">
                    <p className="text-3xl font-bold ">{seminar.title}</p>
                    <p className="text-2xl font-medium">{seminar.speaker}</p>
                    <p>{seminar.description}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xl font-bold">{seminar.location}</p>
                    <p className="text-md font-medium">{seminar.time}</p>
                  </div>
                  <div className="divider divider-accent w-full"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seminers;
