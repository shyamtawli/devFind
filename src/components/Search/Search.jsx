import React, { useState } from "react";
import "./Search.css";
import { FaSearch } from "react-icons/fa";

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

      <FaSearch
        className="search-icon" aria-label="search"
      />
    </div>
  );
}

export default Search;
