
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

interface Company {
  name: string;
  photo: string;
  country: string;
  registration: string;
  _id: string;
}

const TopCompanyCard: React.FC<{ company: Company }> = ({ company }) => {
  const { name, photo, country, registration, _id } = company;



  return (
    <div>
      <Link to={`/company-detailsProfile/${_id}`}>
        <div className="border p-4 rounded-lg shadow-none lg:shadow-sm transform transition-transform hover:translate-y-[-3px] ease-in-out duration-300 hover:border-accent cursor-pointer">
          <div className="flex gap-5 items-center">
            <div className=" gap-4 items-center">
              <img src={photo} className="w-20 " alt="" />
            </div>
            <div className="justify-between items-center">
              <p className="text-xl font-bold text-gray-700 lg:text-left">
                {name}
              </p>
              <div className="flex items-center gap-1">
                <IoLocationOutline />
                <p className="font-normal text-gray-500">{country}</p>
              </div>
              <p className="hidden md:flex font-normal text-gray-500">
                Registration <b>{registration}</b>
              </p>
              <p className="md:hidden font-normal text-gray-500">
                Reg <b>{registration}</b>
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TopCompanyCard;
