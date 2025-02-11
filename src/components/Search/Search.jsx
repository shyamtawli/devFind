import React, { useState, useRef, useEffect } from 'react';
import useDebounce from '../../hooks/useDebouncer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';

function Search({ onSearch }) {
  const [searchValue, setSearchValue] = useState('');
  const [prevSearchValue, setPrevSearchValue] = useState('');
  const [searchCriteria, setSearchCriteria] = useState('name');
  const [isFocused, setIsFocused] = useState(false);
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
  }, [debouncedValue, prevSearchValue, searchCriteria, onSearch]);

  const handleSearch = () => {
    if (searchValue !== prevSearchValue) {
      onSearch({ value: searchValue, criteria: searchCriteria });
      setPrevSearchValue(searchValue);
    }
  };

  const handleSearchOnEnter = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
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
    <div className="mx-auto mb-6 w-full max-w-4xl">
      <div className="flex flex-col items-stretch gap-3 sm:flex-row">
        <select
          className={`
            rounded-lg border-2 bg-white
            px-4 py-2.5
            text-gray-700 transition-all duration-200
            dark:bg-gray-800 dark:text-gray-200
            ${
              isFocused
                ? 'border-blue-500 ring-2 ring-blue-500/20 dark:border-blue-400'
                : 'border-gray-200 dark:border-gray-700'
            }
            hover:border-gray-300 focus:border-blue-500
            focus:outline-none dark:hover:border-gray-600 dark:focus:border-blue-400
            sm:w-40
          `}
          value={searchCriteria}
          onChange={handleCriteriaChange}
        >
          <option value="name">Name</option>
          <option value="location">Location</option>
          <option value="skill">Skill</option>
        </select>

        <div className="relative flex-1">
          <input
            ref={searchInput}
            type="text"
            value={searchValue}
            onChange={handleInputChange}
            onKeyDown={handleSearchOnEnter}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={`Search developers by ${searchCriteria}...`}
            className={`
              w-full rounded-lg border-2 bg-white py-2.5
              pl-11 pr-10
              text-gray-700 transition-all duration-200
              dark:bg-gray-800 dark:text-gray-200
              ${
                isFocused
                  ? 'border-blue-500 ring-2 ring-blue-500/20 dark:border-blue-400'
                  : 'border-gray-200 dark:border-gray-700'
              }
              placeholder:text-gray-400 hover:border-gray-300
              focus:border-blue-500 focus:outline-none dark:placeholder:text-gray-500
              dark:hover:border-gray-600 dark:focus:border-blue-400
            `}
          />

          <div className="absolute left-3 top-1/2 -translate-y-1/2">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="h-5 w-5 text-gray-400" />
          </div>

          {searchValue && (
            <button
              onClick={handleDeleteButtonClick}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1
                text-gray-400 transition-colors
                duration-200 hover:bg-gray-100
                hover:text-gray-600 dark:text-gray-500
                dark:hover:bg-gray-700 dark:hover:text-gray-300"
            >
              <FontAwesomeIcon icon={faXmark} className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;
