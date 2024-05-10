import React from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll-to-top';

const ScrollToTopButton = () => {
  return (
    <div className="scroll-to-top-button" onClick={() => scroll.scrollToTop()}>
      <FaArrowCircleUp className="icon" />
    </div>
  );
};

export default ScrollToTopButton;
