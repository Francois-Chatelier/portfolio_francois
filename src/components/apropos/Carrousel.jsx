import React from 'react';
import Carousel from 'nuka-carousel';
import casque from '../images/casque.jpg';

const Carrousel = () => {
  return (
    <div>
      <Carousel>
        <img src={casque} alt="casque de moto" className="gallery" />
        <img src={casque} alt="casque de moto" className="gallery" />
        <img src={casque} alt="casque de moto" className="gallery" />
        <img src={casque} alt="casque de moto" className="gallery" />
      </Carousel>
    </div>
  );
};

export default Carrousel;
