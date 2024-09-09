import React from 'react'
import { Link } from 'react-router-dom'
import page1Logo from '../../../assets/img/logo/logo.png'
import page1wk from '../../../assets/icons/VK.svg'
import page2wh from '../../../assets/icons/WhatsApp.svg'
import page3tg from '../../../assets/icons/Tg.svg'
import '../scss/page3.scss'
import { aksiya } from '../js/page3'
function Page3() {
    return (
        <div className='page3-header'>
            <div className="page3-header-box">
                <div className="page3-navbar">
                    <div className="navbar-right">
                        <img src={page1Logo} alt="logo" />
                        <Link className="navbar-right-p" to='/'>центр новостроек в Тюмени</Link>
                    </div>
                    <div className="page3-navbar-center">
                        <Link className='link'> Главная</Link>
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
            <div className="header-background-image">
                <div className="header-background-div">
                    <div className="header-card">
                        <div className="page2-header-card-box">
                            <p className='header-card-box-p'>Акции</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='glavniy-o-kompnay'>
                <p>Главная / Акции</p>
            </div>
            <div className='aksiya-igm-div'>
                <div className="aksyia-img-div-box">
                    <div className="aksiyaImgContainer">
                        {aksiya.map((aksiya) =>
                            <div className='aksiyaImg'>
                                <div className='aksiyaImgText'>
                                    <p>{aksiya.aksiyaTextP1}</p>
                                    <p>{aksiya.aksiyaTextP2}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="contact-aksiya">
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
              
              </div>
        </div>
    )
}

export default Page3