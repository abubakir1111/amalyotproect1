import React from 'react';
import './main.scss';
import { Link } from 'react-scroll';
import { mainApi } from './mainjs';
import { useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate()

  const Click = () => {
    navigate('/page4')
  }
  return (
    <div className='main'>
      <div className="main-box">
        <div className="main-box-div">
          {mainApi.map((card) =>
            <div className="main-box-card" key={card.id} >
              <div className="main-box-card2">
                <div className="main-box-card-right">
                  <div className='main-card-btn'>
                    <button className='main-btn1'><img src={card.right} alt="" /></button>
                    <button className='main-btn2'><img src={card.left} alt="" /></button>
                  </div>
                </div>
                <div className="main-box-card-left">
                  <div className="main-left-box">
                    <div className="main-left-box-text-card">
                      <div className="main-left-right-text">
                        <p className='main-left-right-p1'>{card.mainTextP1}</p>
                        <p className='main-left-right-p2'>{card.mainTextaction}</p>
                      </div>
                    </div>
                    <div className="main-box-text-left-box">
                      <div className="main-box-left-bottom-text">
                        <div className="bottom-text">
                          <p className='bottom-text-p1'>{card.bottomTextP1}</p>
                          <p className='bottom-text-p2'>{card.bottomTextP2}</p>
                        </div>
                        <div className="top-text">
                          <p>{card.topText}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='main-center-div'>
                    <div className="main-box-center-div">
                      <div className="main-right-p">
                        <p>{card.mainRigh1text}</p>
                        <p>{card.mainRigh2text}</p>
                        <p>{card.mainRigh3text}</p>
                      </div>
                      <div className="main-center-p">
                        <p>{card.mainCenterP}</p>
                        <p>{card.mainCenterP}</p>
                        <p>{card.mainCenterP}</p>
                      </div>
                      <div className="main-left-p">
                        <p>{card.mainleftptext1}</p>
                        <p>{card.mainleftptext2}</p>
                      </div>
                      <div className="main-left-p2">
                        <p>{card.mainLeftP1}</p>
                        <p>{card.mainLeftP2}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-top">
                <div className="main-top-box">
                  <div className="main-right-btn">
                    {card.mainRightBtn.map((btn, index) =>
                      <button key={btn.id}><img src={card.imgbtn[index]} alt={`Button ${index + 1}`} />{btn}</button>
                    )}
                  </div>
                  <div className="main-center-loaction">
                    <img src={card.loactionimg} alt="" />
                    <Link className='main-center-location-link'>{card.mainCenterLocation}</Link>
                  </div>
                  <div className="main-center-left">
                    <button onClick={Click}>{card.mainCenterLeftbtn}</button>
                  </div>
                </div>
              </div>
            </div>

          )}
        </div>
          <div className='main-box-button'>
            <button>Показать еще</button>
          </div>
      </div>
    </div>
  );
}
export default Main;