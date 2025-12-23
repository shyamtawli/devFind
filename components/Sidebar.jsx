import React from "react";
import useTheme from "./hooks/useTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FaGithub } from "react-icons/fa";

function Sidebar() {
  const [mount, theme, toggleTheme] = useTheme();

  return (
    <div className="sidebar-modern flex flex-col gap-3 px-4 py-4 md:h-screen md:w-[220px] lg:w-[260px] md:gap-4 md:py-6">
      {/* Logo Section */}
      <div className="flex items-center justify-between">
        <a href="https://dev-find.vercel.app/" className="flex items-center gap-2 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 shadow-sm transition-transform group-hover:scale-105">
            <FontAwesomeIcon icon={faCode} className="text-xs text-white" />
          </div>
          <div className="flex text-lg font-bold tracking-tight md:text-xl">
            <span className="text-slate-800 dark:text-white">dev</span>
            <span className="gradient-text">Find</span>
          </div>
        </a>

        {/* Theme Toggle - Simple Design */}
        <button
          type="button"
          className="relative flex h-8 w-14 items-center rounded-full bg-slate-200 p-1 transition-all dark:bg-slate-700"
          onClick={() => toggleTheme(theme, true)}
          aria-label="Toggle theme"
        >
          <div className={`flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm transition-all duration-300 ${theme === 'dark' ? 'translate-x-6' : 'translate-x-0'}`}>
            {mount && (
              <FontAwesomeIcon
                icon={theme === "dark" ? faMoon : faSun}
                className="text-[10px] text-indigo-500 dark:text-indigo-400"
              />
            )}
          </div>
        </button>
      </div>

      {/* Tagline */}
      <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400 md:text-sm">
        Discover and connect with talented developers from around the world.
      </p>

      {/* CTA Button - Simple without heart */}
      <a
        href="https://github.com/shyamtawli/devFind#how-to-add-your-profile-"
        target="_blank"
        rel="noreferrer"
        className="block"
      >
        <button className="w-full rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2.5 text-xs font-medium text-white shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 md:text-sm">
          Add Your Profile
        </button>
      </a>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-slate-700"></div>

      {/* GitHub Link */}
      <a
        href="https://github.com/shyamtawli/devFind"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 rounded-lg p-2 transition-all hover:bg-slate-100 dark:hover:bg-slate-800"
      >
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900">
          <FaGithub className="text-sm" />
        </div>
        <div>
          <p className="text-xs font-medium text-slate-700 dark:text-slate-200">Star on GitHub ⭐</p>
        </div>
      </a>

      {/* Footer - Desktop only */}
      <div className="mt-auto hidden md:block">
        <p className="text-center text-[10px] text-slate-400 dark:text-slate-500">
          Made with <span className="text-rose-500">♥</span> by{" "}
          <a
            href="https://github.com/shyamtawli"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-indigo-500 hover:underline"
          >
            Shyam Tawli
          </a>
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
