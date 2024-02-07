import { MdDelete } from "react-icons/md";
import useAxiosPublic from "../hooks/useAxiosPublic";
import usePostedJob from "../hooks/usePostedJob";
import Swal from "sweetalert2";


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
  const handleDelete = (id: string ) => {
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
      <h1 className="text-3xl text-center my-4"><span className="text-accent font-extrabold">{PostedData.length} </span> Posted jobs.</h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table min-w-full divide-y divide-red-500">
            {/* head */}
            <thead>
              <tr>
                <th>
                  #ID
                </th>
                <th>platform</th>
                <th>title</th>
                <th>post_time</th>
                
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {
                PostedData.map((jobs: PostedJob) => <tr key={jobs._id}>
                  <th>
                    {jobs._id}
                  </th>
                  <td>
                    <span className="">{jobs.platform}</span>
                  </td>
                  <td>{jobs.title}</td>
                  <td>{jobs.post_time}</td>
                  
                  
                  <td>
                    <button onClick={() => handleDelete(jobs._id)} className="btn btn-sm bg-red-600 px-1 text-white"><MdDelete className="text-2xl hover:text-accent" /> </button>
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
