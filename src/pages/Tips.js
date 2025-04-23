import React from 'react';
import '../assets/css/Tips.css';

const tips = [
  {
    title: 'Pack Light & Smart',
    description: 'Stick to essentials and plan your outfits. Use packing cubes to save space and stay organized.',
  },
  {
    title: 'Keep Important Documents Safe',
    description: 'Make digital copies of your passport, ID, and travel insurance. Keep backups online or in your email.',
  },
  {
    title: 'Learn Basic Local Phrases',
    description: 'Knowing “Hello,” “Thank you,” or “Help” in the local language goes a long way.',
  },
  {
    title: 'Check Visa & Entry Requirements',
    description: 'Always check the latest visa rules and travel restrictions before your trip.',
  },
  {
    title: 'Carry a Portable Charger',
    description: 'A dead phone is a travel nightmare. Keep a power bank handy for emergencies.',
  },
  {
    title: 'Stay Hydrated & Eat Local',
    description: 'Drink plenty of water and try local foods to make the most of your experience.',
  },
];

const Tips = () => {
  return (
    <div className="tips-page">
      <h2>Travel Tips</h2>
      <p className="tips-intro">Helpful advice to make your journey smooth, safe, and unforgettable.</p>

      <div className="tips-grid">
        {tips.map((tip, index) => (
          <div className="tip-card" key={index}>
            <h3>{tip.title}</h3>
            <p>{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tips;
