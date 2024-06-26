import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  const [theme, setTheme] = useState('dark');
  const [showContactForm, setShowContactForm] = useState(false);

  function toggleTheme() {
    const htmlElement = document.documentElement;
    const isDarkModeEnabled = htmlElement.classList.contains('dark');

    if (isDarkModeEnabled) {
      htmlElement.classList.remove('dark');
      setTheme('light');
    } else {
      htmlElement.classList.add('dark');
      setTheme('dark');
    }
  }

  function toggleContactForm() {
    setShowContactForm(!showContactForm);
  }

  return (
    <div className="my-7 w-full border-r-2 border-borderSecondary px-7 font-spaceMono dark:border-borderColor md:h-[90vh] md:w-[23%]">
      <div className="mb-2 flex h-12 items-center gap-2.5">
        <div className="text-secondaryColor dark:text-white">
          <FontAwesomeIcon icon={faCode} size="2xl" />
        </div>
        <a href="https://dev-find.vercel.app/">
          <div className="flex text-[2rem] font-bold">
            <p className="text-secondaryColor dark:text-white">dev</p>
            <p className="text-textSecondary">Find</p>
          </div>
        </a>
        <div className="ml-auto">
          <button
            type="button"
            className="h-10 w-10 cursor-pointer rounded-lg border-2 border-borderSecondary bg-white transition-all hover:border-textSecondary hover:text-textSecondary dark:border-borderColor dark:bg-textPrimary dark:text-white dark:hover:border-textSecondary dark:hover:text-textSecondary"
            onClick={toggleTheme}
          >
            {theme === 'light' ? (
              <FontAwesomeIcon icon={faMoon} fontSize="1rem" />
            ) : (
              <FontAwesomeIcon icon={faSun} fontSize="1rem" />
            )}
          </button>
        </div>
      </div>
      <div className="text-secondaryColor dark:text-white">Discover and Connect with Skilled Developers.</div>
      <div className="pt-5">
        <a href="https://github.com/shyamtawli/devFind#how-to-add-your-profile-" target="_blank" rel="noreferrer">
          <button className="inline-block cursor-pointer rounded-lg border-2 border-textSecondary bg-textSecondary px-[15px] py-1.5 text-center font-poppoins text-sm transition-all duration-500 hover:bg-transparent hover:text-textSecondary dark:text-white">
            Add your profile
          </button>
        </a>
      </div>
      <div className="pt-5">
        <button
          className="inline-block cursor-pointer rounded-lg border-2 border-textSecondary bg-textSecondary px-[15px] py-1.5 text-center font-poppoins text-sm transition-all duration-500 hover:bg-transparent hover:text-textSecondary dark:text-white"
          onClick={toggleContactForm}
        >
          Contact Us
        </button>
      </div>
      {showContactForm && (
        <div className="contact-container pt-5">
          <h1 className="contact-heading">Contact Us</h1>
          <p className="contact-description">Please fill out the form below to get in touch with us.</p>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input type="text" id="name" name="name" className="form-input" />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input type="email" id="email" name="email" className="form-input" />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message:
              </label>
              <textarea id="message" name="message" rows="4" className="form-textarea" />
            </div>

            <button type="submit" className="submit-button" color="orange">
              Submit
            </button>
          </form>
        </div>
      )}
      <div className="mt-auto rounded-lg bg-white p-4 text-center text-secondaryColor shadow-md dark:bg-gray-800 dark:text-white">
        © {new Date().getFullYear()} devFind. All rights reserved.
      </div>
    </div>
  );
}

export default Sidebar;
