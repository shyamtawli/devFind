import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function Profile({ data }) {
  return <Card data={data} />;

  function Card({ data }) {
    const cardRef = React.useRef();
    const handleWheel = (event) => {
      event.stopPropagation();
      event.preventDefault();
      let container = event.target;
      if (!container) return false;

      while (!container.classList.contains('skills-container')) {
        container = container.parentNode;
      }

      const delta = event.deltaX || event.deltaY;
      container.scrollLeft += delta;
    };

    React.useEffect(() => {
      cardRef.current.addEventListener('wheel', handleWheel, { passive: false });
    }, []);

    return (
      <div className="mb-6 h-auto rounded-lg bg-white p-4 shadow dark:bg-textPrimary">
        <div className="flex gap-4">
          <div className="h-24 w-24 flex-shrink-0">
            <img src={data.avatar} className="h-full w-full rounded-full" alt="User logo" />
          </div>
          <div className="w-[75%]">
            <h3>
              <a
                className="text-lg font-bold hover:text-textSecondary dark:text-white"
                href={data.portfolio}
                target="_blank"
                rel="noreferrer"
              >
                {data.name}
              </a>
            </h3>
            <p className="text-sm dark:text-white">
              <span style={{ marginRight: '0.5rem' }}>
                <FontAwesomeIcon icon={faLocationDot} />
              </span>
              {data.location}
            </p>
            <div
              className="skills-container mt-4 flex h-9 gap-4 overflow-hidden hover:overflow-x-scroll hover:scroll-smooth"
              ref={cardRef}
            >
              {data.skills &&
                data.skills.map((skill, index) => {
                  return (
                    <div
                      className="inline h-[30px] cursor-default whitespace-nowrap rounded-md bg-secondaryColor px-2 py-1 text-sm text-white"
                      key={index}
                    >
                      {skill}
                    </div>
                  );
                })}
            </div>
          </div>
          <div
            className={`${
              data.portfolio ? 'ml-auto w-28 hover:underline' : 'ml-auto w-28 cursor-not-allowed brightness-50'
            }`}
          >
            <a href={data.portfolio} className="text-textSecondary" target="_blank" rel="noreferrer">
              View Profile &#8594;
            </a>
          </div>
        </div>
        <div className="mt-4">
          <div className="dark:text-white">{data.bio}</div>
          <div className="mt-1 flex gap-4">
            <a href={data.social.GitHub} target="_blank" rel="noreferrer">
              <FaGithub className="text-2xl text-blue-600 duration-300 hover:scale-125" />
            </a>

            <a href={data.social.Twitter} target="_blank" rel="noreferrer">
              <FaTwitter className="text-2xl text-blue-600 duration-300 hover:scale-125" />
            </a>
            <a href={data.social.LinkedIn} target="_blank" rel="noreferrer">
              <FaLinkedin className="text-2xl text-blue-600 duration-300 hover:scale-125" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
