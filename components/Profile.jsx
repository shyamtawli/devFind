import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import { FaXTwitter, FaLocationDot } from "react-icons/fa6";

function Profile({ data }) {
  return <Card data={data} />;
}

function Card({ data }) {
  const cardRef = React.useRef();
  const [imageSrc, setImageSrc] = useState(data.avatar);
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  // localStorage key for this profile — prefer unique id if available
  const profileKey = `profile:${data.id || data.name}`;

  useEffect(() => {
    try {
      const raw = localStorage.getItem('profileLikes');
      const map = raw ? JSON.parse(raw) : {};
      const entry = map[profileKey];
      if (entry) {
        setLikes(Number(entry.count) || 0);
        setLiked(Boolean(entry.liked));
      } else {
        setLikes(0);
        setLiked(false);
      }
    } catch (e) {
      // ignore parse errors
    }
  }, [profileKey]);

  useEffect(() => {
    setImageSrc(data.avatar);
  }, [data])

  const handleWheel = (event) => {
    event.stopPropagation();
    event.preventDefault();
    let container = event.target;
    if (!container) return false;

    while (!container.classList.contains("skills-container")) {
      container = container.parentNode;
    }

    const delta = event.deltaX || event.deltaY;
    container.scrollLeft += delta;
  };

  React.useEffect(() => {
    cardRef.current.addEventListener("wheel", handleWheel, { passive: false });
  }, []);

  return (
    <div className="mb-6 h-auto rounded-lg bg-white p-4 shadow dark:bg-textPrimary">
      <div className="relative flex gap-4">
        <div className="h-24 w-24 flex-shrink-0">
          <img
            src={imageSrc}
            alt="User logo"
            onError={() => setImageSrc('/defaultAvatar.webp')}
            className="h-full w-full rounded-full"
          />
        </div>
        <div className="w-[55%] sm:w-[75%]">
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
          <p className="flex items-center gap-x-1 text-sm dark:text-white">
            <FaLocationDot />
            {data.location}
          </p>
          <div
            className="skills-container mt-4 flex h-auto gap-4 overflow-hidden hover:overflow-hidden hover:scroll-smooth"
            ref={cardRef}
          >
            {data.skills &&
              data.skills.map((skill, index) => {
                return (
                  <div
                    className="inline h-auto cursor-default whitespace-nowrap rounded-md bg-secondaryColor px-2 py-1 text-[9px] text-white sm:text-sm md:h-[30px]"
                    key={index}
                  >
                    {skill}
                  </div>
                );
              })}
          </div>
        </div>
        <div
          className={` md:absolute md:right-2 md:top-2 ${
            data.portfolio
              ? "ml-auto w-28 hover:underline"
              : "ml-auto w-28 cursor-not-allowed brightness-50"
          }`}
        >
          <a
            href={data.portfolio}
            className="text-textSecondary"
            target="_blank"
            rel="noreferrer"
          >
            View Profile &#8594;
          </a>
        </div>
      </div>
      <div className="mt-4">
        <div className="dark:text-white">{data.bio}</div>
        <div className="mt-1 flex gap-x-4">
          <a href={data.social.GitHub} target="_blank" rel="noreferrer">
            <FaGithub className="text-2xl text-blue-600 duration-300 hover:scale-125" />
          </a>

          <a href={data.social.Twitter} target="_blank" rel="noreferrer">
            <FaXTwitter className="text-2xl text-blue-600 duration-300 hover:scale-125" />
          </a>
          <a href={data.social.LinkedIn} target="_blank" rel="noreferrer">
            <FaLinkedin className="text-2xl text-blue-600 duration-300 hover:scale-125" />
          </a>
          {/* Like button */}
          <button
            onClick={() => {
              // toggle like
              const willLike = !liked;
              const newCount = willLike ? likes + 1 : Math.max(0, likes - 1);
              setLikes(newCount);
              setLiked(willLike);
              try {
                const raw = localStorage.getItem('profileLikes');
                const map = raw ? JSON.parse(raw) : {};
                map[profileKey] = { count: newCount, liked: willLike };
                localStorage.setItem('profileLikes', JSON.stringify(map));
                // notify other parts of the app that likes changed
                try {
                  window.dispatchEvent(new Event('profileLikesChanged'));
                } catch (e) {
                  // ignore if window not available
                }
              } catch (e) {
                // ignore storage errors
              }
            }}
            aria-pressed={liked}
            aria-label={liked ? 'Unlike profile' : 'Like profile'}
            className={`flex items-center gap-2 text-2xl transition-all duration-200 ${
              liked ? 'text-red-500' : 'text-gray-400 hover:text-red-400'
            }`}
          >
            <FaHeart />
            <span className="text-sm font-medium">{likes}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
