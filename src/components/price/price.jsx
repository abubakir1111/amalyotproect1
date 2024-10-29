import './price.scss';
import { footer, price } from './priceApi';
import footerImg1 from '../../assets/img/footer/Vector1.png';
import footerImg2 from '../../assets/img/footer/Vector2.png';
import { Fragment, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import emailjs, { send } from '@emailjs/browser';

function Price() {
    const swiperRef = useRef(null);
    const form = useRef();

    const handlePrevClick = () => {
        swiperRef.current.swiper.slidePrev();
    };

    const handleNextClick = () => {
        swiperRef.current.swiper.slideNext();
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_7jdl404', 'template_tldzmo5', form.current, 'ug9-0QW64JJPnBjKF') 
            .then(
                () => {
                    console.log('SUCCESS!');
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };

    return (
        <Fragment>
            <div className='price'>
                <div className="price-box">
                    <div className="price-card">
                        <div className="price-text-card">
                            <div className="price-text-card-div1">
                                <p className="price-text-card-p1">Ипотечные программы</p>
                            </div>
                            <div className="price-text-card-div2">
                                <p className='price-text-card-p2'>Расчёты являются приблизительными. За точной информацией обращайтесь в офис продаж по тел. +7 812 604-25-68</p>
                            </div>
                        </div>
                        <div className="price-div-programma">
                            <div className="price-div-programma-box">
                                <div className="price-text1">
                                    <p>Программа</p>
                                </div>
                                <div className='price-text-card'>
                                    <p className='price-text'>Ставка</p>
                                    <div className='price-text-card-gap'>
                                        <p>Первый взнос</p>
                                        <p>Срок, лет</p>
                                        <p>Платёж руб./мес.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bank'>
                            {price.map((item, index) => (
                                <div className="bank-box" key={index}>
                                    <div className="bank-box-text-card">
                                        <div className="bank-logo">
                                            <div className="bank-text-gap">
                                                <div className="logo">
                                                    <img src={item.bankLogo} alt="" />
                                                </div>
                                                <div className="bank-logo-text">
                                                    <p className='pro1'>Программа</p>
                                                    <p className='pro2'>{item.bankLogoText}</p>
                                                </div>
                                            </div>
                                            <div className="bank-text-center">
                                                <div className="bank-text-center-div">
                                                    <div className='bank-text-left'>
                                                        <p>{item.bankLeftP1}</p>
                                                        <p>{item.bankLeftP2}</p>
                                                        <p>{item.bankLeftP3}</p>
                                                    </div>
                                                    <div className="bank-left">
                                                        <p>{item.bankLeftText1}</p>
                                                        <p>{item.bankLeftText2}</p>
                                                    </div>
                                                </div>
                                                <div className='bank-left-btn'>
                                                    <button className='bank-left-btn-info'>{item.bankLeftBtn}</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='bank-border-div'>
                                        <div className="div-border"></div>
                                    </div>
                                </div>
                            ))}
                            <div className='bank-btn'>
                                <button>Показать еще</button>
                            </div>
                        </div>
                        <div className='bank2'>
                            <Swiper
                                ref={swiperRef}
                                grabCursor={true}
                                centeredSlides={true}
                                loop={true}
                                slidesPerView={1.9}
                                spaceBetween={0}
                                coverflowEffect={{
                                    rotate: 0,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 1,
                                }}
                                breakpoints={{
                                    260: {
                                        slidesPerView: 1.2,
                                        spaceBetween: 200,
                                    },
                                    360: {
                                        slidesPerView: 1.4,
                                        spaceBetween: 200,
                                    },
                                    440: {
                                        slidesPerView: 3.3,
                                        spaceBetween: 200,
                                    },
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
                                {price.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="bank-box" key={index}>
                                            <div className="bank-box-text-card">
                                                <div className="bank-logo">
                                                    <div className="bank-text-gap">
                                                        <div className="logo">
                                                            <img src={item.bankLogo} alt="" />
                                                        </div>
                                                        <div className="bank-logo-text">
                                                            <p className='pro1'>Программа</p>
                                                            <p className='pro2'>{item.bankLogoText}</p>
                                                        </div>
                                                    </div>
                                                    <div className="bank-text-center">
                                                        <div className="bank-text-center-div">
                                                            <div className='bank-text-left'>
                                                                <p>{item.bankLeftP1}</p>
                                                                <p>{item.bankLeftP2}</p>
                                                                <p>{item.bankLeftP3}</p>
                                                            </div>
                                                            <div className="bank-left">
                                                                <p>{item.bankLeftText1}</p>
                                                                <p>{item.bankLeftText2}</p>
                                                            </div>
                                                        </div>
                                                        <div className='bank-left-btn'>
                                                            <button className='bank-left-btn-info'>{item.bankLeftBtn}</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='bank-border-div'>
                                                <div className="div-border"></div>
                                            </div>
                                        </div>

                                    </SwiperSlide>


                                ))}
                                <div className='bank-btn'>
                                    <button>Показать еще</button>
                                </div>
                            </Swiper>
                        </div>



                    </div>
                </div>
                <div className="contact">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="contact-box">
                            <div className="contact-card">
                                <div className="contact-box-title">
                                    <p>Мы готовы ответить на все Ваши вопросы</p>
                                </div>
                                <div className="btn-card">
                                    <div className="btn-box-card">
                                        <input type="text" placeholder='Имя' name='from_name' required />
                                        <input type="tel" placeholder='+7 --- -- --' name='from_number' required />
                                        <button type="submit" onClick={sendEmail}>Отправить</button>
                                    </div>
                                    <p className='btn-card-p'>Нажимая кнопку «Отправить», вы подтверждаете, что согласны на обработку персональных данных.</p>
                                </div>
                            </div>
                        </div>
                    </form>

                    <div className='contact-text'>
                        <p>Отзывы</p>
                    </div>
                </div>
                <div className="footer-card">
                    <div className="footer-box">
                        <div className="footer-card">
                            <Swiper
                                ref={swiperRef}
                                grabCursor={true}
                                centeredSlides={true}
                                loop={true}
                                slidesPerView={1.9}
                                spaceBetween={0}
                                coverflowEffect={{
                                    rotate: 0,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 1,
                                }}
                                modules={[EffectCoverflow, Pagination, Navigation]}
                            >
                                {footer.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="footer-card1">
                                            <div className="footer-text-div">
                                                <img src={item.logo_img} alt="" className='footer-img1' />
                                                <p className='footer-text-p'>{item.logo_text}в</p>
                                            </div>
                                            <div className='footer-text-desc'>
                                                <p>{item.text1}</p>
                                            </div>
                                            <div className='footer-card-text-red'>
                                                <p>{item.text2}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
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

                <div className="footer-card2">
                    <div className="footer-box">
                        <div className="footer-card">
                            <Swiper
                                ref={swiperRef}
                                grabCursor={true}
                                centeredSlides={true}
                                loop={true}
                                slidesPerView={1.1}
                                spaceBetween={0}
                                coverflowEffect={{
                                    rotate: 0,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 1,
                                }}
                                modules={[EffectCoverflow, Pagination, Navigation]}
                            >
                                {footer.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="footer-card1">
                                            <div className="footer-text-div">
                                                <img src={item.logo_img} alt="" className='footer-img1' />
                                                <p className='footer-text-p'>{item.logo_text}в</p>
                                            </div>
                                            <div className='footer-text-desc'>
                                                <p>{item.text1}</p>
                                            </div>
                                            <div className='footer-card-text-red'>
                                                <p>{item.text2}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
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
            </div>
        </Fragment>
    );
}

export default Price;
