import { useState, useEffect } from "react";
import Profile from "./components/Profile/Profile";
import Search from "./components/Search/Search";
import Sidebar from "./components/Sidebar/Sidebar";
import NoResultFound from "./components/NoResultFound/NoResultFound";
import datas from "./data/Profile.json";
import "./App.css";

function App() {
  const [profiles, setProfiles] = useState([]);
  const [searching, setSearching] = useState(false);
  const [fetching, setFetching] = useState(false);

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

  const fetchData = async () => {
    try {
      const abortController = new AbortController();
      const signal = abortController.signal;
      setFetching(true);
      const fileListResponse = await fetch(`/data/ProfileList.json`, {
        signal,
      });
      const fileList = await fileListResponse.json();

      const ProfileDataPromise = fileList.map(async (filename) => {
        const profileResponse = await fetch(`/data/${filename}`, { signal });
        const data = await profileResponse.json();
        return data;
      });

      const AllProfileDataSetteled = await Promise.all(ProfileDataPromise);
      setProfiles(AllProfileDataSetteled);
      setFetching(false);
    } catch (error) {
      error.name === "AbortError"
        ? console.info("Data fetching has been aborted")
        : console.error(error);
    }
  };

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    fetchData();

    return () => {
      abortController.abort();
    };
  }, []);

  const shuffleProfiles = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const shuffledProfiles = shuffleProfiles(profiles);

  return (
    <div className="App">
      <Sidebar />
      <Search onSearch={handleSearch} />

      {/*  This is more clean way of writing conditional rendering */}
      {profiles.length < 1 && searching ? <NoResultFound /> : null}
      {profiles.length > 0 && !searching
        ? shuffledProfiles.map((profiles, index) => {
            return <Profile data={profiles} key={index} />;
          })
        : null}
      {searching &&
        profiles.map((profile, index) => {
          return <Profile data={profile} key={index} />;
        })}

      {/* {profiles.length === 0 && searching ? (
        <NoResultFound />
      ) : profiles.length === 0 && !searching ? (
        shuffledProfiles.map((profile, index) => {
          return <Profile data={profile} key={index} />;
        })
      ) : (
        profiles.map((profile, index) => {
          return <Profile data={profile} key={index} />;
        })
      )} */}
    </div>
  );
}

export default App;
