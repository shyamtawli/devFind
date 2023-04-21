import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile-container">
      <Card />
    </div>
  );

  function Card() {
    return (
      <div className="profile-card">
        <div className="top-container">
          <div className="profile-photo">
            <img src={`https://github.com/shyamtawli.png`} alt="User logo" />
          </div>
          <div className="profile-details">
            <h3>Shyam Tawli</h3>
            <p>Indore, India</p>
            <div className="skills-container">
              <div className="skill">NodeJS</div>
              <div className="skill">HTML</div>
              <div className="skill">CSS</div>
              <div className="skill">ReactJS</div>
            </div>
          </div>
          <div className="profile-link">View Profile &#8594;</div>
        </div>
      </div>
    );
  }
}

export default Profile;
