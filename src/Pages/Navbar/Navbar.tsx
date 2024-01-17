import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import useAuth from "../../hooks/useAuth";

interface NavbarProps {
  color: string;
}

const Navbar: React.FC<NavbarProps> = ({ color }) => {
  // To Do : user set AuthProvider
  // To Do : All Link NavLink or Link Seta Valid link

  const { user, logOut } = useAuth();

  const Linking: JSX.Element[] = [
    <li  key="home">
      <NavLink
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "font-black underline text-lg"
            : "text-lg"
        }
        to="/"
      >
        Home
      </NavLink>
    </li>,
    <li  key="Job">
      <NavLink
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "font-black underline text-lg"
            : "text-lg"
        }
        to="/Job"
      >
        Job
      </NavLink>
    </li>,
    <li  key="Item1">
      <NavLink
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "font-black underline text-lg"
            : "text-lg"
        }
        to="/Item1"
      >
        Item 1
      </NavLink>
    </li>,
    <li  key="Blogs">
      <NavLink
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "font-black underline text-lg"
            : "text-lg"
        }
        to="/blogs"
      >
        Blogs
      </NavLink>
    </li>,
    <li  key="Contact">
      <NavLink
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "font-black underline text-lg"
            : "text-lg"
        }
        to="/Contact"
      >
        Contact
      </NavLink>
    </li>,
  ];

  // for dynamic bg color of navbar
  const bgColor = color ? color : "bg-white";

  return (
    <div className={bgColor}>
      <div className="navbar w-11/12 mx-auto">
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
          <a className="btn btn-ghost text-xl  md:text-3xl font-bold">
            LumiJobs
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul key={"Linking2"} className="menu menu-horizontal px-1">
            {Linking}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="mr-24 hidden md:block ">
            <button className="button  ">
              Apply Now
              <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                <path
                  clipRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div>
            {user ? (
              // if user exist show img and dropdown
              <div className="dropdown dropdown-end mt-2">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-20 rounded-full">
                    {user.photoURL ? (
                      <img
                        alt="Tailwind CSS Navbar component"
                        src={user.photoURL}
                      />
                    ) : (
                      <img
                        alt="Tailwind CSS Navbar component"
                        src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      />
                    )}
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <NavLink
                      className="mr-2 font-semibold text-lg"
                      to="/Profile"
                    >
                      Profile
                    </NavLink>
                  </li>
                  ,
                  <li>
                    <NavLink
                      className="mr-2 font-semibold text-lg"
                      to="/Settings"
                    >
                      Settings
                    </NavLink>
                  </li>
                  ,
                  <li>
                    <button
                      className="mr-2 font-semibold text-lg"
                      onClick={() => logOut()}
                    >
                      Logout
                    </button>
                  </li>
                  ,
                </ul>
              </div>
            ) : (
              //   if user doesn't Exist
              <button className="cta flex items-center">
                <span>
                  <Link to="/login">Login</Link>
                </span>
                <svg width="15px" height="10px" viewBox="0 0 13 10">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
