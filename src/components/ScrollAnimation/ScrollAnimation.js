// ScrollAnimation.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ScrollAnimation.css'; // Import the CSS file

const ScrollAnimation = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="animated fade-in">
      {/* Content to animate */}
    </div>
  );
};

export default ScrollAnimation;
