import React from 'react';
import '../assets/css/About.css';
import aboutImg from '../assets/images/about-banne.jpeg';
import teamImg from '../assets/images/team.jpeg'; 
// teamImg- https://www.lummi.ai/photo/film-photo-of-a-brand-studio-in-copenhagen-with-ux-b2400446-2f1c-4a4c-8cd8-7379d274d0a6-h2tdP?
const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-text">
          <h2>About Travel Explorer</h2>
          <p>
            Travel Explorer is your companion to discover the world's most breathtaking destinations...
          </p>
          <p>
            Whether you’re a solo backpacker, a family on vacation, or a couple seeking romance—we’ve
            got tips, guides, galleries, and stories for everyone...
          </p>
        </div>
        <div className="about-image">
          <img src={aboutImg} alt="Travel Explorers" />
        </div>
      </div>


     {/* Why Travel Section */}
<div className="about-highlights">
  <h3>Why Travel With Us?</h3>
  <div className="highlight-grid">
    <div className="highlight-card">
      <h4> Expert Guides</h4>
      <p>Travel confidently with tips from experienced global explorers.</p>
    </div>
    <div className="highlight-card">
      <h4> Stunning Galleries</h4>
      <p>Get inspired by real stories and breathtaking travel photography.</p>
    </div>
    <div className="highlight-card">
      <h4> Smart Travel Planning</h4>
      <p>We help you pack, plan, and stay on budget with ease.</p>
    </div>
  </div>
</div>


     {/* Our Mission */}
<div className="about-mission">
  <h3>Our Mission</h3>
  <p>
    At <strong>Travel Explorer</strong>, our mission is to empower every traveler with the knowledge,
    confidence, and inspiration to explore the world fearlessly and meaningfully. We believe travel
    connects people, opens minds, and fuels growth.
  </p>
</div>


<div className="about-team">
  <h3>Meet the Team</h3>
  <p className="team-intro">Real travelers. Real storytellers. Real people just like you.</p>
  <div className="team-flex">
    <div className="team-image">
      <img src={teamImg} alt="Our Team" />
    </div>
    <div className="team-content">
      <p>
        Our small but mighty team of explorers, writers, and photographers is spread across the globe.
        We travel, document, and share real experiences to help others travel smarter. From mountain
        treks to sunset beaches, we live what we share — and it shows in every story we tell.
      </p>
      <p>
        We're not just a team — we’re a community of passionate adventurers building bridges across cultures.
      </p>
    </div>
  </div>
</div>



      {/* CTA */}
<div className="about-cta">
  <h4>Ready to Start Your Journey?</h4>
  <p>Join thousands of travelers who explore smarter with us.</p>
  <a href="/contact" className="about-btn">Join the Community</a>
</div>

    </div>
  );
};

export default About;
