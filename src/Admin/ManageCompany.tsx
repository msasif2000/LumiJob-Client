import useAxiosPublic from "../hooks/useAxiosPublic";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import useCompanyData from "../hooks/useCompanyData";
import { useState } from "react";
import CPagination from "../Pages/FindCandidate/CPagination";
import { Helmet } from "react-helmet-async";
import GoToTop from "../component/GoToTop/GoToTop";
import useAxiosSecure from "../hooks/useAxiosSecure";

interface Company {
  _id: string;
  name: string;
  email: string;
  phone: string;
  country: string;
  status: string;
}
const ManageCompany = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure= useAxiosSecure();
  const [companyData, refetch] = useCompanyData();

  // pagination
  const [dataPerPage, setDataPerPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleDataPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDataPerPage(Number(event.target.value));
    setCurrentPage(1); // Reset to the first page when changing data per page
  };

  const handleDelete = (id: string, email: string) => {
    Swal.fire({
      title: "Are you want to delete this company from database?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/delete-company-postedJob/${email}`);

        axiosSecure.delete(`/delete-company/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Company and its all information has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Manage Company | LumiJobs</title>
      </Helmet>
      <GoToTop />
      <div className="flex flex-col md:flex-row justify-between users-center max-w-screen-xl border mx-auto p-6 bg-white rounded-t-lg my-2">
        <h2 className="text-3xl font-bold">Manage Companies</h2>
        <h2 className="text-3xl">
          <b>Total:</b>{" "}
          <span className="text-accent">{companyData.length}</span>
        </h2>
      </div>
      <div className="overflow-x-auto max-w-screen-xl border mx-auto bg-white p-6 rounded-b-lg">
        <table className="table">
          {/* head */}
          <thead className="bg-accentTwo text-lg text-white font-bold">
            <tr>
              <th>#</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>PHONE</th>
              <th>LOCATION</th>
              <th>STATUS</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {companyData
              .slice((currentPage - 1) * dataPerPage, currentPage * dataPerPage)
              ?.map((company: Company, index: number) => (
                <tr key={company._id}>
                  <th>{index + 1}</th>
                  <td className="font-bold">{company.name}</td>
                  <td className="font-semibold text-lg">{company.email}</td>
                  <td className="font-semibold">{company.phone}</td>
                  <td className="font-semibold">{company.country}</td>
                  <td className="font-semibold">{company?.status}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(company._id, company?.email)}
                      className="text-white bg-red-600 hover:bg-red-500 p-3 rounded text-md mr-4 inline-block relative group"
                    >
                      <MdDelete className="text-2xl" />
                      <span className="opacity-0 group-hover:opacity-100 absolute top-full left-1/2 transform -translate-x-1/2 text-black  px-3 text-sm z-10 transition-opacity duration-300">
                        Delete
                      </span>
                    </button>
                  </td>
                </tr>
              ))}
            {/* row 1 */}
          </tbody>
        </table>

      </div>
      <div className="flex justify-center gap-12">
        {companyData.length > dataPerPage && (
          <div className="py-12">
            {/* ==>  Pagination <== */}
            <CPagination
              totalData={companyData.length}
              dataPerPage={dataPerPage}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            ></CPagination>
          </div>

        )}
        <div className="flex justify-end py-12 items-center">
          
          <select
            id="dataPerPage"
            value={dataPerPage}
            onChange={handleDataPerPageChange}
            className="px-2 py-1 border rounded-md"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
            {/* Add more options as needed */}
          </select>
        </div>
      </div>
    </div>
  );
};

export default ManageCompany;
