import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import AuthForm from "./AuthForm";

function Sidebar() {
  const [theme, setTheme] = useState("dark");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAuthForm, setShowAuthForm] = useState(false);
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Retrieve users from local storage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);

    // Retrieve authenticated user from local storage
    const storedUser = JSON.parse(localStorage.getItem("authenticatedUser"));
    if (storedUser) {
      setIsAuthenticated(true);
      setUser(storedUser);
    }
  }, []);

  function toggleTheme() {
    const htmlElement = document.documentElement;
    const isDarkModeEnabled = htmlElement.classList.contains("dark");

    if (isDarkModeEnabled) {
      htmlElement.classList.remove("dark");
      setTheme("light");
    } else {
      htmlElement.classList.add("dark");
      setTheme("dark");
    }
  }

  const handleLogin = (username, password) => {
    // Replace with actual authentication logic
    const foundUser = users.find((u) => u.username === username && u.password === password);
    if (foundUser) {
      setIsAuthenticated(true);
      setShowAuthForm(false);
      setUser(foundUser);
      localStorage.setItem("authenticatedUser", JSON.stringify(foundUser));
      return true;
    } else {
      return false;
    }
  };

  const handleRegister = (username, email, password) => {
    // Check if the user already exists
    const existingUser = users.find((u) => u.username === username);
    if (existingUser) {
      return false;
    }
    // Save the new user
    const newUser = { username, email, password };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setIsAuthenticated(true);
    setShowAuthForm(false);
    setUser(newUser);
    localStorage.setItem("authenticatedUser", JSON.stringify(newUser));
    return true;
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("authenticatedUser");
  };

  return (
    <div className="my-7 w-full border-r-2 border-borderSecondary px-7 dark:border-borderColor md:h-[90vh] md:w-[23%] md:px-2 lg:px-7">
      <div className="mb-2 flex h-12 items-center gap-2.5">
        <div className="text-secondaryColor dark:text-white">
          <FontAwesomeIcon icon={faCode} size="2xl" />
        </div>
        <a href="https://dev-find.vercel.app/">
          <div className="flex text-[2rem] font-bold md:text-[1rem] lg:text-[2rem]">
            <p className="text-secondaryColor dark:text-white">dev</p>
            <p className="text-textSecondary">Find</p>
          </div>
        </a>
        <div className="ml-auto">
          <button
            type="button"
            className="h-10 w-10 cursor-pointer rounded-lg border-2 border-borderSecondary bg-white transition-all hover:border-textSecondary hover:text-textSecondary dark:border-borderColor dark:bg-textPrimary dark:text-white dark:hover:border-textSecondary dark:hover:text-textSecondary"
            onClick={toggleTheme}
          >
            {theme === "light" ? (
              <FontAwesomeIcon icon={faMoon} fontSize="1rem" />
            ) : (
              <FontAwesomeIcon icon={faSun} fontSize="1rem" />
            )}
          </button>
        </div>
      </div>
      <div className="text-secondaryColor dark:text-white">
        Discover and Connect with Skilled Developers.
      </div>
      {isAuthenticated && (
        <div className="pt-5">
          <p className="text-lg font-bold text-gray-800 dark:text-white">
            Welcome, {user.username}
          </p>
          <a
            href="https://github.com/shyamtawli/devFind#how-to-add-your-profile-"
            target="_blank"
            rel="noreferrer"
          >
            <button className="inline-block cursor-pointer rounded-lg border-2 border-textSecondary bg-textSecondary px-[15px] py-1.5 text-center text-sm transition-all duration-500 hover:bg-transparent hover:text-textSecondary dark:text-white">
              Add your Profile
            </button>
          </a>
          <button
            className="inline-block cursor-pointer rounded-lg border-2 border-textSecondary bg-textSecondary px-[15px] py-1.5 text-center text-sm transition-all duration-500 hover:bg-transparent hover:text-textSecondary dark:text-white mt-4"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}
      {!isAuthenticated && (
        <div className="pt-5">
          <button
            className="inline-block cursor-pointer rounded-lg border-2 border-textSecondary bg-textSecondary px-[15px] py-1.5 text-center text-sm transition-all duration-500 hover:bg-transparent hover:text-textSecondary dark:text-white"
            onClick={() => setShowAuthForm(true)}
          >
            Sign Up / Login
          </button>
        </div>
      )}
      {showAuthForm && (
        <AuthForm
          onRegister={handleRegister}
          onLogin={handleLogin}
          onClose={() => setShowAuthForm(false)}
        />
      )}
    </div>
  );
}

export default Sidebar;