import React from "react";
import "../assets/css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3 className="footer-logo">Travel Explorer</h3>
        <p className="footer-tagline">
          Wander more. Worry less. Explore everything.
        </p>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/destinations">Destinations</a>
          <a href="/gallery">Gallery</a>
          <a href="/tips">Tips</a>
          <a href="/contact">Contact</a>
        </div>

        <p className="footer-copy">
          Developed by{" "}
          <a
            href="https://tefeena.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tefeena John
          </a>
        </p>
        <p className="footer-copy">&copy; {new Date().getFullYear()} Travel Explorer. All rights reserved.</p>

      </div>
    </footer>
  );
};

export default Footer;
