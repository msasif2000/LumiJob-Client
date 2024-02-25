import { MdArrowOutward } from "react-icons/md";
import Employee from "./Employee";
import { Link } from "react-router-dom";

interface employeeProps {
  employee: Employee;
}

const EmployeeCard: React.FC<employeeProps> = ({ employee }) => {
  const { name, position, profile, _id } = employee;
  return (
    <div className="w-full  bg-white border border-gray-200 rounded-lg ">
      <div className="flex justify-end px-4 pt-4">
        <Link to={`/candidate-detailsProfile/${_id}`}>
          <button className="py-2 px-3 ms-2 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
            <p className="flex items-center justify-center gap-2 ">
              Profile
              <MdArrowOutward />
            </p>
          </button>
        </Link>
      </div>
      <div className="flex flex-col items-center pb-10">
        <figure>
          <img
            alt="Bonnie image"
            className="w-24 h-24 mb-3 rounded-full object-cover shadow-lg"
            src={
              profile
                ? profile
                : "https://i.pinimg.com/564x/97/bb/06/97bb067e30ff6b89f4fbb7b9141025ca.jpg"
            }
          />
        </figure>
        <h5 className="mb-1 text-xl font-medium text-gray-900">{name}</h5>
        <span className="text-sm text-gray-500">{position}</span>
      </div>
      <div></div>
    </div>
  );
};

export default EmployeeCard;
