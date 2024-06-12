import React from 'react';
import { useState } from 'react';
import './OurStoryandVision.css';
import leftArrow from "../../assets/icon-chevron-left.svg";
import rightArrow from "../../assets/icon-chevron-right.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Pagination, FreeMode } from 'swiper/modules';


const OurStoryandVision = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const handeleClick = (direction) => {
    if (direction === "left") {
      setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : slides.length - 1);
    } else {
      setCurrentIndex(currentIndex < slides.length - 1 ? currentIndex + 1 : 0);
    }
  }

  return (
    <>
      <div className="our-story-and-vision">
        <h1>Our Story and Vision</h1>
        <div className="sub-content">
          {slides.map((slide, index) => (
            <div key={slide.id} className={`card-container ${index === currentIndex ? 'active' : ''}`}>
              <img src={slide.image} className='card-image' alt='first-story-card' />
              <div className='card-text'>{slide.content}</div>
            </div>
          ))}
        </div>
        <div className='slider-buttons'>
          <img type={"button"} className='button-image' src={leftArrow} alt="left arrow" onClick={() => handeleClick("left")} />
          <img type={"button"} className='button-image' src={rightArrow} alt="right arrow" onClick={() => handeleClick("right")} />
        </div>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, FreeMode]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          390: {
            slidesPerView: 1,
          },
        }}
        className="swiper-container"
      >
        {slides.map((slide, index) => (
          <SwiperSlide >
            <div key={slide.id} className='swiper-card-container' >
              <img src={slide.image} alt='first-story-card' className='swiper-card-image' />
              <div className='swiper-card-text' >{slide.content}</div>
            </div>
          </SwiperSlide>

        ))}
      </Swiper>
    </>
  );
};

export default OurStoryandVision;

