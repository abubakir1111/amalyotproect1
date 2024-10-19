import React, { useEffect, useState } from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo/logo.png';
import wk from '../../assets/icons/VK.svg';
import wh from '../../assets/icons/WhatsApp.svg';
import tg from '../../assets/icons/Tg.svg';
import { headerjsApi, klassbtn, sdanbtn, tumanapi } from './headerjs/headerjs.js';
import RangeSlider from './headerjs/header-silder.jsx';
import vec1 from '../../assets/icons/Vector.svg';
import vec2 from '../../assets/icons/Union.png';
import menu from '../../assets/img/header-navbar-responsive/burger-menu.png'
import './headerresponsive.scss';

import { mainApi } from '../main/mainApi.js';
import Main from '../main/main.jsx';
import Slider from '../main/slider.jsx';

function Header() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [klass1, setKlass] = useState(null);
    const [tumanX, setTumanX] = useState(null);
    const [items, setItems] = useState(klassbtn);
    const [rangeValue, setRangeVAlue] = useState([3.2, 121.4])
    const [removeBtn, setRemoveBtn] = useState(headerjsApi)
    const [tuman, setTuman] = useState(tumanapi)
    const [xonali, setxonali] = useState("1-комнатные")
    const [rubl, setRubl] = useState("от 4,4 млн р")
    const [xona2, setXona2] = useState("1-комнатные")
    const [rub2, setRub2] = useState("от 4,4 млн р")
    const [backgorunActive, setBackgroundActive] = useState()
    const [dataRemont, setRemontData] = useState(mainApi)
    const [mainData, setMainData] = useState(mainApi); // filtered data for display

    // Filter data based on category from mainApi
    const changeData = () => {
        const updatedBtn = mainApi.filter(item => item.category === 'Без отделки');
        setMainData(updatedBtn);
    };

    const changeData2 = () => {
        const updateBtn2 = mainApi.filter(item => item.category === 'С отделкой');
        setMainData(updateBtn2);
    };

    const changeData3 = () => {
        const updateBtn3 = mainApi.filter(item => item.category === 'White box');
        setMainData(updateBtn3);
    };
    //  boldimi aka  ha boldi callback functioni o'rniga oddiy ishlatarkansz, shunda fetch boladi hop raxmat aka 
    // Filter data end 
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
        setMenuVisible(!menuVisible);
    }

    const handleDelete = (id) => {
        const filteredItems = removeBtn.filter((itemss) => itemss.id !== id);
        setRemoveBtn(filteredItems);
    };
    const data2Delete = (id) => {
        const newDataFiltrs = items.filter((itemsfilter) => itemsfilter.id !== id)
        setItems(newDataFiltrs)
    }
    const tumanDelete = (id) => {
        const newTumanFilters = tuman.filter((tumanfilter) => tumanfilter.id !== id)
        setTuman(newTumanFilters)
    }
    const [xona, setXona] = useState('4 377 600')

    const handleClick0 = () => {
        // setXona(''); // Birinchi tugma bosilganda
        // setxonali('')
        setBackgroundActive('button1')
    };

    const handleClick1 = () => {
        setXona('4 377 600');
        setxonali('1-комнатные')
        setXona2('1-комнатные')
        setRubl('от 4,4 млн р')
        setRub2('от 4,4 млн р')
        setBackgroundActive('button2')
    };

    const handleClick2 = () => {
        setXona('8 755 200'); // Ikkinchi tugma bosilganda
        setxonali('2-комнатные')
        setXona2('2-комнатные')
        setRubl('от 8,8 млн р')
        setRub2('от 8,8 млн р')
        setBackgroundActive('button3')

    };

    const handleClick3 = () => {
        setXona('13 132 800');
        setxonali('3-комнатные')
        setXona2('3-комнатные')
        setRubl('от 12,12 млн р')
        setRub2('от 12,12 млн р')
        setBackgroundActive('button4')

    };

    const handleClick4 = () => {
        setXona('17 510 400'); // Ikkinchi tugma bosilganda
        setxonali('4-комнатные +')
        setXona2('4-комнатные +')
        setRubl('от 16,16 млн р')
        setRub2('от 16,16 млн р')
        setBackgroundActive('button5')

    };

    console.log(xona);


    const remontClick = () => {
        console.log("bez remont")
    }


    const [categoryData, setCategoryData] = useState(mainApi);

    const handleCategoryData = (categoryId) => {
        const filetered = dataRemont.filter((item) => item.category == categoryId);
        console.log(filetered);
        setCategoryData(filetered);
    };
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
                            <p className='header-card-box-p header-card-box-p2'>Все новостройки Тюмени</p>
                            <div className="header-card-box-btn">
                                <button className='header-button'>Записаться на экскурсию</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-button-div-top">
                <div className="header-button-div-box">
                    {removeBtn.map((data) => (
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
                            <button className='button-remove' onClick={() => handleDelete(data.id)}>{selectedImage === data.id && <p>{data.img}</p>}</button>
                        </button>
                    ))}
                </div>
            </div>
            <div className='room'>
                <div className="room-div">
                    <div className="room-text-div">
                        <p>Комнатность</p>
                        <div className='room-btn'>
                            <button onClick={handleClick0} style={{
                                border: backgorunActive !== 'button1' ? '' : '1px solid rgb(219, 219, 219)',

                            }}>C</button>
                            <button onClick={handleClick1} style={{
                                border: backgorunActive !== 'button2' ? '' : '1px solid rgb(219, 219, 219)',

                            }}>1</button>
                            <button onClick={handleClick2} style={{
                                border: backgorunActive !== 'button3' ? '' : '1px solid rgb(219, 219, 219)',

                            }}>2</button>
                            <button onClick={handleClick3} style={{
                                border: backgorunActive !== 'button4' ? '' : '1px solid rgb(219, 219, 219)',

                            }}>3</button>
                            <button onClick={handleClick4} style={{
                                border: backgorunActive !== 'button5' ? '' : '1px solid rgb(219, 219, 219)',

                            }}>4+</button>
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
                                        <p >от {rangeValue[0]}</p>
                                        <p>до {rangeValue[1]}</p>
                                    </div>
                                    <div className='slider-wrapper'>
                                        <RangeSlider setRangeVAlue={setRangeVAlue} rangeValue={rangeValue} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='room-sdan'>
                        <div className="room-sdan2">
                            <p>Срок сдачи</p>
                            <div className="room-sdan-div">
                                {sdanbtn.map((sdanbtn) => (
                                    <button key={sdanbtn.id} onClick={remontClick}>
                                        {sdanbtn.text}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="room-finish">
                        <div className="room-finish-box">
                            <div className='room-finish-box-p-text'>
                                <p onClick={() => handleCategoryData("1")}>Отделка </p>
                                <p>Меблировка </p>
                            </div>
                            <div className='room-finish-btn'>
                                <button onClick={changeData}>Без отделки</button>
                                <button onClick={changeData2}>С отделкой</button>
                                <button onClick={changeData3}>White box</button>
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
                        {items.map((data2) => (
                            <button
                                key={data2.id}
                                onClick={() => klasclick(data2.id)}
                                className='btn-bottom-div22'
                                style={{
                                    border: klass1 === data2.id ? '1px solid rgb(220, 63, 63)' : '1px solid rgb(219, 219, 219)',
                                    background: 'none',
                                    cursor: 'pointer',
                                    color: klass1 === data2.id ? 'rgb(220, 63, 63)' : 'rgb(168, 168, 168)',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    lineHeight: '0px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'

                                }}>
                                {data2.text}
                                {klass1 === data2.id && <p onClick={() => data2Delete(data2.id)}>{data2.klass2}</p>}
                            </button>
                        ))}
                    </div>
                    <div className="btn-top-div">
                        {tuman.map((tuman) => (
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
                                <button
                                    onClick={() => tumanDelete(tuman.id)}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        color: 'red',
                                        width: '0px',
                                        height: '0px'
                                    }}>{tumanX === tuman.id && <p>{tuman.tuman2}</p>}</button>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <Main mainData={mainData} xona={xona} xonali={xonali} rubl={rubl} xona2={xona2} rub2={rub2} />
        </div>


    );
}

export default Header;