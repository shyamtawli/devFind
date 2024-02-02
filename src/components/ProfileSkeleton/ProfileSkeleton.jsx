import React from 'react';

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
    <div>
      <div className="mb-[1.5rem] h-auto rounded-[10px] pb-[0rem] pl-[1rem] pr-[1rem] pt-[1rem] shadow-lg ">
        <div className="flex gap-[1rem]">
          <div className="skeleton h-[6.1rem] w-[6.1rem] flex-shrink-0 rounded"></div>
          <div className="w-[80%] overflow-hidden">
            <h3 className="skeleton mb-[0.5rem] h-[1.6rem] w-full rounded-[0.25rem]">{skeletonData.name}</h3>
            <p className="skeleton mb-[0.4rem] h-[1.2rem] w-full rounded-[0.25rem]">{skeletonData.location}</p>
            <div className="flex gap-[1rem] overflow-hidden">
              {skeletonData.skills &&
                skeletonData.skills.map((skill, index) => {
                  return (
                    <div className="skeleton h-[2rem] w-full rounded-[0.25rem]" key={index}>
                      {skill}
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="w-[10%] justify-end overflow-hidden">
            <div className="skeleton mb-[0.5rem] h-[6rem] w-[4rem] rounded-[0.25rem]"></div>
          </div>
        </div>
        <div className="mt-[1rem]">
          <div className="skeleton mb-[0.4rem] h-[1.2rem] w-full rounded-[0.25rem]">{skeletonData.bio}</div>
          <div className="mt-[0.5rem] flex h-[3rem] gap-[1rem]">
            <div className="skeleton mt-[0.4rem] flex h-[2rem] w-[2rem] rounded-[0.25rem]">
              {skeletonData.social.GitHub}
            </div>
            <div className="skeleton mt-[0.4rem] flex h-[2rem] w-[2rem] rounded-[0.25rem]">
              {skeletonData.social.GitHub}
            </div>
            <div className="skeleton mt-[0.4rem] flex h-[2rem] w-[2rem] rounded-[0.25rem]">
              {skeletonData.social.GitHub}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfileSkeleton;
