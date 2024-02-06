import useAxiosPublic from "../hooks/useAxiosPublic";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import useCompanyData from "../hooks/useCompanyData";

interface Company {
  _id: string;
  name: string;
  email: string;
  phone: string;
  country: string;
  subscription: string;
}
const ManageCompany = () => {
  const axiosPublic = useAxiosPublic();
  const [companyData, refetch] = useCompanyData();


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

        axiosPublic.delete(`/delete-company/${id}`)
          .then(res => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Company and its all information has been deleted.",
                icon: "success"
              });
            }
          })
      }
    });
  }
  return (
    <div className="mt-8">
      <h1 className="text-3xl text-center my-4"><span className="text-accent">{companyData.length}</span> Registered Company</h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table min-w-full divide-y divide-red-500">
            {/* head */}
            <thead>
              <tr>
                <th>
                  #ID
                </th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>PHONE</th>
                <th>LOCATION</th>
                <th>SUBSCRIPTION</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {
                companyData.map((company: Company) => <tr key={company._id}>
                  <th>
                    {company._id.slice(10, 18)}...
                  </th>
                  <td>
                    <span className="">{company.name}</span>
                  </td>
                  <td>{company.email}</td>
                  <td>{company.phone}</td>
                  <td>{company.country}</td>
                  <td>{company?.subscription}</td>
                  <td>
                    <button onClick={() => handleDelete(company._id)} className="btn btn-sm bg-red-600 px-1 text-white"><MdDelete className="text-2xl hover:text-accent" /> </button>
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

export default ManageCompany;
