import React from "react";
import "./Sidebar.css";
import { FaCode, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo-title">
        <div className="logo">
          <FaCode className="fa-code" />
        </div>
        <div className="title">
          <p className="dev">dev</p>
          <p className="find">Find</p>
        </div>
      </div>
      <div className="headline">
        Discover and Connect with Skilled Developers.
      </div>
      <div >
        <p className="connect">Connect with Us </p>
        <div className="socials">
          <a href="https://github.com/shyamtawli/devFind" target="_blank" >

            <FaGithub className="fa-icons" />
          </a>
          <a href="https://twitter.com/shyam_tawli" target="_blank">

            <FaTwitter className="fa-icons" />
          </a>
          <a href="https://www.linkedin.com/in/shyamtawli/" target="_blank">

            <FaLinkedin className="fa-icons" />
          </a>

        </div>
      </div>
    </div>
  );
}

export default Sidebar;
