import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../Assets/CarouselImages/pexels1.jpg';
import Image2 from '../Assets/CarouselImages/pexels2.jpg';
import Image3 from '../Assets/CarouselImages/pexels3.jpg';
import Image4 from '../Assets/CarouselImages/pexels4.jpg';
import './CarouselStyles.css'
import { useState } from 'react';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='CarouselMain'>
      <Carousel.Item className='Carousel-items'>
        <img src={Image1} alt="" />
      </Carousel.Item>
      <Carousel.Item className='Carousel-items'>
        <img src={Image2} alt="" />
      </Carousel.Item>
      <Carousel.Item className='Carousel-items'>
        <img src={Image3} alt="" />
      </Carousel.Item>
      <Carousel.Item className='Carousel-items'>
        <img src={Image4} alt="" />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;