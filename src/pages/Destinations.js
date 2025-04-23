import React from 'react';
import '../assets/css/Destinations.css';
import baliImg from '../assets/images/bali.jpeg';
import parisImg from '../assets/images/paris.jpeg';
import machuPicchuImg from '../assets/images/machu-picchu.jpeg';
import tokyoImg from '../assets/images/tokyo.jpeg';
import santoriniImg from '../assets/images/santorini.jpeg';
import newyorkImg from '../assets/images/newyork.jpeg';
import romeImg from '../assets/images/rome.jpeg';
import capetownImg from '../assets/images/cape-town.jpeg';

const destinations = [
  {
    name: 'Bali, Indonesia',
    image: baliImg,
    /* https://www.lummi.ai/photo/paddleboarding-adventure-in-nature-yirbf */
    description: 'Relax on tropical beaches, explore temples, and embrace Balinese culture.',
  },
  {
    name: 'Paris, France',
    image: parisImg,
    /*Paris- https://www.lummi.ai/photo/sunset-at-eiffel-tower-paris-eamzs */
    description: 'The city of light, filled with art, romance, and historic landmarks.',
  },
  {
    name: 'Machu Picchu, Peru',
    image: machuPicchuImg,
    /* https://www.lummi.ai/photo/machu-picchu-peru-in-the-style-of-minimal-photogra-c952c66e-5b37-4556-bd1a-c60852f95776-4R4lU */
    description: 'An ancient Incan city nestled in the Andes with breathtaking views.',
  },
  {
    name: 'Tokyo, Japan',
    image: tokyoImg,
    // https://www.lummi.ai/photo/vacations-in-shibuya-crossing-jouralism-90s-aerial-sh-a75a532e-ab1d-48fa-930a-7c9bd69bd6eb-0opQR
    description: 'A fusion of tradition and technology in one incredible city.',
  },
  {
    name: 'Santorini, Greece',
    image: santoriniImg,
    // https://www.lummi.ai/photo/panoramic-cliffside-village-in-the-cyclades-hs-YF
    description: 'Whitewashed houses, blue domes, and sunsets over the Aegean Sea.',
  },
  {
    name: 'New York City, USA',
    image: newyorkImg,
    // https://www.lummi.ai/photo/business-marketing-times-square-new-york-city-in-the-83a4c3da-dffe-4209-94df-201e021459e8-hfsdp?
    description: 'The city that never sleeps — a cultural, fashion, and culinary hub.',
  },
  {
    name: 'Rome, Italy',
    image: romeImg,
    // https://www.lummi.ai/photo/quaint-european-town-street-z4dyu
    description: 'Walk through history among ancient ruins, art, and espresso cafes.',
  },
  {
    name: 'Cape Town, South Africa',
    image: capetownImg,
    // https://www.lummi.ai/photo/majestic-mountain-sunset-over-coastal-city-9YK9F
    description: 'Mountains, beaches, and vibrant city life at the tip of Africa.',
  },
  
];

const Destinations = () => {
  return (
    <div className="destinations-page">
      <h2>Explore Destinations</h2>
      <p className="intro-text">
        From mystical mountains to sun-kissed beaches — pick your dream getaway.
      </p>

      <div className="destination-grid">
        {destinations.map((place, index) => (
          <div className="destination-card" key={index}>
            <img src={place.image} alt={place.name} />
            <div className="destination-info">
              <h3>{place.name}</h3>
              <p>{place.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
