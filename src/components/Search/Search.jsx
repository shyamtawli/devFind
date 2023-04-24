import React, { useState } from "react";
import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Search({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchValue);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        onChange={handleInputChange}
        value={searchValue}
        placeholder="Find users with specific skills"
      />
      <FontAwesomeIcon
        onClick={handleSearch}
        className="search-icon"
        icon={faMagnifyingGlass}
      />
    </div>
  );
}

export default Search;
