import React, { useState, useRef, useEffect } from 'react';
import './Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Search({ onSearch, setIsOpen }) {
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

  const handleSearchButtonClick = () => {
    handleSearch();
  };

  useEffect(() => {
    searchInput.current.focus();
  }, []);

  const handleToggleSidebar = () => {
    setIsOpen((prev) => !prev);
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
      <FontAwesomeIcon onClick={handleSearchButtonClick} className="search-icon" icon={faMagnifyingGlass} />
      <FontAwesomeIcon onClick={handleToggleSidebar} className="toggle-icon" icon={faBars} />
    </div>
  );
}

export default Search;
