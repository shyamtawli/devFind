import React, { useState, useRef, useEffect } from 'react';
import useDebounce from '../../hooks/useDebouncer';
import './Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useSearchParams } from 'react-router-dom';

function Search({ onSearch }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const prevSearchValue = searchParams.get('search') || '';
  const searchInput = useRef(null);
  const setPrevSearchValue = (val) => setSearchParams({ search: val });
  const [searchValue, setSearchValue] = useState(prevSearchValue);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const debouncedValue = useDebounce(searchValue, 500);

  useEffect(() => {
    if (searchValue !== prevSearchValue) {
      onSearch(debouncedValue);
      setPrevSearchValue(searchValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

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

  const handleDeleteButtonClick = () => {
    if (searchValue) {
      setSearchValue('');
      setSearchParams({ search: '' });
      onSearch('');
      searchInput.current.focus();
    }
  };

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
        placeholder="Search user by name, location or skills"
        onKeyDown={handleSearchOnEnter}
      />
      <FontAwesomeIcon onClick={handleSearchButtonClick} className="search-icon" icon={faMagnifyingGlass} />
      {searchValue && <FontAwesomeIcon onClick={handleDeleteButtonClick} className="delete-icon" icon={faXmark} />}
    </div>
  );
}

export default Search;
