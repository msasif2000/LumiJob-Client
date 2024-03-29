import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import CPagination from "../Pages/FindCandidate/CPagination";
import GoToTop from "../component/GoToTop/GoToTop";

const ManagePayments = () => {
  const axiosSecure = useAxiosSecure();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment-data`);
      return res.data;
    },
  });

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
  return (
    <>
      <Helmet>
        <title>Manage Payments | LumiJobs</title>
      </Helmet>

      <GoToTop />

      <div className="overflow-x-auto max-w-screen-xl border mx-auto bg-white p-6 rounded-b-lg">
        <table className="table">
          {/* head */}
          <thead className="bg-accentTwo text-lg text-white font-medium">
            <tr>
              <th>#</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>USER</th>
              <th>STATUS</th>
              <th>TNXID</th>
              <th>PRICE</th>
            </tr>
          </thead>
          <tbody>
            {payments
              .slice((currentPage - 1) * dataPerPage, currentPage * dataPerPage)
              ?.map((payment: any, index: number) => (
                <tr key={payment._id}>
                  <th>{index + 1}</th>

                  <td>
                    <div className="font-normal">{payment?.name}</div>
                  </td>
                  <td>
                    <h3 className="font-normal text-lg">{payment?.email}</h3>
                  </td>
                  <td>
                    <h3 className="font-normal text-lg">{payment?.userRole}</h3>
                  </td>
                  <td>
                    <h3 className="font-normal text-lg">
                      {payment?.userStatus}
                    </h3>
                  </td>
                  <td>
                    <h3 className="font-normal text-lg">
                      {payment?.transactionId.slice(3, 15)}
                    </h3>
                  </td>
                  <td>
                    <h3 className="font-normal text-lg">${payment?.price}</h3>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center gap-12">
        {payments.length > dataPerPage && (
          <div className="py-12">
            {/* ==>  Pagination <== */}
            <CPagination
              totalData={payments.length}
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
    </>
  );
};

export default ManagePayments;
