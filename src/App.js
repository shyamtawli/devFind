import Profile from "./components/Profile/Profile";
import Search from "./components/Search/Search";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Search />
      <Profile />
    </div>
  );
}

export default App;
