import React, { useState } from 'react'
import './partner-reviews.scss'
import { Link } from 'react-router-dom'
import partnerreviews from '../../img/partner-reviews.jpg'
import bauarenda from '../../img/bau-arenda.jpg'
import titan from '../../img/titan.jpg'
import favorit from '../../img/favorit.jpg'
import alphabank from '../../img/alpha-bank.jpg'
import IBA from '../../img/IBA.jpg'


let index = 0

export const PartnerReviews = () => {
    const partnerItems = [
        [
            {   
                src: partnerreviews,
                position: 'директор', 
                name: 'С.В. Косачев', 
                text: 'Уважаемая Светлана Александровна! Наша компания выражает благодарность и признательность обществу с ограниченной ответственностью «МК-Правовые технологии». Благодаря слаженной работе и высокой квалификации Ваших сотрудников и специалистов компания «ВиваСтрой» получила качественные юридические услуги по взысканию денежных средств с должника. Профессионализм работников ООО «МК-Правовые технологии», а также желание работать со сложными и нестандартными задачами является залогом высокоэффективного и успешного взаимодействия наших компаний. Рекомендуем...',
                id: 12
            },
            { 
                src: partnerreviews,
                position: 'глава представительства', 
                name: 'Валерий Мяснянкин', 
                text: 'Представительство корпорации «VMSN GROUP, INC.» (США) в Республике Беларусь на протяжении нескольких лет сотрудничает с ООО «МК-Правовые технологии» в рамках сопровождения деятельности по юридическим вопросам, в том числе по вопросам ведения кадрового делопроизводства – абонентское обслуживание. Хотелось бы отметить работу специалистов ООО «МК-Правовые технологии» хорошими теплыми словами: надёжные, обязательные, пунктуальные. Вопросы любой сложности им по плечу. Работая с профессионалами МК-Правовые технологии, всегда можно рассчитывать...',
                id: 13
            }
        ],
        [
            {   
                src: partnerreviews,
                position: 'дизайнер', 
                name: 'Ирина Рыбкина', 
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum vitae animi in at ab qui aut explicabo possimus, voluptatum veniam amet reiciendis, porro quae similique? Commodi doloremque autem maxime dolorum. Sit dignissimos repellat unde tempore dolorum harum assumenda aspernatur ullam deleniti, reiciendis impedit optio. Maiores aliquid delectus eveniet porro tenetur, voluptatum cupiditate voluptate doloribus magni cum assumenda quisquam quia amet!',
                id: 14
            },
            { 
                src: partnerreviews,
                position: 'маркетолог', 
                name: 'Андрей Петров', 
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum vitae animi in at ab qui aut explicabo possimus, voluptatum veniam amet reiciendis, porro quae similique? Commodi doloremque autem maxime dolorum. Sit dignissimos repellat unde tempore dolorum harum assumenda aspernatur ullam deleniti, reiciendis impedit optio. Maiores aliquid delectus eveniet porro tenetur, voluptatum cupiditate voluptate doloribus magni cum assumenda quisquam quia amet!',
                id: 15
            }
        ],
        [
            {   
                src: partnerreviews,
                position: 'бухгалтер', 
                name: 'Светлана Игоревна', 
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit natus culpa tempore! Rem aliquid, amet reiciendis vel suscipit modi sed in tempore neque? Eum perferendis iusto sed deserunt rerum numquam? Quia nobis quidem perspiciatis sint, cum est inventore, unde ad vel aliquam dolore voluptate amet doloremque, id rem odit at minus magnam ipsam sequi excepturi? Consequuntur temporibus quaerat repellat earum. Iure sed nihil, magni, ab odio veritatis, natus id minima cupiditate velit repudiandae esse ut incidunt? Neque, vel. Animi, ex sunt distinctio iure magni reprehenderit accusamus odio? Illo, quaerat possimus.',
                id: 16
            },
            { 
                src: partnerreviews,
                position: 'web-developer', 
                name: 'Сергей Витальевич', 
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit natus culpa tempore! Rem aliquid, amet reiciendis vel suscipit modi sed in tempore neque? Eum perferendis iusto sed deserunt rerum numquam? Quia nobis quidem perspiciatis sint, cum est inventore, unde ad vel aliquam dolore voluptate amet doloremque, id rem odit at minus magnam ipsam sequi excepturi? Consequuntur temporibus quaerat repellat earum. Iure sed nihil, magni, ab odio veritatis, natus id minima cupiditate velit repudiandae esse ut incidunt? Neque, vel. Animi, ex sunt distinctio iure magni reprehenderit accusamus odio? Illo, quaerat possimus.',
                id: 17
            }
        ],
    ]
   
    const [ fade, setFade ] = useState(false)
    const [ defaultSlide, setDefaultSlide ] = useState(partnerItems[0])
    const slides = defaultSlide.map(({ src, position, name, text, id }) => (
        <div className="partner-slide-wrapper" key={id}>
            <img className="partner-slider-image" src={src} alt="partner-reviews"/>
            <div className="slide-text-wrapper">
                <p className="partner-slider-position">{position}</p>
                <h3 className="partner-slider-name">{name}</h3>
                <p className="partner-slider-text">
                    {text}
                </p>
                <Link to="/" className="partner-slider-sublink">Читать далее</Link>
            </div>
        </div>
    ))
    const showNextSlide = () => {
        setFade(true)
        if(partnerItems.length - 1 > index) {
            setDefaultSlide(partnerItems[++index])   
        } else {
            index = 0
            setDefaultSlide(partnerItems[index])
        }
    }
    const showPrevSlide = () => {
        setFade(true)
        if(index === 0) {
            setDefaultSlide(partnerItems[partnerItems.length - 1])
            index = partnerItems.length - 1
        } else {
            setDefaultSlide(partnerItems[--index])
        }
    }
    
    const sliderDots = partnerItems.map((item, idx) => {
        if(idx === index) {
            return <span className={`partner-slider-dot slider-dot-active `} onClick={() => setDefaultSlide(partnerItems[index = idx])} key={idx}></span>
        }
        return <span className={`partner-slider-dot `} onClick={() => setDefaultSlide(partnerItems[index = idx])} key={idx}></span>
    })
    return (
        <div className="partner-reviews">
            <div className="container">
                <div className="partner-reviews-wrapper">
                    <h2 className="partner-reviews-title">
                        Отзывы наших партнеров
                    </h2>
                    <div className={`partner-slider ${fade ? 'fade' : ''}`} onAnimationEnd={() => setFade(false)}>
                        { slides }
                    </div>
                    <div className="partner-slider-nav">
                        <Link to="/" className="partner-link">Все отзывы</Link>
                        <div className="partner-slider-dots">
                            { sliderDots }
                        </div>
                        <div className="partner-slider-arrows">
                            <svg className="partner-arrow-left" width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={showPrevSlide}>
                                <path d="M0.600098 9L9.60009 0L10.8601 1.26L3.1201 9L10.8601 16.74L9.60009 18L0.600098 9Z" fill="black" fillOpacity="0.5"/>
                            </svg>
                            <svg className="partner-arrow-right" width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={showNextSlide}>
                                <path d="M10.4001 9L1.40014 18L0.140137 16.74L7.88014 9L0.140137 1.26L1.40014 0L10.4001 9Z" fill="black" fillOpacity="0.5"/>
                            </svg>
                        </div>
                    </div>
                    <div className="our-partners">
                        <div className="our-partners-wrapper">
                            <p className="our-partners-text">
                                Оказываем юридические услуги юридическим лицам и индивидуальным предпринимателям. Специализируемся в области хозяйственного права, работаем на всей территории Республики Беларусь, а также за ее пределами, с бизнесом любого масштаба.
                            </p> 
                            <Link to="/" className="our-partners-link">Наши партнеры</Link>  
                        </div>
                        <div className="our-partners-logos">
                            <img className="logo-bau-arenda" src={bauarenda} alt="logo"/>
                            <img className="logo-titan" src={titan} alt="logo"/>
                            <img className="logo-favorit" src={favorit} alt="logo"/>
                            <img className="logo-alpha-bank" src={alphabank} alt="logo"/>
                            <img className="logo-iba" src={IBA} alt="logo"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}