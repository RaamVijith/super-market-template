import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Slider.css';
import img1 from '../../../assets/imgs/slider/slider-6.png';
import img2 from '../../../assets/imgs/slider/slider-7.png'
import img3 from '../../../assets/imgs/slider/slider-8.png'

const Slider = () => {
  return (
    <div className='sliderMain'>
       <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={30000}
      showArrows={true}
    >
      <div className="slide">
         <img src={img1} alt="Slide 1" />
        <div className="overlay">
          <h2>NEW ARRIVALS</h2>
          <h1>Auto parts at reasonable prices</h1>
          <p>With constant discounts</p>
          <a href="#collections">See All Collections</a>
        </div>
      </div>
      <div className="slide">
        <img src={img2} alt="Slide 2" />
        <div className="overlay">
          <h2>NEW ARRIVALS</h2>
          <h1>Auto parts at reasonable prices</h1>
          <p>With constant discounts</p>
          <a href="#collections">See All Collections</a>
        </div>
      </div>
      <div className="slide">
          <img src={img3} alt="Slide 3" />
         <div className="overlay">
          <h2>NEW ARRIVALS</h2>
          <h1>Auto parts at reasonable prices</h1>
          <p>With constant discounts</p>
          <a href="#collections">See All Collections</a>
        </div>
      </div>
    </Carousel>
    </div>
   
  );
};

export default Slider;
