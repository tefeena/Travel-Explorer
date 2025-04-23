import React from 'react';
import '../assets/css/Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <h2>Get in Touch</h2>
      <p className="contact-intro">
        Have questions, suggestions, or just want to say hello? We'd love to hear from you!
      </p>

      <div className="contact-container">
        <form className="contact-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your full name" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="your@email.com" />

          <label htmlFor="message">Message</label>
          <textarea id="message" rows="5" placeholder="Type your message here..."></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
