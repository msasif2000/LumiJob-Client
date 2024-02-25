import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
import EmployeeCard from "./EmployeeCard";

const Employees = () => {
  const axiosPublic = useAxiosPublic();

  const { data: employees = [] } = useQuery({
    queryKey: ["employees"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/selectedApplicants`);
      return res.data;
    },
  });

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 py-6">
      {employees?.map((employee: any) => (
        <EmployeeCard key={employee._id} />
      ))}
    </div>
  );
};

export default Employees;
