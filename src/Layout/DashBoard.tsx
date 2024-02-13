import { NavLink, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { BiLogOut } from "react-icons/bi";
import { useEffect, useState } from "react";
import UniLoader from "../component/err & loading/UniLoader";
import useAxiosPublic from "../hooks/useAxiosPublic";

const DashBoard = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [role, setRole] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isNavOpen) {
        setIsNavOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isNavOpen]);

  useEffect(() => {
    setLoading(true);
    if (user?.email) {
      axiosPublic
        .get(`/check-which-role/${user?.email}`)
        .then((res) => {
          // console.log(res.data.role);
          setRole(res.data.role);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }
  }, [user]);

  const handleLogout = () => {
    logOut();
    navigate("/");
  };

  const Links =
    role === "candidate" ? (
      <>
        <li>
          <h2 className="text-xl xl:text-2xl text-red-800 font-bold bg-white my-2">
            Candidate DashBoard
          </h2>
        </li>
        <li>
          <NavLink to="/dashboard/candidateProfile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/appliedJobs">Applied Jobs</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/bookmarks">Bookmarks</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/candidateAnalytics">Analytics</NavLink>
        </li>
      </>
    ) : role === "company" ? (
      <>
        <li>
          <h2 className="text-2xl text-blue-800 font-bold bg-white my-2">
            Company DashBoard
          </h2>
        </li>
        <li>
          <NavLink to="/dashboard/companyProfile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/postedJobs">Posted Job</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/blog-posted">Blogs</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/companyAnalytics">Analytics</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/employees">Employees</NavLink>
        </li>
      </>
    ) : role === "admin" ? (
      <>
        <li>
          <h2 className="text-2xl text-blue-800 font-bold bg-white my-2">
            Admin DashBoard
          </h2>
        </li>
        <li>
          <NavLink to="/dashboard/adminDashboard">DashBoard</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/admin/manage-candidate">
            Manage Candidate
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/admin/manage-company">Manage Company</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/admin/manage-jobs">Manage Jobs</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/admin/manage-payments">
            Manage Payments
          </NavLink>
        </li>
      </>
    ) : (
      ""
    );

  return (
    <>
      {isLoading ? (
        <UniLoader />
      ) : (
        <div className="md:flex">
          <div className="lg:w-2/12 xl:max-w-[18rem] border-r md:flex-shrink-0">
            <div className="navbar-start lg:hidden">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="red"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-600 rounded-box  w-52 "
                >
                  {Links}

                  <div className="divider"></div>

                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/availableCamp">Available Camp</NavLink>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="flex items-center btn btn-sm"
                    >
                      <BiLogOut className="text-2xl" />
                      <span>Sign Out</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:flex hidden  min-h-screen pt-12 lg:sticky  lg:top-0 lg:inset-x-0 lg:z-20">
              <ul className="menu text-xl">
                {Links}

                <div className="divider"></div>

                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <button onClick={handleLogout} className="flex items-center">
                    <BiLogOut className="text-2xl" />
                    <span>Sign Out</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:flex-1 overflow-x-auto px-5 bg-[#FAFAFA]">
            <Outlet></Outlet>
          </div>
        </div>
      )}
    </>
  );
};

export default DashBoard;
