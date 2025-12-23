import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter, FaLocationDot, FaArrowUpRightFromSquare } from "react-icons/fa6";

function Profile({ data }) {
  return <Card data={data} />;
}

function Card({ data }) {
  const [imageSrc, setImageSrc] = useState(data.avatar);

  useEffect(() => {
    setImageSrc(data.avatar);
  }, [data]);

  const skills = data.skills || [];

  return (
    <div className="glass-card card-stagger mb-3 rounded-xl p-3 transition-all duration-300 md:mb-4 md:rounded-2xl md:p-4">
      <div className="relative flex gap-3">
        {/* Avatar */}
        <div className="h-12 w-12 flex-shrink-0 sm:h-14 sm:w-14 md:h-16 md:w-16">
          <img
            src={imageSrc}
            alt={`${data.name}'s avatar`}
            onError={() => setImageSrc('/defaultAvatar.webp')}
            className="h-full w-full rounded-full object-cover ring-2 ring-white/50 dark:ring-slate-700/50"
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Name and Location */}
          <div className="flex flex-col gap-0.5">
            <div className="flex items-start justify-between gap-2">
              <h3>
                <a
                  className="gradient-text text-sm font-bold transition-all hover:opacity-80 sm:text-base md:text-lg"
                  href={data.portfolio}
                  target="_blank"
                  rel="noreferrer"
                >
                  {data.name}
                </a>
              </h3>
              {/* View Profile - Desktop/Tablet - BIGGER SIZE */}
              <a
                href={data.portfolio}
                className={`hidden sm:flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 px-3 py-1.5 text-xs font-medium text-white shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 md:px-4 md:py-2 md:text-sm ${!data.portfolio && "cursor-not-allowed opacity-50"
                  }`}
                target="_blank"
                rel="noreferrer"
              >
                View Profile
                <FaArrowUpRightFromSquare className="text-[10px] md:text-xs" />
              </a>
            </div>
            <p className="flex items-center gap-1 text-[10px] text-slate-500 dark:text-slate-400 sm:text-xs">
              <FaLocationDot className="text-rose-400 flex-shrink-0 text-[8px]" />
              <span className="truncate">{data.location}</span>
            </p>
          </div>

          {/* Skills - Show ALL skills in 2-3 lines */}
          <div className="mt-2 flex flex-wrap gap-1">
            {skills.map((skill, index) => (
              <span
                className="inline-flex items-center rounded-full bg-indigo-50 px-1.5 py-0.5 text-[9px] font-medium text-indigo-600 ring-1 ring-inset ring-indigo-500/20 dark:bg-indigo-900/40 dark:text-indigo-300 dark:ring-indigo-400/30 sm:px-2 sm:text-[10px]"
                key={index}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bio - Show FULL description */}
      <div className="mt-2 border-t border-slate-200/50 pt-2 dark:border-slate-700/50 sm:mt-3 sm:pt-3">
        <p className="text-[10px] leading-relaxed text-slate-600 dark:text-slate-300 sm:text-xs md:text-sm">
          {data.bio}
        </p>

        {/* Social Links */}
        <div className="mt-2 flex items-center gap-1.5 sm:gap-2">
          {data.social.GitHub && (
            <a
              href={data.social.GitHub}
              target="_blank"
              rel="noreferrer"
              className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-50 text-indigo-500 ring-1 ring-indigo-500/20 transition-all hover:scale-110 dark:bg-indigo-900/40 dark:text-indigo-400 sm:h-7 sm:w-7 md:h-8 md:w-8"
              aria-label="GitHub Profile"
            >
              <FaGithub className="text-xs sm:text-sm md:text-base" />
            </a>
          )}

          {data.social.Twitter && (
            <a
              href={data.social.Twitter}
              target="_blank"
              rel="noreferrer"
              className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-50 text-indigo-500 ring-1 ring-indigo-500/20 transition-all hover:scale-110 dark:bg-indigo-900/40 dark:text-indigo-400 sm:h-7 sm:w-7 md:h-8 md:w-8"
              aria-label="Twitter Profile"
            >
              <FaXTwitter className="text-xs sm:text-sm md:text-base" />
            </a>
          )}

          {data.social.LinkedIn && (
            <a
              href={data.social.LinkedIn}
              target="_blank"
              rel="noreferrer"
              className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-50 text-indigo-500 ring-1 ring-indigo-500/20 transition-all hover:scale-110 dark:bg-indigo-900/40 dark:text-indigo-400 sm:h-7 sm:w-7 md:h-8 md:w-8"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="text-xs sm:text-sm md:text-base" />
            </a>
          )}

          {/* Mobile View Profile Button */}
          <a
            href={data.portfolio}
            className={`ml-auto rounded-md bg-gradient-to-r from-indigo-500 to-purple-600 px-2.5 py-1.5 text-[10px] font-medium text-white shadow-sm transition-all hover:shadow-md sm:hidden ${!data.portfolio && "cursor-not-allowed opacity-50"
              }`}
            target="_blank"
            rel="noreferrer"
          >
            View Profile
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
