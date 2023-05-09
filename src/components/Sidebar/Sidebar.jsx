import React from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo-title">
        <div className="logo">
          <FontAwesomeIcon
            icon={faCode}
            size="2xl"
            style={{ color: "#ffffff" }}
          />
        </div>
        <div className="title">
          <p className="dev">dev</p>
          <p className="find">Find</p>
        </div>
      </div>
      <div className="headline">
        Discover and Connect with Skilled Developers.
      </div>
        <div className="description">
            devFind is an open-source user friendly platform for developers to showcase their skills and connect with potential collaborators.<br/>
            Find out how to contribute by visiting our GitHub
        </div>
        <a href="https://github.com/shyamtawli/devFind" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub}
                             style={{ color: "#ffffffff" }}
            />
        </a>
    </div>
  );
}

export default Sidebar;
