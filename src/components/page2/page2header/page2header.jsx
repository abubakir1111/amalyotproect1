import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './page2header.scss'
import './page2responsive.scss'
import page1Logo from '../../../assets/img/logo/logo.png'
import page1wk from '../../../assets/icons/VK.svg'
import page2wh from '../../../assets/icons/WhatsApp.svg'
import page3tg from '../../../assets/icons/Tg.svg'
import kompanyImg from '../../../assets/img/o-Kompany-img/O-kompany-Img.png'
import kompanycard from '../page2header/page2headerjs'
import kompanyLeftImg from '../../../assets/img/o-Kompany-img/contact/Screenshot-xarita.png'
import { contact, contactIlovasi } from './adres'
import footerImg1 from '../../../assets/img/footer/Vector1.png'
import footerImg2 from '../../../assets/img/footer/Vector2.png'
import { footer } from '../../price/priceApi'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // To'liq Swiper CSS
import 'swiper/css/effect-coverflow'; // Coverflow effekt CSS
import 'swiper/css/pagination'; // Pagination CSS
import 'swiper/css/navigation'; // Navigation CSS
import logo from '../../../assets/img/logo/logo.png';
import wk from '../../../assets/icons/VK.svg';
import wh from '../../../assets/icons/WhatsApp.svg';
import tg from '../../../assets/icons/Tg.svg';
import menu from '../../../assets/img/header-navbar-responsive/burger-menu.png'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

