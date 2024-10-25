import React, { Fragment, useRef } from 'react';
import './main.scss';
import { Link } from 'react-scroll';
import { mainApi } from './mainApi.js';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import Slider from './slider.jsx';
function Main({ xona, xonali, rubl, xona2, rub2, mainData }) {
  const navigate = useNavigate()
  const swiperRef = useRef(null);
  const Click = () => {
    navigate('/page4')
  }
  return (
    <Fragment>
      <div className='main'>
        <div className="main-box">
          <div className="main-box-div">
            {mainData && mainData.map((card) =>
              <div className="main-box-card" key={card.id} >
                <div className="main-box-card2">
                  <div className='main-card-btn'>
                    <Slider card={card} mainData={mainData} />
                  </div>
                  <div className="main-box-card-left">
                    <div className="main-left-box">
                      <div className="main-left-box-text-card">
                        <div className="main-left-right-text">
                          <p className='main-left-right-p1'>{card.mainTextP1}</p>
                          <p className='main-left-right-p2'>{card.mainTextaction}</p>
                        </div>
                      </div>
                      <div className="main-box-text-left-box">
                        <div className="main-box-left-bottom-text">
                          <div className="bottom-text">
                            <p className='bottom-text-p1'>от {xona} р</p>
                            <p className='bottom-text-p2'>{card.bottomTextP2}</p>
                          </div>
                          <div className="top-text">
                            <p>{card.topText}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='main-center-div'>
                      <div className="main-box-center-div">
                        <div className="main-right-p">
                          <p>{card.mainRigh1text}</p>
                          <p>{xonali}</p>
                          <p>{xonali}</p>
                        </div>
                        <div className="main-center-p">
                          <p>{rubl}</p>
                          <p>{rubl}</p>
                          <p>{rubl}</p>
                        </div>
                        <div className="main-left-p">
                          <p>{xona2}</p>
                          <p>{xona2}</p>
                        </div>
                        <div className="main-left-p2">
                          <p>{rub2}</p>
                          <p>{rub2}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="main-top">
                  <div className="main-top-box">
                    <div className="main-right-btn">
                      {card.mainRightBtn.map((btn, index) =>
                        <button key={btn.id}><img src={card.imgbtn[index]} alt={`Button ${index + 1}`} />{btn}</button>
                      )}
                    </div>
                    <div className="main-center-loaction">
                      <img src={card.loactionimg} alt="" />
                      <Link className='main-center-location-link'>{card.mainCenterLocation}</Link>
                    </div>
                    <div className="main-center-left">
                      <button onClick={Click}>{card.mainCenterLeftbtn}</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className='main-box-button'>
            <button>Показать еще</button>
          </div>
        </div>
      </div>

     <div className='main2'>
        <div className="main-box">
          <div className="main-box-div">
            <Swiper
              ref={swiperRef}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={1.4}
              spaceBetween={10}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1
              }}
                breakpoints={{
                        640: {
                          slidesPerView: 1, // 1 slide per view on small screens
                          spaceBetween: 20, // space between slides
                        },
                        768: {
                          slidesPerView: 2, // 2 slides per view on medium screens
                          spaceBetween: 30,
                        },
                        1024: {
                          slidesPerView: 2.4, // 3 slides per view on large screens
                          spaceBetween: 40,
                        },
                      }}
              modules={[EffectCoverflow, Pagination, Navigation]}
            >
              {mainData && mainData.map((card) =>
                <SwiperSlide>
                  <div className="main-box-card" key={card.id} onClick={Click}>
                    <div className="main-box-card2">
                      <div className="main-box-card-right">
                        <div className='main-card-btn'>
                          <button className='main-btn1'><img src={card.right} alt="" /></button>
                          <button className='main-btn2'><img src={card.left} alt="" /></button>
                        </div>
                      </div>
                      <div className="main-box-card-left">
                        <div className="main-left-box">
                          <div className="main-left-box-text-card">
                            <div className="main-left-right-text">
                              <p className='main-left-right-p1'>{card.mainTextP1}</p>
                              <p className='main-left-right-p2'>{card.mainTextaction}</p>
                            </div>
                          </div>
                          <div className="main-box-text-left-box">
                            <div className="main-box-left-bottom-text">
                              <div className="bottom-text">
                                <p className='bottom-text-p1'>{card.bottomTextP1}</p>
                                <p className='bottom-text-p2'>{card.bottomTextP2}</p>
                              </div>
                              <div className="top-text">
                                <p>{card.topText}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='main-center-div'>
                          <div className="main-box-center-div">
                            <div className="main-right-p">
                              <p>{card.mainRigh1text}</p>
                              <p>{card.mainRigh2text}</p>
                              <p>{card.mainRigh3text}</p>
                            </div>
                            <div className="main-center-p">
                              <p>{card.mainCenterP}</p>
                              <p>{card.mainCenterP}</p>
                              <p>{card.mainCenterP}</p>
                            </div>
                            <div className="main-left-p">
                              <p>{card.mainleftptext1}</p>
                              <p>{card.mainleftptext2}</p>
                            </div>
                            <div className="main-left-p2">
                              <p>{card.mainLeftP1}</p>
                              <p>{card.mainLeftP2}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="main-top">
                      <div className="main-top-box">
                        <div className="main-right-btn">
                          {card.mainRightBtn.map((btn, index) =>
                            <button key={btn.id}><img src={card.imgbtn[index]} alt={`Button ${index + 1}`} />{btn}</button>
                          )}
                        </div>
                        <div className="main-center-loaction">
                          <img src={card.loactionimg} alt="" />
                          <Link className='main-center-location-link'>{card.mainCenterLocation}</Link>
                        </div>
                        <div className="main-center-left">
                          <button onClick={Click}>{card.mainCenterLeftbtn}</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              )}
            </Swiper>
          </div>
          <div className='main-box-button'>
            <button>Показать еще</button>
          </div>
        </div>
      </div>

      <div className='main3'>
        <div className="main-box">
          <div className="main-box-div">
            <Swiper
              ref={swiperRef}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={0.6}
              spaceBetween={10}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1, 
                  spaceBetween: 20, 
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 2.4, 
                  spaceBetween: 40,
                },
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
            >
              {mainData && mainData.map((card) =>
                <SwiperSlide>
                  <div className="main-box-card" key={card.id} onClick={Click}>
                    <div className="main-box-card2">
                      <div className="main-box-card-right">
                        <div className='main-card-btn'>
                          <button className='main-btn1'><img src={card.right} alt="" /></button>
                          <button className='main-btn2'><img src={card.left} alt="" /></button>
                        </div>
                      </div>
                      <div className="main-box-card-left">
                        <div className="main-left-box">
                          <div className="main-left-box-text-card">
                            <div className="main-left-right-text">
                              <p className='main-left-right-p1'>{card.mainTextP1}</p>
                              <p className='main-left-right-p2'>{card.mainTextaction}</p>
                            </div>
                          </div>
                          <div className="main-box-text-left-box">
                            <div className="main-box-left-bottom-text">
                              <div className="bottom-text">
                                <p className='bottom-text-p1'>{card.bottomTextP1}</p>
                                <p className='bottom-text-p2'>{card.bottomTextP2}</p>
                              </div>
                              <div className="top-text">
                                <p>{card.topText}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='main-center-div'>
                          <div className="main-box-center-div">
                            <div className="main-right-p">
                              <p>{card.mainRigh1text}</p>
                              <p>{card.mainRigh2text}</p>
                              <p>{card.mainRigh3text}</p>
                            </div>
                            <div className="main-center-p">
                              <p>{card.mainCenterP}</p>
                              <p>{card.mainCenterP}</p>
                              <p>{card.mainCenterP}</p>
                            </div>
                            <div className="main-left-p">
                              <p>{card.mainleftptext1}</p>
                              <p>{card.mainleftptext2}</p>
                            </div>
                            <div className="main-left-p2">
                              <p>{card.mainLeftP1}</p>
                              <p>{card.mainLeftP2}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="main-top">
                      <div className="main-top-box">
                        <div className="main-right-btn">
                          {card.mainRightBtn.map((btn, index) =>
                            <button key={btn.id}><img src={card.imgbtn[index]} alt={`Button ${index + 1}`} />{btn}</button>
                          )}
                        </div>
                        <div className="main-center-loaction">
                          <img src={card.loactionimg} alt="" />
                          <Link className='main-center-location-link'>{card.mainCenterLocation}</Link>
                        </div>
                        <div className="main-center-left">
                          <button onClick={Click}>{card.mainCenterLeftbtn}</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              )}
            </Swiper>
          </div>
          <div className='main-box-button'>
            <button>Показать еще</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Main
