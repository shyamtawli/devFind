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

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="mt-6 flex flex-col items-center gap-3 pb-6 md:mt-8 md:pb-8">
      {/* Page Info */}
      <p className="text-xs text-slate-500 dark:text-slate-400 sm:text-sm">
        Page <span className="font-semibold gradient-text">{currentPage}</span> of{" "}
        <span className="font-semibold text-slate-700 dark:text-slate-200">{totalPages}</span>
      </p>

      {/* Pagination Controls */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Previous Button - Text */}
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="rounded-lg bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm ring-1 ring-slate-200 transition-all hover:bg-indigo-50 hover:text-indigo-600 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-slate-800/80 dark:text-slate-300 dark:ring-slate-700 dark:hover:bg-slate-700 sm:px-4 sm:py-2 sm:text-sm"
          aria-label="Previous page"
        >
          Previous
        </button>

        {/* Page Numbers */}
        <div className="flex items-center gap-1">
          {getPageNumbers().map((page, index) => (
            page === '...' ? (
              <span
                key={`dots-${index}`}
                className="flex h-8 w-6 items-center justify-center text-xs text-slate-400 sm:h-9 sm:w-8"
              >
                ...
              </span>
            ) : (
              <button
                key={page}
                onClick={() => {
                  if (page < currentPage) {
                    for (let i = 0; i < currentPage - page; i++) onPrevPage();
                  } else if (page > currentPage) {
                    for (let i = 0; i < page - currentPage; i++) onNextPage();
                  }
                }}
                className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-medium transition-all sm:h-9 sm:w-9 sm:text-sm ${page === currentPage
                    ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-sm"
                    : "bg-white/80 text-slate-600 ring-1 ring-slate-200 hover:bg-indigo-50 hover:text-indigo-600 dark:bg-slate-800/80 dark:text-slate-300 dark:ring-slate-700 dark:hover:bg-slate-700"
                  }`}
              >
                {page}
              </button>
            )
          ))}
        </div>

        {/* Next Button - Text */}
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="rounded-lg bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm ring-1 ring-slate-200 transition-all hover:bg-indigo-50 hover:text-indigo-600 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-slate-800/80 dark:text-slate-300 dark:ring-slate-700 dark:hover:bg-slate-700 sm:px-4 sm:py-2 sm:text-sm"
          aria-label="Next page"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
