import { useState } from "react";
import useTheme from "./hooks/useTheme";

export default function AddProfileForm() {
  const [mount, theme, toggleTheme] = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    bio: "",
    avatar: "",
    portfolio: "",
    skills: [],
    social: {
      GitHub: "",
      Twitter: "",
      LinkedIn: "",
    },
  });

  const [skillInput, setSkillInput] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSocialChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      social: { ...prev.social, [name]: value },
    }));
  };

  const addSkill = () => {
    if (!skillInput.trim()) return;
    setFormData((prev) => ({
      ...prev,
      skills: [...prev.skills, skillInput.trim()],
    }));
    setSkillInput("");
  };

  const removeSkill = (index) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("api/addProfile.js", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    alert("Profile added successfully!");
  };

  const handleReturn = () => {
    window.history.back();
  };

  // Only render after theme is mounted to avoid hydration issues
  if (!mount) {
    return null;
  }

  // Theme-based classes
  const isDark = theme === "dark";

  const containerBg = isDark
    ? "bg-gradient-to-br from-gray-900 to-gray-800"
    : "bg-gradient-to-br from-gray-50 to-gray-100";

  const cardBg = isDark
    ? "bg-gradient-to-br from-gray-800 to-gray-900"
    : "bg-gradient-to-br from-white to-gray-50";

  const cardBorder = isDark ? "border-gray-700" : "border-gray-100";

  const textColor = isDark ? "text-gray-100" : "text-gray-800";

  const textMuted = isDark ? "text-gray-400" : "text-gray-500";

  const labelColor = isDark ? "text-gray-300" : "text-gray-700";

  const inputBg = isDark ? "bg-gray-700" : "bg-white";

  const inputBorder = isDark ? "border-gray-600" : "border-gray-300";

  const inputText = isDark
    ? "text-gray-100 placeholder-gray-400"
    : "text-gray-800 placeholder-gray-400";

  const skillTagBg = isDark
    ? "bg-blue-900/30 border-blue-800 text-blue-300"
    : "bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-100 text-blue-700";

  const skillTagText = isDark ? "text-blue-300" : "text-blue-800";

  const returnBtnBg = isDark ? "hover:bg-gray-700" : "hover:bg-gray-100";

  const cancelBtn = isDark
    ? "border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500"
    : "border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400";

  const shadow = isDark
    ? "shadow-2xl shadow-black/20"
    : "shadow-2xl shadow-gray-200/50";

  return (
    <div
      className={`min-h-screen ${containerBg} flex items-center justify-center px-4 py-10 font-sans transition-colors duration-300`}
    >
      <div
        className={`w-full max-w-3xl ${cardBg} rounded-2xl ${shadow} p-6 sm:p-10 space-y-8 border ${cardBorder} transition-colors duration-300`}
      >
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={handleReturn}
            className={`flex items-center gap-2 px-4 py-2.5 ${isDark ? "text-gray-400 hover:text-gray-200" : "text-gray-600 hover:text-gray-800"} ${returnBtnBg} rounded-xl transition duration-200 font-medium group`}
          >
            <svg
              className="w-5 h-5 transform group-hover:-translate-x-1 transition duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Return
          </button>

          <div className="text-center space-y-2 flex-1">
            <h2
              className={`text-2xl font-bold ${textColor} bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent`}
            >
              Add Developer Profile
            </h2>
            <p className={`${textMuted} text-sm`}>
              Fill in the details below to create a new developer profile0
            </p>
          </div>

          <div className="w-24"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name & Location */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className={`block text-sm font-medium ${labelColor}`}>
                Full Name *
              </label>
              <input
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 ${inputBg} border ${inputBorder} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-200 ${inputText} shadow-sm`}
                required
              />
            </div>
            <div className="space-y-2">
              <label className={`block text-sm font-medium ${labelColor}`}>
                Location *
              </label>
              <input
                name="location"
                placeholder="San Francisco, CA"
                value={formData.location}
                onChange={handleChange}
                className={`w-full px-4 py-3 ${inputBg} border ${inputBorder} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-200 ${inputText} shadow-sm`}
                required
              />
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-2">
            <label className={`block text-sm font-medium ${labelColor}`}>
              Short Bio *
            </label>
            <textarea
              name="bio"
              placeholder="Tell us about yourself, your experience, and what you're passionate about..."
              value={formData.bio}
              onChange={handleChange}
              rows={4}
              className={`w-full px-4 py-3 ${inputBg} border ${inputBorder} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-200 resize-none ${inputText} shadow-sm`}
              required
            />
          </div>

          {/* Avatar & Portfolio */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className={`block text-sm font-medium ${labelColor}`}>
                Avatar URL
              </label>
              <input
                name="avatar"
                placeholder="https://example.com/avatar.jpg"
                value={formData.avatar}
                onChange={handleChange}
                className={`w-full px-4 py-3 ${inputBg} border ${inputBorder} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-200 ${inputText} shadow-sm`}
              />
            </div>
            <div className="space-y-2">
              <label className={`block text-sm font-medium ${labelColor}`}>
                Portfolio URL
              </label>
              <input
                name="portfolio"
                placeholder="https://your-portfolio.com"
                value={formData.portfolio}
                onChange={handleChange}
                className={`w-full px-4 py-3 ${inputBg} border ${inputBorder} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-200 ${inputText} shadow-sm`}
              />
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-3">
            <label className={`block text-sm font-medium ${labelColor}`}>
              Skills
            </label>
            <div className="flex gap-3">
              <input
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                placeholder="e.g., React, Node.js, Python"
                className={`flex-1 px-4 py-3 ${inputBg} border ${inputBorder} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-200 ${inputText} shadow-sm`}
                onKeyPress={(e) =>
                  e.key === "Enter" && (e.preventDefault(), addSkill())
                }
              />
              <button
                type="button"
                onClick={addSkill}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-xl hover:from-blue-600 hover:to-indigo-700 active:scale-95 transition duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
              {formData.skills.map((skill, index) => (
                <div
                  key={index}
                  className={`group ${skillTagBg} border ${skillTagText} px-4 py-2.5 rounded-xl text-sm font-medium flex items-center gap-2.5 shadow-sm hover:shadow-md transition duration-200`}
                >
                  <span className={skillTagText}>{skill}</span>
                  <button
                    type="button"
                    onClick={() => removeSkill(index)}
                    className={`${isDark ? "text-gray-500 hover:text-red-400 hover:bg-red-900/20" : "text-gray-400 hover:text-red-500 hover:bg-red-50"} w-5 h-5 rounded-full flex items-center justify-center transition duration-200 group-hover:text-red-400`}
                    aria-label={`Remove ${skill}`}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <label className={`block text-sm font-medium ${labelColor}`}>
              Social Links
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-5 h-5 ${isDark ? "bg-gray-700" : "bg-gray-800"} rounded flex items-center justify-center`}
                  >
                    <span className="text-white text-xs font-bold">G</span>
                  </div>
                  <span className={`text-sm font-medium ${labelColor}`}>
                    GitHub
                  </span>
                </div>
                <input
                  name="GitHub"
                  placeholder="https://github.com/username"
                  value={formData.social.GitHub}
                  onChange={handleSocialChange}
                  className={`w-full px-4 py-3 ${inputBg} border ${inputBorder} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-200 ${inputText} shadow-sm`}
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-blue-400 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">𝕏</span>
                  </div>
                  <span className={`text-sm font-medium ${labelColor}`}>
                    Twitter
                  </span>
                </div>
                <input
                  name="Twitter"
                  placeholder="https://twitter.com/username"
                  value={formData.social.Twitter}
                  onChange={handleSocialChange}
                  className={`w-full px-4 py-3 ${inputBg} border ${inputBorder} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-200 ${inputText} shadow-sm`}
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-blue-700 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">in</span>
                  </div>
                  <span className={`text-sm font-medium ${labelColor}`}>
                    LinkedIn
                  </span>
                </div>
                <input
                  name="LinkedIn"
                  placeholder="https://linkedin.com/in/username"
                  value={formData.social.LinkedIn}
                  onChange={handleSocialChange}
                  className={`w-full px-4 py-3 ${inputBg} border ${inputBorder} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-200 ${inputText} shadow-sm`}
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="button"
              onClick={handleReturn}
              className={`px-6 py-3.5 border ${cancelBtn} font-medium rounded-xl active:scale-95 transition duration-200 shadow-sm hover:shadow focus:outline-none focus:ring-2 ${isDark ? "focus:ring-gray-500" : "focus:ring-gray-400"} focus:ring-offset-2`}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 active:scale-[0.99] transition duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Submit Profile
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
