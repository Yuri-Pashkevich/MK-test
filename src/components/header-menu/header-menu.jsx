import React, { useState } from 'react'
import "./header-menu.scss"
import { Link } from "react-router-dom"
import logo from './logo.png'

export const HeaderMenu = ({ toHeaderMenu, toBusinessSupport, toMainActivity, toServicesPrice, toOurAdvantages, toFooterContacts }) => {
    const menuItems = [
        { section: '/', name: "Главная", to: toHeaderMenu },
        { section: '/about', name: "О нас", to: toBusinessSupport },
        { section: '/services', name: "Услуги", to: toMainActivity },
        { section: '/prices', name: "Тарифы", to: toServicesPrice },
        { section: '/info', name: "Инфоцентр", to: toOurAdvantages },
        { section: '/contacts', name: "Контакты", to: toFooterContacts },
    ]
    const menuSections = menuItems.map(({section, name, to}) => (
        <li className="nav-list-item" key={name}>
            <Link className="nav-list-link" to={section} onClick={to}>{name} </Link>
        </li>
    ))
    const [ showSearch, setShowSearch ] = useState(false)
    const toggleSearch = () => {
        setShowSearch(!showSearch)
    }
    return (
            <div className="container" >
                <div className="header-menu">
                    <Link to="/">
                        <img className="logo" src={logo} alt="logo"/>
                    </Link>
                    <div className="nav-search">
                        <nav className="nav">
                            <ul className="nav-list">
                                {menuSections}
                            </ul>
                        </nav>
                        <button className="search" onClick={toggleSearch}>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.7501 16.8686L13.0314 12.1249C14.1594 10.7637 14.7199 9.02038 14.5962 7.25688C14.4725 5.49338 13.6743 3.84528 12.3673 2.65492C11.0603 1.46456 9.34497 0.823416 7.57762 0.864667C5.81027 0.905918 4.12673 1.62639 2.87668 2.87644C1.62663 4.12648 0.906162 5.81002 0.864911 7.57737C0.82366 9.34472 1.4648 11.06 2.65516 12.3671C3.84553 13.6741 5.49362 14.4723 7.25712 14.596C9.02062 14.7196 10.764 14.1592 12.1251 13.0311L16.8689 17.7499L17.7501 16.8686ZM2.12511 7.74987C2.12511 6.63735 2.45501 5.54981 3.07309 4.62478C3.69118 3.69976 4.56968 2.97879 5.59751 2.55304C6.62535 2.1273 7.75635 2.01591 8.84749 2.23295C9.93863 2.44999 10.9409 2.98572 11.7276 3.77239C12.5143 4.55906 13.05 5.56134 13.267 6.65248C13.4841 7.74363 13.3727 8.87463 12.9469 9.90246C12.5212 10.9303 11.8002 11.8088 10.8752 12.4269C9.95016 13.045 8.86263 13.3749 7.75011 13.3749C6.25827 13.3749 4.82752 12.7822 3.77263 11.7273C2.71774 10.6724 2.12511 9.24171 2.12511 7.74987Z" fill="currentColor" fillOpacity="1"/>
                            </svg>
                        </button>
                    </div>
                </div>
                {showSearch && 
                    <form className="search-form">
                        <input className="search-input" type="text"/>
                    </form>
                }
            </div>
        
    )
}