import { useState, useEffect, useCallback } from "react";
import Profile from "./components/Profile/Profile";
import Search from "./components/Search/Search";
import Sidebar from "./components/Sidebar/Sidebar";
import NoResultFound from "./components/NoResultFound/NoResultFound";
import "./App.css";
import filenames from "./ProfilesList.json";

function App() {
	const [profiles, setProfiles] = useState([]);
	const [searching, setSearching] = useState(false);
	const [defaultSearchQuery, setDefaultSearchQuery] = useState('');
	const [combinedData, setCombinedData] = useState([]);

	const getSearchQuery = useCallback(() => {
		const search = window.location.search;
		const searchParams = new URLSearchParams(search);
		return searchParams.get("search-query") || '';
	}, []);

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
				const promises = filenames.map((file) =>
					fetchData(`/data/${file}`)
				);
				const combinedData = await Promise.all(promises);

				const searchQuery = getSearchQuery();
				
				setDefaultSearchQuery(searchQuery);
				handleSearch(searchQuery, combinedData);
				setCombinedData(combinedData);
			} catch (error) {
				console.error("Error combining data:", error);
				setCombinedData([]);
			}
		};

		combineData();
	}, []);

	const handleSearch = (searchValue, existingResults = null) => {
    // if the searchvalue is empty we dont need to search anything
		if (searchValue.trim() == "") {
      // to avoid setting to empty bcz initally the data will be empty. 
			if (combinedData.length != 0) {
				setProfiles(combinedData);
				setSearching(true);
			}
			return;
		}
		const lowercaseSearch = searchValue.toLowerCase();
		const results = [];
		const existingData = existingResults ? existingResults : combinedData;

		for (const object of existingData) {
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
		setProfiles(results);
		setSearching(true);
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
			<Search onSearch={handleSearch} defaultSearchQuery={defaultSearchQuery} />
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
