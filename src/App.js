import { lazy, useState ,Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Home = lazy(() => import("./Pages/Home"));
const TestProfile = lazy(() => import("./Pages/TestProfile"));

function App() {
  // const [profiles, setProfiles] = useState([]);
  // const [searching, setSearching] = useState(false);

  // const handleSearch = (searchValue) => {
  //   const lowercaseSearch = searchValue.toLowerCase();
  //   const results = [];

  //   for (const object of datas) {
  //     const lowercaseName = object.name.toLowerCase();
  //     const lowercaseLocation = object.location.toLowerCase();
  //     const matchingSkills = object.skills.filter((skill) =>
  //       skill.toLowerCase().includes(lowercaseSearch)
  //     );
  //     if (
  //       matchingSkills.length > 0 ||
  //       lowercaseName.includes(lowercaseSearch) ||
  //       lowercaseLocation.includes(lowercaseSearch)
  //     ) {
  //       results.push(object);
  //     }
  //   }

  //   setSearching(true);
  //   setProfiles(results);
  // };

  // const shuffleProfiles = (array) => {
  //   for (let i = array.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [array[i], array[j]] = [array[j], array[i]];
  //   }
  //   return array;
  // };

  // const shuffledProfiles = shuffleProfiles(datas);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            element={
              <Suspense fallback={<p style={{color:'white'}}>loading...</p>}>
                <Home />
              </Suspense>
            }
            path="/"
          />
          <Route
            element={
              <Suspense fallback={<p style={{color:'white'}}>loading...</p>}>
                <TestProfile />
              </Suspense>
            }
            path="/dev/testprofile"
          />
        </Routes>
      </Router>

      {/* <Sidebar /> */}
      {/* <Search onSearch={handleSearch} />
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
      )} */}
    </div>
  );
}

export default App;
