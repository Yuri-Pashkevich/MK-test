import React from 'react'
import './services-price.scss'
import { Link } from 'react-router-dom'

export const ServicesPrice = ({ scrollToRef }) => {
    return (
        <div className="container" ref={scrollToRef}>
            <div className="services-price">
                <h2 className="services-price-title">
                    Стоимость юридических услуг в Минске
                </h2>
                <p className="services-price-text">
                    Стоимость услуг формируется согласно тарифам, установленным в компании и в зависимости от времени, затраченного юристом на разрешение возникшей ситуации. Принцип прозрачности делает наши цены обоснованными и понятными для клиента.
                </p>
                <Link to="/" className="services-price-link">
                    Тарифы
                </Link>
            </div>
        </div>
    )
}
