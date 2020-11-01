import React from 'react'
import './our-strength.scss'
import protection from '../../svg/protection.svg'
import reputation from '../../svg/reputation.svg'
import result from '../../svg/result.svg'
import confidentiality from '../../svg/confidentiality.svg'

export const OurStrength = () => {
    const strengthItems = [
        { src: protection, subtitle: 'Надежная защита', id: 8},
        { src: reputation, subtitle: 'Безупречная репутация', id: 9 },
        { src: result, subtitle: 'Ориентированность на результат', id: 10 },
        { src: confidentiality, subtitle: 'Абсолютная конфиденциальность', id: 11 },
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