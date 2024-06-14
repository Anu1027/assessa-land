// HeroSection.js
import React from 'react';
import './HeroSection.css';
import heroImage from '../../assets/hero-image.png'; 

const HeroSection = () => {
  return (
    <section id='about-us' className="hero">
      <div className="hero-content">
        <h1>Welcome To ASSESSA</h1>
        <p>Where Artificial Intelligence Meets Assessment Excellence.</p>
        <button className="cta-button">Get Started</button>
        <div className="additional-content">
          <ul>
            <li>Empower your assessments with cutting-edge AI technology.</li>
            <li>Transform the way you evaluate and analyze data.</li>
            <li>Enhance efficiency and accuracy in assessment processes.</li>
            <li>Gain valuable insights to drive informed decisions.</li>
            <li>Unlock the potential of data-driven decision-making.</li>
          </ul>
          <button className="see-more-button">
            See More <span className="arrow">&#10148;</span>
          </button>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="AI Illustration" />
      </div>
    </section>
  );
};

export default HeroSection;
