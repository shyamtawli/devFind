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
      <>
      <div class="box1 box">
        <div class="content">
          <div class="image">
            <img src={data.avatar} alt="Profile Image"/>
          </div>
          <div class="text">
            <p class="name">{data.name}</p>
            <p class="job_title">
              <span style={{ marginRight: '0.5rem' }}>
                <FontAwesomeIcon icon={faLocationDot} />
              </span>
            {data.location}
            </p>
            <p class="job_discription">{data.bio.length>100?`${data.bio.slice(0,100)}....`:data.bio}</p>
          </div>
          <div className="level skills-container" ref={cardRef}>
            {data.skills.map((skill, index) => {
              return (
                <p className="skill" key={index}>{skill}</p>
                  );
              })}
          </div>
          <div class="icons">
            <a href={data.social.GitHub} target="_blank" rel="noreferrer">
              <i className="fa fa-github"></i>
            </a>
            <a href={data.social.Twitter} target="_blank" rel="noreferrer">
              <i className="fa fa-twitter"></i>
            </a>
            <a href={data.social.LinkedIn} target="_blank" rel="noreferrer">
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
          <div class="button">
            <div>
              <a href={data.portfolio} class="connect btn" type="button">View Profile</a>
            </div>
          </div>
        </div>
      </div>
    </>
    );
  }
}

export default Profile;
