import React, { useState, useRef, useEffect } from "react";
import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useDebouncedState } from "../hooks/useDebouncedState";

function Search({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");
  const searchInput = useRef(null);
  const [debouncedValue, setDebouncedValue] = useDebouncedState('', 450);

  const handleSearchOnEnter = (e) => {
    const value = e.currentTarget.value;
    setDebouncedValue(value);
  };

  const handleSearchButtonClick = () => {
    setDebouncedValue(debouncedValue);
  };

  const handleOnTextChange = (e) => {
    const value = e.currentTarget.value;
    setSearchValue(value);
    setDebouncedValue(value);
  };

  useEffect(() => {
    searchInput.current.focus();
  }, []);

  useEffect(() => {
    onSearch(debouncedValue);
  }, [debouncedValue]);

  return (
        <div className="search-bar">
          <input
              ref={searchInput}
              type="text"
              onChange={handleOnTextChange}
              value={searchValue}
              placeholder="Search user by name, location or skills"
              onKeyUp={handleSearchOnEnter}
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