import { MdPreview, MdDelete } from "react-icons/md";
import useAxiosPublic from "../hooks/useAxiosPublic";
import usePostedJob from "../hooks/usePostedJob";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";



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
  const handleDelete = (id: string) => {
    Swal.fire({
      title: "Are you want to delete this company from database?",
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
    <div className="mt-8 mb-10">
      <div className="flex flex-col md:flex-row justify-between users-center max-w-screen-xl border mx-auto p-6 bg-white rounded-t-lg mt-20">
        <h2 className="text-3xl font-bold">Job Posts</h2>
        <h2 className="text-3xl">
          <b>Total:</b> <span className="text-accent">{PostedData.length}</span>
        </h2>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table min-w-full divide-y divide-red-500">
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
                PostedData.map((jobs: PostedJob, index: number) => <tr key={jobs._id}>
                  <th>
                    {index + 1}
                  </th>
                  <td className="font-semibold">
                    {jobs.platform}
                  </td>
                  <td className="font-bold">{jobs.title}</td>
                  <td>{jobs.post_time.split("T")[0]}</td>


                  <td>
                    <Link  to={`/details/${jobs._id}`}> <button className="text-white bg-accent hover:bg-accentTwo p-3 rounded text-md mr-4"><MdPreview className="text-2xl" /> </button></Link>
                    <button onClick={() => handleDelete(jobs._id)} className="text-white bg-red-600 hover:bg-red-500 p-3 rounded text-md mr-4"><MdDelete className="text-2xl" /> </button>
                   
                  </td>

                </tr>)
              }
              {/* row 1 */}

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageJobs;
