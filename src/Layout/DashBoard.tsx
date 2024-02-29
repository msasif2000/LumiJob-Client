import { BsDatabaseAdd } from "react-icons/bs";
import {
  BiBookmark,
  BiBuildingHouse,
  BiHomeSmile,
  BiLogOut,
  BiLineChart,
} from "react-icons/bi";
import {
  MdOutlinePayments,
  MdOutlineAddHomeWork,
  MdOutlineWorkOutline,
  MdOutlineWorkHistory,
  MdOutlineEventAvailable,
  MdManageAccounts,
} from "react-icons/md";
import { AiOutlineUsergroupAdd, AiOutlineFileDone } from "react-icons/ai";
import { GrGroup, GrBlog, GrWorkshop } from "react-icons/gr";
import { RxAvatar } from "react-icons/rx";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import UniLoader from "../component/err & loading/UniLoader";
import useAxiosPublic from "../hooks/useAxiosPublic";

const DashBoard = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [userData, setUserData] = useState({} as any);
  const [role, setRole] = useState("");

  //console.log(user);
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
          setUserData(res.data);
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
          <NavLink to="/dashboard/candidateProfile">
            <MdManageAccounts className="text-2xl" />
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/resume">
            <AiOutlineFileDone className="text-2xl" />
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/appliedJobs">
            <GrWorkshop className="text-xl" />
            Applied Jobs
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/bookmarks">
            <BiBookmark className="text-2xl" />
            Bookmarks
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/dashboard/candidateAnalytics">Analytics</NavLink>
        </li> */}
      </>
    ) : role === "company" ? (
      <>
        <li>
          <NavLink to="/dashboard/companyProfile">
            <BiBuildingHouse className="text-xl" />
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/postedJobs">
            <MdOutlineWorkHistory className="text-xl" />
            Job Posts
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/blog-posted">
            <GrBlog />
            Blogs
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/seminar-posted">
            <MdOutlineEventAvailable className="text-xl" />
            Seminars
          </NavLink>
        </li>
        {/* ##########hide company analytics */}
        {/* <li>
          <NavLink to="/dashboard/companyAnalytics">
            <BiLineChart className="text-xl" />
            Analytics
          </NavLink>
        </li> */}
        <li>
          <NavLink to="/dashboard/employees">
            <GrGroup className="text-xl" />
            Hired Employees
          </NavLink>
        </li>
      </>
    ) : role === "admin" ? (
      <>
        <li>
          <NavLink to="/dashboard/adminDashboard">
            <BiLineChart className="text-2xl" />
            Analytics
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/admin/manage-candidate">
            <AiOutlineUsergroupAdd className="text-2xl" />
            Manage Candidate
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/admin/manage-company">
            <MdOutlineAddHomeWork className="text-2xl" />
            Manage Company
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/admin/manage-jobs">
            <MdOutlineWorkOutline className="text-2xl" />
            Manage Jobs
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/admin/manage-payments">
            <MdOutlinePayments className="text-2xl" />
            Manage Payments
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/admin/add-data">
            <BsDatabaseAdd className="text-2xl" />
            Add Data
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
          <div className="lg:w-2/12 xl:max-w-[18rem] border-r">
            {/* === Mobile Menu */}
            <div className="dash navbar-start lg:hidden">
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

            {/* === Large Screen Menu */}
            <div className="dash hidden lg:flex lg:flex-col lg:justify-between min-h-screen  lg:sticky  lg:top-0 lg:inset-x-0 lg:z-20">
              <div>
                <h3 className="text-3xl font-bold text-center">
                  Lumi<span className="text-[#4869DD]">Jobs</span>
                </h3>
                <div className="divider mt-[0.7rem]"></div>
                <div className="flex items-center m-4 gap-2">
                  <div>
                    {userData?.photo ? (
                      <img
                        src={userData.photo}
                        alt=""
                        className="rounded-full h-10 w-10"
                      />
                    ) : (
                      <RxAvatar className="text-2xl" />
                    )}
                  </div>
                  <div>
                    <h6 className="text-center capitalize text-accent">
                      {userData?.name || "Your name"}
                    </h6>
                  </div>
                </div>
                <ul className="menu text-xl ">{Links}</ul>
              </div>
              <div>
                <div className="divider mx-4"></div>
                <ul className="menu text-xl">
                  <li>
                    <NavLink to="/">
                      <BiHomeSmile className="text-2xl" /> Home
                    </NavLink>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="flex items-center"
                    >
                      <BiLogOut className="text-2xl" />
                      <span>Sign Out</span>
                    </button>
                  </li>
                </ul>
                <h6 className="text-center capitalize text-xs text-gray-300 border-t-2 mx-4">
                  {role} Dashboard
                </h6>
              </div>
            </div>
          </div>

          <div className="md:flex-1 bg-[#FAFAFA]">
            <div className="px-6 pb-6">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DashBoard;
