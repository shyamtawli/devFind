import React from "react";

const ErrorPage = ({
  title = "404 - Page Not Found",
  message = "Oops! The page you're looking for does not exist.",
  subMessage = "Please check the URL.",
  onRetry,
}) => {
  return (
    <div className="flex h-screen items-center justify-center bg-primaryColor dark:bg-secondaryColor">
      <div className="text-center">
        <h1 className="mb-4 font-semibold text-red-600">
          {title}
        </h1>

        <p className="dark:text-white">{message}</p>

        {subMessage && (
          <p className="dark:text-white">{subMessage}</p>
        )}

        {onRetry && (
          <button
            onClick={onRetry}
            className="mt-6 rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
          >
            Retry
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorPage;