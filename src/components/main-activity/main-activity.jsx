import React from 'react'
import './main-activity.scss'
import { Link } from 'react-router-dom'
import hand from '../../svg/hand.svg'
import scheme from '../../svg/scheme.svg'
import sails from '../../svg/sails.svg'
import headphones from '../../svg/headphones.svg'
import box from '../../svg/box.svg'
import folder from '../../svg/folder.svg'
import stamp from '../../svg/stamp.svg'
import cup from '../../svg/cup.svg'
import building from '../../svg/building.svg'

export const MainActivity = ({ toMainActivity }) => {

    const mainActivityItems = [
        { src: hand, title: 'Взыскание долгов', id: 0 },
        { src: scheme, title: 'Реорганизация бизнеса', id: 1 },
        { src: sails, title: 'Продажа бизнеса', id: 2 },
        { src: headphones, title: 'Юридические консультации', id: 3 },
        { src: box, title: 'Ликвидация организаций', id: 4 },
        { src: folder, title: 'Разработка договоров', id: 5 },
        { src: stamp, title: 'Регистрация бизнеса', id: 6 },
        { src: cup, title: 'Юридический аутсорсинг', id: 7 },
        { src: building, title: 'Аттестация в строительстве', id: 8 },
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