import React, { Fragment, useState, Suspense, lazy } from "react";
import datas from "../data/Profile.json";
const NoResultFound = lazy(() =>
  import("../components/NoResultFound/NoResultFound")
);
const Sidebar = lazy(() => import("../components/Sidebar/Sidebar"));
const Search = lazy(() => import("../components/Search/Search"));
const Profile = lazy(() => import("../components/Profile/Profile"));

export default function Home() {
  const [profiles, setProfiles] = useState([]);
  const [searching, setSearching] = useState(false);

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
    <Fragment>
      <Suspense fallback={<p style={{color:'white'}}>loading...</p>}>
        <Sidebar />
      </Suspense>
      <Suspense fallback={<p style={{color:'white'}}>loading...</p>}>
        <Search onSearch={handleSearch} />
      </Suspense>
      {profiles.length === 0 && searching ? (
        <Suspense fallback={<p style={{color:'white'}}>loading...</p>}>
          <NoResultFound />
        </Suspense>
      ) : profiles.length === 0 && !searching ? (
        shuffledProfiles.map((profile, index) => {
          return (
            <Suspense fallback={<p style={{color:'white'}}>loading...</p>}>
              <Profile data={profile} key={index} />
            </Suspense>
          );
        })
      ) : (
        profiles.map((profile, index) => {
          return (
            <Suspense fallback={<p style={{color:'white'}}>loading...</p>}>
              <Profile data={profile} key={index} />
            </Suspense>
          );
        })
      )}
    </Fragment>
  );
}
