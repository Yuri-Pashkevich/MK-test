import React from 'react'
import './main-activity.scss'
import { Link } from 'react-router-dom'

export const MainActivity = ({ toMainActivity }) => {

    const mainActivityItems = [
        { src: '/svg/hand.svg', title: 'Взыскание долгов', id: 0 },
        { src: '/svg/scheme.svg', title: 'Реорганизация бизнеса', id: 1 },
        { src: '/svg/sails.svg', title: 'Продажа бизнеса', id: 2 },
        { src: '/svg/headphones.svg', title: 'Юридические консультации', id: 3 },
        { src: '/svg/box.svg', title: 'Ликвидация организаций', id: 4 },
        { src: '/svg/folder.svg', title: 'Разработка договоров', id: 5 },
        { src: '/svg/stamp.svg', title: 'Регистрация бизнеса', id: 6 },
        { src: '/svg/cup.svg', title: 'Юридический аутсорсинг', id: 7 },
        { src: '/svg/building.svg', title: 'Аттестация в строительстве', id: 8 },
    ]
    const mainActivityList = mainActivityItems.map(({ src, title, id }) => (
        <li className="main-activity-item" key={id}>
            <div className="main-activity-wrapper">
                <h5 className="main-activity-subtitle">
                    { title }
                </h5>
                <Link to="/" className="main-activity-sublink" onClick={toMainActivity}>Подробнее</Link>
            </div>
            <div className="main-activity-circle">
                <img className="main-activity-image" src={src} alt="activity-img"/>
            </div>
        </li>
    ))
    return (
        <div className="container">
            <div className="main-activity">
                <h2 className="main-activity-title">
                    Основные направления деятельности
                </h2>
                <ul className="main-activity-list">
                    { mainActivityList }
                </ul>
                <Link to="/" className="main-activity-link" onClick={toMainActivity}>Все услуги</Link>
            </div>
            <div className="main-activity-subwrapper">
                <h2 className="main-activity-title">
                    Основные направления деятельности
                </h2>
                <div className="main-activity-textwrapper">
                    <p className="main-activity-text">
                        Основной принцип нашей работы – максимальная открытость и доверительные отношения с каждым клиентом, с тем чтобы от начала и до конца совместной работы, не возникало никакого недопонимания. Мы ставим целью не только привлечение новых клиентов, но и поддержание длительных партнерских отношений с клиентами, которые уже воспользовались нашими услугами.
                    </p>
                    <p className="main-activity-text">
                        Быстрота анализа и профессиональных действий наших юристов обеспечивают успешное решение, казалось бы, неразрешимых вопросов. Богатые знания и солидный опыт позволяют нам оказывать комплексную правовую помощь в ситуациях любой сложности.
                    </p>
                </div>
            </div>     
        </div>
    )
}