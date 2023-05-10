import React from "react";
import { Card, NoResultFound } from "../index";
import "./Profile.css";
function Profile({ shuffledProfiles }) {
  return (
    <div className="profile-container">
      {shuffledProfiles.length > 0 ? (
        shuffledProfiles.map((profile, index) => (
          <Card data={profile} key={index} />
        ))
      ) : (
        <NoResultFound />
      )}
      ;
    </div>
  );
}

export default Profile;
