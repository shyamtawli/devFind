import React, { useState, useRef, useEffect } from "react";
import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Search({ onSearch, suggestions }) {
  const [searchValue, setSearchValue] = useState("");
  const [prevSearchValue, setPrevSearchValue] = useState("");
  const searchInput = useRef(null);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
    setShowSuggestions(true);
  };

  const handleSearch = () => {
    if (searchValue !== prevSearchValue) {
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
  };

  useEffect(() => {
    searchInput.current.focus();
  }, []);
  useEffect(() => {
    setFilteredSuggestions(
      suggestions.filter(
        (suggestion) =>
          suggestion.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 ||
          suggestion.location.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 ||
          suggestion.skills.some(skill =>
            skill.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
          )
      )
    );
  }, [searchValue, suggestions]);
  const onSuggestionClicked = (suggestion) => {
    onSearch(suggestion.name);
    setSearchValue(suggestion.name);
    setShowSuggestions(false);
  };

  return (
    <div className="search-bar">
      <input
        ref={searchInput}
        type="text"
        onChange={handleInputChange}
        value={searchValue}
        placeholder="Search user by name, location or skills"
        onKeyDown={handleSearchOnEnter}
      />
      <FontAwesomeIcon
        onClick={handleSearchButtonClick}
        className="search-icon"
        icon={faMagnifyingGlass}
      />
      {showSuggestions && searchValue && (
        <ul className="suggestion-list">
          {filteredSuggestions.slice(0, 5).map((suggestion, i) => (
            <li key={i} onClick={() => onSuggestionClicked(suggestion)}>
              {suggestion.name} - {suggestion.location}
            </li>
          ))}
      </ul>
      )}
      
    </div>
  );
}

export default Search;
