import React from "react";

function Pagination({ currentPage, totalPages, onNextPage, onPrevPage }) {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPrevPage();
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onNextPage();
    }
  };

  return (
    <div className="flex items-center justify-center gap-12">
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        aria-disabled={currentPage === 1}
        aria-label="Go to previous page"
        className="focus:outline-none disabled:opacity-30"
      >
        <span
          className="hover:text-textSecondary dark:text-white dark:hover:text-textSecondary"
        >
          Previous
        </span>
      </button>
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        aria-disabled={currentPage === totalPages}
        aria-label="Go to next page"
        className="focus:outline-none disabled:opacity-30"
      >
        <span
          className="hover:text-textSecondary dark:text-white dark:hover:text-textSecondary"
        >
          Next
        </span>
      </button>
    </div>
  );
}

export default Pagination;