function Page2header() {

  const swiperRef = useRef(null);

  const handlePrevClick = () => {
    swiperRef.current.swiper.slidePrev();
  };

  const handleNextClick = () => {
    swiperRef.current.swiper.slideNext();
  };
  const [menuVisible, setMenuVisible] = useState(false);
  const menuNav = () => {
    setMenuVisible(!menuVisible); // Menyuni ko'rinishi o'zgaradi
  }

  return (
    <div className='page2-header'>
      <div className="page2header-box">
        <div className="page2header-navbar">
          <div className="page2-navbar-right">
            <img src={page1Logo} alt="logo" />
            <Link className="navbar-right-p" to='/'>центр новостроек в Тюмени</Link>
          </div>
          <div className="page2header-navbar-center">
            <Link className='link' to='/'> Главная</Link>
            <Link className='link'>Все ЖК Тюмени</Link>
            <Link className='link'>Карта новостроек</Link>
            <Link to="/page" className='link'>О компа`нии</Link>
            <Link to="/page3" className='link'>Акции</Link>
          </div>

          <div className="navbar-icon-left">
            <img src={page1wk} alt="VK" />
            <img src={page2wh} alt="WhatsApp" />
            <img src={page3tg} alt="Telegram" />
          </div>
          <div className="navbar-btn">
            <button>Перезвоните мне</button>
          </div>
        </div>
      </div>

      <div className="na11vbar-menu">
        <div className="menu-navbar-right">
          <div className='menu-text-div'>
            <img src={logo} alt="Logo" />
            <Link className='menu-navbar-right-link' to='/'>центр новостроек в Тюмени</Link>
          </div>
          <div className='menu'>
            <button onClick={menuNav}><img src={menu} alt="burder-menu" /></button>
          </div>
        </div>
        <div className={`menu-navbar2122 ${menuVisible ? 'menu-navbar2121' : 'menu-navbar2122'}`}>
          <div className="menu-header-box">
            <div className="menu-navbar">
              <div className='menu-x-btn'>
                <button onClick={menuNav}>&times;</button>
              </div>
              <div className="navbar-right">
                <img src={logo} alt="Logo" />
                <Link className="navbar-right-p" to='/'>центр новостроек в Тюмени</Link>
              </div>
              <div className="menu-navbar-center">
                <Link className='link' to='/'> Главная</Link>
                <Link className='link'>Все ЖК Тюмени</Link>
                <Link className='link'>Карта новостроек</Link>
                <Link to="/page" className='link'>О компании</Link>
                <Link to="/page3" className='link'>Акции</Link>
              </div>
              <div className="navbar-left">
                <Link className='navbar-left-link'>8 800 000 00 00</Link>
              </div>
              <div className="navbar-icon-left">
                <img src={wk} alt="VK" />
                <img src={wh} alt="WhatsApp" />
                <img src={tg} alt="Telegram" />
              </div>
              <div className="navbar-btn">
                <button>Перезвоните мне</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page2-header-background-image">
        <div className="page2-header-background-div">
          <div className="page2-header-card">
            <div className="page2-header-card-box">
              <p className='page2-header-card-box-p'>О компании</p>
            </div>
          </div>
        </div>
      </div>
      <div className='page2-glavniy-o-kompnay'>

        <p>Главная / О компании</p>

      </div>
      <div className='o-kompany-main'>
        <div className="o-kompany-main-box">
          <div className="o-kompany-main-box-text-img-div">
            <div className='o-kompany-text'>
              <p>Оказываем услуги по подбору новостройки бесплатно. Подбор квартиры в новостройке является важным этапом при выборе жилья. Это процесс, который требует внимательности и грамотного подхода. Когда вы решаете приобрести квартиру в новостройке, вам стоит учитывать несколько ключевых факторов. Прежде всего, определите свои потребности и пожелания: сколько комнат вам необходимо, площадь, этаж, наличие балкона или лоджии. Также важно учесть расположение дома - близость к паркам, магазинам, общественному транспорту. Не забывайте о выборе надежного застройщика и изучении документации. Подбор квартиры в новостройке - это серьезный шаг на пути к приобретению жилья, поэтому рекомендуется обратиться к профессионалам, которые помогут вам сделать правильный выбор.</p>
            </div>
            <div className='o-kompany-img'>
              <img src={kompanyImg} alt="" />
            </div>
          </div>
          <div className="o-kompany-main-card">
            <div className="o-kompany-main-box-card-box">
              <div className="o-kompany-card-title">
                <p>Обращаясь к нам, вы получите</p>
              </div>
              <div className='o-kompany-card-div'>
                <div className="o-kompany-card-div-box">

                  {kompanycard.map((kompanycard) =>
                    <div className="o-kompany-card" key={kompanycard.id}>
                      <div className='o-kompany-card-img'>
                        <img src={kompanycard.img} alt="" />
                      </div>
                      <div className='o-kompany-card-text'>
                        <p>{kompanycard.text}</p>
                      </div>
                    </div>
                  )}
                </div>

              </div>
              <div className='o-kompany-contact'>
                <div className="o-kompany-box">
                  <div className="o-komapny-contact-div">
                    <div className="o-komapny-contact-div-right">
                      <div className="contact-text-p-div">
                        <p>Контакты</p>
                      </div>
                      <div className="contact-text-api-div">
                        {contact.map((contact) =>
                          <div className='contact-img-text-div'>

                            <img src={contact.kompanyImg} alt="" />
                            <p>{contact.kompanyText}</p>

                          </div>
                        )}
                        <div className='contact-ilovasi'>
                          <div className="contact-ilovasi-box">
                            {contactIlovasi.map((ilova) =>
                              <img src={ilova.contactIlovasiImg} alt="" />
                            )}
                          </div>
                        </div>

                      </div>
                    </div>
                    <div className="o-komapny-contact-div-left">
                      <img src={kompanyLeftImg} alt="" className='o-komapny-contact-div-left-img'/>
                    </div>
                  </div>
                </div>
              </div>

              <div className="footer-card">
                <div className="footer-box">
                  <div className="footer-card-box2">
                    <Swiper
                      ref={swiperRef}
                      grabCursor={true}
                      centeredSlides={true}
                      loop={true}
                      // slidesPerView={1.3} // Har bir qatorada uchta kartani ko'rsatish
                      spaceBetween={200} // Kartalar orasidagi bo'shliq
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
                      {footer.map((footer) =>
                        <SwiperSlide>

                          <div className="footer-card1">
                            <div className="footer-text-div">
                              <img src={footer.logo_img} alt="" className='footer-img1' />
                              <p className='footer-text-p'>{footer.logo_text}в</p>
                            </div>
                            <div className='footer-text-desc'>
                              <p>{footer.text1}</p>
                            </div>
                            <div className='footer-card-text-red'>
                              <p>{footer.text2}</p>
                            </div>
                          </div>


                        </SwiperSlide>
                      )}

                      <div className="footer-button-div">
                        <div className="footer-button-box">
                          <div className="footer-button">
                            <button onClick={handlePrevClick}><img src={footerImg1} alt="" /></button>
                            <button onClick={handleNextClick}><img src={footerImg2} alt="" /></button>
                          </div>
                        </div>
                      </div>
                    </Swiper>

                  </div>

                </div>
              </div>


              <div className="page2_contact">
                <div className="page2_contact-box">
                  <div className="page2_contact-card">
                    <div className="page2_contact-box-title">
                      <p> Мы готовы ответить на все Ваши вопросы</p>
                    </div>
                    <div className="page2_btn-card">
                      <div className="page2_btn-box-card">
                        <input type="text" placeholder='Имя' />
                        <input type="text" placeholder='+7 --- -- --' />
                        <button>Отправить</button>
                      </div>
                      <p className='page2_btn-card-p'>Нажимая кнопку «Отправить», вы подтверждаете, что согласны на обработку персональных данных.</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page2header