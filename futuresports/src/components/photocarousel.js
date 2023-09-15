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
      <button onClick={goToPrevious}>Previous</button>
      <img
        className="carousel-image"
        src={images[currentIndex].url}
        alt={images[currentIndex].description}
      />
      <p>{images[currentIndex].description}</p>
      <button onClick={goToNext}>Next</button>
    </div>
  );
};

export default PhotoCarousel;
