import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";


const TopCompanyProfile = () => {

    const {id} = useParams<{ id: string}>();
    const axiosPublic = useAxiosPublic();

    const [CompanyProfile, setCompanyProfile] = useState<any>(null);
    useEffect(() => {
        axiosPublic
        .get(`/company-profile/${id}`)
        .then((res) => {
            setCompanyProfile(res.data);
            console.log(res.data);
        })
        .catch((error) => console.log(error))
    })


    return (
        <div className="h-screen">
            {/* company details pages  */}
            <div>
            <div className="md:h-60 mt-10 px-7 bg-gradient-to-r from-[#228bedde] to-[#6565C7]">
        <div className="flex justify-between items-center my-2 pt-2">
          <div>
            <p className="text-xl md:text-2xl p-2 text-white ">Company Profile</p>
          </div>
          
        </div>

         

        <div className="md:flex md:gap-10">
          {/* part one-- */}
          <div className="flex gap-4 md:gap-10">
            <img
              className=" w-20 h-20 md:w-28 md:h-28 rounded-full bg-white p-2"
              src={CompanyProfile?.photo}
            />
            <div>
              <p className="text-sm md:text-base uppercase text-white ">Company Name </p>
              <p className="text-sm md:text-2xl font-bold text-white ">{CompanyProfile?.name}</p>
              <p className="text-sm md:text-base uppercase text-white md:mt-5">Industry</p>
              <p className="text-sm md:text-xl font-semibold text-white ">
                {CompanyProfile?.industry}
              </p>
            </div>
          </div>
          {/* part 2 */}
          <div className="md:flex mt-5 md:mt-0 md:gap-10">
            <div>
              <p className="text-sm md:text-base font-semibold uppercase text-white ">Location</p>
              <p className="text-sm md:text-lg  text-white ">
                {CompanyProfile?.city} - {CompanyProfile?.postal}, {CompanyProfile?.country}
              </p>
              <p className="text-sm md:text-base uppercase text-white pt-1">Phone: {CompanyProfile?.phone}</p>
              <p className=" text-sm md:text-base text-white md:pt-1">E-mail: {CompanyProfile?.email}</p>
            </div>
            <div>
              <p className="text-sm md:text-base font-semibold uppercase text-white mt-1 md:mt-2 ">Website</p>
              <p className="text-sm md:text-lg  text-white ">{CompanyProfile?.website}</p>
              <p className="text-xs md:text-base uppercase text-white py-1">
                Founded: {CompanyProfile?.founding}
              </p>
            </div>
          </div>
        </div> 
      </div>

            </div>

             {/* company posted jobs */}
            <div>

            </div>
            
            
        </div>
    );
};

export default TopCompanyProfile;