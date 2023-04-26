import React from "react";
import "./Profile.css";
import { MdLocationOn } from "react-icons/md";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

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
                <MdLocationOn />
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
              <FaGithub className="fa-icon-color" />
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
              <FaTwitter className="fa-icon-color" />
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
              <FaLinkedin className="fa-icon-color" />
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
