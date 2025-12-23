import React from "react";

function ProfileSkeleton() {
  return (
    <div className="glass-card mb-3 rounded-xl p-3 md:mb-4 md:rounded-2xl md:p-4">
      <div className="flex gap-3">
        {/* Avatar Skeleton */}
        <div className="h-12 w-12 flex-shrink-0 sm:h-14 sm:w-14 md:h-16 md:w-16">
          <div className="skeleton h-full w-full rounded-full"></div>
        </div>

        {/* Content Skeleton */}
        <div className="flex-1">
          {/* Name */}
          <div className="skeleton mb-1.5 h-4 w-32 rounded-md sm:h-5 sm:w-40"></div>
          {/* Location */}
          <div className="skeleton mb-2 h-3 w-24 rounded-md sm:h-4 sm:w-28"></div>

          {/* Skills */}
          <div className="flex flex-wrap gap-1">
            <div className="skeleton h-5 w-12 rounded-full sm:h-6 sm:w-14"></div>
            <div className="skeleton h-5 w-16 rounded-full sm:h-6 sm:w-18"></div>
            <div className="skeleton h-5 w-10 rounded-full sm:h-6 sm:w-12"></div>
            <div className="skeleton h-5 w-14 rounded-full sm:h-6 sm:w-16"></div>
          </div>
        </div>
      </div>

      {/* Bio and Social Skeleton */}
      <div className="mt-2 border-t border-slate-200/50 pt-2 dark:border-slate-700/50 sm:mt-3 sm:pt-3">
        <div className="skeleton mb-1.5 h-3 w-full rounded-md sm:h-4"></div>
        <div className="skeleton mb-2 h-3 w-3/4 rounded-md sm:h-4"></div>

        {/* Social Icons */}
        <div className="flex gap-1.5 sm:gap-2">
          <div className="skeleton h-6 w-6 rounded-full sm:h-7 sm:w-7"></div>
          <div className="skeleton h-6 w-6 rounded-full sm:h-7 sm:w-7"></div>
          <div className="skeleton h-6 w-6 rounded-full sm:h-7 sm:w-7"></div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSkeleton;
