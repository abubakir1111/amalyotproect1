import React from 'react'
import logo from '../../assets/img/logo/logo.png'
import wk from '../../assets/icons/VK.svg'
import wh from '../../assets/icons/WhatsApp.svg'
import tg from '../../assets/icons/Tg.svg'
function Page() {
  return (
    <div className="rec28">
      <div className="rec-box">
        <div className="rec-text-card">
          <div className="rec-div-text">
            <div className="rec-div-text1">
              <div className="rec-card-logo-div">
                <div className="logo-text-logo">
                  <img src={logo} alt="" />
                  <p>центр новостроек в Тюмени</p>
                </div>
                <div className="rec-icon-text-card">
                  <img src={wk} alt="" />
                  <img src={wh} alt="" />
                  <img src={tg} alt="" />
                </div>
                <div className="rec-button-div">
                  <button>Перезвоните мне</button>
                </div>
              </div>
              <div className='rec-text-div'>
                <div className="rec-text-box">
                  <div className="rec-text-card1">
                    <p>Главная </p>
                    <p>Все ЖК Тюмени</p>
                    <p>Карта новостроек</p>
                    <p>О компании</p>
                  </div>
                  <div className="rec-text-card2">
                    <p>Пункт меню</p>
                    <p>Пункт меню</p>
                    <p>Пункт меню</p>
                    <p>Пункт меню</p>
                  </div>
                  <div className="rec-text-card3">
                    <p>Пункт меню</p>
                    <p>Пункт меню</p>
                    <p>Пункт меню</p>
                    <p>Пункт меню</p>
                  </div>
                   <div className="rec-text-card3">
                    <p>Пункт меню</p>
                    <p>Пункт меню</p>
                    <p>Пункт меню</p>
                    <p>Пункт меню</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='rec-border-div'>
              <div className='rec-border'> </div>
            </div>
            <div className="rec-top-desc">
              <div className="desc-top-text">
                <p>© 2016–2023, ООО «Домклик»Москва, 121170, Кутузовский проспект, д. 32, к. 1, ОГРН: 1157746652150 ИНН: 7736249247 Использование сайта означает согласие с Пользовательским соглашением и Политикой обработки персональных данных</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Page