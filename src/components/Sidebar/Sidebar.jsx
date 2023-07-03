import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo-title">
        <div className="logo">
          <FontAwesomeIcon icon={faCode} size="2xl" style={{ color: '#ffffff' }} />
        </div>
        <a href="https://dev-find.vercel.app/" className="titlelink">
          <div className="title">
            <p className="dev">dev</p>
            <p className="find">Find</p>
          </div>
        </a>
      </div>
      <div className="headline">Discover and Connect with Skilled Developers.</div>
      <div className="description">
        <a href=" https://github.com/shyamtawli/devFind#how-to-add-your-profile-" target="_blank" rel="noreferrer">
          Add your profile?
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
