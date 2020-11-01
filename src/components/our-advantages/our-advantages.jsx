import React from 'react'
import './our-advantages.scss'

export const OurAdvantages = ({ scrollToRef }) => {
    const advantagesItems = [
        { src: './svg/sertificate.svg', subtitle: 'Лицензия на оказание юридических услуг', id: 36},
        { src: './svg/people.svg', subtitle: 'Опытные сотрудники', id: 37 },
        { src: './svg/communication.svg', subtitle: 'Коммуникативные навыки – без труда открываем любые двери и быстро решаем нужные вопросы', id: 38 },
        { src: './svg/edit-writing.svg', subtitle: 'Скрупулезный поход к ведению документации', id: 39 },
    ]
    const advantagesList = advantagesItems.map(({ src, subtitle, id }) => (
        <li className="advantages-list-item" key={id}>
            <div className="advantages-list-circle">
                <img className="advantages-list-image" src={src} alt="img"/>
            </div>
            <h6 className="advantages-list-subtitle">{subtitle}</h6>
        </li>
    ))
    return (
        <div className="container">
            <div className="our-advantages" >
                <h2 className="our-advantages-title" ref={scrollToRef}>
                    Наши преимущества
                </h2>
                <ul className="our-advantages-list">
                    { advantagesList }
                </ul>
                <div className="our-advantages-jurist">
                    <span className="our-advantages-triangle"></span>
                    <p className="our-advantages-text">
                        Юристы нашей компании готовы дать четкие, основанные на фактах, консультации, касающиеся и «типовой», и нестандартной ситуации, опираясь на сложившуюся служебную практику и многолетний опыт. Мы объективно оцениваем риски и тщательно анализируем каждый случай.
                    </p>
                </div>
            </div>
        </div>
    )
}