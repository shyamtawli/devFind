import React from "react";
import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Search() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." />
      <FontAwesomeIcon
        className="search-icon"
        icon={faMagnifyingGlass}
        style={{ color: "#fff" }}
      />
    </div>
  );
}

export default Search;
