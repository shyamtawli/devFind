/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from 'react';
import Profile from './components/Profile/Profile';
import Search from './components/Search/Search';
import Sidebar from './components/Sidebar/Sidebar';
import ErrorPage from './components/ErrorPage/ErrorPage';
import NoResultFound from './components/NoResultFound/NoResultFound';
import './App.css';
import './components/Pagination/Pagination.css';
import filenames from './ProfilesList.json';

function App() {
  const [profiles, setProfiles] = useState([]);
  const [searching, setSearching] = useState(false);
  const [combinedData, setCombinedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 20;

  const currentUrl = window.location.pathname;

  useEffect(() => {
    const fetchData = async (file) => {
      try {
        const response = await fetch(file);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching data:', error);
        return [];
      }
    };

    const combineData = async () => {
      try {
        const promises = filenames.map((file) => fetchData(`/data/${file}`));
        const combinedData = await Promise.all(promises);
        setCombinedData(combinedData);
      } catch (error) {
        console.error('Error combining data:', error);
        setCombinedData([]);
      }
    };

    combineData();
  }, []);

  const handleSearch = (searchValue) => {
    const lowercaseSearch = searchValue.toLowerCase();
    const results = combinedData.filter((object) => {
      const lowercaseName = object.name.toLowerCase();
      const lowercaseLocation = object.location.toLowerCase();
      const matchingSkills = object.skills.filter((skill) => skill.toLowerCase().includes(lowercaseSearch));
      return (
        matchingSkills.length > 0 ||
        lowercaseName.includes(lowercaseSearch) ||
        lowercaseLocation.includes(lowercaseSearch)
      );
    });

    setSearching(true);
    setProfiles(results);
    setCurrentPage(1);
  };
  const shuffleProfiles = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const shuffledProfiles = shuffleProfiles(combinedData);
  const handleNextPage = () => {
    const totalPages = Math.ceil((searching ? profiles.length : combinedData.length) / recordsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getPaginatedData = () => {
    const data = searching ? profiles : shuffledProfiles;
    const startIndex = (currentPage - 1) * recordsPerPage;
    const endIndex = startIndex + recordsPerPage;
    return data.slice(startIndex, endIndex);
  };

  const renderProfiles = () => {
    const paginatedData = getPaginatedData();
    return paginatedData.map((currentRecord, index) => <Profile data={currentRecord} key={index} />);
  };

  return (
    <div className="App">
      <Sidebar />
      <Search onSearch={handleSearch} />
      {currentUrl === '/' ? (
        <>
          {profiles.length === 0 && searching ? <NoResultFound /> : renderProfiles()}
          <div className="pagination">
            <button onClick={handlePrevPage} disabled={currentPage === 1} className="pagination-button">
              <span href="#" className="pagination-text">
                Previous
              </span>
            </button>
            <button
              onClick={handleNextPage}
              type="submit"
              disabled={
                currentPage === Math.ceil((searching ? profiles.length : shuffledProfiles.length) / recordsPerPage)
              }
              className="pagination-button "
            >
              <span href="#" className="pagination-text">
                Next
              </span>
            </button>
          </div>
        </>
      ) : (
        <ErrorPage />
      )}
    </div>
  );
}

export default App;
