import { useEffect, useState } from "react";
import Sector from "../Home/PopularJobs/sector";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const Filters = () => {
  const [sectors, setSectors] = useState<Sector[]>([]);
  const [range, setRange] = useState<[number, number]>([0, 100]);

  const handleSliderChange = (values: [number, number]) => {
    setRange(values);
  };

  useEffect(() => {
    fetch("sectors.json")
      .then((res) => res.json())
      .then((data: Sector[]) => setSectors(data));
  }, []);

  return (
    <div>
      <div className="col-span-1">
        <div className="flex flex-col justify-center h-auto md:min-h-32 px-3">
          <h4 className="font-semibold font-hanken text-2xl">Filters</h4>
        </div>
        <div className="border rounded p-5 lg:p-8 m-3 min-h-[35vh] bg-white sticky top-24">
          {/* Job Type Filter */}
          <div>
            <h6 className="mb-3 text-xl font-hanken font-semibold text-gray-900">
              Category
            </h6>
            <ul className="space-y-2 text-sm">
              {sectors?.map((sector) => (
                <li key={sector._id} className="flex items-center">
                  <input
                    type="checkbox"
                    value={sector.sectorType}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                  />
                  <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    {sector.sectorType}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Job Type Filter */}
          <div className="mb-5 mt-12">
            <h6 className="mb-3 text-xl font-hanken font-semibold text-gray-900">
              Job Type
            </h6>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <input
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                />
                <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Full Time
                </label>
              </li>
              <li className="flex items-center">
                <input
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                />
                <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Remote
                </label>
              </li>
            </ul>
          </div>

          {/* Job filter by price range */}
          <div className="my-8 mx-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Price Range:
            </label>
            <div className="flex items-center">
              <div className="mr-2">${range[0]}</div>
              <Slider
                min={0}
                max={100}
                range
                value={range}
                onChange={() => handleSliderChange(range)}
                className="flex-1"
              />
              <div className="ml-2">${range[1]}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
