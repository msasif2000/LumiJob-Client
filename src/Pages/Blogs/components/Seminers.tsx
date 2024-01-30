
import { useEffect, useState } from "react";
import useAxiosDev from "../../../hooks/useAxiosDev";

const Seminers = () => {
  const axiosDev = useAxiosDev();
  const [seminars, setSeminars] = useState([]);

  useEffect(() => {
    axiosDev.get("/seminars")
      .then((res) =>
        setSeminars(res.data)
      );
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#abf1c0] from-5% via-[#D0FBD0] via-20% to-[#F2F8F5] to-65% ... pb-10">
      <div className="max-w-screen-2xl mx-auto lg:flex  lg:space-x-10 lg:px-4">
        <div className="pt-10 lg:w-1/3 lg:pt-32">
          <div className="space-y-8">
            <h1 className="text-3xl px-3 md:text-6xl lg:px-0 xl:text-7xl font-bold">Seminars</h1>
            <p className="px-3 lg:px-0 xl:text-lg font-semibold">
              Transform your mindset and elevate your career with our impactful
              seminars. Join us to revolutionize your thinking and stay ahead in
              your professional journey.
            </p>
          </div>
        </div>
        {/* actual seminars part */}
        <div className=" pt-10 lg:w-2/3 lg:pt-32">
          <div className="space-y-16 w-full">
            {seminars.map((seminar: any) => {
              return (
                <div key={seminar._id} className="grid gap-5 lg:grid-cols-5 lg:gap-10 px-3 xl:px-0">
                  <div className="space-y-2 ">
                    <p className="text-xl font-bold">{seminar.date}</p>
                  </div>
                  <div className="space-y-2 col-span-3">
                    <p className="text-xl xl:text-3xl font-bold ">{seminar.title}</p>
                    <p className="text-lg xl:text-2xl font-medium">{seminar.speaker}</p>
                    <p>{seminar.description}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="xl:text-xl font-bold">{seminar.location}</p>
                    <p className="xl:text-md font-medium">{seminar.time}</p>
                  </div>
                  <div className="hidden lg:block">
                    <div className="divider divider-accent w-full"></div>
                  </div>
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
