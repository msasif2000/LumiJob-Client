import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

interface Company {
  name: string;
  photo: string;
  country: string;
  registration: string;
  _id: string;
  industry: string;
}

const TopCompanyCard: React.FC<{ company: Company }> = ({ company }) => {
  const { name, photo, country, registration, _id ,industry } = company;

  return (
    <Link to={`/company-details-profile/${_id}`}>
      <div className="border p-4 rounded-lg shadow-md transform transition-transform hover:translate-y-[-3px] ease-in-out duration-300 hover:border-accent cursor-pointer">
        <div className="flex gap-4 items-center">
          <img src={photo} className="w-20 rounded-full" alt={name} />
          <div className="flex flex-col justify-between flex-grow">
            <p className="text-xl font-bold text-gray-700 lg:text-left">
              {name}
            </p>
            <p className="font-normal text-gray-500 md:flex hidden">
              {industry}
            </p>
            <div className="flex items-center gap-1">
              <IoLocationOutline />
              <p className="font-normal text-gray-500">{country}</p>
            </div>
            <p className="font-normal text-gray-500 md:flex hidden">
              Registration: <b>{registration}</b>
            </p>
            <p className="font-normal text-gray-500 md:hidden">
              Reg <b>{registration}</b>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TopCompanyCard;
