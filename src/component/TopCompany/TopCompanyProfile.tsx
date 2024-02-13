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
        <div className="">
            {/* company details pages  */}
            <div>
            <div className=" pt-10 pb-16  px-7 bg-gradient-to-r from-[#228bedde] to-[#6565C7]">
            <p className=" pb-8 lg:text-4xl font-bold text-center text-white ">Company Profile {`>`} {CompanyProfile?.name} </p>
          {/* company information */}
           <div className="flex gap-10">

            <div>
                <div className="flex gap-4 md:gap-10 mb-10">
            <img
              className=" w-20 h-20 md:w-28 md:h-28 rounded-full bg-white p-2"
              src={CompanyProfile?.photo}
            />
            <div>
              <p className="text-sm md:text-base uppercase text-white ">Company Name </p>
              <p className="text-sm md:text-2xl font-bold text-white ">{CompanyProfile?.name}</p>
              <div className="flex flex-col justify-center  text-white mt-5">
            <p className="text-lg font-medium ">Founding Year</p>
            <p className="font-semibold md:text-xl ">{CompanyProfile?.founding}</p>
          </div>
              <p className="text-sm md:text-base uppercase text-white md:mt-5">Industry</p>
              <p className="text-sm md:text-xl font-semibold text-white ">
                {CompanyProfile?.industry}
              </p>
              <div className="mt-5" >
              <p className="text-sm md:text-base font-semibold uppercase text-white ">address </p>
              <p className="text-sm md:text-lg  text-white ">
                {CompanyProfile?.city} - {CompanyProfile?.postal}, {CompanyProfile?.country}
              </p>
              <p className="text-sm md:text-base uppercase text-white pt-1">Phone: {CompanyProfile?.phone}</p>
              <p className=" text-sm md:text-base text-white md:pt-1">E-mail: {CompanyProfile?.email}</p>
              <p className=" text-sm md:text-base text-white md:pt-1">Website: {CompanyProfile?.website}</p>
              
            </div>
              
            </div>
          </div>

            </div>


            {/* company details */}
            <div>
                
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