import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';

import './NoResultFound.css';

export default function NoResultFound() {
  return (
    <div className="no-result">
      <div className="no-result-card">
        <FontAwesomeIcon icon={faFrown} size="5x" />
        <div className="no-result-card-content">
          <h2>No results found</h2>
          <p>We couldn't find any results for your search.</p>
        </div>
      </div>
    </div>
  );
}
