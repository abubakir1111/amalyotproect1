// import './price.scss'
// import { price } from './priceApi'
// import footerIcons from '../../assets/img/footer/footer.png'
// import footerImg1 from '../../assets/img/footer/Vector1.png'
// import footerImg2 from '../../assets/img/footer/Vector2.png'
// import { Fragment } from 'react'
// import Swiper from 'swiper'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css'; // Swiper CSS

// function Price() {

//     return (
//         <Fragment>
//             <div className='price'>
//                 <div className="price-box">
//                     <div className="price-card" >
//                         <div className="price-text-card">
//                             <div className="price-text-card-div1">
//                                 <p className="price-text-card-p1">Ипотечные программы</p>
//                             </div>
//                             <div className="price-text-card-div2">
//                                 <p className='price-text-card-p2'>Расчёты являются приблизительными.За точной информацией обращайтесь в офис продаж по тел. +7 812 604-25-68</p>
//                             </div>
//                         </div>
//                         <div className="price-div-programma">
//                             <div className="price-div-programma-box">
//                                 <div className="price-text1">
//                                     <p>Программа </p>
//                                 </div>
//                                 <div className='price-text-card'>
//                                     <p className='price-text'>Ставка</p>
//                                     <div className='price-text-card-gap'>
//                                         <p>Первый взнос</p>
//                                         <p>Срок, лет</p>
//                                         <p>Платёж руб./мес.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='bank'>
//                             {price.map((price) =>
//                                 <div className="bank-box">
//                                     <div className="bank-box-text-card">
//                                         <div className="bank-logo">

//                                             <div className="bank-text-gap">
//                                                 <div className="logo">
//                                                     <img src={price.bankLogo} alt="" />
//                                                 </div>
//                                                 <div className="bank-logo-text">
//                                                     <p>{price.bankLogoText}</p>
//                                                 </div>
//                                             </div>
//                                             <div className="bank-text-center">
//                                                 <div className="bank-text-center-div">
//                                                     <div className='bank-text-left'>
//                                                         <p>{price.bankLeftP1}</p>
//                                                         <p>{price.bankLeftP2}</p>
//                                                         <p>{price.bankLeftP3}</p>
//                                                     </div>
//                                                     <div className="bank-left">
//                                                         <p>{price.bankLeftText1}</p>
//                                                         <p>{price.bankLeftText2}</p>
//                                                     </div>
//                                                 </div>
//                                                 <div className='bank-left-btn'>
//                                                     <button className='bank-left-btn-info'>{price.bankLeftBtn}</button>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className='bank-border-div'>
//                                         <div className="div-border"></div>
//                                     </div>
//                                 </div>
//                             )}
//                             <div className='bank-btn'>
//                                 <button>Показать еще</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="contact">
//                     <div className="contact-box">
//                         <div className="contact-card">
//                             <div className="contact-box-title">
//                                 <p> Мы готовы ответить на все Ваши вопросы</p>
//                             </div>
//                             <div className="btn-card">
//                                 <div className="btn-box-card">
//                                     <input type="text" placeholder='Имя' />
//                                     <input type="text" placeholder='+7 --- -- --' />
//                                     <button>Отправить</button>
//                                 </div>
//                                 <p className='btn-card-p'>Нажимая кнопку «Отправить», вы подтверждаете, что согласны на обработку персональных данных.</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='contact-text'>
//                         <p>Отзывы</p>
//                     </div>
//                 </div>
//                 <div className="footer-card">
//                     <div className="footer-box">
//                         <div className="footer-card">
//                             <Swiper>
//                                 <SwiperSlide>
//                                     <div className="footer-card1">
//                                         <div className="footer-text-div">
//                                             <img src={footerIcons} alt="" className='footer-img1' />
//                                             <p className='footer-text-p'>Максим Кузнецов</p>
//                                         </div>
//                                         <div className='footer-text-desc'>
//                                             <p>Я хотел бы поделиться своим положительным опытом сотрудничества с риелтором. Работа данного специалиста оказалась на самом высоком уровне, и я остался очень доволен результатом его работы. Риелтор проявил глубокие знания в области недвижимости</p>
//                                         </div>
//                                         <div className='footer-card-text-red'>
//                                             <p>Читать отзыв </p>
//                                         </div>
//                                     </div>
//                                 </SwiperSlide>
//                                 <SwiperSlide>
//                                     <div className="footer-card1">
//                                         <div className="footer-text-div">
//                                             <img src={footerIcons} alt="" className='footer-img1' />
//                                             <p className='footer-text-p'>Максим Кузнецов</p>
//                                         </div>
//                                         <div className='footer-text-desc'>
//                                             <p>Я хотел бы поделиться своим положительным опытом сотрудничества с риелтором. Работа данного специалиста оказалась на самом высоком уровне, и я остался очень доволен результатом его работы. Риелтор проявил глубокие знания в области недвижимости</p>
//                                         </div>
//                                         <div className='footer-card-text-red'>
//                                             <p>Читать отзыв </p>
//                                         </div>
//                                     </div>
//                                 </SwiperSlide>
//                                 <SwiperSlide>
//                                     <div className="footer-card2">
//                                         <div className="footer-text-div">
//                                             <img src={footerIcons} alt="" className='footer-img1' />
//                                             <p className='footer-text-p'>Максим Кузнецов</p>
//                                         </div>
//                                         <div className='footer-text-desc'>
//                                             <p>Я хотел бы поделиться своим положительным опытом сотрудничества с риелтором. Работа данного специалиста оказалась на самом высоком уровне, и я остался очень доволен результатом его работы. Риелтор проявил глубокие знания в области недвижимости</p>
//                                         </div>
//                                         <div className='footer-card-text-red'>
//                                             <p>Читать отзыв </p>
//                                         </div>
//                                     </div>
//                                 </SwiperSlide>
//                                 <SwiperSlide>
//                                     <div className="footer-card3">
//                                         <div className="footer-text-div">
//                                             <img src={footerIcons} alt="" className='footer-img1' />
//                                             <p className='footer-text-p'>Максим Кузнецов</p>
//                                         </div>
//                                         <div className='footer-text-desc'>
//                                             <p>Я хотел бы поделиться своим положительным опытом сотрудничества с риелтором. Работа данного специалиста оказалась на самом высоком уровне, и я остался очень доволен результатом его работы. Риелтор проявил глубокие знания в области недвижимости</p>
//                                         </div>
//                                         <div className='footer-card-text-red'>
//                                             <p>Читать отзыв </p>
//                                         </div>
//                                     </div>
//                                 </SwiperSlide>
//                                 <SwiperSlide>
//                                     <div className="footer-card3">
//                                         <div className="footer-text-div">
//                                             <img src={footerIcons} alt="" className='footer-img1' />
//                                             <p className='footer-text-p'>Максим Кузнецов</p>
//                                         </div>
//                                         <div className='footer-text-desc'>
//                                             <p>Я хотел бы поделиться своим положительным опытом сотрудничества с риелтором. Работа данного специалиста оказалась на самом высоком уровне, и я остался очень доволен результатом его работы. Риелтор проявил глубокие знания в области недвижимости</p>
//                                         </div>
//                                         <div className='footer-card-text-red'>
//                                             <p>Читать отзыв </p>
//                                         </div>
//                                     </div>
//                                 </SwiperSlide>
//                             </Swiper>
//                         </div>

