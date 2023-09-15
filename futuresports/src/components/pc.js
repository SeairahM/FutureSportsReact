import React, { useState } from 'react';

const PC = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);


  return (
    <div className="photo-carousel">
      <img src={images} alt='aaaaa'/>
    </div>
  );
};

export default PC;
