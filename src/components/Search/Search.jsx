import React, { useState, useEffect } from "react";
import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Search({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    onSearch(searchValue);
  }, [searchValue]);

  return (
    <div className="search-bar">
      <input
        type="text"
        onChange={handleInputChange}
        value={searchValue}
        placeholder="Search user by name, location or skills"
      />
      <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
    </div>
  );
}

export default Search;
