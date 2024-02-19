import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { MdDelete } from "react-icons/md";

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
      <div className="flex flex-col md:flex-row justify-between users-center max-w-screen-xl border mx-auto p-6 bg-white rounded-t-lg my-2">
        <h2 className="text-3xl">
          <b>Manage Candidates</b>
        </h2>
        <h2 className="text-3xl">
          <b>Total:</b> <span className="text-accent">{candidates.length}</span>
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
              <th>STATUS</th>
              <th>ACTION</th>
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
                <td>
                  <h3 className="font-semibold text-lg">{candidate?.status}</h3>
                </td>
                {/* <td>{company?.subscription}</td> */}
                  <td>
                    <button onClick={() => handleDelete(candidate?._id)} className="text-white bg-red-600 hover:bg-red-500 p-3 rounded text-md mr-4 inline-block relative group">
                      <MdDelete className="text-2xl" />
                      <span className="opacity-0 group-hover:opacity-100 absolute top-full left-1/2 transform -translate-x-1/2 text-black  px-3 text-sm z-10 transition-opacity duration-300">
                        Delete
                      </span>
                    </button>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageCandidate;
