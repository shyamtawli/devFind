import React, { useState, useEffect, useCallback } from 'react';
import Profile from './components/Profile/Profile';
import ProfileSkeleton from './components/ProfileSkeleton/ProfileSkeleton';
import Search from './components/Search/Search';
import Sidebar from './components/Sidebar/Sidebar';
import ErrorPage from './components/ErrorPage/ErrorPage';
import NoResultFound from './components/NoResultFound/NoResultFound';
import Pagination from './components/Pagination/Pagination';
import './App.css';
import './components/Pagination/Pagination.css';
import filenames from './ProfilesList.json';
import { useSearchParams } from 'react-router-dom';

function App() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search') || '';
  const [profiles, setProfiles] = useState([]);
  const [combinedData, setCombinedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [shuffledProfiles, setShuffledProfiles] = useState([]);
  const [loadingProfiles, setLoadingProfiles] = useState(false);
  const recordsPerPage = 20;

  const MemoizedProfile = React.memo(Profile);

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
      setLoadingProfiles(true);
      try {
        const promises = filenames.map((file) => fetchData(`/data/${file}`));
        const combinedData = await Promise.all(promises);
        setCombinedData(combinedData);
        setShuffledProfiles(shuffleProfiles(combinedData));
        setLoadingProfiles(false);
      } catch (error) {
        console.error('Error combining data:', error);
        setCombinedData([]);
        setShuffledProfiles([]);
        setLoadingProfiles(false);
      }
    };

    combineData(); // Fetch data on component mount
  }, [search]);

  const shuffleProfiles = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleSearch = useCallback(
    (searchValue) => {
      const lowercaseSearch = searchValue.toLowerCase().trim();
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

      setProfiles(results);
      setCurrentPage(1);
    },
    [combinedData],
  );

  useEffect(() => {
    if (search.length !== 0 && profiles.length === 0) {
      // Trigger search only when there is a search query and no profiles
      handleSearch(search);
    }
  }, [search, profiles, handleSearch]);

  const handleNextPage = () => {
    const totalPages = Math.ceil((search.length !== 0 ? profiles.length : combinedData.length) / recordsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [currentPage]);

  const getPaginatedData = () => {
    const data = search.length !== 0 ? profiles : shuffledProfiles;
    const startIndex = (currentPage - 1) * recordsPerPage;
    const endIndex = startIndex + recordsPerPage;
    return data.slice(startIndex, endIndex);
  };

  const renderProfiles = () => {
    if (loadingProfiles) {
      return (
        <>
          {Array(5)
            .fill('profile-skeleton')
            .map((item, index) => (
              <ProfileSkeleton key={index} />
            ))}
        </>
      );
    }

    if (profiles.length === 0 && search.length !== 0) {
      return <NoResultFound />;
    }
    const paginatedData = getPaginatedData();
    return paginatedData.map((currentRecord, index) => <MemoizedProfile data={currentRecord} key={index} />);
  };

  return (
    <div className="App">
      <Sidebar />
      <Search onSearch={handleSearch} />
      {currentUrl === '/' ? (
        <>
          {renderProfiles()}
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil((search.length !== 0 ? profiles.length : shuffledProfiles.length) / recordsPerPage)}
            onNextPage={handleNextPage}
            onPrevPage={handlePrevPage}
          />
        </>
      ) : (
        <ErrorPage />
      )}
    </div>
  );
}

export default App;
