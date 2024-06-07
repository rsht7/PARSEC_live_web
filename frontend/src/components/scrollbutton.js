import React, { useState, useEffect } from 'react';
import topbtn4 from './compassets/topbtn4.png';

const Scrollbtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Check if the user has scrolled down enough to show the button
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    setIsVisible(scrollTop > 0);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once after mount

  return (
    <div className="scrollbtn" style={{ display: isVisible ? 'block' : 'none' }}>
      <img
        src={topbtn4}
        alt="Top"
        className="scroll-top-icon"
        onClick={scrollToTop}
      />
    </div>
  );
};

export default Scrollbtn;
