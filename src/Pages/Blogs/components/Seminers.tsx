import { BiTimeFive } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { SiTeamspeak } from "react-icons/si";

const Seminers = () => {
  const axiosPublic = useAxiosPublic();
  const [seminars, setSeminars] = useState([]);

  useEffect(() => {
    axiosPublic.get("/seminars").then((res) => setSeminars(res.data));
  }, []);

  return (
    <div className="min-h-screen pb-10">
      <div className="max-w-screen-2xl mx-auto lg:flex lg:space-x-10 px-4 lg:px-20">
        <div className="pt-10 lg:w-1/3 lg:pt-32">
          <div className="space-y-8">
            <h1 className="text-3xl md:text-6xl xl:text-7xl text-accentTwo font-heading font-semibold">
              Seminars
            </h1>
            <p className="text-md md:text-lg xl:text-xl font-normal">
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
                <div
                  key={seminar._id}
                  className="grid gap-5 lg:grid-cols-5 lg:gap-10 bg-white p-6 shadow-lg rounded-lg"
                >
                  <div className="space-y-2 ">
                    <p className="text-xl font-bold">{seminar.date}</p>
                    <div className="hidden lg:block h-1">
                      <div className="divider bg-accent h-[2px] w-full"></div>
                    </div>
                  </div>
                  <div className="space-y-2 col-span-3">
                    <p className="text-xl md:text-2xl xl:text-3xl font-heading font-semibold ">
                      {seminar.title}
                    </p>
                    <p className="flex items-center gap-2 text-gray-600 text-lg font-medium">
                      <SiTeamspeak className="text-xl text-accent" /> {seminar.speaker}
                    </p>
                    <p className="text-md md:text-lg xl:text-xl">
                      {seminar.description}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-lg xl:text-xl font-heading font-semibold">
                      <GoLocation className="text-xl text-accent" />{seminar.location}
                    </p>
                    <p className="text-md md:text-lg xl:text-xl font-normal text-gray-600">
                      <BiTimeFive className="text-xl text-accent" />{seminar?.startTime} AM - {seminar?.endTime} PM
                    </p>
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
