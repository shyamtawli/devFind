import React from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-content">
        <p style={{ color: 'black' }}>
          devFind <br />
          {currentYear} All Rights Reserved.
          <br />
          <a href="https://github.com/shyamtawli/devFind" target="_blank">
            <FontAwesomeIcon className="github-icon" icon={faGithub} />
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
