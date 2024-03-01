import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import CPagination from "../Pages/FindCandidate/CPagination";
import GoToTop from "../component/GoToTop/GoToTop";

const ManagePayments = () => {
  const axiosPublic = useAxiosPublic();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/payment`);
      return res.data;
    },
  });

  // pagination
  const [dataPerPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
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
    </>
  );
};

export default ManagePayments;
