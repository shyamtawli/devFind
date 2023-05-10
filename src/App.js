import { useState, useCallback } from "react";
import Profile from "./components/Profile/Profile";
import Search from "./components/Search/Search";
import Sidebar from "./components/Sidebar/Sidebar";
import NoResultFound from "./components/NoResultFound/NoResultFound";
import datas from "./data/Profile.json";
import "./App.css";

function App() {
  const [profiles, setProfiles] = useState([]);
  const [searching, setSearching] = useState(false);
  const [filteredProfiles, setFilteredProfiles] = useState(profiles);

  const handleTagClick = useCallback(
    (tag) => {
      if (filteredProfiles.some((profile) => profile.skills.includes(tag))) {
        setFilteredProfiles(
          filteredProfiles.filter((profile) => profile.skills.includes(tag))
        );
      } else {
        setFilteredProfiles(profiles);
      }
    },
    [profiles, filteredProfiles]
  );

  const handleSearch = (searchValue) => {
    const lowercaseSearch = searchValue.toLowerCase();
    const results = [];

    for (const object of datas) {
      const lowercaseName = object.name.toLowerCase();
      const lowercaseLocation = object.location.toLowerCase();
      const matchingSkills = object.skills.filter((skill) =>
        skill.toLowerCase().includes(lowercaseSearch)
      );
      if (
        matchingSkills.length > 0 ||
        lowercaseName.includes(lowercaseSearch) ||
        lowercaseLocation.includes(lowercaseSearch)
      ) {
        results.push(object);
      }
    }

    setSearching(true);
    setProfiles(results);
  };

  const shuffleProfiles = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const shuffledProfiles = shuffleProfiles(datas);

  return (
    <div className="App">
      <Sidebar onTagClick={handleTagClick} />
      <Search onSearch={handleSearch} />
      {profiles.length === 0 && searching ? (
        <NoResultFound />
      ) : profiles.length === 0 && !searching ? (
        shuffledProfiles.map((profile, index) => {
          return <Profile data={profile} key={index} />;
        })
      ) : (
        profiles.map((profile, index) => {
          return <Profile data={profile} key={index} />;
        })
      )}
    </div>
  );
}

export default App;
