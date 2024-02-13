// import { MdOutlineModeEdit } from "react-icons/md";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";






const CompanyDetails = () => {
    const { id } = useParams<{ id: string }>();
  const axiosPublic = useAxiosPublic();
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    axiosPublic
      .get(`/company-profile/${id}`)
      .then((res) => {
        setProfile(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);



  return (
    <div className="">
      <div className="md:h-60 mt-10 px-7 bg-gradient-to-r from-[#228bedde] to-[#6565C7]">
        <div className="flex justify-between items-center my-2 pt-2">
          <div>
            <p className="text-xl md:text-2xl p-2 text-white ">Company Profile</p>
          </div>
          {/* <Link to="/dashboard/companyProfile/update">
            <div className="flex md:btn justify-center items-center bg-white rounded-full md:rounded-3xl p-1 md:px-2">
              <div className="bg-[#6f6aff] p-1 rounded-full">
                <MdOutlineModeEdit className="text-sm md:text-2xl text-white" />
              </div>
              <p className="hidden md:flex text-xl font-semibold text-[#6f6aff] p-2  ">
                Edit Profile
              </p>
            </div>
          </Link> */}
        </div>

         {/* company profile made two pard for responsivnes */}

        <div className="md:flex md:gap-10">
          {/* part one-- */}
          <div className="flex gap-4 md:gap-10">
            <img
              className=" w-20 h-20 md:w-28 md:h-28 rounded-full bg-white p-2"
              src={profile?.photo}
            />
            <div>
              <p className="text-sm md:text-base uppercase text-white ">Company Name </p>
              <p className="text-sm md:text-2xl font-bold text-white ">{profile?.name}</p>
              <p className="text-sm md:text-base uppercase text-white md:mt-5">Industry</p>
              <p className="text-sm md:text-xl font-semibold text-white ">
                {profile?.industry}
              </p>
            </div>
          </div>
          {/* part 2 */}
          <div className="md:flex mt-5 md:mt-0 md:gap-10">
            <div>
              <p className="text-sm md:text-base font-semibold uppercase text-white ">Location</p>
              <p className="text-sm md:text-lg  text-white ">
                {profile?.city} - {profile?.postal}, {profile?.country}
              </p>
              <p className="text-sm md:text-base uppercase text-white pt-1">Phone: {profile?.phone}</p>
              <p className=" text-sm md:text-base text-white md:pt-1">E-mail: {profile?.email}</p>
            </div>
            <div>
              <p className="text-sm md:text-base font-semibold uppercase text-white mt-1 md:mt-2 ">Website</p>
              <p className="text-sm md:text-lg  text-white ">{profile?.website}</p>
              <p className="text-xs md:text-base uppercase text-white py-1">
                Founded: {profile?.founding}
              </p>
            </div>
          </div>
        </div> 
      </div>

      <div className="border-2 border-[#6886968f] min-h-20 mt-4 rounded-md md:p-6 p-4 md:pb-10">
        <div className="flex justify-between">
          <h3 className="text-xl md:text-3xl font-medium text-[#688696]">
            Company details
          </h3>  
        </div>
        <div className="md:flex justify-between mt-5 gap-16">
          <div className="flex flex-col justify-center">
            <p className="text-lg font-medium text-[#688696]">
              Company Registration No
            </p>
            <p className="font-semibold md:text-xl "> {profile?.registration}</p>
          </div>
          <div className="flex flex-col justify-center ">
            <p className="text-lg font-medium text-[#688696]">Founding Year</p>
            <p className="font-semibold md:text-xl ">{profile?.founding}</p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg font-medium text-[#688696]">Company Type</p>
            <p className="font-semibold md:text-xl ">{profile?.industry}</p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg font-medium text-[#688696]">
              Service/Product
            </p>
            <p className="font-semibold md:text-xl ">{profile?.service}</p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg font-medium text-[#688696]">Status</p>
            <p className="font-semibold md:text-xl ">Active</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
