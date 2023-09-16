import React, { useState } from 'react';
import Image1 from '../assets/images/aaron-burden.jpg' ;
import Image2 from '../assets/images/mitchell-luo.jpg' ;
import Image3 from '../assets/images/rhys-moult.jpg' ;

const PhotoCarousel = () => {
    const images =[
    {
      url: Image1,
      description: 'Boat in the water',
    },
    {
      url: Image2,
      description: 'City skyline at night',
    },
    {
      url: Image3,
      description: 'Lush green forest',
    },
]
    
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="photo-carousel">
      <button onClick={goToPrevious}
      style={{
        fontSize:'30px',
        fontWeight: 'bold',
        background: 'rgba(0, 0, 0, 0.3)',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        outline: 'none',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',}}> &#10094;</button>
      <img
        className="carousel-image"
        src={images[currentIndex].url}
        alt={images[currentIndex].description} 
        style={{   
          width: '100%',
          height: '700px',
          border: '2px solid black' // Example: Add a red border
        }}
      />
      <button onClick={goToNext} style={{
        fontSize:'30px',
        fontWeight: 'bold',
        background: 'rgba(0, 0, 0, 0.3)',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        outline: 'none',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        right: '0',
      }}>&#10095;</button>
    </div>
  );
};

export default PhotoCarousel;
