import Profile from "./components/Profile/Profile";
import Search from "./components/Search/Search";
import Sidebar from "./components/Sidebar/Sidebar";
import datas from "./data/Profile.json";

function App() {
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Shuffle the profiles array randomly
  const shuffledProfiles = shuffleArray(datas);
  return (
    <div className="App">
      <Sidebar />
      <Search />
      {shuffledProfiles.map((profile) => {
        return <Profile data={profile} />;
      })}
    </div>
  );
}

export default App;
