
import React, { useState, useRef, useEffect } from "react";
import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Search({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");
  const [prevSearchValue, setPrevSearchValue] = useState("");
  const searchInput = useRef(null);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    if ( searchValue !== prevSearchValue) {
      onSearch(searchValue);
      setPrevSearchValue(searchValue);
    }
  };

  const handleSearchOnEnter = (e) => {
    if (e.keyCode === 13) {
      handleSearch();
    }
  };

  const handleSearchButtonClick = () => {
    handleSearch();
    if (searchValue === "") {
      setSearchValue("");
      setPrevSearchValue("");
      onSearch("");
    }
  };

  // Focus the search input when the component mounts
  useEffect(() => {
    searchInput.current.focus();
  }, []);

  return (
    <div className="search-bar">
      <input
        ref={searchInput}
        type="text"
        onChange={handleInputChange}
        value={searchValue}
        placeholder="Find users with specific skills"
        onKeyDown={handleSearchOnEnter}
      />
      <FontAwesomeIcon
        onClick={handleSearchButtonClick}
        className="search-icon"
        icon={faMagnifyingGlass}
      />
    </div>
  );
}

export default Search;


