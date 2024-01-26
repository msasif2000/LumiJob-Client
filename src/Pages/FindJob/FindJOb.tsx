import { useEffect, useState } from "react";
import Footer from "../../component/Footer/Footer";
import Job from "../Home/PopularJobs/Job";
import Navbar from "../Navbar/Navbar";
import FindJobCard from "./FindJobCard";
import { IoFilterOutline } from "react-icons/io5";

const FindJOb = () => {
  const [popularJobs, setPopularJobs] = useState<Job[]>([]);

  useEffect(() => {
    fetch("popular.json")
      .then((res) => res.json())
      .then((data: Job[]) => setPopularJobs(data));
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl mx-auto py-16 px-4">
        <div className="my-16 w-[60%] mx-auto ">
          <h3 className="text-xl md:text-2xl xl:text-5xl font-hanken font-semibold text-center mb-4 xl:mb-7">
            Navigate <span className="text-[#4869DD]">Opportunities</span> and
            Find Your Perfect Job Today!
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/*=======> Filters <============= */}
          <div className="col-span-1 sm:col-span-1">
            <div className="py-9">
              <h3 className="font-semibold font-hanken text-2xl">Filters</h3>
            </div>
            <div className="border rounded p-4 min-h-[80vh]">
              <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                Category
              </h6>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <input
                    id="apple"
                    type="checkbox"
                    defaultValue=""
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="apple"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Apple (56)
                  </label>
                </li>
                <li className="flex items-center">
                  <input
                    id="fitbit"
                    type="checkbox"
                    defaultValue=""
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="fitbit"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Fitbit (56)
                  </label>
                </li>
              </ul>
            </div>
          </div>

          {/* =============> Jobs <============== */}
          <div className="col-span-1 sm:col-span-4 p-4 min-h-screen">
            <div className="flex justify-between items-center max-w-screen-md py-5">
              <h4 className="font-semibold font-hanken text-2xl">
                <span className="text-[#486DD9]">3,137</span> Jobs Available
              </h4>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="flex items-center gap-2 py-2 px-5 border border-[#486DD9] text-[#486DD9] font-semibold rounded m-1"
                >
                  <IoFilterOutline /> Filter By
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8">
              {popularJobs?.slice(0, 8).map((job) => (
                <FindJobCard key={job._id} />
              ))}
            </div>
            <div className="py-12">
              {/* Pagination */}
              <nav className="mx-auto flex items-center -space-x-px">
                <button
                  type="button"
                  className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                >
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                  <span className="hidden sm:block">Previous</span>
                </button>
                <button
                  type="button"
                  className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-gray-200 text-gray-800 border border-gray-200 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-600 dark:border-gray-700 dark:text-white dark:focus:bg-gray-500"
                  aria-current="page"
                >
                  1
                </button>
                <button
                  type="button"
                  className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-200 text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                >
                  2
                </button>
                <button
                  type="button"
                  className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-200 text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                >
                  3
                </button>
                <button
                  type="button"
                  className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-200 text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                >
                  4
                </button>
                <button
                  type="button"
                  className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-200 text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                >
                  5
                </button>
                <button
                  type="button"
                  className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-200 text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                >
                  6
                </button>
                <button
                  type="button"
                  className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                >
                  <span className="hidden sm:block">Next</span>
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FindJOb;
