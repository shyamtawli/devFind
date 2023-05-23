import { useState, useEffect } from "react";
import Profile from "./components/Profile/Profile";
import Search from "./components/Search/Search";
import Sidebar from "./components/Sidebar/Sidebar";
import NoResultFound from "./components/NoResultFound/NoResultFound";
import "./App.css";
import filenames from "./ProfilesList.json";

function App() {
  const [profiles, setProfiles] = useState([]);
  const [searching, setSearching] = useState(false);
  const [combinedData, setCombinedData] = useState([]);

  useEffect(() => {
    // Function to fetch data from a JSON file
    const fetchData = async (file) => {
      try {
        const response = await fetch(file);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error fetching data:", error);
        return [];
      }
    };

    // Function to combine data from multiple JSON files
    const combineData = async () => {
      try {
        const promises = filenames.map((file) => fetchData(`/data/${file}`));
        const combinedData = await Promise.all(promises);

        setCombinedData(combinedData);
      } catch (error) {
        console.error("Error combining data:", error);
        setCombinedData([]);
      }
    };

    combineData();
  }, []);

  const handleSearch = (searchValue) => {
    const lowercaseSearch = searchValue.toLowerCase();
    const results = [];

    for (const object of combinedData) {
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

  const shuffledProfiles = shuffleProfiles(combinedData);

  return (
    <div className="App">
      <Sidebar />
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
