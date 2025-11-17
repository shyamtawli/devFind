import ErrorPage from "@/components/ErrorPage";
import NoResultFound from "@/components/NoResultFound";
import Pagination from "@/components/Pagination";
import Profile from "@/components/Profile";
import Search from "@/components/Search";
import Sidebar from "@/components/Sidebar";
import AddProfileModal from "@/components/AddProfileModal";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import filenames from "../components/ProfileList.json";
import ProfileSkeleton from "@/components/ProfileSkeleton";

function App() {
  const profilesRef = useRef();
  const [profiles, setProfiles] = useState([]);
  const [searching, setSearching] = useState(false);
  const [combinedData, setCombinedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [shuffledProfiles, setShuffledProfiles] = useState([]);
  const [loadingProfiles, setLoadingProfiles] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const recordsPerPage = 20;

  const router = useRouter();
  const currentUrl = router.pathname;

  // Load data from localStorage and combine with API data
  useEffect(() => {
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

    const combineData = async () => {
      setLoadingProfiles(true);
      try {
        const promises = filenames.map((file) => fetchData(`/data/${file}`));
        const combinedData = await Promise.all(promises).then((results) =>
          results.flat()
        );

        // Load custom profiles from localStorage
        const customProfiles = loadCustomProfiles();
        const allProfiles = [...combinedData, ...customProfiles];

        setCombinedData(allProfiles);
        setShuffledProfiles(shuffleProfiles(allProfiles));
      } catch (error) {
        console.error("Error combining data:", error);
        setCombinedData([]);
        setShuffledProfiles([]);
      }
      setLoadingProfiles(false);
    };

    combineData();
  }, []);

  const loadCustomProfiles = () => {
    if (typeof window === "undefined") return [];
    try {
      const customProfiles = localStorage.getItem("devFindCustomProfiles");
      return customProfiles ? JSON.parse(customProfiles) : [];
    } catch (error) {
      console.error("Error loading custom profiles from localStorage:", error);
      return [];
    }
  };

  const saveCustomProfiles = (profiles) => {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem("devFindCustomProfiles", JSON.stringify(profiles));
    } catch (error) {
      if (error && (error.name === 'QuotaExceededError' || error.code === 22)) {
        console.error("localStorage quota exceeded. Cannot save more profiles.");
        // Optionally notify user, e.g.:
        // alert("You have reached the maximum number of custom profiles you can save.");
      } else {
        console.error("Error saving custom profiles to localStorage:", error);
      }
    }
  };

  const shuffleProfiles = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleSearch = ({ value, criteria }) => {
    const normalizeString = (str) =>
      str
        .toLowerCase()
        .replace(/\s*,\s*/g, " ")
        .replace(/\s+/g, " ")
        .trim();

    const normalizedValue = normalizeString(value);

    const filteredResults = combinedData.filter((user) => {
      if (criteria === "name") {
        return normalizeString(user.name).includes(normalizedValue);
      } else if (criteria === "location") {
        return normalizeString(user.location).includes(normalizedValue);
      } else if (criteria === "skill") {
        return user.skills.some((skill) =>
          normalizeString(skill).includes(normalizedValue)
        );
      }
      return false;
    });

    setProfiles(filteredResults);
    setCurrentPage(1);
    setSearching(true);
  };

  const handleNextPage = () => {
    const totalPages = Math.ceil(
      (searching ? profiles.length : shuffledProfiles.length) / recordsPerPage
    );
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleAddProfile = (profileData) => {
    // Get existing custom profiles
    const customProfiles = loadCustomProfiles();

    // Add new profile
    const newProfile = {
      ...profileData,
      id: `custom_${Date.now()}`, // Unique ID for custom profiles
    };
    customProfiles.push(newProfile);

    // Save to localStorage
    saveCustomProfiles(customProfiles);

    // Update combined data with new profile
    const updatedCombinedData = [...combinedData, newProfile];
    setCombinedData(updatedCombinedData);
    setShuffledProfiles(shuffleProfiles(updatedCombinedData));

    // Close modal
    setIsModalOpen(false);

    // Show success message (optional - you can add a toast notification here)
    alert("Profile added successfully!");
  };

  useEffect(() => {
    profilesRef.current?.scrollTo({
      top: 0,
      behavior: "smooth",
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
            .fill("profile-skeleton")
            .map((item, index) => (
              <ProfileSkeleton key={index} />
            ))}
        </>
      );
    }
    const paginatedData = getPaginatedData();
    return paginatedData.map((currentRecord, index) => (
      <Profile data={currentRecord} key={index} />
    ));
  };

  return currentUrl === "/" ? (
    <div className="App flex flex-col bg-primaryColor dark:bg-secondaryColor md:flex-row">
      <Sidebar onAddProfileClick={() => setIsModalOpen(true)} />
      <div
        className="w-full pl-5 pr-4 md:h-screen md:w-[77%] md:overflow-y-scroll md:py-7"
        ref={profilesRef}
      >
        <Search onSearch={handleSearch} />
        {profiles.length === 0 && searching ? (
          <NoResultFound />
        ) : (
          renderProfiles()
        )}
        {(searching ? profiles.length : shuffledProfiles.length) > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(
              (searching ? profiles.length : shuffledProfiles.length) /
                recordsPerPage
            )}
            onNextPage={handleNextPage}
            onPrevPage={handlePrevPage}
          />
        )}
      </div>
      <AddProfileModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddProfile}
      />
    </div>
  ) : (
    <ErrorPage />
  );
}

export default App;
