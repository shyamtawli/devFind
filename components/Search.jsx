import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark, faFilter } from "@fortawesome/free-solid-svg-icons";
import useDebounce from "./hooks/useDebouncer";

function Search({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");
  const [prevSearchValue, setPrevSearchValue] = useState("");
  const [searchCriteria, setSearchCriteria] = useState("name");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const searchInput = useRef(null);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleCriteriaChange = (value) => {
    setSearchCriteria(value);
    setIsFilterOpen(false);
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

  const handleDeleteButtonClick = () => {
    if (searchValue) {
      setSearchValue("");
      setPrevSearchValue("");
      onSearch({ value: "", criteria: searchCriteria });
      searchInput.current.focus();
    }
  };

  useEffect(() => {
    searchInput.current.focus();
  }, []);

  const filterOptions = [
    { value: "name", label: "Name", icon: "👤" },
    { value: "location", label: "Location", icon: "📍" },
    { value: "skill", label: "Skill", icon: "💼" },
  ];

  const currentFilter = filterOptions.find(opt => opt.value === searchCriteria);

  return (
    <div className="page-transition relative mb-4 md:mb-6">
      {/* Search Header - Smaller on mobile */}
      <div className="mb-2 md:mb-3">
        <h1 className="text-base font-bold text-slate-800 dark:text-white sm:text-lg md:text-2xl">
          Find Your <span className="gradient-text">Developer</span>
        </h1>
        <p className="text-[10px] text-slate-500 dark:text-slate-400 sm:text-xs md:text-sm">
          Search by name, location, or skills
        </p>
      </div>

      {/* Search Bar Container */}
      <div className="flex gap-2">
        {/* Filter Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="glass-card flex h-9 items-center gap-1.5 rounded-lg px-2.5 transition-all hover:!transform-none focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:h-10 sm:px-3 md:h-11"
          >
            <span className="text-sm">{currentFilter?.icon}</span>
            <span className="hidden text-xs font-medium text-slate-700 dark:text-slate-200 sm:inline">
              {currentFilter?.label}
            </span>
            <FontAwesomeIcon
              icon={faFilter}
              className={`text-[8px] text-slate-400 transition-transform sm:text-[10px] ${isFilterOpen ? "rotate-180" : ""}`}
            />
          </button>

          {/* Dropdown Menu */}
          {isFilterOpen && (
            <div className="glass-card absolute left-0 top-full z-50 mt-1 min-w-[120px] overflow-hidden rounded-lg p-1 shadow-xl sm:min-w-[140px]">
              {filterOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleCriteriaChange(option.value)}
                  className={`flex w-full items-center gap-2 rounded-md px-2.5 py-2 text-left text-xs transition-all ${searchCriteria === option.value
                      ? "bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-600 dark:text-indigo-400"
                      : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700"
                    }`}
                >
                  <span className="text-sm">{option.icon}</span>
                  <span className="font-medium">{option.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Search Input */}
        <div className="relative flex-1">
          <input
            ref={searchInput}
            id="search-bar"
            type="text"
            value={searchValue}
            onChange={handleInputChange}
            onKeyDown={handleSearchOnEnter}
            placeholder={`Search by ${searchCriteria}...`}
            className="h-9 w-full rounded-lg border-2 border-transparent bg-white/80 px-3 pr-9 text-xs text-slate-700 placeholder:text-slate-400 backdrop-blur-sm transition-all focus:border-indigo-500 focus:outline-none dark:bg-slate-800/80 dark:text-white dark:placeholder:text-slate-500 sm:h-10 sm:text-sm md:h-11 md:pr-10"
          />

          {/* Search/Clear Icon */}
          <button
            onClick={searchValue ? handleDeleteButtonClick : handleSearch}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1 transition-all hover:bg-slate-100 dark:hover:bg-slate-700"
          >
            {searchValue ? (
              <FontAwesomeIcon
                icon={faXmark}
                className="text-sm text-slate-400 hover:text-rose-500"
              />
            ) : (
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-sm text-indigo-500"
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
