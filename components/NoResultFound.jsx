import React from "react";
import { FaSearch, FaSadTear } from "react-icons/fa";

export default function NoResultFound() {
  return (
    <div className="glass-card page-transition mx-auto my-12 max-w-md rounded-2xl p-8 text-center">
      {/* Animated Icon */}
      <div className="relative mx-auto mb-6 h-24 w-24">
        <div className="absolute inset-0 animate-ping rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20"></div>
        <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50">
          <FaSadTear className="text-5xl text-indigo-500" />
        </div>
      </div>

      {/* Message */}
      <h3 className="mb-2 text-xl font-bold text-slate-800 dark:text-white">
        No Results Found
      </h3>
      <p className="mb-6 text-slate-500 dark:text-slate-400">
        We couldn&apos;t find any developers matching your search.
        Try adjusting your filters or search terms.
      </p>

      {/* Suggestions */}
      <div className="rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 p-4 dark:from-indigo-900/30 dark:to-purple-900/30">
        <p className="mb-3 text-sm font-medium text-slate-700 dark:text-slate-300">
          💡 Try these tips:
        </p>
        <ul className="space-y-2 text-left text-sm text-slate-600 dark:text-slate-400">
          <li className="flex items-center gap-2">
            <span className="text-indigo-500">•</span>
            Check your spelling
          </li>
          <li className="flex items-center gap-2">
            <span className="text-purple-500">•</span>
            Try a different filter (Name, Location, Skill)
          </li>
          <li className="flex items-center gap-2">
            <span className="text-pink-500">•</span>
            Use broader search terms
          </li>
        </ul>
      </div>
    </div>
  );
}
