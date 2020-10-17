import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './TopWorks.css'
import car1 from '../../../images/carousel-4.png'
import car4 from '../../../images/carousel-1.png'
import car5 from '../../../images/carousel-5.png'
import car2 from '../../../images/carousel-2.png'

const TopWorks = () => {
    return (
        <div className='top-works text-center py-5 mb-5'>
      <h1 className='top-title py-5'>Here are some of <span>our works</span></h1>
      <OwlCarousel className='owl-theme mt-5 container'
        loop
        autoplay
        autoplayTimeout={2000}
        margin={20} 
        dots
      >
        
        <div><img src={car2} alt="" /></div>
        <div><img src={car4} alt="" /></div>
        <div><img src={car1} alt="" /></div>
        <div><img src={car5} alt="" /></div>
        <div><img src={car2} alt="" /></div>
        <div><img src={car1} alt="" /></div>
        <div><img src={car4} alt="" /></div>

      </OwlCarousel>
    </div>
    );
};

export default TopWorks;