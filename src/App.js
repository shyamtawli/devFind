import { useState } from "react";
import { Profile, Search, Sidebar } from "./components/index";
import { Routes, Route } from "react-router-dom";

import datas from "./data/Profile.json";
import "./App.css";

function App() {
  const [profiles, setProfiles] = useState([]);

  const shuffleProfiles = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleSearch = (searchValue) => {
    const lowercaseSearch = searchValue.toLowerCase();

    const filteredSearches = datas.filter((user) => {
      const lowercaseName = user.name.toLowerCase();
      const lowercaseLocation = user.location.toLowerCase();
      const matchingSkills = user.skills.filter((skill) =>
        skill.toLowerCase().includes(lowercaseSearch)
      );
      if (
        matchingSkills.length > 0 ||
        lowercaseName.includes(lowercaseSearch) ||
        lowercaseLocation.includes(lowercaseSearch)
      ) {
        return true;
      }
      return false;
    });
    const shuffledProfiles = shuffleProfiles(filteredSearches);
    setProfiles(shuffledProfiles);
  };

  return (
    <div className="App">
      <Sidebar />
      <Search onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Profile shuffledProfiles={profiles} />} />
      </Routes>
    </div>
  );
}

export default App;
