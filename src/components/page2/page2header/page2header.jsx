import React from 'react'
import { Link } from 'react-router-dom'
import './page2header.scss'
import page1Logo from '../../../assets/img/logo/logo.png'
import page1wk from '../../../assets/icons/VK.svg'
import page2wh from '../../../assets/icons/WhatsApp.svg'
import page3tg from '../../../assets/icons/Tg.svg'
import kompanyImg from '../../../assets/img/o-Kompany-img/O-kompany-Img.png'
import kompanycard from '../page2header/page2headerjs'
import kompanyLeftImg from '../../../assets/img/o-Kompany-img/contact/Screenshot-xarita.png'
import { contact, contactIlovasi } from './adres'
import footerIcons from '../../../assets/img/footer//footer.png'
import footerImg1 from '../../../assets/img/footer/Vector1.png'
import footerImg2 from '../../../assets/img/footer/Vector2.png'

function Page2header() {
  return (
    <div className='page2-header'>
      <div className="page2header-box">
        <div className="page2header-navbar">
          <div className="navbar-right">
            <img src={page1Logo} alt="logo" />
            <Link className="navbar-right-p" to='/'>центр новостроек в Тюмени</Link>
          </div>
          <div className="page2header-navbar-center">
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
              <p className='header-card-box-p'>О компании</p>
            </div>
          </div>
        </div>
      </div>


      <div className='glavniy-o-kompnay'>
        <p>Главная / О компании</p>
      </div>
      <div className='o-kompany-main'>
        <div className="o-kompany-main-box">
          <div className="o-kompany-main-box-text-img-div">
            <div className='o-kompany-text'>
              <p>Оказываем услуги по подбору новостройки бесплатно. Подбор квартиры в новостройке является важным этапом при выборе жилья. Это процесс, который требует внимательности и грамотного подхода. Когда вы решаете приобрести квартиру в новостройке, вам стоит учитывать несколько ключевых факторов. Прежде всего, определите свои потребности и пожелания: сколько комнат вам необходимо, площадь, этаж, наличие балкона или лоджии. Также важно учесть расположение дома - близость к паркам, магазинам, общественному транспорту. Не забывайте о выборе надежного застройщика и изучении документации. Подбор квартиры в новостройке - это серьезный шаг на пути к приобретению жилья, поэтому рекомендуется обратиться к профессионалам, которые помогут вам сделать правильный выбор.</p>
            </div>
            <div className='o-kompany-img'>
              <img src={kompanyImg} alt="" />
            </div>
          </div>
          <div className="o-kompany-main-card">
            <div className="o-kompany-main-box-card-box">
              <div className="o-kompany-card-title">
                <p>Обращаясь к нам, вы получите</p>
              </div>
              <div className='o-kompany-card-div'>
                <div className="o-kompany-card-div-box">

                  {kompanycard.map((kompanycard) =>
                    <div className="o-kompany-card">
                      <div className='o-kompany-card-img'>
                        <img src={kompanycard.img} alt="" />
                      </div>
                      <div className='o-kompany-card-text'>
                        <p>{kompanycard.text}</p>
                      </div>
                    </div>
                  )}
                </div>

              </div>
              <div className='o-kompany-contact'>
                <div className="o-kompany-box">
                  <div className="o-komapny-contact-div">
                    <div className="o-komapny-contact-div-right">
                      <div className="contact-text-p-div">
                        <p>Контакты</p>
                      </div>
                      <div className="contact-text-api-div">
                        {contact.map((contact) =>
                          <div className='contact-img-text-div'>

                            <img src={contact.kompanyImg} alt="" />
                            <p>{contact.kompanyText}</p>

                          </div>
                        )}
                        <div className='contact-ilovasi'>
                          <div className="contact-ilovasi-box">
                            {contactIlovasi.map((ilova) =>
                              <img src={ilova.contactIlovasiImg} alt="" />
                            )}
                          </div>
                        </div>

                      </div>
                    </div>
                    <div className="o-komapny-contact-div-left">
                      <img src={kompanyLeftImg} alt="" />
                    </div>
                  </div>
                </div>
              </div>


              <div className="footer-card">
                <div className="footer-box">
                  <div className='contact-text'>
                    <p>Отзывы</p>
                  </div>
                  <div className="footer-card">

                    <div className="footer-card1">

                      <div className="footer-text-div">
                        <img src={footerIcons} alt="" className='footer-img1' />
                        <p className='footer-text-p'>Максим Кузнецов</p>
                      </div>
                      <div className='footer-text-desc'>
                        <p>Я хотел бы поделиться своим положительным опытом сотрудничества с риелтором. Работа данного специалиста оказалась на самом высоком уровне, и я остался очень доволен результатом его работы. Риелтор проявил глубокие знания в области недвижимости</p>
                      </div>
                      <div className='footer-card-text-red'>
                        <p>Читать отзыв </p>
                      </div>
                    </div>
                    <div className="footer-card1">
                      <div className="footer-text-div">
                        <img src={footerIcons} alt="" className='footer-img1' />
                        <p className='footer-text-p'>Максим Кузнецов</p>
                      </div>
                      <div className='footer-text-desc'>
                        <p>Я хотел бы поделиться своим положительным опытом сотрудничества с риелтором. Работа данного специалиста оказалась на самом высоком уровне, и я остался очень доволен результатом его работы. Риелтор проявил глубокие знания в области недвижимости</p>
                      </div>
                      <div className='footer-card-text-red'>
                        <p>Читать отзыв </p>
                      </div>
                    </div>
                    <div className="footer-card2">
                      <div className="footer-text-div">
                        <img src={footerIcons} alt="" className='footer-img1' />
                        <p className='footer-text-p'>Максим Кузнецов</p>
                      </div>
                      <div className='footer-text-desc'>
                        <p>Я хотел бы поделиться своим положительным опытом сотрудничества с риелтором. Работа данного специалиста оказалась на самом высоком уровне, и я остался очень доволен результатом его работы. Риелтор проявил глубокие знания в области недвижимости</p>
                      </div>
                      <div className='footer-card-text-red'>
                        <p>Читать отзыв </p>
                      </div>
                    </div>
                    <div className="footer-card3">
                      <div className="footer-text-div">
                        <img src={footerIcons} alt="" className='footer-img1' />
                        <p className='footer-text-p'>Максим Кузнецов</p>
                      </div>
                      <div className='footer-text-desc'>
                        <p>Я хотел бы поделиться своим положительным опытом сотрудничества с риелтором. Работа данного специалиста оказалась на самом высоком уровне, и я остался очень доволен результатом его работы. Риелтор проявил глубокие знания в области недвижимости</p>
                      </div>
                      <div className='footer-card-text-red'>
                        <p>Читать отзыв </p>
                      </div>
                    </div>
                    <div className="footer-card3">
                      <div className="footer-text-div">
                        <img src={footerIcons} alt="" className='footer-img1' />
                        <p className='footer-text-p'>Максим Кузнецов</p>
                      </div>
                      <div className='footer-text-desc'>
                        <p>Я хотел бы поделиться своим положительным опытом сотрудничества с риелтором. Работа данного специалиста оказалась на самом высоком уровне, и я остался очень доволен результатом его работы. Риелтор проявил глубокие знания в области недвижимости</p>
                      </div>
                      <div className='footer-card-text-red'>
                        <p>Читать отзыв </p>
                      </div>
                    </div>
                  </div>

                  <div className="footer-button-div">
                    <div className="footer-button-box">
                      <div className="footer-button">
                        <button><img src={footerImg1} alt="" /></button>
                        <button><img src={footerImg2} alt="" /></button>
                      </div>
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

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page2header