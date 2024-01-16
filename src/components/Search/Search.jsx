import React, { useState, useRef, useEffect } from 'react';
import useDebounce from '../../hooks/useDebouncer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';

function Search({ onSearch }) {
  const [searchValue, setSearchValue] = useState('');
  const [prevSearchValue, setPrevSearchValue] = useState('');
  const searchInput = useRef(null);

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
      setPrevSearchValue('');
      onSearch('');
      searchInput.current.focus();
    }
  };

  useEffect(() => {
    searchInput.current.focus();
  }, []);

  return (
    <div className="relative flex items-center justify-end pb-6">
      <input
        className="h-12 w-full rounded-md border-2 border-borderSecondary bg-primaryColor px-4 py-3 font-spaceMono text-base text-secondaryColor outline-none dark:border-borderColor dark:bg-secondaryColor dark:text-white"
        ref={searchInput}
        type="text"
        onChange={handleInputChange}
        value={searchValue}
        placeholder="Search user by name, location or skills"
        onKeyDown={handleSearchOnEnter}
      />
      <FontAwesomeIcon
        onClick={handleSearchButtonClick}
        className="absolute mr-2.5 cursor-pointer text-xl hover:text-textSecondary dark:text-white dark:hover:text-textSecondary"
        icon={faMagnifyingGlass}
      />
      {searchValue && (
        <FontAwesomeIcon
          onClick={handleDeleteButtonClick}
          className="absolute mr-10 cursor-pointer text-xl hover:text-textSecondary dark:text-white dark:hover:text-textSecondary  "
          icon={faXmark}
        />
      )}
    </div>
  );
}

export default Search;
