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
    <div className="pagination">
      <button onClick={handlePrevPage} disabled={currentPage === 1} className="pagination-button">
        <span href="#" className="pagination-text">
          Previous
        </span>
      </button>
      <button
        onClick={handleNextPage}
        type="submit"
        disabled={currentPage === totalPages}
        className="pagination-button "
      >
        <span href="#" className="pagination-text">
          Next
        </span>
      </button>
    </div>
  );
}

export default Pagination;
