import { useEffect, useState } from "react";
import Profile from "./components/Profile/Profile";
import Search from "./components/Search/Search";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [developers, setDevelopers] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../data/shyamtawli.json");
        const data = await response.json();
        setDevelopers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  console.log(developers);

  return (
    <div className="App">
      <Sidebar />
      <Search />
      <Profile />
    </div>
  );
}

export default App;