//                         <div className="footer-button-div">
//                             <div className="footer-button-box">
//                                 <div className="footer-button">
//                                     <button><img src={footerImg1} alt="" /></button>
//                                     <button><img src={footerImg2} alt="" /></button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </Fragment>
//     )
// }

// export default Price



import './price.scss'
import { footer, price } from './priceApi'
import footerIcons from '../../assets/img/footer/footer.png'
import footerImg1 from '../../assets/img/footer/Vector1.png'
import footerImg2 from '../../assets/img/footer/Vector2.png'
import { Fragment, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // To'liq Swiper CSS
import 'swiper/css/effect-coverflow'; // Coverflow effekt CSS
import 'swiper/css/pagination'; // Pagination CSS
import 'swiper/css/navigation'; // Navigation CSS

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

function Price() {

    const swiperRef = useRef(null);

    const handlePrevClick = () => {
        swiperRef.current.swiper.slidePrev();
    };

    const handleNextClick = () => {
        swiperRef.current.swiper.slideNext();
    };
    return (
        <Fragment>
            <div className='price'>
                <div className="price-box">
                    <div className="price-card" >
                        <div className="price-text-card">
                            <div className="price-text-card-div1">
                                <p className="price-text-card-p1">Ипотечные программы</p>
                            </div>
                            <div className="price-text-card-div2">
                                <p className='price-text-card-p2'>Расчёты являются приблизительными.За точной информацией обращайтесь в офис продаж по тел. +7 812 604-25-68</p>
                            </div>
                        </div>
                        <div className="price-div-programma">
                            <div className="price-div-programma-box">
                                <div className="price-text1">
                                    <p>Программа </p>
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
                            {price.map((price, index) =>
                                <div className="bank-box" key={index}>
                                    <div className="bank-box-text-card">
                                        <div className="bank-logo">
                                            <div className="bank-text-gap">
                                                <div className="logo">
                                                    <img src={price.bankLogo} alt="" />
                                                </div>
                                                <div className="bank-logo-text">
                                                    <p>{price.bankLogoText}</p>
                                                </div>
                                            </div>
                                            <div className="bank-text-center">
                                                <div className="bank-text-center-div">
                                                    <div className='bank-text-left'>
                                                        <p>{price.bankLeftP1}</p>
                                                        <p>{price.bankLeftP2}</p>
                                                        <p>{price.bankLeftP3}</p>
                                                    </div>
                                                    <div className="bank-left">
                                                        <p>{price.bankLeftText1}</p>
                                                        <p>{price.bankLeftText2}</p>
                                                    </div>
                                                </div>
                                                <div className='bank-left-btn'>
                                                    <button className='bank-left-btn-info'>{price.bankLeftBtn}</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='bank-border-div'>
                                        <div className="div-border"></div>
                                    </div>
                                </div>
                            )}
                            <div className='bank-btn'>
                                <button>Показать еще</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact">
                    <div className="contact-box">
                        <div className="contact-card">
                            <div className="contact-box-title">
                                <p> Мы готовы ответить на все Ваши вопросы</p>
                            </div>
                            <div className="btn-card">
                                <div className="btn-box-card">
                                    <input type="text" placeholder='Имя' />
                                    <input type="text" placeholder='+7 --- -- --' />
                                    <button>Отправить</button>
                                </div>
                                <p className='btn-card-p'>Нажимая кнопку «Отправить», вы подтверждаете, что согласны на обработку персональных данных.</p>
                            </div>
                        </div>
                    </div>
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
                                slidesPerView={3} // Har bir qatorada uchta kartani ko'rsatish
                                spaceBetween={100} // Kartalar orasidagi bo'shliq
                                coverflowEffect={{
                                    rotate: 0,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 1
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
            </div>
        </Fragment>
    )
}

export default Price
