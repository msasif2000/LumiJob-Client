import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";

const TopCompanyProfile = () => {
  const { id } = useParams<{ id: string }>();
  const axiosPublic = useAxiosPublic();

  const [CompanyProfile, setCompanyProfile] = useState<any>(null);
  useEffect(() => {
    axiosPublic
      .get(`/company-profile/${id}`)
      .then((res) => {
        setCompanyProfile(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  });

  return (
    <div className="">
      {/* company details pages  */}
      <div>
        <div className=" pt-10 pb-16  px-7 bg-[#4869DD]">
          <p className=" pb-8 lg:text-4xl font-bold text-center text-white  ">
            Company Profile {`> `}
            {CompanyProfile?.name}{" "}
          </p>
          {/* company information */}
          <div className="flex gap-10 lg:px-16 lg:pt-10">
            {/* company title img adreess ect */}
            <div className="flex-1">
              <div className="flex gap-4 md:gap-10 mb-10">
                <img
                  className=" w-20 h-20 md:w-28 md:h-28 rounded-full bg-white p-2"
                  src={CompanyProfile?.photo}
                />
                <div>
                  <p className="text-sm md:text-base font-semibold uppercase text-white mb-1">
                    Company Name{" "}
                  </p>
                  <p className="text-sm md:text-lg text-[#d6dfe9] pl-1">
                    {CompanyProfile?.name}
                  </p>
                  <div className="flex flex-col justify-center  text-white mt-5 mb-5">
                    <p className="text-sm md:text-base font-semibold uppercase text-white mb-1 ">
                      Founding Year
                    </p>
                    <p className="text-sm md:text-lg text-[#d6dfe9] pl-1">
                      {CompanyProfile?.founding}
                    </p>
                  </div>
                  <p className="text-sm md:text-base font-semibold uppercase text-white mb-1">
                    Industry
                  </p>
                  <p className="text-sm md:text-lg text-[#d6dfe9] pl-1">
                    {CompanyProfile?.industry}
                  </p>
                  <div className="mt-5">
                    <p className="text-sm md:text-base font-semibold uppercase text-white mb-1 ">
                      address{" "}
                    </p>
                    <p className="text-sm md:text-lg  text-[#d6dfe9] pl-1">
                      {CompanyProfile?.city} - {CompanyProfile?.postal},{" "}
                      {CompanyProfile?.country}
                    </p>
                    <p className="text-sm md:text-lg uppercase text-[#d6dfe9] pt-1 pl-1">
                      Phone: {CompanyProfile?.phone}
                    </p>
                    <p className=" text-sm md:text-lg text-[#d6dfe9] md:pt-1 pl-1">
                      E-mail: {CompanyProfile?.email}
                    </p>
                    <p className=" text-sm md:text-lg text-[#d6dfe9] md:pt-1 pl-1">
                      Website: {CompanyProfile?.website}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* company details */}
            <div className="flex-1 bg-[#ffffff] pt-16 mb-5 px-10 rounded-2xl shadow-2xl">
              <p className="text-sm md:text-base font-semibold  text-black mb-2 uppercase">
                {CompanyProfile?.name} Details
              </p>
              <p className=" text-sm md:text-base text-justify text-[#282829] ">
                Established on {CompanyProfile?.founding},{" "}
                {CompanyProfile?.name} is a leading force in the{" "}
                {CompanyProfile?.industry} industry, headquartered in{" "}
                {CompanyProfile?.city} - {CompanyProfile?.postal},{" "}
                {CompanyProfile?.country}. With a focus on leveraging technology
                for positive societal impact, our company is registered under
                Company No. {CompanyProfile?.registration}. Specializing in
                fostering digital connectivity and community empowerment, we
                offer innovative solutions to meet evolving needs. Reach out to
                us at {CompanyProfile?.phone} or {CompanyProfile?.email} for
                inquiries or collaborations. Visit our website{" "}
                {CompanyProfile?.website} to discover our diverse range of
                initiatives aimed at driving meaningful change in the digital
                landscape. Join us in shaping a brighter future through the
                power of {CompanyProfile?.industry}.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* company posted jobs */}
      
    </div>
  );
};

export default TopCompanyProfile;
