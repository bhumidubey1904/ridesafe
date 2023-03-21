import React from 'react'
import './header.css';
import CTA from './CTX'
import accident1 from '../../assets/accident1.jpeg';
import accident2 from '../../assets/accident2.jpeg';
import accident3 from '../../assets/accident3.jpeg';
import {FiPhoneCall} from 'react-icons/fi';
import Logo from './Logo';



// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay} from "swiper";

const Header = () => {
  return (
    <header>
      <Logo/>
      <div className="flex flex-col justify-center items-center">
        <h1 className='w-2/3 text-center text-gray-500 italic'>“I don’t want to die in a car accident. When I die it’ll be a glorious day. It’ll probably be a waterfall.” – River Phoenix</h1>
        <CTA/>

        <Swiper
        spaceBetween={40}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper box_scroll_bar"

      >
        <SwiperSlide >
          <img src={accident1} alt="Img" className='rounded-md shadow-md'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={accident2} alt="Img" className='rounded-md shadow-md'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={accident3} alt="Img" className='rounded-md shadow-md'/>
        </SwiperSlide>
      </Swiper>
        
      </div>

      <a href="tel:+91 8320871229" className='absolute bottom-14 left-20 text-white bg-red-500 h-16 text-2xl font-serif rounded-md shadow-lg w-60 flex items-center justify-center space-x-2'>  <FiPhoneCall/> <span>Emergency ?</span> </a>
    </header>
  )
}

export default Header