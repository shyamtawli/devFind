import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  const [theme, setTheme] = useState();

  function toggleTheme() {
    const htmlElement = document.documentElement;
    if (localStorage.getItem('theme') === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  }

  useEffect(() => {
    let storedTheme = localStorage.getItem('theme');
    if (storedTheme === null) {
      localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      setTheme(storedTheme);
    }
    toggleTheme();
  }, []);

  return (
    <div className="my-7 w-full border-r-2 border-borderSecondary px-7 font-spaceMono dark:border-borderColor md:h-[90vh] md:w-[23%]">
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
