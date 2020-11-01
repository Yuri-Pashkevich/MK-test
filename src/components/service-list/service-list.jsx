import React from 'react'
import './service-list.scss'
import { Link } from 'react-router-dom'

export const ServiceList = ({ scrollToRef, toCooperationStart }) => {
    const serviceItems = [
        { subtitle: 'Регистрации ИП и юрлиц', id: 18 },
        { subtitle: 'Ликвидация, реорганизация и продажа бизнеса', id: 19 },
        { subtitle: 'Взыскание дебиторской задолженности', id: 20 },
        { subtitle: 'Письменные и устные консультации', id: 21 },
        { subtitle: 'Разработка уставных документов и внесение изменений в них', id: 22 },
        { subtitle: 'Ведение переговоров', id: 23 },
        { subtitle: 'Комплексное сопровождение бизнеса', id: 24 },
        { subtitle: 'Сопровождение деловых сделок', id: 25 },
        { subtitle: 'Лицензирование бизнеса', id: 26 },
        { subtitle: 'Решение правовых споров', id: 27 }
    ]
    const serviceList = serviceItems.map(({ subtitle, id }) => (
        <li className="service-list-item" key={id}>
            <span className="service-list-block"></span>
            <div className="service-list-subwrapper">
                <h5 className="service-list-subtitle">{subtitle}</h5>
                <Link to="/" className="service-list-sublink" onClick={toCooperationStart}>Подробнее</Link>
            </div>
        </li>
    ))
    return (
        <div className="service-list">
            <div className="container">
                <h2 className="service-list-title" ref={scrollToRef}>
                    Перечень оказываемых услуг
                </h2>
                <ul className="service-list-wrapper">
                    { serviceList }
                </ul>
                <div className="service-text-wrapper">
                    <p className="service-list-text">
                        Оказание юридических услуг юридическим лицам и индивидуальным предпринимателям – наша работа. Среди собственников бизнеса принято считать, что прочитать закон в Интернете и применить его на практике – это одно и тоже. Основываясь на этом убеждении, они часто отказываются от профессиональной помощи. Практика же показывает, что только опытный юрист может правильно разобраться в правовых тонкостях, своевременно предотвратить ложные шаги и ускорить получение результата.
                    </p>
                    <Link to="/" className="service-list-link" onClick={toCooperationStart}>Все услуги</Link>
                </div>
            </div>
        </div>
    )
}