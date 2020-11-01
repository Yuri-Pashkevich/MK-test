import React from 'react'
import './business-support.scss'
import stairs from './stairs.jpg'

export const BusinessSupport = ({ scrollToRef }) => {
    return (
        <div className="container" ref={scrollToRef}>
            <div className="business-support">
                <div className="business-support-wrapper">
                    <h2 className="business-support-title">
                        Юридическое сопровождение бизнеса от «МК-Правовые технологии»
                    </h2>
                    <p className="business-support-text">
                        Главный принцип нашей работы - качество. Постоянно следовать ему помогает сплоченная команда талантливых и энергичных сотрудников, способных сообща заниматься сложными проектами, никогда не допуская сбоев в работе. 
                    </p>
                    <p className="business-support-text">    
                        Мы обеспечиваем максимальный уровень профессионального обслуживания, который можно ожидать от крупной юридической фирмы.
                    </p>
                    <p className="business-support-text">   
                        Нашу фирму отличают яркая индивидуальность и следование модели эффективного юридического обслуживания. Благодаря профессиональной гибкости мы находим творческие решения как обычных вопросов, так и неординарных проблем, возникающих у наших клиентов.
                    </p>    
                    <p className="business-support-text">
                        Все наши рекомендации основаны на глубоких академических знаниях и опыте практического применения в хозяйственном праве.
                    </p>
                </div>
                <img className="business-support-image" src={stairs} alt="stairs"/>
            </div>
        </div>
    )
}