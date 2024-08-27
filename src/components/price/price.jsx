import React from 'react'
import './price.scss'
import bankLogo from '../../assets/icons/price/ab.png'

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
                        <div className="bank-box">
                            <div className="bank-box-text-card">
                                <div className="bank-logo">
                                    <div className="logo">
                                        <img src={bankLogo} alt="" />
                                    </div>
                                    <div className="bank-logo-text">
                                        <p>Абсолют Банк</p>
                                    </div>
                                </div>
                                    <div className="bank-text-center">
                                        <p>Строящееся жильё</p>
                                        <p>от 5.69%</p>
                                        <p>от 20.1%</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Price