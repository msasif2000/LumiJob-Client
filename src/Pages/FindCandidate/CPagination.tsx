import React from "react";

interface CPaginationProps {
  totalData: number;
  dataPerPage: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
}

const CPagination: React.FC<CPaginationProps> = ({
  totalData,
  dataPerPage,
  currentPage,
  onPageChange,
}) => {
  const numberOfPages = Math.ceil(totalData / dataPerPage);
  const pages = Array.from({ length: numberOfPages }, (_, index) => index + 1);

  const handlePageChange = (pageNumber: number) => {
    onPageChange(pageNumber);
  };

  const pageNumbersToShow = window.innerWidth < 768 ? 4 : 7; 

  const renderPageNumbers = () => {
    if (numberOfPages <= pageNumbersToShow) {
      return pages.map((page) => (
        <button
          key={page}
          type="button"
          className={`min-h-[38px] min-w-[38px] flex justify-center items-center ${
            currentPage === page ? "bg-gray-200 text-gray-800 border border-gray-200" : ""
          } py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-600 dark:border-gray-700 dark:text-white dark:focus:bg-gray-500`}
          onClick={() => handlePageChange(page)}
          aria-current="page"
        >
          {page}
        </button>
      ));
    } else if (currentPage < 4) {
      return pages.slice(0, pageNumbersToShow).map((page) => (
        <button
          key={page}
          type="button"
          className={`min-h-[38px] min-w-[38px] flex justify-center items-center ${
            currentPage === page ? "bg-gray-200 text-gray-800 border border-gray-200" : ""
          } py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-600 dark:border-gray-700 dark:text-white dark:focus:bg-gray-500`}
          onClick={() => handlePageChange(page)}
          aria-current="page"
        >
          {page}
        </button>
      ));
    } else if (currentPage > numberOfPages - 3) {
      return pages.slice(numberOfPages - pageNumbersToShow).map((page) => (
        <button
          key={page}
          type="button"
          className={`min-h-[38px] min-w-[38px] flex justify-center items-center ${
            currentPage === page ? "bg-gray-200 text-gray-800 border border-gray-200" : ""
          } py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-600 dark:border-gray-700 dark:text-white dark:focus:bg-gray-500`}
          onClick={() => handlePageChange(page)}
          aria-current="page"
        >
          {page}
        </button>
      ));
    } else {
      const startPage = currentPage - Math.floor(pageNumbersToShow / 2);
      const endPage = currentPage + Math.floor(pageNumbersToShow / 2);
      return pages.slice(startPage - 1, endPage).map((page) => (
        <button
          key={page}
          type="button"
          className={`min-h-[38px] min-w-[38px] flex justify-center items-center ${
            currentPage === page ? "bg-gray-200 text-gray-800 border border-gray-200" : ""
          } py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-600 dark:border-gray-700 dark:text-white dark:focus:bg-gray-500`}
          onClick={() => handlePageChange(page)}
          aria-current="page"
        >
          {page}
        </button>
      ));
    }
  };

  return (
    <nav className="mx-auto flex justify-center items-center md:gap-2 gap-1">
      <button
        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
        type="button"
        className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
        disabled={currentPage === 1}
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

      {renderPageNumbers()}

      <button
        onClick={() => handlePageChange(Math.min(numberOfPages, currentPage + 1))}
        type="button"
        className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
        disabled={currentPage === numberOfPages}
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
  );
};

export default CPagination;
