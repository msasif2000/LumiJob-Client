import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosDev from "../../hooks/useAxiosDev";
import { toast } from "react-toastify";
// import useAxiosPublic from '../../hooks/useAxiosPublic';

const Roles = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosDev = useAxiosDev();
  // const axiosPublic = useAxiosPublic()

  const handleCompany = () => {
    // for dev
    axiosDev.put(`/roles/${user?.email}`, { role: "company" }).then((res) => {
      console.log(res.data);
      if (res.data.message === "true") {
        toast.success("Role changed successfully");
        navigate("/");
      } else {
        toast.warn("Error: User not found or another issue");
      }
    });

    // axiosPublic.put(`/roles/${user?.email}`, { role: "company" }).then((res) => {
    //   console.log(res.data);
    // if (res.data.message === "true") {
    //   toast.success("Role changed successfully");
    //   navigate("/");
    // } else {
    //   toast.warn("Error: User not found or another issue");
    // }

    // });
  };
  const handleHr = () => {
    // for dev
    axiosDev.put(`/roles/${user?.email}`, { role: "hr" }).then((res) => {
      console.log(res.data);
      if (res.data.message === "true") {
        toast.success("Role changed successfully");
        navigate("/");
      } else {
        toast.warn("Error: User not found or another issue");
      }
    });

    // axiosPublic.put(`/roles/${user?.email}`, { role: "company" }).then((res) => {
    //   console.log(res.data);
    // if (res.data.message === "true") {
    //   toast.success("Role changed successfully");
    //   navigate("/");
    // } else {
    //   toast.warn("Error: User not found or another issue");
    // }

    // });
  };
  const handleEmployee = () => {
    // for dev
    axiosDev.put(`/roles/${user?.email}`, { role: "employee" }).then((res) => {
      console.log(res.data);
      if (res.data.message === "true") {
        toast.success("Role changed successfully");
        navigate("/");
      } else {
        toast.warn("Error: User not found or another issue");
      }
    });

    // axiosPublic.put(`/roles/${user?.email}`, { role: "company" }).then((res) => {
    //   console.log(res.data);
    // if (res.data.message === "true") {
    //   toast.success("Role changed successfully");
    //   navigate("/");
    // } else {
    //   toast.warn("Error: User not found or another issue");
    // }

    // });
  };
  return (
    <div className="bg-gradient-to-tr from-[#abf1c0] from-5% via-[#D0FBD0] via-20% to-[#F2F8F5] to-65% ... min-h-screen">
      <div className="max-w-screen-2xl mx-auto">
        <div className="hero min-h-screen">
          <div className="hero-content text-center">
            <div className="space-y-8">
              <h1 className="text-5xl font-bold">Select user type</h1>
              <p className="w-3/4 mx-auto">
                To optimize your experience, please specify your service usage.
                This allows us to tailor our offerings to your unique needs,
                ensuring a more personalized and satisfactory engagement. Thank
                you.
              </p>

              <div className="flex space-x-5">
                <div
                  onClick={() => handleCompany()}
                  className="bg-white w-96 h-96 rounded-2xl"
                >
                  <h1 className="text-2xl">Company</h1>
                </div>
                <div onClick={() => handleHr()} className="bg-white w-96 h-96 rounded-2xl">
                  <h1 className="text-2xl">Hiring Manager</h1>
                </div>
                <div
                  onClick={() => handleEmployee()}
                  className="bg-white w-96 h-96"
                >
                  <h1 className="text-2xl rounded-2xl">Employee</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roles;
