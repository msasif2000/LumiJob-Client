import { useEffect, useState } from "react";
import TopCompanyCard from "./TopCompanyCard";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const TopCompany = () => {
  const [allCompany, setAllCompany] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosPublic.get('/company-data');
        setAllCompany(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [axiosPublic]);

  const filterJob = allCompany.slice(2, 8);

  return (
    <div className="max-w-screen-2xl mx-auto py-16 px-4 lg:px-20">
      <div className="mb-8">
        <h3 className="text-3xl md:text-4xl lg:text-5xl 2xl:6xl font-heading font-semibold text-center mb-4 xl:mb-7">
          Most <span className="text-accentTwo">recruited</span> company
        </h3>
        <p className="text-sm md:text-lg lg:text-xl 2xl:text-2xl text-[#999999] text-center mx-4">
          Elevate Your Career with the Most Coveted Companies
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-16">
          {filterJob?.map((company, _id) => (
            <TopCompanyCard key={_id} company={company}></TopCompanyCard> /* Changed key={job._id} to key={idx} */
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCompany;
