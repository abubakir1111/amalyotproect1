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
import './headerresponsive.scss';

function Header() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [klass1, setKlass] = useState(null);
    const [tumanX, setTumanX] = useState(null);
    const [items, setItems] = useState(klassbtn);
    const [rangeValue, setRangeVAlue] = useState([3.2, 121.4])
    const [removeBtn, setRemoveBtn] = useState(headerjsApi)
    const [tuman, setTuman] = useState(tumanapi)
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
                                    <button key={sdanbtn.id}

                                    >
                                        {sdanbtn.text}

                                    </button>
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
        </div>


    );
}

export default Header;





// <div className='main'>
// <div className="main-box">
//   <div className="main-box-div">
//     <Swiper
//       ref={swiperRef}
//       grabCursor={true}
//       centeredSlides={true}
//       loop={true}
//       slidesPerView={1.5} // Har bir qatorada uchta kartani ko'rsatish
//       spaceBetween={10} // Kartalar orasidagi bo'shliq
//       coverflowEffect={{
//         rotate: 0,
//         stretch: 0,
//         depth: 100,
//         modifier: 1
//       }}
//       modules={[EffectCoverflow, Pagination, Navigation]}
//     >
//       {mainApi.map((card) =>
//         <SwiperSlide>

//           <div className="main-box-card" key={card.id} >
//             <div className="main-box-card2">
//               <div className="main-box-card-right">
//                 <div className='main-card-btn'>
//                   <button className='main-btn1'><img src={card.right} alt="" /></button>
//                   <button className='main-btn2'><img src={card.left} alt="" /></button>
//                 </div>
//               </div>
//               <div className="main-box-card-left">
//                 <div className="main-left-box">
//                   <div className="main-left-box-text-card">
//                     <div className="main-left-right-text">
//                       <p className='main-left-right-p1'>{card.mainTextP1}</p>
//                       <p className='main-left-right-p2'>{card.mainTextaction}</p>
//                     </div>
//                   </div>
//                   <div className="main-box-text-left-box">
//                     <div className="main-box-left-bottom-text">
//                       <div className="bottom-text">
//                         <p className='bottom-text-p1'>{card.bottomTextP1}</p>
//                         <p className='bottom-text-p2'>{card.bottomTextP2}</p>
//                       </div>
//                       <div className="top-text">
//                         <p>{card.topText}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className='main-center-div'>
//                   <div className="main-box-center-div">
//                     <div className="main-right-p">
//                       <p>{card.mainRigh1text}</p>
//                       <p>{card.mainRigh2text}</p>
//                       <p>{card.mainRigh3text}</p>
//                     </div>
//                     <div className="main-center-p">
//                       <p>{card.mainCenterP}</p>
//                       <p>{card.mainCenterP}</p>
//                       <p>{card.mainCenterP}</p>
//                     </div>
//                     <div className="main-left-p">
//                       <p>{card.mainleftptext1}</p>
//                       <p>{card.mainleftptext2}</p>
//                     </div>
//                     <div className="main-left-p2">
//                       <p>{card.mainLeftP1}</p>
//                       <p>{card.mainLeftP2}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="main-top">
//               <div className="main-top-box">
//                 <div className="main-right-btn">
//                   {card.mainRightBtn.map((btn, index) =>
//                     <button key={btn.id}><img src={card.imgbtn[index]} alt={`Button ${index + 1}`} />{btn}</button>
//                   )}
//                 </div>
//                 <div className="main-center-loaction">
//                   <img src={card.loactionimg} alt="" />
//                   <Link className='main-center-location-link'>{card.mainCenterLocation}</Link>
//                 </div>
//                 <div className="main-center-left">
//                   <button onClick={Click}>{card.mainCenterLeftbtn}</button>
//                 </div>
//               </div>
//             </div>
//           </div>


//         </SwiperSlide>
//       )}
//     </Swiper>

//   </div>
//   <div className='main-box-button'>
//     <button>Показать еще</button>
//       {/* <button onClick={handlePrevClick}><img src={footerImg1} alt="" /></button>
//       <button onClick={handleNextClick}><img src={footerImg2} alt="" /></button> */}
//   </div>
// </div>
// </div>