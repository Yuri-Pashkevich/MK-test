import React, { useState } from 'react'
import './main-slider.scss'
import { Link } from 'react-router-dom'
import collection from '../../img/collection.jpg'
import outsorsing from '../../img/outsorsing.jpg'
import consultation from '../../img/consultation.jpg'
import liquidation from '../../img/liquidation.jpg'
import registration from '../../img/registration.jpg'

export const MainSlider = ({ toMainActivity }) => {
    const sliderItems = [
        { title: 'Взыскание дебиторской задолженности', text: 'Индивидуальный подход и нацеленность на достижение результата', url: collection },
        { title: 'Юридический аутсорсинг', text: 'Гарантия своевременности и качества услуг', url: outsorsing },
        { title: 'Юридическая консультация', text: 'Детальные разъяснения вопросов по ведению бизнеса от профессионалов', url: consultation },
        { title: 'Ликвидация предприятия', text: 'Эффективное решение сложных задач', url: liquidation },
        { title: 'Регистрация ООО', text: 'Гарантируем минимальные сроки регистрации под ключ ', url: registration },
    ]
    const [ fade, setFade ] = useState(false)
    const [ defaultSlide, setDefaultSlide ] = useState({
        slide: sliderItems[0],
        index: 0,
    })
    const { title, text, url } = defaultSlide.slide
 
    const showNextSlide = (index) => {
        setFade(true)
        if(sliderItems.length - 1 > defaultSlide.index) {
            setDefaultSlide({
                ...defaultSlide,
                slide: sliderItems[++index],
                index: index++
            })
        } else {
            setDefaultSlide({
                ...defaultSlide,
                index: 0,
                slide: sliderItems[0]
            })
        }
    }
    const showPrevSlide = (index) => {
        setFade(true)
        if(defaultSlide.index === 0) {
            setDefaultSlide({
                ...defaultSlide,
                slide: sliderItems[sliderItems.length - 1],
                index: sliderItems.length - 1
            })
        } else {
            setDefaultSlide({
                ...defaultSlide,
                slide: sliderItems[--index],
                index: index--
            })
        }
    }
    return (
        <div className="main-slider">
            <div className={`slider-content ${fade ? 'fade' : ''}`} onAnimationEnd={() => setFade(false)}>
                <img className="slide-img" src={url} alt="slider-img"/>
                <div className="container">
                    <div className="slide-wrapper">
                        <h1 className="slide-title">{title}</h1>
                        <p className="slide-text">{text}</p>
                        <Link to="/" className="slide-button" onClick={toMainActivity}>Подробнее</Link>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="buttons-block">
                    <button className="prev-slide" onClick={() => showPrevSlide(defaultSlide.index)}>
                        <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.600098 9L9.60009 0L10.8601 1.26L3.1201 9L10.8601 16.74L9.60009 18L0.600098 9Z" fill="black" fillOpacity="0.8"/>
                        </svg>
                    </button>
                    <button className="next-slide" onClick={() => showNextSlide(defaultSlide.index)}>
                        <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.4001 9L1.40014 18L0.140137 16.74L7.88014 9L0.140137 1.26L1.40014 0L10.4001 9Z" fill="black" fillOpacity="0.8"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}