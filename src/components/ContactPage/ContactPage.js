import React from 'react';
import './ContactPage.css';
import contactFormBg from '../../assets/contactFormBg.jpg'; // Ensure the path and file extension are correct

const ContactPage = () => {
  return (
    <div id="contact" className="contact-section" style={{ backgroundImage: `url(${contactFormBg})` }}>
      <div className="contact-content">
        <div className="contact-form">
          <h2>CONTACT US</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
