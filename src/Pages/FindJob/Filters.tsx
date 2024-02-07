import React, { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";

interface Sector {
  _id: string;
  sectorType: string;
}

interface FiltersProps {
  onFilterChange: (filteredData: any[]) => void;
}

const Filters: React.FC<FiltersProps> = ({ onFilterChange }) => {
  const axiosPublic = useAxiosPublic();

  const [sectors, setSectors] = useState<Sector[]>([]);
  const [selectedSectors, setSelectedSectors] = useState<string[]>([]);
  const [jobTypes, setJobTypes] = useState<string[]>([]);
  //const [filteredData, setFilteredData] = useState<any[]>([]);

  //console.log(filteredData)

  useEffect(() => {
    fetch("/sectors.json")
      .then((res) => res.json())
      .then((data: Sector[]) => setSectors(data));
  }, []);

  const applyFilters = () => {
    const query: any = {};
  
    if (selectedSectors.length > 0) {
      query.sectorType = selectedSectors.join(","); 
    }
  
    if (jobTypes.length > 0) {
      query.jobType = jobTypes.join(",");
    }
  
    axiosPublic.get(`/filter-job-posts`, { params: query })
      .then((res) => {
        // setFilteredData(res.data);
        onFilterChange(res.data);
      })
      .catch((error) =>
        console.error("Error fetching filtered job posts:", error)
      );
  };

  const handleSectorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setSelectedSectors((prev) =>
      checked ? [...prev, value] : prev.filter((sector) => sector !== value)
    );
  };

  const handleJobTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setJobTypes((prev) =>
      checked ? [...prev, value] : prev.filter((type) => type !== value)
    );
  };

  useEffect(() => {
    applyFilters();
  }, [selectedSectors, jobTypes]);

  return (
    <div>
      <div className="col-span-1">
        <div className="flex flex-col justify-center h-auto md:min-h-32 px-3 w-full">
          <h4 className="font-semibold font-heading text-2xl">Filters</h4>
        </div>
        <div className="border rounded p-2  m-3 min-h-[35vh] bg-white sticky top-24">
          {/* Sector Filter */}
          <div>
            <h6 className="mb-3 text-xl font-heading font-semibold text-gray-900">
              Sector
            </h6>
            <ul className="space-y-2 text-sm">
              {sectors?.map((sector) => (
                <li key={sector._id} className="flex items-center">
                  <input
                    type="checkbox"
                    value={sector.sectorType}
                    onChange={handleSectorChange}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                  />
                  <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-600">
                    {sector.sectorType}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Job Type Filter */}
          <div className="mb-5 mt-12">
            <h6 className="mb-3 text-xl font-heading font-semibold text-gray-900">
              Job Type
            </h6>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <input
                  type="checkbox"
                  value="Hybrid"
                  onChange={handleJobTypeChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                />
                <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-500">
                  Hybrid
                </label>
              </li>
              <li className="flex items-center">
                <input
                  type="checkbox"
                  value="Onsite"
                  onChange={handleJobTypeChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                />
                <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-500">
                  Onsite
                </label>
              </li>
              <li className="flex items-center">
                <input
                  type="checkbox"
                  value="Remote"
                  onChange={handleJobTypeChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                />
                <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-500">
                  Remote
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
