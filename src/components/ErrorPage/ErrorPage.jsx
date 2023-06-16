import React from 'react';
import './ErrorPage.css';

const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="error-page-content">
        <h1>404 - Page Not Found</h1>
        <p>Oops! The page you're looking for does not exist.</p>
        <p>Please check the Url.</p>
      </div>
    </div>
  );
};

export default ErrorPage;
