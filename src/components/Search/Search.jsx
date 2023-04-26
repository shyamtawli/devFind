import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

function Search({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchValue);
  };
  const handleSearchOnEnter = (e) => {
    if (e.keyCode === 13) {
      handleSearch();
    }
  };
  return (
    <div className=" ml-[20rem]  mt-[2rem] mb-[2rem] pl-5 relative w-[31rem]">
      <input
        type="text"
        onChange={handleInputChange}
        value={searchValue}
        placeholder="Find users with specific skills"
        onKeyDown={handleSearchOnEnter} className="w-[30rem] h-[3rem] rounded-md border border-gray-600 p-[1rem] text-[1rem] outline-none focus:border-[#00a6fb] bg-inherit text-white"
      />

      <FaSearch
        className="text-white absolute  right-1 top-3 text-[1.5rem] cursor-pointer hover:text-[#00a6fb]" aria-label="search"
      />
    </div>
  );
}

export default Search;
