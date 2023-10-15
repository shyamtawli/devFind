import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

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
            <FontAwesomeIcon icon={faArrowLeft} /> Previous
        </span>
      </button>

      <button className="page">
        <span href="#" className="page">
            {currentPage}
        </span>
      </button>

      <button
        onClick={handleNextPage}
        type="submit"
        disabled={currentPage === totalPages}
        className="pagination-button "
      >
        <span href="#" className="pagination-text">
            Next <FontAwesomeIcon icon={faArrowRight} />
        </span>
      </button>
    </div>
  );
}

export default Pagination;
