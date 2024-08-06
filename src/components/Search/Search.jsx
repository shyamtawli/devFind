import React, { useState, useRef, useEffect } from 'react';
import useDebounce from '../../hooks/useDebouncer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';

function Search({ onSearch }) {
  const [searchValue, setSearchValue] = useState('');
  const [prevSearchValue, setPrevSearchValue] = useState('');
  const [searchCriteria, setSearchCriteria] = useState('name');
  const searchInput = useRef(null);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleCriteriaChange = (event) => {
    setSearchCriteria(event.target.value);
  };

  const debouncedValue = useDebounce(searchValue, 500);

  useEffect(() => {
    if (debouncedValue !== prevSearchValue) {
      onSearch({ value: debouncedValue, criteria: searchCriteria });
      setPrevSearchValue(debouncedValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  const handleSearch = () => {
    if (searchValue !== prevSearchValue) {
      onSearch({ value: searchValue, criteria: searchCriteria });
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
      onSearch({ value: '', criteria: searchCriteria });
      searchInput.current.focus();
    }
  };

  useEffect(() => {
    searchInput.current.focus();
  }, []);

  return (
    <div className="relative flex items-center justify-end space-x-4 pb-6">
      <select
        className="focus:border-primaryFocus focus:bg-primaryLight dark:focus:border-secondaryFocus dark:focus:bg-secondaryLight h-12 rounded-lg border-2 border-borderSecondary bg-primaryColor px-4 py-3 text-base text-secondaryColor outline-none dark:border-borderColor dark:bg-secondaryColor dark:text-white"
        value={searchCriteria}
        onChange={handleCriteriaChange}
      >
        <option value="name">Name</option>
        <option value="location">Location</option>
        <option value="skill">Skill</option>
      </select>
      <div className="relative w-full">
        <input
          className="focus:border-primaryFocus focus:bg-primaryLight dark:focus:border-secondaryFocus dark:focus:bg-secondaryLight h-12 w-full rounded-lg border-2 border-borderSecondary bg-primaryColor px-4 py-3 pr-12 font-spaceMono text-base text-secondaryColor outline-none dark:border-borderColor dark:bg-secondaryColor dark:text-white"
          ref={searchInput}
          type="text"
          onChange={handleInputChange}
          value={searchValue}
          placeholder={`Search user by ${searchCriteria}`}
          onKeyDown={handleSearchOnEnter}
        />
        {searchValue ? (
          <FontAwesomeIcon
            onClick={handleDeleteButtonClick}
            className="hover:text-primaryFocus dark:hover:text-secondaryFocus absolute right-4 top-1/2 -translate-y-1/2 scale-125 transform cursor-pointer text-xl text-secondaryColor dark:text-white"
            icon={faXmark}
          />
        ) : (
          <FontAwesomeIcon
            onClick={handleSearchButtonClick}
            className="hover:text-primaryFocus dark:hover:text-secondaryFocus absolute right-4 top-1/2 -translate-y-1/2 transform cursor-pointer text-xl text-secondaryColor dark:text-white"
            icon={faMagnifyingGlass}
          />
        )}
      </div>
    </div>
  );
}

export default Search;
