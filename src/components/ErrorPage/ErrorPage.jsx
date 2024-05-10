import React from 'react';

const ErrorPage = () => {
  const handleClick = () => {
    window.location.href = '/';
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 py-12 text-center md:px-6 lg:py-24">
      <div className="grid gap-2">
        <h1 className="text-9xl font-bold tracking-tighter text-gray-900 dark:text-gray-50">404</h1>
        <p className="text-2xl font-semibold tracking-tight text-gray-500 dark:text-gray-400">
          Oops, the page you were looking for doesn't exist.
        </p>
      </div>
      <button
        onClick={handleClick}
        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
      >
        Back to homepage
      </button>
    </div>
  );
};

export default ErrorPage;
