import React from 'react'
import './our-strength.scss'

export const OurStrength = () => {
    const strengthItems = [
        { src: './svg/protection.svg', subtitle: 'Надежная защита', id: 8},
        { src: './svg/reputation.svg', subtitle: 'Безупречная репутация', id: 9 },
        { src: './svg/result.svg', subtitle: 'Ориентированность на результат', id: 10 },
        { src: './svg/confidentiality.svg', subtitle: 'Абсолютная конфиденциальность', id: 11 },
    ]
    const strengthList = strengthItems.map(({ src, subtitle, id }) => (
        <li className="strength-list-item" key={id}>
            <div className="strength-list-circle">
                <img className="strength-list-image" src={src} alt="img"/>
            </div>
            <h6 className="strength-list-subtitle">{subtitle}</h6>
        </li>
    ))
    return (
        <div className="container">
            <ul className="strength-list">
                { strengthList }
            </ul>
        </div>
    )
}