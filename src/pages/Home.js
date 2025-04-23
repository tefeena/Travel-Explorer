import React from 'react';
import '../assets/css/Home.css';
import heroImage from '../assets/images/hero.jpeg';
import baliImg from '../assets/images/bali.jpeg';
import parisImg from '../assets/images/paris.jpeg';
import machuPicchuImg from '../assets/images/machu-picchu.jpeg';


const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1><span>Welcome to</span><br />Travel Explorer</h1>
          <p>Unlock the magic of travel through guides, stories, and inspiration.</p>
          <a href="/destinations" className="btn-explore">Explore Destinations</a>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Travel Adventure" />
          {/* https://www.lummi.ai/photo/paddleboarding-adventure-in-nature-yirbf */}
          </div>
      </section>


{/* Highlights */}
<section className="highlights">
  <h2>Why Choose Us?</h2>
  <div className="highlight-cards">
    <div className="card">
      <h3>Global Destinations</h3>
      <p>Discover popular and hidden gems from all over the world.</p>
    </div>
    <div className="card">
      <h3>Travel Tips</h3>
      <p>From packing hacks to visa advice, we've got you covered.</p>
    </div>
    <div className="card">
      <h3>Stunning Galleries</h3>
      <p>Feast your eyes on beautiful shots from travelers like you.</p>
    </div>
  </div>
</section>



      {/* Featured Trips */}
      <section className="featured-trips">
        <h2>Featured Trips</h2>
        <div className="trip-cards">
          <div className="trip-card">
            <img src={baliImg} alt="Bali" />
            <h4>Bali, Indonesia</h4>
            <p>Experience serenity in tropical paradise.</p>
          </div>
        <div className="trip-card">
          <img src={parisImg} alt="Paris" />
          {/*Paris- https://www.lummi.ai/photo/sunset-at-eiffel-tower-paris-eamzs */}
          <h4>Paris, France</h4>
          <p>Fall in love with the City of Light.</p>
        </div>

        <div className="trip-card">
          <img src={machuPicchuImg} alt="Machu Picchu" />
          {/* https://www.lummi.ai/photo/machu-picchu-peru-in-the-style-of-minimal-photogra-c952c66e-5b37-4556-bd1a-c60852f95776-4R4lU */}
          <h4>Machu Picchu, Peru</h4>
          <p>Explore the ancient Incan wonders.</p>
        </div>
        </div>
      </section>

     {/* Testimonials */}
<section className="testimonials">
  <h2>What Our Travelers Say</h2>
  <div className="testimonial-cards">
    <div className="testimonial">
      <p>"Travel Explorer made planning my trip so easy and fun!"</p>
      <span>- Sarah from Canada</span>
    </div>
    <div className="testimonial">
      <p>"The guides and galleries gave me real inspiration. I loved it."</p>
      <span>- Ahmed from UAE</span>
    </div>
  </div>
</section>


      {/* CTA */}
      <section className="community-cta">
        <h2>Join Our Travel Community</h2>
        <p>Get updates on new destinations, stories, and travel tips every week!</p>
        <a href="/contact" className="btn-join">Join Us</a>
      </section>

    </div>
  );
};

export default Home;
