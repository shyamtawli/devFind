import React from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const tags = ["JavaScript", "React", "Python", "Node.js", "Ruby"];

function TagFilter({ tags, onTagClick }) {
  const [selectedTags, setSelectedTags] = useState([]);

  const handleClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
    onTagClick(tag);
  };

  return (
    <div className="tag-filter">
      {tags.map((tag, index) => (
        <div
          key={index}
          className={`tag${selectedTags.includes(tag) ? " selected" : ""}`}
          onClick={() => handleClick(tag)}
        >
          {tag}
        </div>
      ))}
    </div>
  );
}

function Sidebar({ onTagClick }) {
  return (
    <div className="sidebar">
      <div className="logo-title">
        <div className="logo">
          <FontAwesomeIcon
            icon={faCode}
            size="2xl"
            style={{ color: "#ffffff" }}
          />
        </div>
        <div className="title">
          <p className="dev">dev</p>
          <p className="find">Find</p>
        </div>
      </div>
      <div className="headline">
        Discover and Connect with Skilled Developers.
        <TagFilter tags={tags} onTagClick={onTagClick} />
      </div>
    </div>
  );
}

export default Sidebar;
