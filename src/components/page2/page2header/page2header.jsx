import React from 'react'
import { Link } from 'react-router-dom'
import './page2header.scss'
import page1Logo from '../../../assets/img/logo/logo.png'
import page1wk from '../../../assets/icons/VK.svg'
import page2wh from '../../../assets/icons/WhatsApp.svg'
import page3tg from '../../../assets/icons/Tg.svg'

function Page2header() {
  return (
    <div className='header'>
      <div className="header-box">
        <div className="navbar">
          <div className="navbar-right">
            <img src={page1Logo} alt="logo" />
            <Link className="navbar-right-p" to='/'>центр новостроек в Тюмени</Link>
          </div>
          <div className="navbar-center">
            <Link className='link'> Главная</Link>
            <Link className='link'>Все ЖК Тюмени</Link>
            <Link className='link'>Карта новостроек</Link>
            <Link to="/page" className='link'>О компании</Link>
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
              <p className='header-card-box-p'>О компании</p>
              </div>
          </div>
        </div>
      </div>
      <p>Главная / О компании</p>
    </div>
  )
}

export default Page2header