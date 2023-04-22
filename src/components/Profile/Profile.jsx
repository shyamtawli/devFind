import React from "react";
import "./Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitterSquare,
  faLinkedin,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import data from "../../data/shyamtawli.json";

function Profile() {
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
              {data.skills.map((skill) => {
                return <div className="skill">{skill}</div>;
              })}
            </div>
          </div>
          <div className="profile-link">
            <a href={data.portfolio}>View Profile &#8594;</a>
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
