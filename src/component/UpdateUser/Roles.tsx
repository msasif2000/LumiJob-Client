import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Roles = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const handleCompany = () => {
    // for dev
    axiosPublic
      .put(`/roles/${user?.email}`, { role: "company", canPost: 5 })
      .then((res) => {
      
        if (res.data.message === "true") {
          toast.success("Role changed successfully");
          navigate("/dashboard/companyProfile/update");
        } else {
          toast.warn("Error: User not found or another issue");
        }
      });
  };
 
  const handleCandidate = () => {
    // for dev
    axiosPublic
      .put(`/roles/${user?.email}`, { role: "candidate", canApply: 20 })
      .then((res) => {
       
        if (res.data.message === "true") {
          toast.success("Role changed successfully");
          navigate("/dashboard/candidateProfile/update");
        } else {
          toast.warn("Error: User not found or another issue");
        }
      });
  };
  return (
    <div className="bg-gradient-to-r from-[#fdd5d5] via-[#f0f0f0] to-[#cfffcd] min-h-screen">
      <div className="max-w-screen-2xl mx-auto">
        <div className="hero min-h-screen">
          <div className="hero-content text-center">
            <div className="space-y-8">
              <h1 className="text-5xl font-bold">
                How would you like to use our website?
              </h1>
              <p className="w-3/4 mx-auto">
                To optimize your experience, please specify your service usage.
                This allows us to tailor our offerings to your unique needs,
                ensuring a more personalized and satisfactory engagement. Thank
                you.
              </p>

              <div className="flex space-x-5">
                {/* card 1 */}
                <div
                  onClick={() => handleCompany()}
                  className="card card-compact w-96 bg-base-100 hover:shadow-xl duration-500 ease-linear cursor-pointer"
                >
                  <figure>
                    <img
                      src="https://i.postimg.cc/PJnXCF5v/1904-i402-011-Web-development-isometric-concept-infographics.jpg"
                      alt="Shoes"
                      className="h-72 w-full overflow-hidden"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="text-xl font-bold text-center">Company</h2>
                  </div>
                </div>
              
                {/* card 2 */}
                <div
                  onClick={() => handleCandidate()}
                  className="card card-compact w-96 bg-base-100 hover:shadow-xl duration-500 ease-linear cursor-pointer"
                >
                  <figure>
                    <img
                      src="https://i.postimg.cc/LXm0Ct5g/18771.jpg"
                      alt="Shoes"
                      className="h-72 w-full overflow-hidden"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="text-xl font-bold text-center">
                      Job Seeker
                    </h2>
                  </div>
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
