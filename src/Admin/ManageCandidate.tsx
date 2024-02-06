import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { FaTrash } from "react-icons/fa6";
import Swal from "sweetalert2";

const ManageCandidate = () => {
  const axiosPublic = useAxiosPublic();

  const { refetch, data: candidates = [] } = useQuery({
    queryKey: ["candidates"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/user?role=candidate`);
      return res.data;
    },
  });

  // console.log(candidates);
  const handleDelete = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/delCandidate/${id}`).then((res) => {
          // console.log(res);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Delete Successfully",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between users-center max-w-screen-xl border mx-auto p-6 bg-white rounded-t-lg mt-20">
        <h2 className="text-3xl">
          <b>Manage Candidates</b>
        </h2>
        <h2 className="text-3xl">
          <b>Total:</b> {candidates.length}
        </h2>
      </div>
      <div className="overflow-x-auto max-w-screen-xl border mx-auto bg-white p-6 rounded-b-lg">
        <table className="table">
          {/* head */}
          <thead className="bg-accentTwo text-lg text-white font-bold">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {candidates?.map((candidate: any, index: number) => (
              <tr key={candidate._id}>
                <th>{index + 1}</th>

                <td>
                  <div className="font-bold">{candidate?.name}</div>
                </td>
                <td>
                  <h3 className="font-semibold text-lg">{candidate?.email}</h3>
                </td>

                <th>
                  <div className="flex justify-between md:justify-start">
                    {/* <button
                      onClick={() => handleMakeAdmin(user._id)}
                      disabled={user.role === "admin"}
                      className={` text-white py-1 px-3 rounded text-xs mr-4 ${
                        user.role === "admin"
                          ? "bg-gray-300 hover:bg-gray-300 "
                          : "bg-red-800 hover:bg-black"
                      }`}
                    >
                      make admin
                    </button> */}
                    {/* <button
                      onClick={() => handleMakeTourGuide(user._id)}
                      disabled={
                        user.role === "admin" || user.role === "tourGuide"
                      }
                      className={` text-white py-1 px-3 rounded text-xs mr-4 ${
                        user.role === "admin" || user.role === "tourGuide"
                          ? "bg-gray-300 hover:bg-gray-300 "
                          : "bg-green-900 hover:bg-black"
                      }`}
                    >
                      Make Tour Guide
                    </button> */}

                    <button
                      onClick={() => handleDelete(candidate._id)}
                      className="text-white bg-red-600 hover:bg-red-500 p-3 rounded text-md mr-4"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageCandidate;
