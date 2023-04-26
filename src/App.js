import { useState } from "react";
import Profile from "./components/Profile/Profile";
import Search from "./components/Search/Search";
import Sidebar from "./components/Sidebar/Sidebar";
import datas from "./data/Profile.json";

function App() {
  const [profiles, setProfiles] = useState([]);

  const handleSearch = (searchValue) => {
    const lowercaseSearch = searchValue.toLowerCase();
    const results = [];

    for (const object of datas) {
      const matchingSkills = object.skills.filter((skill) =>
        skill.toLowerCase().includes(lowercaseSearch)
      );
      if (matchingSkills.length > 0) {
        results.push(object);
      }
    }

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
      <Sidebar />
      <Search onSearch={handleSearch} />
      {profiles.length === 0
        ? shuffledProfiles.map((profile, index) => {
            return <Profile data={profile} key={index} />;
          })
        : profiles.map((profile, index) => {
            return <Profile data={profile} key={index} />;
          })}
    </div>
  );
}

export default App;
