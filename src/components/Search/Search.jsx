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
  const handleSearchOnEnter = (e) => {
    if (e.keyCode === 13) {
      handleSearch();
    }
  };
  return (
    <div className="search-bar">
      <input
        type="text"
        onChange={handleInputChange}
        value={searchValue}
        placeholder="Find users with specific skills"
        onKeyDown={handleSearchOnEnter}
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
