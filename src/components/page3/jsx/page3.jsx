import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import page1Logo from '../../../assets/img/logo/logo.png'
import page1wk from '../../../assets/icons/VK.svg'
import page2wh from '../../../assets/icons/WhatsApp.svg'
import page3tg from '../../../assets/icons/Tg.svg'
import '../scss/page3.scss'
import '../scss/page3responsive.scss'
import { aksiya } from '../js/page3'
import logo from '../../../assets/img/logo/logo.png';
import wk from '../../../assets/icons/VK.svg';
import wh from '../../../assets/icons/WhatsApp.svg';
import tg from '../../../assets/icons/Tg.svg';
import menu from '../../../assets/img/header-navbar-responsive/burger-menu.png'
function Page3() {
    const [menuVisible, setMenuVisible] = useState(false);
    const menuNav = () => {
        setMenuVisible(!menuVisible); // Menyuni ko'rinishi o'zgaradi
    }

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
                <div className={`menu-navbar2121 ${menuVisible ? 'menu-navbar2121' : 'menu-navbar2122'}`}>
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
                                <Link className='link'> Главная</Link>
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
            <div className="page3_contact-aksiya">
                <div className="page3_contact-box">
                    <div className="page3_contact-card">
                        <div className="page3_contact-box-title">
                            <p> Мы готовы ответить на все Ваши вопросы</p>
                        </div>
                        <div className="page3_btn-card">
                            <div className="page3_btn-box-card">
                                <input type="text" placeholder='Имя' />
                                <input type="text" placeholder='+7 --- -- --' />
                                <button>Отправить</button>
                            </div>
                            <p className='page3_btn-card-p'>Нажимая кнопку «Отправить», вы подтверждаете, что согласны на обработку персональных данных.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Page3