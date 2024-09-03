import React from 'react'
import { Link } from 'react-router-dom'
import '../scss/page4.scss'
import page1Logo from '../../../assets/img/logo/logo.png'
import page1wk from '../../../assets/icons/VK.svg'
import page2wh from '../../../assets/icons/WhatsApp.svg'
import page3tg from '../../../assets/icons/Tg.svg'
import { srok } from '../js/page4'


function Page4() {
  return (
    <div className='header'>
      <div className="header-box">
        <div className="navbar-page4">

          <div className="navbar-right">
            <img src={page1Logo} alt="Logo" />
            <Link className="navbar-right-p" to='/'>центр новостроек в Тюмени</Link>

          </div>
          <div className="navbar-center">
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
            <div className="dom-card"></div>
            <div className="dom-card"></div>
            <div className="dom-card"></div>
            <div className="dom-card"></div>
            <div className="dom-card"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page4