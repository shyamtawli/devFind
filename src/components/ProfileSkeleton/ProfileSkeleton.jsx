import React from 'react';
import './ProfileSkeleton.css';

function ProfileSkeleton() {
  const skeletonData = {
    name: '',
    location: '',
    bio: '',
    avatar: '',
    portfolio: '',
    skills: ['', '', '', ''],
    social: {
      GitHub: '',
      Twitter: '',
      LinkedIn: '',
    },
  };

  return (
    <div className="profile-container-sk">
      <div className="profile-card-sk">
        <div className="top-container-sk">
          <div className="profile-photo-sk skeleton skeleton-img"></div>
          <div className="profile-details-sk">
            <h3 className="skeleton skeleton-text-lg">{skeletonData.name}</h3>
            <p className="skeleton skeleton-text-sm">{skeletonData.location}</p>
            <div className="skills-container-sk">
              {skeletonData.skills &&
                skeletonData.skills.map((skill, index) => {
                  return (
                    <div className="skill-sk skeleton skeleton-skill" key={index}>
                      {skill}
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="profile-link-sk">
            <div className="skeleton skeleton-profile-link"></div>
          </div>
        </div>
        <div className="bottom-container-sk">
          <div className="about-sk skeleton skeleton-text-sm">{skeletonData.bio}</div>
          <div className="social-sk">
            <div className="skeleton skeleton-social">{skeletonData.social.GitHub}</div>
            <div className="skeleton skeleton-social">{skeletonData.social.GitHub}</div>
            <div className="skeleton skeleton-social">{skeletonData.social.GitHub}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSkeleton;
