import React from 'react';

const ErrorPage = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 font-semibold text-red-600">404 - Page Not Found</h1>
        <p>Oops! The page you're looking for does not exist.</p>
        <p>Please check the URL.</p>
      </div>
    </div>
  );
};

export default ErrorPage;
