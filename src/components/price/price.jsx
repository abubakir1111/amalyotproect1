import React from 'react'
import './price.scss'
import { price } from './priceApi'

function Price() {
    return (
        <div className='price'>
            <div className="price-box">
                <div className="price-card">
                    <div className="price-text-card">
                        <div className="price-text-card-div1">
                            <p className="price-text-card-p1">Ипотечные программы</p>
                        </div>
                        <div className="price-text-card-div2">
                            <p className='price-text-card-p2'>Расчёты являются приблизительными.За точной информацией обращайтесь в офис продаж по тел. +7 812 604-25-68</p>
                        </div>
                    </div>
                    <div className="price-div-programma">
                        <div className="price-div-programma-box">
                            <div className="price-text1">
                                <p>Программа </p>
                            </div>
                            <div className='price-text-card'>
                                <p className='price-text'>Ставка</p>
                                <div className='price-text-card-gap'>
                                    <p>Первый взнос</p>
                                    <p>Срок, лет</p>
                                    <p>Платёж руб./мес.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bank'>
                        {price.map((price) =>
                            <div className="bank-box">
                                <div className="bank-box-text-card">
                                    <div className="bank-logo">

                                        <div className="bank-text-gap">
                                            <div className="logo">
                                                <img src={price.bankLogo} alt="" />
                                            </div>
                                            <div className="bank-logo-text">
                                                <p>{price.bankLogoText}</p>
                                            </div>
                                        </div>
                                        <div className="bank-text-center">
                                            <div className="bank-text-center-div">
                                                <div className='bank-text-left'>
                                                    <p>{price.bankLeftP1}</p>
                                                    <p>{price.bankLeftP2}</p>
                                                    <p>{price.bankLeftP3}</p>
                                                </div>
                                                <div className="bank-left">
                                                    <p>{price.bankLeftText1}</p>
                                                    <p>{price.bankLeftText2}</p>
                                                </div>
                                            </div>
                                            <div className='bank-left-btn'>
                                                <button className='bank-left-btn-info'>{price.bankLeftBtn}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='bank-border-div'>
                                    <div className="div-border"></div>
                                </div>
                            </div>
                        )}
                        <div className='bank-btn'>
                            <button>Показать еще</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Price