import React from 'react'
import { Link } from 'react-router-dom'
import '../scss/page4.scss'
import page1Logo from '../../../assets/img/logo/logo.png'
import page1wk from '../../../assets/icons/VK.svg'
import page2wh from '../../../assets/icons/WhatsApp.svg'
import page3tg from '../../../assets/icons/Tg.svg'
import { btn, dom, srok, xarakter } from '../js/page4'
import studyimg from '../../../assets/img/page4/Vector.png'
import right from '../../../assets/icons/mian.icons/main-right-btn-icons.png'
import left from '../../../assets/icons/mian.icons/main-left-icons.png'
import backImg from '../../../assets/img/o-Kompany-img/contact/Screenshot-xarita.png'
// import { Card } from '@mui/material'


function Page4() {
  return (
    <div className='page4-header'>
      <div className="page4-header-box">
        <div className="page4-navbar">

          <div className="navbar-right">
            <img src={page1Logo} alt="Logo" />
            <Link className="navbar-right-p" to='/'>центр новостроек в Тюмени</Link>

          </div>
          <div className="page4-navbar-center">
            <Link className='link'> Главная</Link>
            <Link className='link'>Все ЖК Тюмени</Link>
            <Link className='link'>Карта новостроек</Link>
            <Link to="/page" className='link'>О компа`нии</Link>
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
        <div className="header-background-image">
          <div className="header-background-div">
            <div className="header-card">
              <div className="header-card-box2">
                <p className='header-card-box-p72'>ЖК Чаркова 72</p>
                <p className='header-card-box-p73'>от 3,2 до 9,1 млн ₽ от 105 202,3 до 175 483,7 ₽/м²</p>

                <div className="header-card-box-btn">
                  <button className='header-button-72'>Записаться на экскурсию</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='glavniy-o-kompnay'>
          <p>Главная / ЖК Тюмени / ЖК Чаркова 72</p>
        </div>
      </div>
      <div className="page4-srok">
        <div className="srok-box">
          <div className="srok-card">
            <div className="srok-box2">
              {srok.map((srok) =>
                <div className="srok-card" key={srok.id}>
                  <div className='srok-text-div'>
                    <img src={srok.img} alt="" />
                    <p>{srok.text}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="dom-price">
        <div className="dom-box">
          <div className="dom-price-card-div">
            {dom.map((dom) =>
              <div className="dom-card" key={dom.id}>
                <div className="dom-div-text1">
                  <div className='dom-div-text-studiy'>
                    <div className='dom-text-study-right'>
                      <p className='dom-text-study-right-p1'>{dom.text4}</p>
                      <p className='dom-text-study-right-p2'>{dom.text5}</p>
                    </div>
                    <div className='dom-div-button-study'>
                      <button>{dom.btn}</button>
                    </div>
                  </div>
                  <div className='dom-div-text2'>
                    {[...Array(5)].map((_, index) => (
                      <div className='dom-text2-img-p-div'>
                        <div className='dom-text2-img'>
                          <img src={studyimg} alt="" />
                        </div>
                        <div className='dom-text-left-p-div'>
                          <div className="dom-text-left-p-div-gap">
                            <div className='dom-text-left-p-div1'>
                              <p className='dom-text-left-p-div1-p1'>{dom.text1}</p>
                              <p className='dom-text-left-p-div1-p2'>{dom.text2}</p>
                            </div>
                            <div className="dom-text-left-p-div2">
                              <p>{dom.text3}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="dom-malumot">
        <div className="dom-malumot-box">
          <div className="dom-malumot-text-img-div">
            <div className='dom-malumot-text-div'>
              <p className="dom-malumot-text1">Подробнее о ЖК</p>
              <p className="dom-malumot-text2">Новый жилой комплекс расположен в экологически чистом районе на северо-востоке Тюмени, в 11 км от центра и в 1 км от Тобольского тракта. Развитая транспортная инфраструктура позволит быстро добраться в любую точку города как на общественном транспорте, так и на автомобиле. «Чаркова 72» - проект комфорт-класса с собственной инфраструктурой - вам не придется уезжать далеко, чтобы купить все необходимое или хорошо провести время. Для жителей мы построим школу и детский сад. На первых этажах откроются магазины и кафе. Мы постарались предугадать все пожелания наших будущих жителей и спроектировали дома с приватными зелеными дворами.</p>
            </div>
            <div className='dom-malumot-img-div'>
              <div className="main-box-card-right">
                <div className='main-card-btn'>
                  <button className='main-btn1'><img src={right} alt="" /></button>
                  <button className='main-btn2'><img src={left} alt="" /></button>
                </div>
              </div>
            </div>
          </div>
          <div className='dom-malumot-text-xarakter'>
            <div className="dom-malumot-xarakter-box">
              <div className='xarakter-right-text-div'>
                <div className="xarakter-right-text-box-div">
                  <div className='xarakter'>
                    <p>Характеристики </p>
                  </div>
                  {xarakter.map((xarak) =>
                    <div className='xarakter-srok-text-div'>
                      <div className="xarakter-srok-text-div-box">
                        <div className='xarakter-srok-text-div-tex-right'>
                          <p>{xarak.text1}</p>
                          <p>{xarak.text2}</p>
                        </div>
                        <div className='xarakter-srok-text-div-tex-left'>
                          <p>{xarak.text3}</p>
                          <p>{xarak.text4}</p>
                        </div>

                      </div>
                      <div className='xarakter-border'></div>
                    </div>
                  )}
                  <div className='uy-turi'>
                    <p>Тип дома</p>
                    <p>Кирпично-монолитный</p>
                  </div>
                </div>
                <div className="main-right-btn">
                  <div className='main-right-btn-img'>
                    <img src={backImg} alt="" />
                  </div>
                  <div className='main-right-btn-button'>
                    {btn.map((btn) =>
                      <div>
                        <button><img src={btn.img} alt="" />{btn.text}</button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className='dokument'>
                <div className="dokument-box">
                  <div className='dokument-text-div'>
                    <p>Документация</p>
                  </div>
                  <div className='dokument-btn-div'>
                    <button>Проектная декларация</button>

                    <button>Разрешение на строительство</button>
                  </div>
                </div>
              </div>
            </div>
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

export default Page4