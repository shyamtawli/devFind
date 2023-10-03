import React from 'react';
import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faTwitterSquare, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

function Profile({ data }) {
  return (
    <div className="profile-container">
      <Card data={data} />
    </div>
  );

  function Card({ data }) {
    const cardRef = React.useRef();
    const handleWheel = (event) => {
      event.stopPropagation();
      event.preventDefault();
      let container = event.target;
      if (!container) return false;

      while (!container.classList.contains('skills-container')) {
        container = container.parentNode;
      }

      const delta = event.deltaX || event.deltaY;
      container.scrollLeft += delta;
    };

    React.useEffect(() => {
      cardRef.current.addEventListener('wheel', handleWheel, { passive: false });
    }, []);

    return (
      <div className="profile-card">
        <div className="top-container">
          <div className="profile-photo">
            <img src={data.avatar} alt="User logo" />
          </div>
          <div className="profile-details">
            <h3>{data.name}</h3>
            <p>
              <span style={{ marginRight: '0.5rem' }}>
                <FontAwesomeIcon icon={faLocationDot} />
              </span>
              {data.location}
            </p>
            <div className="skills-container" ref={cardRef}>
              {data.skills.map((skill, index) => {
                return (
                  <div className="skill" key={index}>
                    {skill}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="profile-link">
            {data.portfolio && (
              <a href={data.portfolio} target="_blank" rel="noreferrer">
                View Profile &#8594;
              </a>
            )}
          </div>
        </div>
        <div className="bottom-container">
          <div className="about">{data.bio}</div>
          <div className="social-container">
            <ul className="social-icons">
              <li>
                <a href={data.social.GitHub} target="_blank" rel="noreferrer">
                  <i className="fa fa-github"></i>
                </a>
              </li>
              <li>
                <a href={data.social.Twitter} target="_blank" rel="noreferrer">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href={data.social.LinkedIn} target="_blank" rel="noreferrer">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
