import React, { useState, useEffect } from 'react';
import topbtn4 from './compassets/topbtn4.png';

const Scrollbtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
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
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

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
