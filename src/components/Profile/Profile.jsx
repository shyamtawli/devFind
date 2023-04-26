import React from "react";
import { MdLocationOn } from "react-icons/md";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

function Profile({ data }) {
  return (
    <div className="ml-[20rem] px-5 ">
      <Card data={data} />
    </div>
  );

  function Card({ data }) {
    return (
      <div className=" rounded-md bg-[#1e2a47] mb-[1.5rem] p-[1rem] max-h-full text-white">
        {/* Profile details */}
        <div className="flex gap-[1rem] ">
          {/* Image */}
          <img src={data.avatar} alt="User logo" className="h-20 rounded-full" />
          <div className=" max-w-full flex gap-5 m-5">
            {/* Name */}
            <div className="flex flex-col  gap-">

              <h3>{data.name}</h3>
              <span className="flex gap-2">
                <MdLocationOn className="mt-1" />
                {data.location}
              </span>
            </div>
            <div className="flex gap-2 p-5">
              {data.skills.map((skill, index) => {
                return (
                  <div className="skill bg-gray-800 p-2 rounded-md " key={index}>
                    {skill}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="text-[#00a6fb]">
            <a href={data.portfolio} className="font-extrabold" target="_blank" rel="noreferrer">
              View Profile &#8594;
            </a>
          </div>
        </div>
        <div className="about">{data.bio}</div>
        <div className="flex mt-2">
          <div className="flex gap-2 items-center mr-8">
            <FaGithub className="text-[#00a6fb]" />
            <a
              className="text-white "
              href={data.social.GitHub}
              target="_blank"
              rel="noreferrer"
            >
              {data.social.GitHub.replace("https://github.com/", "")}
            </a>
          </div>
          <div className="flex gap-2 items-center mr-8">
            <FaTwitter className="text-[#00a6fb]" />
            <a
              className="text-white"
              href={data.social.Twitter}
              target="_blank"
              rel="noreferrer"
            >
              {data.social.Twitter.replace("https://twitter.com/", "")}
            </a>
          </div>
          <div className="flex gap-2 items-center mr-8">
            <FaLinkedin className="text-[#00a6fb]" />
            <a
              className="text-white"
              href={data.social.LinkedIn}
              target="_blank"
              rel="noreferrer"
            >
              {data.social.LinkedIn.replace("https://linkedin.com/in/", "")}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
