import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="sidebar-logo">
          <FontAwesomeIcon icon={faCode} size="xl" />
          <a href="https://dev-find.vercel.app/" className="sidebar-title">
            <span>dev</span>
            <span className="highlighted">Find</span>
          </a>
        </div>
        <div className="sidebar-content">
          <p>Discover and Connect with Skilled Developers.</p>
          <a
            href="https://github.com/shyamtawli/devFind#how-to-add-your-profile-"
            target="_blank"
            rel="noreferrer"
            className="sidebar-cta"
          >
            Add your profile
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
