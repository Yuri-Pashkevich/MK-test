import React, { useRef } from 'react'
import './App.scss'
import { CustomizeContacts, HeaderMenu, MainSlider, OurStrength, BusinessSupport, MainActivity, StaffSlider, PartnerReviews, OurPractice, ServiceList, WhyTrustUs, OurAdvantages, CooperationStart, ServicesPrice, FooterContacts, ScrollToTop } from '../index'

export const App = () => {

    const headerMenu = useRef()
    const businessSupport = useRef()
    const servicesList = useRef()
    const servicesPrice = useRef()
    const cooperationStart = useRef()
    const ourAdvantages = useRef()
    const footerContacts = useRef()
    const scrollToBlock = ref => {
        ref.current.scrollIntoView({ behavior: 'smooth' })
    }


    return (
        <div className="app" ref={headerMenu}>
            <div className="header ">
                <CustomizeContacts/>
                <HeaderMenu 
                    toHeaderMenu={() => scrollToBlock(headerMenu)}
                    toBusinessSupport={() => scrollToBlock(businessSupport)}
                    toMainActivity={() => scrollToBlock(servicesList)}
                    toServicesPrice={() => scrollToBlock(servicesPrice)}
                    toOurAdvantages={() => scrollToBlock(ourAdvantages)}
                    toFooterContacts={() => scrollToBlock(footerContacts)}
                />
            </div>
            <MainSlider toMainActivity={() => scrollToBlock(servicesList)}/>          
            <OurStrength/>  
            <BusinessSupport scrollToRef={businessSupport}/>
            <MainActivity toMainActivity={() => scrollToBlock(servicesList)}/>
            <StaffSlider/>
            <PartnerReviews/>
            <OurPractice/>
            <ServiceList scrollToRef={servicesList} toCooperationStart={() => scrollToBlock(cooperationStart)}/>
            <WhyTrustUs/>
            <OurAdvantages scrollToRef={ourAdvantages}/>
            <CooperationStart scrollToRef={cooperationStart}/>
            <ServicesPrice scrollToRef={servicesPrice}/>
            <FooterContacts scrollToRef={footerContacts}/>
            <ScrollToTop/>
        </div>
    )
}