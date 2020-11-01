import React, { useState } from 'react'
import './cooperation-start.scss'
import { Link } from 'react-router-dom'

const Modal = ({ name, hide }) => {
    return (
        <div className="modal" onClick={hide}>
            <div className="modal-triangle"></div>
            <div className="modal-triangle"></div>
            <h2 className="modal-title">{`Спасибо, ${name}!`}</h2>
            <p className="modal-text">
                Ваша заявка на консультацию принята <br/>
                В течение ближайшего времени по указанному телефону с вами свяжется наш менеджер, чтобы обсудить детали интересующего вас вопроса
            </p> 
            <button className="modal-button">Хорошо</button>      
        </div>
    )
}

export const CooperationStart = ({ scrollToRef }) => {
    const [showModal, setShowModal] = useState(false)
    const [ inputValues, setInputValues ] = useState({
        name: '',
        tel: ''
    })
    const onSubmit = event => {
        setShowModal(!showModal)
        event.preventDefault();
    }
    const onTelChange = e => {
        setInputValues({
            ...inputValues,
            tel: e.target.value
        })
    }
    const onNameChange = e => {
        setInputValues({
            ...inputValues,
            name: e.target.value
        })
    }
    const hideModal = () => {
        setShowModal(false)
    }
    return (
        <div className="container">
            <div className="cooperation-start" ref={scrollToRef}>
                <div className="cooperation-start-organization">
                    <h2 className="cooperation-start-title">
                        Организация сотрудничества
                    </h2>
                    <ul className="cooperation-start-list">
                        <li className="cooperation-start-item">
                            <span className="cooperation-start-circle">
                                <span className="cooperation-start-number">
                                    1
                                </span>
                            </span>
                            <p className="cooperation-start-subtext">
                                Установив контакт с нашим сотрудником, Вы оговорите нюансы предмета обсуждения и согласуете личную встречу.
                            </p>
                        </li>
                        <li className="cooperation-start-item">
                            <span className="cooperation-start-circle">
                                <span className="cooperation-start-number">
                                    2
                                </span>
                            </span>
                            <p className="cooperation-start-subtext">
                                Юрист изучит документы, необходимые для разработки стратегии решения возникшей ситуации. И заключит договор.
                            </p>
                        </li>
                    </ul>
                    <p className="cooperation-start-text">
                        Также в нашей компании возможна удаленная форма обслуживания с оказанием полного комплекса юридических услуг в РБ через современные средства связи и мессенджеры.
                    </p>
                </div>
                <form className="cooperation-start-form" onSubmit={onSubmit}>
                    <label className="cooperation-start-name" htmlFor="input-name"> 
                        Ваше имя
                        <input 
                            type="text" 
                            name="name" 
                            id="input-name" 
                            placeholder="Ваше имя" 
                            onChange={onNameChange}
                            required
                            pattern="[a-zA-Zа-яёА-Яё]{3,15}"
                            title="Имя должно содержать русские или латинские буквы длиной не менее 3 символов"
                        />
                    </label>
                    <label className="cooperation-start-tel" htmlFor="input-tel"> 
                        Телефон для связи
                        <input 
                            type="tel" 
                            name="tel" 
                            id="input-tel" 
                            placeholder="+375 (XX) XXX-XX-XX" 
                            onChange={onTelChange}
                            pattern="[\+]\d{3}\s[\(]\d{2}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}" 
                            title="+375 (XX) XXX-XX-XX"
                            required/>
                    </label>
                    <div className="cooperation-form-text">
                        Нажимая на кнопку «Получить консультацию», вы соглашаетесь с условиями
                        <Link to="/" className="cooperation-form-link">
                            Политики конфиденциальности
                        </Link>
                    </div>
                    <button className="cooperation-form-submit" type="submit">Получить консультацию</button>
                </form>
                { showModal && <Modal name={inputValues.name} hide={hideModal}/> }
            </div>
        </div>

    )
}
