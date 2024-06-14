import React from 'react';
import { FaBrain, FaChartLine, FaLaptopCode } from 'react-icons/fa';
import './Features.css';

const Features = () => {
  return (
    <section className="features" id="features">
      <h2>Features</h2>
      <div className="features-container">
        <div className="feature">
          <FaBrain size={50} />
          <h3>Smart Assessments</h3>
          <p>Utilize AI to create smarter and more efficient assessments.</p>
        </div>
        <div className="feature">
          <FaChartLine size={50} />
          <h3>Detailed Analytics</h3>
          <p>Get in-depth insights into performance and trends.</p>
        </div>
        <div className="feature">
          <FaLaptopCode size={50} />
          <h3>Easy Integration</h3>
          <p>Integrate seamlessly with your existing systems.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
