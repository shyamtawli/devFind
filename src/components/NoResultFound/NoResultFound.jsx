import React from 'react';
import './NoResultFound.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';

export default function NoResultFound() {
  return (
    <div className="no-result-container">
      <div className="no-result-card">
        <div className="no-result-content">
          <FontAwesomeIcon icon={faFrown} size="5x" className="frown-icon" />
          <div className="text">
            <h2 className="no-result-heading">No Results Found</h2>
            <p className="no-result-description">We couldn't find any results for your search.</p>
            <p className="try-again">Please try a different search query or refine your filters.</p>
          </div>
        </div>
        <div className="suggestions">
          <h3 className="suggestions-heading">Suggestions:</h3>
          <ul className="suggestions-list">
            <li>Check your spelling and try again.</li>
            <li>Clear any applied filters.</li>
            <li>Broaden your search criteria.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
