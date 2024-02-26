import { useState, useEffect, useRef } from 'react';
import Profile from './components/Profile/Profile';
import ProfileSkeleton from './components/ProfileSkeleton/ProfileSkeleton';
import Search from './components/Search/Search';
import Sidebar from './components/Sidebar/Sidebar';
import ErrorPage from './components/ErrorPage/ErrorPage';
import NoResultFound from './components/NoResultFound/NoResultFound';
import Pagination from './components/Pagination/Pagination';
import './App.css';

function App() {
  const profilesRef = useRef();
  const [profiles, setProfiles] = useState([]);
  const [searching, setSearching] = useState(false);
  const [combinedData, setCombinedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [shuffledProfiles, setShuffledProfiles] = useState([]);
  const [loadingProfiles, setLoadingProfiles] = useState(false);
  const recordsPerPage = 20;

  const currentUrl = window.location.pathname;

  const [files, setFiles] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Dynamically import the JSON files from the 'data' directory
        const filesContext = require.context('./data', false, /\.json$/);
        const files = await Promise.all(
          filesContext.keys().map(async (key) => {
            const fileName = key.replace(/^.*[\\/]/, ''); // Extract file name from path
            const fileContent = await filesContext(key);
            return { name: fileName, content: fileContent };
          })
        );
        setFiles(files);
        console.log(files);
        const combinedData=[];
        for (let i = 0; i < files.length; i++) {
          const content = files[i].content;
          combinedData.push(content);
        }

        setCombinedData(combinedData);
        setShuffledProfiles(shuffleProfiles(combinedData));
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };
    fetchData();
  }, []);


const shuffleProfiles = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const handleSearch = (searchValue) => {
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

  setSearching(true);
  setProfiles(results);
  setCurrentPage(1);
};

const handleNextPage = () => {
  const totalPages = Math.ceil((searching ? profiles.length : combinedData.length) / recordsPerPage);
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
  profilesRef.current.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}, [currentPage]);

const getPaginatedData = () => {
  const data = searching ? profiles : shuffledProfiles;
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
  const paginatedData = getPaginatedData();
  return paginatedData.map((currentRecord, index) => <Profile data={currentRecord} key={index} />);
};

return currentUrl === '/' ? (
  <div className="App flex flex-col bg-primaryColor dark:bg-secondaryColor md:flex-row">
    <Sidebar />
    <div className="w-full pl-5 pr-4 md:h-screen md:w-[77%] md:overflow-y-scroll md:py-7" ref={profilesRef}>
      <Search onSearch={handleSearch} />
      {profiles.length === 0 && searching ? <NoResultFound /> : renderProfiles()}
      {profiles.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil((searching ? profiles.length : shuffledProfiles.length) / recordsPerPage)}
          onNextPage={handleNextPage}
          onPrevPage={handlePrevPage}
        />
      )}
    </div>
  </div>
) : (
  <ErrorPage />
);
}

export default App;
