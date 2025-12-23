import React from "react";
import { FaHome, FaExclamationTriangle } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 p-4 dark:from-slate-900 dark:via-indigo-950 dark:to-purple-950">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-80 w-80 animate-pulse rounded-full bg-gradient-to-r from-indigo-300/30 to-purple-300/30 blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 h-80 w-80 animate-pulse rounded-full bg-gradient-to-r from-purple-300/30 to-pink-300/30 blur-3xl" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Error Card */}
      <div className="glass-card relative z-10 max-w-lg rounded-3xl p-8 text-center md:p-12">
        {/* 404 Graphic */}
        <div className="relative mb-8">
          <div className="text-9xl font-black tracking-tighter">
            <span className="gradient-text">4</span>
            <span className="relative inline-block">
              <div className="absolute inset-0 flex items-center justify-center">
                <FaExclamationTriangle className="animate-bounce text-6xl text-amber-500" />
              </div>
              <span className="invisible">0</span>
            </span>
            <span className="gradient-text">4</span>
          </div>
        </div>

        {/* Message */}
        <h1 className="mb-4 text-2xl font-bold text-slate-800 dark:text-white md:text-3xl">
          Page Not Found
        </h1>
        <p className="mb-8 text-slate-600 dark:text-slate-400">
          Oops! The page you&apos;re looking for seems to have wandered off into the digital void.
          Don&apos;t worry, it happens to the best of us!
        </p>

        {/* CTA Button */}
        <a href="/" className="gradient-btn inline-flex items-center gap-2">
          <FaHome />
          Back to Home
        </a>

        {/* Fun Message */}
        <p className="mt-8 text-sm text-slate-400 dark:text-slate-500">
          Pro tip: Check the URL or use the navigation to find what you need 🔍
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
