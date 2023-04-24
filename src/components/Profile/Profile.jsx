import React from "react";
import "./Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitterSquare,
  faLinkedin,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";

function Profile({ data }) {
  return (
    <div className="profile-container">
      <Card data={data} />
    </div>
  );

  function Card({ data }) {
    return (
      <div className="profile-card">
        <div className="top-container">
          <div className="profile-photo">
            <img src={data.avatar} alt="User logo" />
          </div>
          <div className="profile-details">
            <h3>{data.name}</h3>
            <p>
              <span style={{ marginRight: "0.5rem" }}>
                <FontAwesomeIcon icon={faLocationDot} />
              </span>
              {data.location}
            </p>
            <div className="skills-container">
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
            <a href={data.portfolio} target="_blank" rel="noreferrer">
              View Profile &#8594;
            </a>
          </div>
        </div>
        <div className="bottom-container">
          <div className="about">{data.bio}</div>
          <div className="social">
            <div className="github">
              <FontAwesomeIcon
                icon={faGithubSquare}
                size="xl"
                style={{ color: "#00a6fb" }}
              />
              <a
                className="social-link"
                href={data.social.GitHub}
                target="_blank"
                rel="noreferrer"
              >
                {data.social.GitHub.replace("https://github.com/", "")}
              </a>
            </div>
            <div className="twitter">
              <FontAwesomeIcon
                icon={faTwitterSquare}
                size="xl"
                style={{ color: "#00a6fb" }}
              />
              <a
                className="social-link"
                href={data.social.Twitter}
                target="_blank"
                rel="noreferrer"
              >
                {data.social.Twitter.replace("https://twitter.com/", "")}
              </a>
            </div>
            <div className="linkedin">
              <FontAwesomeIcon
                icon={faLinkedin}
                size="xl"
                style={{ color: "#00a6fb" }}
              />
              <a
                className="social-link"
                href={data.social.LinkedIn}
                target="_blank"
                rel="noreferrer"
              >
                {data.social.LinkedIn.replace("https://linkedin.com/in/", "")}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
