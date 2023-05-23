import React,{useContext} from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../../Context/ThemeContext";

function Sidebar() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <div className="sidebar">
      <div className="logo-title">
        <div className="logo">
          <FontAwesomeIcon
            icon={faCode}
            size="2xl"
            // style={{ color: "#ffffff" }}
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
      <div>
        <button onClick={toggleTheme} className="text-[1.3rem] ">
          {theme.icon}
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
