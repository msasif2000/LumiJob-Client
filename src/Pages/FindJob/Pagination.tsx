import { useEffect, useState } from "react";
import Job from "../Home/PopularJobs/Job";


interface PaginationProps {
  popularJobs: Job[];
  onPageChange: (items: Job[]) => void;
}
const Pagination: React.FC<PaginationProps> = ({ popularJobs, onPageChange }) => {

  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(0);
  const [count, setCount] = useState(0);
  const numberOfPage = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPage).keys()];

  useEffect(() => {
    setCount(popularJobs.length);
    onPageChange(getCurrentJobs());
  }, [popularJobs, currentPage, itemsPerPage]);

  const getCurrentJobs = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return popularJobs.slice(startIndex, endIndex);
  };

  const handleItemsPerPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = parseInt(e.target.value, 10);
    setItemsPerPage(val);
    setCurrentPage(0);
  };


  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <nav className="mx-auto flex items-center gap-5">
      <button
        onClick={handlePrev}
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



      {pages.map(page => (

        <button
          key={page}
          type="button"
          className={currentPage === page ? "min-h-[38px] min-w-[38px] flex justify-center items-center bg-gray-200 text-gray-800 border border-gray-200 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-600 dark:border-gray-700 dark:text-white dark:focus:bg-gray-500" : ""}
          onClick={() => setCurrentPage(page)}
          aria-current="page"
        >
          {page + 1}
        </button>
      ))}




      <button
        onClick={handleNext}
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
      <select className="text-lg text-blue-950 outline-2 rounded-md p-2 outline-blue-400" value={itemsPerPage} onChange={handleItemsPerPage}>
        <option value="6">6</option>
        <option value="12">12</option>
      </select>
    </nav>
  );
};

export default Pagination;
