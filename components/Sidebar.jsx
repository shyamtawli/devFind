import React from "react";
import useTheme from "./hooks/useTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faMoon, faSun, faUsers, faCodeBranch } from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  const [mount, theme, toggleTheme] = useTheme();
  return (
    <div className="my-7 w-full border-r-2 border-borderSecondary px-7 dark:border-borderColor md:h-[90vh] md:w-[23%] md:px-2 lg:px-7">
      <div className="mb-2 flex h-12 items-center gap-2.5">
        <div className="text-secondaryColor dark:text-white">
          <FontAwesomeIcon icon={faCode} size="2xl" />
        </div>
        <a href="https://dev-find.vercel.app/">
          <div className="flex text-[2rem] font-bold md:text-[1rem] lg:text-[2rem]">
            <p className="text-indigo-500">dev</p>
            <p className="text-textSecondary">Find</p>
          </div>
        </a>
      </div>
      <div className="text-secondaryColor dark:text-white text-sm">
        Discover and Connect with Skilled Developers.
      </div>
      <div className="flex gap-4 text-xs text-gray-500 dark:text-gray-400 pt-2">
        <span><FontAwesomeIcon icon={faUsers} /> 500+ devs</span>
        <span><FontAwesomeIcon icon={faCodeBranch} /> Open Source</span>
      </div>
      <div className="pt-5">
        <a href="https://github.com/shyamtawli/devFind#how-to-add-your-profile-" target="_blank" rel="noreferrer">
          <button className="w-full cursor-pointer rounded-lg border-2 border-textSecondary bg-textSecondary px-[15px] py-2 text-center text-sm transition-all duration-300 hover:bg-transparent hover:text-textSecondary dark:text-white">
            + Add your profile
          </button>
        </a>
      </div>
      <div className="pt-4">
        <button
          type="button"
          className="flex items-center gap-2 h-10 px-3 cursor-pointer rounded-lg border-2 border-borderSecondary bg-white transition-all hover:border-textSecondary dark:border-borderColor dark:bg-textPrimary dark:text-white"
          onClick={() => toggleTheme(theme, true)}
        >
          {mount && (
            <span className="flex items-center gap-2">
              <FontAwesomeIcon icon={theme === "dark" ? faMoon : faSun} fontSize="1rem" />
              <span className="text-xs">{theme === "dark" ? "Dark" : "Light"}</span>
            </span>
          )}
        </button>
      </div>
    </div>
  );
}

export default Sidebar;