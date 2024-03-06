import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

interface NavbarProps {
  color?: string;
}

const Navbar: React.FC<NavbarProps> = () => {
  const { user, logOut, premium, role, photo } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [userData, setUserData] = useState<{ _id: string; value: number }>();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    if (user && premium === "premium") {
      setIsPremium(true);
    } else {
      setIsPremium(false);
    }
  }, [user]);

  useEffect(() => {
    if (role === "candidate") {
      axiosSecure.get(`/specific-candidate/${user?.email}`).then((res) => {
        setUserData(res.data);
      });
    } else if (role === "company") {
      axiosSecure.get(`/specific-company/${user?.email}`).then((res) => {
        setUserData(res.data);
      });
    }
  }, [user?.email, role, axiosSecure]);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    logOut();
  };
  // console.log(userData);
  const Linking = (
    <>
      <li key="home">
        <NavLink className="text-lg font-heading font-base" to="/">
          Home
        </NavLink>
      </li>
      <li key="Job">
        {user && role === "company" ? (
          <NavLink
            className="text-lg font-heading font-base"
            to="/find-candidate"
          >
            Candidates
          </NavLink>
        ) : (
          <NavLink className="text-lg font-heading font-base" to="/find-job">
            Jobs
          </NavLink>
        )}
      </li>
      <li key="Insights">
        <NavLink className="text-lg font-heading font-base" to="/insights">
          Insights
        </NavLink>
      </li>

      <li key="CollaborationHub">
        <NavLink className="text-lg font-heading font-base" to="/collaboration-hub">
          Co-Hub
        </NavLink>
      </li>

      <li key="Contact">
        <NavLink className="text-lg font-heading font-base" to="/Contact">
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div
      className={`sticky top-0 z-30 ${
        scrollPosition > 30
          ? `backdrop-blur-md bg-white/30 border-b border-b-[#e4e5e7]`
          : ""
      }`}
    >
      <div className="navbar max-w-screen-2xl mx-auto px-4 lg:px-20">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {Linking}
            </ul>
          </div>
          <Link to="/">
            <h3 className="text-3xl font-bold">
              Lumi<span className="text-[#4869DD]">Jobs</span>
            </h3>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul key={"Linking2"} className="menu menu-horizontal px-1">
            {Linking}
          </ul>
        </div>
        <div className="navbar-end">
          {!isPremium ? (
            <div className="mr-24 hidden md:block ">
              {role === "candidate" ? (
                <Link to="/subscriptionsUiCandidate">
                  <button className="button ">
                    <div className="flex items-center gap-2 ">
                      Upgrade
                      <svg
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="icon"
                      >
                        <path
                          clipRule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </Link>
              ) : role === "company" ? (
                <Link to="/subscriptionsUiCompany">
                  <button className="button ">
                    <div className="flex items-center gap-2 ">
                      Upgrade
                      <svg
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="icon"
                      >
                        <path
                          clipRule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </Link>
              ) : (
                <Link to="/optionsSubscribe">
                  <button className="button ">
                    <div className="flex items-center gap-2 ">
                      Upgrade
                      <svg
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="icon"
                      >
                        <path
                          clipRule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </Link>
              )}
            </div>
          ) : (
            ""
          )}

          <div>
            {user ? (
              // if user exist show img and dropdown
              <div className="dropdown dropdown-end mt-2">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div
                    className={`w-20 rounded-full ${
                      premium === "premium"
                        ? "ring-4 ring-blue-400 ring-offset-2"
                        : ""
                    }`}
                  >
                    {user ? (
                      <img
                        alt=""
                        src={
                          photo
                            ? photo
                            : "https://i.pinimg.com/564x/70/dd/61/70dd612c65034b88ebf474a52ccc70c4.jpg"
                        }
                      />
                    ) : (
                      <img
                        alt="User Photo"
                        src="https://i.pinimg.com/564x/70/dd/61/70dd612c65034b88ebf474a52ccc70c4.jpg"
                      />
                    )}
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 z-50 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  {user && role === "candidate" ? (
                    <li key="candidateProfile View">
                      <NavLink
                        className="mr-2 font-semibold text-lg"
                        to={`/candidate-detailsProfile/${userData?._id}`}
                      >
                        Profile View
                      </NavLink>
                    </li>
                  ) : user && role === "company" ? (
                    <li key="companyProfile View">
                      <NavLink
                        className="mr-2 font-semibold text-lg"
                        to={`/company-details-profile/${userData?._id}`}
                      >
                        Profile View
                      </NavLink>
                    </li>
                  ) : (
                    ""
                  )}

                  {user && role === "admin" ? (
                    <li key="adminDashboard">
                      <NavLink
                        className="mr-2 font-semibold text-lg"
                        to="/dashboard/adminDashboard"
                      >
                        Dashboard
                      </NavLink>
                    </li>
                  ) : user && role === "candidate" ? (
                    <li key="candidateDashboard">
                      <NavLink
                        className="mr-2 font-semibold text-lg"
                        to="/dashboard/candidateProfile"
                      >
                        Dashboard
                      </NavLink>
                    </li>
                  ) : user && role === "company" ? (
                    <li key="companyDashboard">
                      <NavLink
                        className="mr-2 font-semibold text-lg"
                        to="/dashboard/companyProfile"
                      >
                        Dashboard
                      </NavLink>
                    </li>
                  ) : (
                    ""
                  )}
                  <li>
                    <button
                      className="mr-2 font-semibold text-lg"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              //   if user doesn't Exist
              <Link to="/login">
                <button className="cta flex items-center">
                  <span>Login</span>
                  <svg width="15px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
