import ErrorPage from "@/components/ErrorPage";
import NoResultFound from "@/components/NoResultFound";
import Pagination from "@/components/Pagination";
import Profile from "@/components/Profile";
import Search from "@/components/Search";
import Sidebar from "@/components/Sidebar";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import filenames from "../components/ProfileList.json";
import ProfileSkeleton from "@/components/ProfileSkeleton";
import Head from "next/head";

function App() {
  const profilesRef = useRef();
  const [profiles, setProfiles] = useState([]);
  const [searching, setSearching] = useState(false);
  const [combinedData, setCombinedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [shuffledProfiles, setShuffledProfiles] = useState([]);
  const [loadingProfiles, setLoadingProfiles] = useState(false);
  const recordsPerPage = 20;

  const router = useRouter();
  const currentUrl = router.pathname;

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
        setCombinedData(combinedData);
        setShuffledProfiles(shuffleProfiles(combinedData));
      } catch (error) {
        console.error("Error combining data:", error);
        setCombinedData([]);
        setShuffledProfiles([]);
      }
      setLoadingProfiles(false);
    };

    combineData();
  }, []);

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

  useEffect(() => {
    if (profilesRef.current) {
      profilesRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
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
    <>
      <Head>
        <title>devFind - Discover & Connect with Skilled Developers</title>
        <meta
          name="description"
          content="devFind is a platform for developers to showcase their skills and connect with potential collaborators. Find skilled developers by name, location, or skills."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Animated Background */}
      <div className="animated-bg"></div>

      <div className="App relative flex min-h-screen flex-col md:flex-row">
        {/* Sidebar - Sticky on Desktop */}
        <div className="md:sticky md:top-0 md:h-screen md:flex-shrink-0">
          <Sidebar />
        </div>

        {/* Main Content - Scrollable */}
        <div
          className="flex-1 overflow-y-auto px-4 py-4 md:h-screen md:px-6 md:py-6 lg:px-8"
          ref={profilesRef}
        >
          <div className="mx-auto max-w-4xl">
            {/* Search Section */}
            <Search onSearch={handleSearch} />

            {/* Results Count */}
            {!loadingProfiles && (
              <div className="mb-4 flex items-center gap-2 md:mb-6">
                <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500"></div>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 sm:text-xs md:text-sm">
                  Showing{" "}
                  <span className="font-semibold text-slate-700 dark:text-slate-200">
                    {getPaginatedData().length}
                  </span>{" "}
                  of{" "}
                  <span className="font-semibold gradient-text">
                    {searching ? profiles.length : shuffledProfiles.length}
                  </span>{" "}
                  developers
                </p>
              </div>
            )}

            {/* Profile Cards */}
            {profiles.length === 0 && searching ? (
              <NoResultFound />
            ) : (
              renderProfiles()
            )}

            {/* Pagination */}
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
        </div>
      </div>
    </>
  ) : (
    <ErrorPage />
  );
}

export default App;
