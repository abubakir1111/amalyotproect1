import React, { useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import img1 from '../../assets/img/backgorund/main-right-img.png';

export default function Slider({ card }) {
  const swiperRef = useRef(null);

  const handlePrevClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev(); // Correct access to swiper instance
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext(); // Correct access to swiper instance
    }
  };

  return (
    <div  className='silder-div-container'>
      <Swiper
        ref={swiperRef}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={1.1}
        spaceBetween={58}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        navigation={false} // Disable default navigation since you're using custom buttons
        modules={[EffectCoverflow, Pagination, Navigation]}
      >
         <SwiperSlide>
          <div className="main-box-card-right">
              <img src={img1} alt="Slide 1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="main-box-card-right">
              <img src={img1} alt="Slide 1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="main-box-card-right">
            
              <img src={img1} alt="Slide 1" />
            
          </div>
        </SwiperSlide>
        {/* Add more SwiperSlides as needed */}
      </Swiper>

      <div className="main-btn-card-slide">
        <button className="main-btn1" onClick={handlePrevClick}>
          <img src={card.right} alt="Previous" />
        </button>
        <button className="main-btn2" onClick={handleNextClick}>
          <img src={card.left} alt="Next" />
        </button>
      </div>
    </div>
  );
}