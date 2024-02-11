import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  const [theme, setTheme] = useState('');

  useEffect(() => {
    // Check the initial theme mode when the component mounts
    const htmlElement = document.documentElement;
    const isDarkModeEnabled = htmlElement.classList.contains('dark');
    // Set the initial theme mode in the state
    setTheme(isDarkModeEnabled ? 'dark' : 'light');
  }, []);

  function toggleTheme() {
    const htmlElement = document.documentElement;
    const isDarkModeEnabled = htmlElement.classList.contains('dark');

    if (isDarkModeEnabled) {
      htmlElement.classList.remove('dark');
      htmlElement.classList.add('light');
      setTheme('light');
      htmlElement.style.setProperty('--sidebar-background-color', 'rgb(70, 70, 70)');
      htmlElement.style.setProperty('--track-color', 'rgb(200, 200, 200)');
    } else {
      htmlElement.classList.remove('light');
      htmlElement.classList.add('dark');
      setTheme('dark');
      htmlElement.style.setProperty('--sidebar-background-color', 'rgb(80, 80, 150)');
      htmlElement.style.setProperty('--track-color', 'rgb(120, 120, 180)');
    }
  }

  return (
    <div className="sidebar-content my-7 w-full border-r-2 border-borderSecondary px-7 font-spaceMono dark:border-borderColor md:h-[90vh] md:w-[23%]">
      <div className="mb-2 flex h-12 items-center gap-2.5">
        <div className="text-secondaryColor dark:text-white">
          <FontAwesomeIcon icon={faCode} size="2xl" />
        </div>
        <a href="https://dev-find.vercel.app/">
          <div className="flex text-[2rem] font-bold">
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
            {theme === 'light' ? (
              <FontAwesomeIcon icon={faMoon} fontSize="1rem" />
            ) : (
              <FontAwesomeIcon icon={faSun} fontSize="1rem" />
            )}
          </button>
        </div>
      </div>
      <div className="text-secondaryColor dark:text-white">Discover and Connect with Skilled Developers.</div>
      <div className="pt-5">
        <a href="https://github.com/shyamtawli/devFind#how-to-add-your-profile-" target="_blank" rel="noreferrer">
          <button className="inline-block cursor-pointer rounded-lg border-2 border-textSecondary bg-textSecondary px-[15px] py-1.5 text-center font-poppoins text-sm transition-all duration-500 hover:bg-transparent hover:text-textSecondary dark:text-white">
            Add your profile
          </button>
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
