
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { BiLogOut } from "react-icons/bi";



const DashBoard = () => {
    const navigate = useNavigate()

    const { logOut } = useAuth();
    const role: string = 'company';
    const handleLogout = () => {
        logOut()
        navigate('/');
    }
    return (
        <div className="md:flex">
            <div className="md:w-2/5 lg:w-1/6 xxl-w-1/6 md:flex-shrink-0">
                <div className="navbar-start md:hidden">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="red"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-600 rounded-box w-52 ">
                            {
                                role === 'candidate' ?
                                <>
                                <li>
                                    <h2 className="text-2xl text-red-800 font-bold bg-white my-2">Candidate DashBoard</h2>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/profile'>Profile</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/resume'>Resume</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/appliedJobs'>Applied Jobs</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/bookmarks'>Bookmarks</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/analytics'>Analytics</NavLink>
                                </li>
                            </>
                            :
                            <>
                                <li>
                                    <h2 className="text-2xl text-blue-800 font-bold bg-white my-2">Company DashBoard</h2>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/companyProfile'>Profile</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/postJob'>Post  Job</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/postedJobs'>Posted Job</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/companyAnalytics'>Analytics</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/employees'>Employees</NavLink>
                                </li>
                            </>
                            }
                            <div className="divider"></div>


                            <li>
                                <NavLink to='/'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/availableCamp'>Available Camp</NavLink>
                            </li>
                            <li>
                                <button onClick={handleLogout} className="flex items-center btn btn-sm">
                                    <BiLogOut className="text-2xl" /><span>Sign Out</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="md:flex hidden  min-h-screen bg-gray-200 pt-12 md:fixed">

                    <ul className="menu text-xl">
                        {
                            role === 'candidate' ?
                                <>
                                    <li>
                                        <h2 className="text-2xl text-blue-800 font-bold bg-white my-2">Candidate DashBoard</h2>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/candidateProfile'>Profile</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/resume'>Resume</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/appliedJobs'>Applied Jobs</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/bookmarks'>Bookmarks</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/candidateAnalytics'>Analytics</NavLink>
                                    </li>
                                </>
                                :
                                <>
                                    <li>
                                        <h2 className="text-2xl text-red-800 font-bold bg-white my-2">Company DashBoard</h2>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/companyProfile'>Profile</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/postJob'>Post  Job</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/postedJobs'>Posted Job</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/companyAnalytics'>Analytics</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/employees'>Employees</NavLink>
                                    </li>
                                </>
                        }

                        <div className="divider"></div>


                        <li>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li>
                            <button onClick={handleLogout} className="flex items-center">
                                <BiLogOut className="text-2xl" /><span>Sign Out</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="md:flex-1 overflow-x-auto px-12">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;