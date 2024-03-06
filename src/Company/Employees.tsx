import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import EmployeeCard from "./EmployeeCard";
import Employee from "./Employee";
import useAuth from "../hooks/useAuth";
import NoData from "../component/NoData/NoData";
// import useAxiosSecure from "../hooks/useAxiosSecure";

const Employees = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: employees = [] } = useQuery({
    queryKey: ["employees"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/selectedApplicants?companiEmail=${user.email}`
      );
      return res.data;
    },
  });

  const length = employees?.length;

  const handleNoData = () => {
    
  }

  return (
    <>
      {
        length ? (
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-6">
            {employees?.map((employee: Employee) => (
              <EmployeeCard key={employee._id} employee={employee} />
            ))}
          </div>
        )
          :
          (
            <div className="min-h-screen">
              <NoData text="No Employees Found" btn="" noDataClick={handleNoData} />
            </div>
          )
      }
    </>
  );
};

export default Employees;
