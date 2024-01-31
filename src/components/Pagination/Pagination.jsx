import React from 'react';

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
      <button onClick={handlePrevPage} disabled={currentPage === 1} className="focus:outline-none disabled:opacity-30">
        <span
          href="#"
          className="font-spaceMono hover:text-textSecondary dark:text-white dark:hover:text-textSecondary"
        >
          Previous
        </span>
      </button>
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className="focus:outline-none disabled:opacity-30"
      >
        <span
          href="#"
          className="font-spaceMono hover:text-textSecondary dark:text-white dark:hover:text-textSecondary"
        >
          Next
        </span>
      </button>
    </div>
  );
}

export default Pagination;
