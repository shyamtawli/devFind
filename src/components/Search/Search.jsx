import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import './Search.css';

function Search({ onSearch }) {
  const [searchValue, setSearchValue] = useState('');
  const [prevSearchValue, setPrevSearchValue] = useState('');
  const searchInput = useRef(null);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
    onSearch(event.target.value);
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

  useEffect(() => {
    searchInput.current.focus();
  }, []);

  return (
    <div className="search-bar">
      <div className="search-bar-container">
        <input
          ref={searchInput}
          type="text"
          onChange={handleInputChange}
          value={searchValue}
          placeholder="Search..."
          onKeyDown={handleSearchOnEnter}
          className="search-bar-input"
        />
        <div className="info">
          <FontAwesomeIcon icon={faInfoCircle} />
          <p>You can search user by name, location or skills.</p>
        </div>
      </div>
    </div>
  );
}

export default Search;
