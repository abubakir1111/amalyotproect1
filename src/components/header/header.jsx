import React, { useState } from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo/logo.png';
import wk from '../../assets/icons/VK.svg';
import wh from '../../assets/icons/WhatsApp.svg';
import tg from '../../assets/icons/Tg.svg';
import { headerjsApi, klassbtn, roomFinish, sdanbtn, tumanapi } from './headerjs/headerjs';
import RangeSlider from './headerjs/header-silder';
import vec1 from '../../assets/icons/Vector.svg';
import vec2 from '../../assets/icons/Union.png';
import menu from '../../assets/img/header-navbar-responsive/burger-menu.png'

function Header() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [klass1, setKlass] = useState(null);
    const [tumanX, setTumanX] = useState(null);

    const handleButtonClick = (id) => {
        setSelectedImage(id);
    };

    const klasclick = (id) => {
        setKlass(id);
    };

    const tumaClick = (id) => {
        setTumanX(id);
    };
    const [menuVisible, setMenuVisible] = useState(false);
    const menuNav = () => {
        setMenuVisible(!menuVisible); // Menyuni ko'rinishi o'zgaradi
    }

    return (

        <div className='header'>
            <div className="header-box">
                <div className="navbar">
                    <div className="navbar-right">
                        <img src={logo} alt="Logo" />
                        <Link className='navbar-right-link'>центр новостроек в Тюмени</Link>

                    </div>
                    <div className="navbar-center">
                        <Link className='link'> Главная</Link>
                        <Link className='link'>Все ЖК Тюмени</Link>
                        <Link className='link'>Карта новостроек</Link>
                        <Link to="/page" className='link'>О компании</Link>
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

            <div className="na11vbar-menu">
                <div className="menu-navbar-right">
                    <div>
                        <img src={logo}  alt="Logo" />
                        <Link className='navbar-right-p'>центр новостроек в Тюмени</Link>
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
                                <p className="navbar-right-p">центр новостроек в Тюмени</p>
                            </div>
                            <div className="menu-navbar-center">
                                <Link className='link'> Главная</Link>
                                <Link className='link'>Все ЖК Тюмени</Link>
                                <Link className='link'>Карта новостроек</Link>
                                <Link to="/page" className='link'>О компании</Link>
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
                        <div className="header-card-box">
                            <p className='header-card-box-p'>Все новостройки Тюмени</p>
                            <div className="header-card-box-btn">
                                <button className='header-button'>Записаться на экскурсию</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-button-div-top">
                <div className="header-button-div-box">
                    {headerjsApi.map((data) => (
                        <button
                            className='header-button-box-btn'
                            key={data.id}
                            onClick={() => handleButtonClick(data.id)}
                            style={{
                                border: selectedImage === data.id ? '1px solid rgb(220, 63, 63)' : '1px solid rgb(219, 219, 219)',
                                background: 'none',
                                cursor: 'pointer',
                                color: 'rgb(220, 63, 63)',
                                fontSize: '14px',
                                fontWeight: '500',
                                lineHeight: '17px'
                            }}
                        >
                            {data.text}
                            {selectedImage === data.id && <p>{data.img[0]}</p>}
                        </button>
                    ))}
                </div>
            </div>
            <div className='room'>
                <div className="room-div">
                    <div className="room-text-div">
                        <p>Комнатность</p>
                        <div className='room-btn'>
                            <button>C</button>
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                            <button>4+</button>
                        </div>
                    </div>
                    <div className='room-price'>
                        <div className="room-text-p">
                            <p>Цена, млн руб</p>
                        </div>
                        <div className="room-slider-container">
                            <div className='room-slider'>
                                <div className='room-slider-text'>
                                    <div className="room-slider-text1">
                                        <p>от 3,2</p>
                                        <p>до 121,4</p>
                                    </div>
                                    <div className='slider-wrapper'>
                                        <RangeSlider />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='room-sdan'>
                        <div className="room-sdan2">
                            <p>Срок сдачи</p>
                            <div className="room-sdan-div">
                                {sdanbtn.map((item) => (
                                    <button key={item.id}>{item.text}</button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="room-finish">
                        <div className="room-finish-box">
                            <div className='room-finish-box-p-text'>
                                <p>Отделка </p>
                                <p>Меблировка </p>
                            </div>
                            <div className='room-finish-btn'>
                                {roomFinish.map((romm) => (
                                    <button key={romm.id}>{romm.text}</button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="mebel">
                        <div className="mebel-box">
                            <p>Меблировка </p>
                            <div className='mebel-button'>
                                <button>С кухней</button>
                            </div>
                        </div>
                    </div>
                    <div className='icons-left'>
                        <div className="icons-left-box">
                            <img src={vec1} alt="" />
                            <img src={vec2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='kalss-button-container'>
                <div className="klass-button-box">
                    <div className="btn-bottom-div">
                        {klassbtn.map((klass) => (
                            <button
                                key={klass.id}
                                onClick={() => klasclick(klass.id)}
                                style={{
                                    border: klass1 === klass.id ? '1px solid rgb(220, 63, 63)' : '1px solid rgb(219, 219, 219)',
                                    background: 'none',
                                    cursor: 'pointer',
                                    color: klass1 === klass.id ? 'rgb(220, 63, 63)' : 'rgb(168, 168, 168)',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    lineHeight: '17px'
                                }}
                            >
                                {klass.text}
                                {klass1 === klass.id && <p>{klass.klass2}</p>}
                            </button>
                        ))}
                    </div>
                    <div className="btn-top-div">
                        {tumanapi.map((tuman) => (
                            <button
                                key={tuman.id}
                                className='top-btn'
                                onClick={() => tumaClick(tuman.id)}
                                style={{
                                    border: tumanX === tuman.id ? '1px solid rgb(220, 63, 63)' : '1px solid rgb(219, 219, 219)',
                                    background: 'none',
                                    cursor: 'pointer',
                                    color: tumanX === tuman.id ? 'rgb(220, 63, 63)' : 'rgb(168, 168, 168)',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    lineHeight: '17px'
                                }}
                            >
                                {tuman.text}
                                {tumanX === tuman.id && <p>{tuman.tuman2}</p>}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Header;
