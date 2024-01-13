// src/components/UserForm.js
import React, { useState } from 'react';
import './UserForm.css'

const UserForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [bio, setBio] = useState('');
  const [avatarLink, setAvatarLink] = useState('');
  const [portfolioLink, setPortfolioLink] = useState('');
  const [skills, setSkills] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [twitterLink, setTwitterLink] = useState('');
  const [linkedInLink, setLinkedInLink] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert the skills string to an array
    const skillsArray = skills.split(',').map(skill => skill.trim());

    const userData = {
      name,
      location,
      bio,
      avatarLink,
      portfolioLink,
      skills: skillsArray,
      social: {
        GitHub: githubLink,
        Twitter: twitterLink,
        LinkedIn: linkedInLink,
      },
    };

    onSubmit(userData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Location:
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      </label>
      <label>
        Bio:
        <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
      </label>
      <label>
        Avatar Link:
        <input type="text" value={avatarLink} onChange={(e) => setAvatarLink(e.target.value)} />
      </label>
      <label>
        Portfolio Link:
        <input type="text" value={portfolioLink} onChange={(e) => setPortfolioLink(e.target.value)} />
      </label>
      <label>
        Skills (comma-separated):
        <input type="text" value={skills} onChange={(e) => setSkills(e.target.value)} />
      </label>
      <label>
        GitHub Link:
        <input type="text" value={githubLink} onChange={(e) => setGithubLink(e.target.value)} />
      </label>
      <label>
        Twitter Link:
        <input type="text" value={twitterLink} onChange={(e) => setTwitterLink(e.target.value)} />
      </label>
      <label>
        LinkedIn Link:
        <input type="text" value={linkedInLink} onChange={(e) => setLinkedInLink(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
