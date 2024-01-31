import React from 'react';
import { FaFrown } from 'react-icons/fa';

export default function NoResultFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 text-center dark:text-white">
      <FaFrown className="text-7xl" />
      <div className="">
        <p className="text-2xl font-bold">No Results Found</p>
        <p>We couldn't find any results for your search.</p>
      </div>
    </div>
  );
}
