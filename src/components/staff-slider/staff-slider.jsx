import React, { useState } from 'react'
import './staff-slider.scss'
import staff1 from '../../img/staff1.jpg'
import staff2 from '../../img/staff2.jpg'
import staff3 from '../../img/staff3.jpg'
import staff4 from '../../img/staff4.jpg'
import staff5 from '../../img/staff5.jpg'

let index = 0

export const StaffSlider = () => {
    const staffItems = [
        { src: staff1 },
        { src: staff2 },
        { src: staff3 },
        { src: staff4 },
        { src: staff5 },
    ]
    
    const [ defaultSlide, setDefaultSlide ] = useState(staffItems[0])
    const { src } = defaultSlide
    const [ fade, setFade ] = useState(false)
    const showNextSlide = () => {
        setFade(true)
        if(staffItems.length - 1 > index) {
            setDefaultSlide(staffItems[++index])   
        } else {
            index = 0
            setDefaultSlide(staffItems[index])
        }
    }
    const showPrevSlide = () => {
        setFade(true)
        if(index === 0) {
            setDefaultSlide(staffItems[staffItems.length - 1])
            index = staffItems.length - 1
        } else {
            setDefaultSlide(staffItems[--index])
        }
    }
    return (
        <div className="container">
            <div className={`staff-slider ${fade ? 'fade' : ''}`} onAnimationEnd={() => setFade(false)}>
                <button className="staff-prev-slide" onClick={showPrevSlide}>
                    <svg width="18" height="30" viewBox="0 0 18 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 15L15 0L17.1 2.1L4.2 15L17.1 27.9L15 30L0 15Z" fill="black" fillOpacity="0.5"/>
                    </svg>
                </button>
                <div className="staff-slider-wrapper">
                    <img src={src} alt="staff"/>
                </div>
                <button className="staff-next-slide" onClick={showNextSlide}>
                    <svg width="18" height="30" viewBox="0 0 18 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.0001 15L3.00015 30L0.900146 27.9L13.8001 15L0.900146 2.1L3.00015 0L18.0001 15Z" fill="black" fillOpacity="0.5"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}