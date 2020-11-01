import React from 'react'
import './why-trust-us.scss'

export const WhyTrustUs = () => {
    const whyTrustItems = [
        { subtitle: 'безупречная репутация', id: 28 },
        { subtitle: 'абсолютная конфиденциальность', id: 29 },
        { subtitle: 'внимание к каждому клиенту', id: 30 },
        { subtitle: 'успешный опыт решения нестандартных вопросов', id: 31 },
      
    ]
    const whatReceiveItems = [
        { subtitle: 'надежная защита бизнеса', id: 32 },
        { subtitle: 'актуальная правовая помощь', id: 33 },
        { subtitle: 'своевременная оценка рисков', id: 34 },
        { subtitle: 'компетентное решение правовых вопросов', id: 35 },
      
    ]
    const whyTrustList = whyTrustItems.map(({ subtitle, id }) => (
        <li className="why-trust-item" key={id}>
            <svg className="why-trust-marker" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 20C15 17.2386 17.2386 15 20 15C22.7614 15 25 17.2386 25 20C25 22.7614 22.7614 25 20 25C17.2386 25 15 22.7614 15 20Z" fill="#DEC377"/>
                <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#DEC377" strokeOpacity="0.4"/>
            </svg>
            <h6 className="why-trust-subtitle">
                { subtitle }
            </h6>   
        </li>
    ))
    const whatReceiveList = whatReceiveItems.map(({ subtitle, id }) => (
        <li className="what-receive-item" key={id}>
            <svg className="what-receive-marker" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 20C15 17.2386 17.2386 15 20 15C22.7614 15 25 17.2386 25 20C25 22.7614 22.7614 25 20 25C17.2386 25 15 22.7614 15 20Z" fill="#DEC377"/>
                <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#DEC377" strokeOpacity="0.4"/>
            </svg>
            <h6 className="what-receive-subtitle">
                { subtitle }
            </h6>   
        </li>
    ))
    return (
        <div className="why-trust-us">
            <div className="container">
                <div className="why-trust-block">
                    <div className="why-trust-info">
                        <h2 className="why-trust-title">
                            Почему нам доверяют
                        </h2>
                        <p className="why-trust-text">
                            Прозрачность и открытость для клиентов – наш принцип, который с самого начала исключает любые недопонимания. Мы тщательно продумали работу каждого юриста внутри коллектива, что обеспечивает высокое качество юридических услуг компании.
                        </p>
                    </div>
                    <ul className="why-trust-list">
                        { whyTrustList }
                    </ul>
                </div>
                <hr className="block-separator"/>
                <div className="what-receive-block">
                    <div className="what-receive-info">
                        <h2 className="what-receive-title">
                            Что получает клиент
                        </h2>
                        <p className="what-receive-text">
                            Юристы нашей компании готовы дать четкие, основанные на фактах, консультации, касающиеся и «типовой», и нестандартной ситуации, опираясь на сложившуюся служебную практику и многолетний опыт. Мы объективно оцениваем риски и тщательно анализируем каждый случай.
                        </p>
                    </div>
                    <ul className="what-receive-list">
                        { whatReceiveList }
                    </ul>
                </div>
            </div>
        </div>
    )
}