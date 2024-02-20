import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";

const ManagePayments = () => {
  const axiosPublic = useAxiosPublic();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/payment`);
      return res.data;
    },
  });

  return (
    <div className="overflow-x-auto max-w-screen-xl border mx-auto bg-white p-6 rounded-b-lg">
      <table className="table">
        {/* head */}
        <thead className="bg-accentTwo text-lg text-white font-medium">
          <tr>
            <th>#</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>User Role</th>
            <th>STATUS</th>
            <th>TransactionId</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {payments?.map((payment: any, index: number) => (
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
                <h3 className="font-normal text-lg">{payment?.userStatus}</h3>
              </td>
              <td>
                <h3 className="font-normal text-lg">
                  {payment?.transactionId}
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
  );
};

export default ManagePayments;
