import { useEffect, useState } from "react";
import Footer from "../../component/Footer/Footer";
import Job from "../Home/PopularJobs/Job";
import Navbar from "../Navbar/Navbar";
import FindJobCard from "./FindJobCard";
import { IoFilterOutline } from "react-icons/io5";

const FindJob = () => {
  const [popularJobs, setPopularJobs] = useState<Job[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetch("popular.json")
      .then((res) => res.json())
      .then((data: Job[]) => setPopularJobs(data));
  }, []);

  const handleSearch = () => {
    // Implement your search logic here
    console.log("Search Term:", searchTerm);
    console.log("Selected Category:", category);
    // You can perform your filtering or fetching logic based on the searchTerm and category
  };

  return (
    <>
      <Navbar />
      <div className="">
        <div className=" my-16 w-full lg:w-[70%] 2xl:w-[50%] mx-auto px-1">
          <h3 className="text-4xl md:text-4xl xl:text-5xl font-hanken font-semibold text-center mb-4 xl:mb-12">
            Navigate <span className="text-[#4869DD]">Opportunities</span> and
            Find Your Perfect Job Today!
          </h3>

          <div className="flex justify-center px-2 lg:px-12">
            <div className="flex flex-col md:flex-row items-center gap-4">
              {/* Search Input */}
              <input
                type="text"
                placeholder="Search Jobs"
                className="w-full border py-2 rounded"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              {/* Category Dropdown */}
              <select
                className="w-full border py-2 rounded"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select Category</option>
                <option value="technology">Technology</option>
                <option value="marketing">Marketing</option>
                <option value="finance">Finance</option>
                {/* Add more options as needed */}
              </select>

              {/* Search Button */}
              <button
                className="w-full bg-blue-500 text-white py-2 px-8 rounded"
                onClick={handleSearch}
              >
                Find Job
              </button>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#FAFAFA]">
          <div className="max-w-screen-2xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-4">
            {/*=======> Filters <============= */}
            <div className="col-span-1">
              <div className="flex flex-col justify-center h-auto md:min-h-32 px-3">
                <h4 className="font-semibold font-hanken text-2xl">Filters</h4>
              </div>
              <div className="border rounded p-5 lg:p-8 m-3 min-h-[35vh] bg-white sticky top-24">
                <h6 className="mb-3 text-sm font-medium text-gray-900">
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
            <div className="col-span-1 md:col-span-4 lg:col-span-3 min-h-screen">
              <div className="flex justify-between items-center min-h-32 px-4">
                <h4 className="font-semibold font-hanken text-2xl">
                  <span className="text-[#486DD9]">3,137</span> Jobs Available
                </h4>
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="flex items-center gap-2 py-2 px-5 border border-[#486DD9] text-[#486DD9] font-semibold rounded"
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

              <div className="grid grid-cols-1 gap-8 p-3">
                {popularJobs?.slice(0, 8).map((job) => (
                  <FindJobCard key={job._id} />
                ))}
              </div>

              <div className="py-12">
                {/* ==========>  Pagination <============== */}
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

            {/* =============> Jobs <============== */}

            <div className="col-span-1 hidden lg:block">
              <div className="flex flex-col justify-center min-h-32 px-3">
                <div>
                  <h4 className="font-semibold font-hanken text-2xl">.</h4>
                </div>
              </div>
              <div className="bg-white p-5 rounded border m-3">
                <h4 className="font-semibold font-hanken text-2xl">
                  Get Noticed Faster
                </h4>
                <button className="w-full rounded py-2 px-5 bg-[#486DD9] text-white mt-5">
                  Turn on notifications
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FindJob;
