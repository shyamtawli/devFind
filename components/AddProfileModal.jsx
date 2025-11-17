import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function AddProfileModal({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    github: "",
    linkedin: "",
    twitter: "",
    avatar: "",
    location: "",
    bio: "",
    portfolio: "",
    skills: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.github.trim()) {
      newErrors.github = "GitHub link is required";
    } else if (!isValidUrl(formData.github) || !formData.github.includes("github.com")) {
      newErrors.github = "Please enter a valid GitHub URL";
    }
    if (!formData.avatar.trim()) {
      newErrors.avatar = "Profile photo URL is required";
    } else if (!isValidUrl(formData.avatar)) {
      newErrors.avatar = "Please enter a valid image URL";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const profileData = {
      name: formData.name.trim(),
      location: formData.location.trim() || "Not specified",
      bio: formData.bio.trim() || "No bio provided",
      avatar: formData.avatar.trim(),
      portfolio: formData.portfolio.trim() || formData.github.trim(),
      skills: formData.skills
        .split(",")
        .map((skill) => skill.trim())
        .filter((skill) => skill !== ""),
      social: {
        GitHub: formData.github.trim(),
        LinkedIn: formData.linkedin.trim() || "#",
        Twitter: formData.twitter.trim() || "#",
      },
    };

    onSubmit(profileData);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: "",
      github: "",
      linkedin: "",
      twitter: "",
      avatar: "",
      location: "",
      bio: "",
      portfolio: "",
      skills: "",
    });
    setErrors({});
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-2xl rounded-lg bg-white p-8 shadow-lg dark:bg-textPrimary md:max-h-[90vh] md:overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 text-secondaryColor hover:text-textSecondary dark:text-white dark:hover:text-textSecondary"
          aria-label="Close modal"
        >
          <FontAwesomeIcon icon={faXmark} size="xl" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-secondaryColor dark:text-white">
            Add Your Profile
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Share your professional information with the developer community
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-secondaryColor dark:text-white">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="John Doe"
              className={`focus:border-primaryFocus focus:bg-primaryLight dark:focus:border-secondaryFocus dark:focus:bg-secondaryLight mt-1 w-full rounded-lg border-2 bg-primaryColor px-4 py-2 text-secondaryColor outline-none dark:border-borderColor dark:bg-secondaryColor dark:text-white ${
                errors.name ? "border-red-500" : "border-borderSecondary"
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-500">{errors.name}</p>
            )}
          </div>

          {/* GitHub Link */}
          <div>
            <label className="block text-sm font-medium text-secondaryColor dark:text-white">
              GitHub Profile Link *
            </label>
            <input
              type="url"
              name="github"
              value={formData.github}
              onChange={handleInputChange}
              placeholder="https://github.com/johndoe"
              className={`focus:border-primaryFocus focus:bg-primaryLight dark:focus:border-secondaryFocus dark:focus:bg-secondaryLight mt-1 w-full rounded-lg border-2 bg-primaryColor px-4 py-2 text-secondaryColor outline-none dark:border-borderColor dark:bg-secondaryColor dark:text-white ${
                errors.github ? "border-red-500" : "border-borderSecondary"
              }`}
            />
            {errors.github && (
              <p className="mt-1 text-xs text-red-500">{errors.github}</p>
            )}
          </div>

          {/* LinkedIn Link */}
          <div>
            <label className="block text-sm font-medium text-secondaryColor dark:text-white">
              LinkedIn Profile Link
            </label>
            <input
              type="url"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleInputChange}
              placeholder="https://linkedin.com/in/johndoe"
              className="focus:border-primaryFocus focus:bg-primaryLight dark:focus:border-secondaryFocus dark:focus:bg-secondaryLight mt-1 w-full rounded-lg border-2 border-borderSecondary bg-primaryColor px-4 py-2 text-secondaryColor outline-none dark:border-borderColor dark:bg-secondaryColor dark:text-white"
            />
          </div>

          {/* Twitter Link */}
          <div>
            <label className="block text-sm font-medium text-secondaryColor dark:text-white">
              Twitter Profile Link
            </label>
            <input
              type="url"
              name="twitter"
              value={formData.twitter}
              onChange={handleInputChange}
              placeholder="https://twitter.com/johndoe"
              className="focus:border-primaryFocus focus:bg-primaryLight dark:focus:border-secondaryFocus dark:focus:bg-secondaryLight mt-1 w-full rounded-lg border-2 border-borderSecondary bg-primaryColor px-4 py-2 text-secondaryColor outline-none dark:border-borderColor dark:bg-secondaryColor dark:text-white"
            />
          </div>

          {/* Profile Photo URL */}
          <div>
            <label className="block text-sm font-medium text-secondaryColor dark:text-white">
              Profile Photo URL *
            </label>
            <input
              type="url"
              name="avatar"
              value={formData.avatar}
              onChange={handleInputChange}
              placeholder="https://github.com/johndoe.png"
              className={`focus:border-primaryFocus focus:bg-primaryLight dark:focus:border-secondaryFocus dark:focus:bg-secondaryLight mt-1 w-full rounded-lg border-2 bg-primaryColor px-4 py-2 text-secondaryColor outline-none dark:border-borderColor dark:bg-secondaryColor dark:text-white ${
                errors.avatar ? "border-red-500" : "border-borderSecondary"
              }`}
            />
            {errors.avatar && (
              <p className="mt-1 text-xs text-red-500">{errors.avatar}</p>
            )}
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              Tip: You can use your GitHub avatar URL
            </p>
          </div>

          {/* Portfolio Link */}
          <div>
            <label className="block text-sm font-medium text-secondaryColor dark:text-white">
              Portfolio Link
            </label>
            <input
              type="url"
              name="portfolio"
              value={formData.portfolio}
              onChange={handleInputChange}
              placeholder="https://johndoe.com"
              className="focus:border-primaryFocus focus:bg-primaryLight dark:focus:border-secondaryFocus dark:focus:bg-secondaryLight mt-1 w-full rounded-lg border-2 border-borderSecondary bg-primaryColor px-4 py-2 text-secondaryColor outline-none dark:border-borderColor dark:bg-secondaryColor dark:text-white"
            />
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              Leave empty to use your GitHub profile
            </p>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-secondaryColor dark:text-white">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="New York, USA"
              className="focus:border-primaryFocus focus:bg-primaryLight dark:focus:border-secondaryFocus dark:focus:bg-secondaryLight mt-1 w-full rounded-lg border-2 border-borderSecondary bg-primaryColor px-4 py-2 text-secondaryColor outline-none dark:border-borderColor dark:bg-secondaryColor dark:text-white"
            />
          </div>

          {/* Bio */}
          <div>
            <label className="block text-sm font-medium text-secondaryColor dark:text-white">
              Bio
            </label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              placeholder="Tell us about yourself..."
              rows="4"
              className="focus:border-primaryFocus focus:bg-primaryLight dark:focus:border-secondaryFocus dark:focus:bg-secondaryLight mt-1 w-full rounded-lg border-2 border-borderSecondary bg-primaryColor px-4 py-2 text-secondaryColor outline-none dark:border-borderColor dark:bg-secondaryColor dark:text-white"
            />
          </div>

          {/* Skills */}
          <div>
            <label className="block text-sm font-medium text-secondaryColor dark:text-white">
              Skills (comma-separated)
            </label>
            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleInputChange}
              placeholder="JavaScript, React, Node.js, MongoDB"
              className="focus:border-primaryFocus focus:bg-primaryLight dark:focus:border-secondaryFocus dark:focus:bg-secondaryLight mt-1 w-full rounded-lg border-2 border-borderSecondary bg-primaryColor px-4 py-2 text-secondaryColor outline-none dark:border-borderColor dark:bg-secondaryColor dark:text-white"
            />
          </div>

          {/* Form Actions */}
          <div className="mt-6 flex gap-3 pt-4">
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 rounded-lg border-2 border-borderSecondary bg-transparent px-4 py-2 text-secondaryColor transition-all hover:bg-primaryLight dark:border-borderColor dark:text-white dark:hover:bg-secondaryLight"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 rounded-lg border-2 border-textSecondary bg-textSecondary px-4 py-2 text-white transition-all hover:bg-transparent hover:text-textSecondary dark:border-textSecondary dark:text-white dark:hover:bg-transparent dark:hover:text-textSecondary"
            >
              Add Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProfileModal;
