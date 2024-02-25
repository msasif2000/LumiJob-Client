import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
import EmployeeCard from "./EmployeeCard";
import Employee from "./Employee";
import useAuth from "../hooks/useAuth";

const Employees = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const { data: employees = [] } = useQuery({
    queryKey: ["employees"],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/selectedApplicants?companiEmail=${user.email}`
      );
      return res.data;
    },
  });

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 py-6">
      {employees?.map((employee: Employee) => (
        <EmployeeCard key={employee._id} employee={employee} />
      ))}
    </div>
  );
};

export default Employees;
