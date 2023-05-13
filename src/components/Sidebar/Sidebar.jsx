import React from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

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
      <div className="links headline">
        <ul className="list_box">
          <li>
            {" "}
            <Link to="/" className="link_url">
              Home
            </Link>
          </li>
          <li>
            <Link to="/dev/testprofile" className="link_url">
              Test Profile
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
