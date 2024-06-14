import React from 'react';
import './Footer.css';
import { faFacebook, faInstagram, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>Hi-tech City, Hyderabad 500081</p>
          <p>+91 7330841818</p>
          <p>Email: <a href="mailto:info@assessa.com">info@assessa.com</a></p>
        </div>
        <div className="footer-middle">
          <div className="social-icons">
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitterSquare} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
          <p>&copy; 2024 ASSESSA. All rights reserved.</p>
        </div>
        <div className="footer-right">
          <h3>Stay Informed</h3>
          <p>Subscribe to our newsletters to get the latest news and updates</p>
          <form>
            <input type="email" placeholder="Your email address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
