import EmployeeCard from "./EmployeeCard";

const Employees = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 py-6">
      <EmployeeCard />
      <EmployeeCard />
      <EmployeeCard />
      <EmployeeCard />
      <EmployeeCard />
      <EmployeeCard />
    </div>
  );
};

export default Employees;
