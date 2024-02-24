import { MdPreview, MdDelete } from "react-icons/md";
import useAxiosPublic from "../hooks/useAxiosPublic";
import usePostedJob from "../hooks/usePostedJob";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useState } from "react";
import CPagination from "../Pages/FindCandidate/CPagination";
import { Helmet } from "react-helmet-async";



interface PostedJob {
  _id: string;
  platform: string;
  email: string;
  title: string;
  post_time: string;



}

const ManageJobs = () => {

  const axiosPublic = useAxiosPublic();
  const [PostedData, refetch] = usePostedJob();

  const [dataPerPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);


  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };


  const handleDelete = (id: string) => {
    Swal.fire({
      title: "Are you want to delete this post from database?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/delete-jobs-bookmarks/${id}`)
          .then(res => {
            console.log(res.data);
          })

        axiosPublic.delete(`/delete-jobs-applyJobsCollection/${id}`)
          .then(res => {
            console.log(res.data);
          })

        axiosPublic.delete(`/delete-jobs/${id}`)
          .then(res => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "This job related post has been deleted.",
                icon: "success"
              });
            }
          })
      }
    });

  }

  return (
    <div className="">
      <Helmet>
        <title>Manage Jobs | Lumijobs</title>
      </Helmet>
      <div className="flex flex-col md:flex-row justify-between users-center max-w-screen-xl border mx-auto p-6 bg-white rounded-t-lg my-2">
        <h2 className="text-3xl font-bold">Job Posts</h2>
        <h2 className="text-3xl">
          <b>Total:</b> <span className="text-accent">{PostedData.length}</span>
        </h2>
      </div>
      <div>
        <div className="overflow-x-auto max-w-screen-xl border mx-auto bg-white p-6 rounded-b-lg">
          <table className="table">
            {/* head */}
            <thead className="bg-accentTwo text-lg text-white font-bold">
              <tr>
                <th>
                  #
                </th>
                <th>PLATFORM</th>
                <th>TITLE</th>
                <th>TIME</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {
                PostedData
                  .slice((currentPage - 1) * dataPerPage, currentPage * dataPerPage).map((jobs: PostedJob, index: number) => <tr key={jobs._id}>
                    <th>
                      {index + 1}
                    </th>
                    <td className="font-semibold">
                      {jobs.platform}
                    </td>
                    <td className="font-bold">{jobs.title}</td>
                    <td>{jobs.post_time.split("T")[0]}</td>


                    <td>
                      <Link className="inline-block relative group" to={`/details/${jobs._id}`}>
                        <button className="text-white bg-accent hover:bg-accentTwo p-3 rounded text-md mr-4"><MdPreview className="text-2xl" /></button>
                        <span className="opacity-0 group-hover:opacity-100 absolute top-full left-1/2 transform -translate-x-1/2 text-black  px-3 text-sm z-10 transition-opacity duration-300">
                          View
                        </span>
                      </Link>

                      <button onClick={() => handleDelete(jobs._id)} className="text-white bg-red-600 hover:bg-red-500 p-3 rounded text-md mr-4 inline-block relative group">
                        <MdDelete className="text-2xl" />
                        <span className="opacity-0 group-hover:opacity-100 absolute top-full left-1/2 transform -translate-x-1/2 text-black  px-3 text-sm z-10 transition-opacity duration-300">
                          Delete
                        </span>
                      </button>

                    </td>

                  </tr>)
              }
              {/* row 1 */}

            </tbody>
          </table>
          {PostedData.length > dataPerPage && (
            <div className="py-12">
              {/* ==>  Pagination <== */}
              <CPagination
                totalData={PostedData.length}
                dataPerPage={dataPerPage}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              ></CPagination>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageJobs;
