import React from 'react';
import '../assets/css/Gallery.css';
import img1 from '../assets/images/bali.jpeg';
import img2 from '../assets/images/cape-town.jpeg';
import img3 from '../assets/images/tokyo.jpeg';
 //img3- https://www.lummi.ai/photo/vacations-in-shibuya-crossing-jouralism-90s-aerial-sh-a75a532e-ab1d-48fa-930a-7c9bd69bd6eb-0opQR
import img4 from '../assets/images/newyork.jpeg';
import img5 from '../assets/images/rome.jpeg';
import img6 from '../assets/images/paris.jpeg';
 /*Paris- https://www.lummi.ai/photo/sunset-at-eiffel-tower-paris-eamzs */
import img7 from '../assets/images/machu-picchu.jpeg';
/*img7- https://www.lummi.ai/photo/machu-picchu-peru-in-the-style-of-minimal-photogra-c952c66e-5b37-4556-bd1a-c60852f95776-4R4lU */
import img8 from '../assets/images/Tranquil.jpeg';
//img8- https://www.lummi.ai/photo/woman-walking-through-historic-stone-gateway-Ng83D??
import img9 from '../assets/images/SereneTropicalPier.jpeg';
// https://www.lummi.ai/photo/raja-ampat-islands-in-the-style-of-gongbi-olympus-100a6818-70b8-4a8d-b1a1-328a3d64b3a3-Ow4cn
import img10 from '../assets/images/TwilightSerenityChalet.jpeg';
// https://www.lummi.ai/photo/the-cabin-is-on-the-front-shore-in-the-style-of-nikon-8fad37a5-2724-4049-9b38-fc16b844d0d9-_32qn

const galleryImages = [img1, img2, img3, img4, img5, img6,img7,img8,img9,img10];


const Gallery = () => {
  return (
    <div className="gallery-page">
      <h2>Photo Gallery</h2>
      <p className="gallery-intro">Capture your moments and share your journeys with the world.</p>

      <div className="gallery-grid">
        {galleryImages.map((src, index) => (
          <div className="gallery-item" key={index}>
            <img src={src} alt={`Travel memory ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
