import React from "react";
import useTheme from "./hooks/useTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function Sidebar({ topProfiles = [] }) {
  const [mount, theme, toggleTheme] = useTheme();

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
            onClick={() => toggleTheme(theme, true)}
          >
            {mount && (
              <FontAwesomeIcon icon={theme === "dark" ? faMoon : faSun} fontSize="1rem" />
            )}
          </button>
        </div>
      </div>
      <div className="text-secondaryColor dark:text-white">
        Discover and Connect with Skilled Developers.
      </div>
      <div className="pt-5">
        <a
          href="https://github.com/shyamtawli/devFind#how-to-add-your-profile-"
          target="_blank"
          rel="noreferrer"
        >
          <button className="inline-block cursor-pointer rounded-lg border-2 border-textSecondary bg-textSecondary px-[15px] py-1.5 text-center text-sm transition-all duration-500 hover:bg-transparent hover:text-textSecondary dark:text-white">
            Add your profile
          </button>
        </a>
      </div>
      {/* Top ranking section (client-side likes) */}
      {topProfiles && topProfiles.length > 0 && (
        <div className="mt-6">
          <h4 className="mb-2 text-sm font-semibold dark:text-white">Top Contributors</h4>
          <ul className="space-y-2">
            {topProfiles.map((p, idx) => (
              <li key={p.id || p.name} className="flex items-center gap-3">
                <div className="h-8 w-8 flex-shrink-0 overflow-hidden rounded-full">
                  <img src={p.avatar} alt={p.name} className="h-full w-full object-cover" />
                </div>
                <div className="flex-1 text-sm">
                  <div className="font-medium dark:text-white">{p.name}</div>
                  <div className="text-xs text-textSecondary">{p._likes || 0} likes</div>
                </div>
                <div className="text-sm text-textSecondary">#{idx + 1}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
