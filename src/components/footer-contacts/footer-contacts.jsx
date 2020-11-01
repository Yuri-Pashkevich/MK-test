import React from 'react'
import './footer-contacts.scss'
import { Link } from 'react-router-dom' 

export const FooterContacts = ({ scrollToRef }) => {
    return (
        <div className="footer-contacts" ref={scrollToRef}>
            <hr className="block-separator"/>
            <div className="container">
                <div className="footer-сontacts-wrapper">
                    <div className="footer-company">
                        <h5 className="footer-company-title">
                            ООО “МК-ПРАВОВЫЕ ТЕХНОЛОГИИ”
                        </h5>
                        <ul className="footer-company-subinfo">
                            <li className="footer-company-subinfo-item">
                                <span className="footer-company-subinfo-tin">
                                    УНП
                                </span>
                                <span className="footer-company-subinfo-number">
                                    192710862
                                </span>
                            </li>
                            <li className="footer-company-subinfo-item">
                                <span className="footer-company-subinfo-rate">
                                    Наш рейтинг
                                </span>
                                <span className="footer-company-subinfo-review">
                                    5 из 5 (15 отзывов)
                                </span>
                            </li>
                        </ul>
                        <ul className="footer-company-socials">
                            <li className="footer-company-socials-vk">
                                <a href="https://vk.com/" className="footer-company-socials-link" target="_blank" rel="noopener noreferrer"> 
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M27.5 24.5V3.5C27.5 1.85 26.1455 0.5 24.4925 0.5H3.5075C1.7825 0.5 0.5 1.7795 0.5 3.5V24.5C0.5 26.222 1.7825 27.5 3.5075 27.5H24.4925C25.2885 27.4988 26.0516 27.1826 26.6152 26.6205C27.1787 26.0583 27.4968 25.296 27.5 24.5ZM21.776 16.4105C21.776 16.4105 23.474 18.086 23.8925 18.863C23.9045 18.8795 23.909 18.8945 23.9135 18.9005C24.083 19.1855 24.1265 19.4105 24.041 19.5755C23.9 19.85 23.42 19.988 23.2565 20H20.258C20.048 20 19.613 19.946 19.085 19.5815C18.68 19.2995 18.2795 18.833 17.8895 18.3785C17.3075 17.7035 16.8035 17.1185 16.2965 17.1185C16.2322 17.1183 16.1683 17.129 16.1075 17.15C15.722 17.273 15.233 17.8205 15.233 19.283C15.233 19.7405 14.873 20.0015 14.618 20.0015H13.244C12.776 20.0015 10.3385 19.838 8.18 17.5595C5.531 14.7695 3.152 9.173 3.131 9.1235C2.981 8.762 3.2915 8.5655 3.629 8.5655H6.659C7.0655 8.5655 7.196 8.8115 7.289 9.032C7.394 9.2825 7.79 10.2935 8.438 11.4305C9.4925 13.28 10.142 14.033 10.6595 14.033C10.7563 14.0325 10.8513 14.0071 10.9355 13.9595C11.612 13.586 11.486 11.174 11.456 10.676C11.456 10.5815 11.4545 9.5975 11.1095 9.125C10.8605 8.783 10.439 8.6525 10.184 8.603C10.288 8.45972 10.4248 8.34347 10.583 8.264C11.0465 8.033 11.882 8 12.713 8H13.175C14.0765 8.012 14.3105 8.0705 14.636 8.153C15.2945 8.3105 15.308 8.738 15.2495 10.193C15.233 10.607 15.215 11.0765 15.215 11.627C15.215 11.7455 15.2105 11.876 15.2105 12.011C15.1895 12.755 15.1655 13.5965 15.6905 13.9415C15.7584 13.984 15.8369 14.0069 15.917 14.0075C16.1 14.0075 16.6475 14.0075 18.131 11.462C18.7835 10.3385 19.286 9.0125 19.3205 8.9135C19.3729 8.80646 19.4488 8.71263 19.5425 8.639C19.6193 8.59909 19.7049 8.57899 19.7915 8.5805H23.354C23.744 8.5805 24.008 8.639 24.0575 8.7875C24.143 9.026 24.041 9.7535 22.4135 11.9525L21.689 12.9125C20.213 14.8445 20.213 14.9435 21.776 16.4105Z" fill="currentColor" fillOpacity="1"/>
                                    </svg>
                                </a>
                            </li>
                            <li className="footer-company-socials-ok">
                                <a href="https://ok.ru/" className="footer-company-socials-link" target="_blank" rel="noopener noreferrer">
                                    <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.793 9.37695C10.793 8.08203 11.8418 7.0332 13.125 7.0332C14.4082 7.0332 15.457 8.08203 15.457 9.37695C15.457 10.666 14.4082 11.709 13.125 11.709C11.8418 11.709 10.793 10.6602 10.793 9.37695ZM26.25 3.6875V24.3125C26.25 25.8652 24.9902 27.125 23.4375 27.125H2.8125C1.25977 27.125 0 25.8652 0 24.3125V3.6875C0 2.13477 1.25977 0.875 2.8125 0.875H23.4375C24.9902 0.875 26.25 2.13477 26.25 3.6875ZM8.37305 9.37695C8.37305 11.9902 10.5059 14.1172 13.125 14.1172C15.7441 14.1172 17.877 11.9961 17.877 9.37695C17.877 6.75195 15.7441 4.625 13.125 4.625C10.5059 4.625 8.37305 6.74609 8.37305 9.37695ZM18.5977 14.6914C18.3281 14.1582 17.584 13.707 16.5996 14.4805C16.5996 14.4805 15.2695 15.5352 13.125 15.5352C10.9805 15.5352 9.65039 14.4805 9.65039 14.4805C8.66601 13.707 7.92188 14.1582 7.65234 14.6914C7.18945 15.6348 7.7168 16.0801 8.90625 16.8594C9.91992 17.5098 11.3203 17.75 12.2227 17.8438L11.4668 18.5996C10.4004 19.6543 9.38672 20.6797 8.67187 21.3945C7.64062 22.4258 9.29883 24.0781 10.3359 23.0703L13.1309 20.2637C14.1973 21.3301 15.2227 22.3555 15.9258 23.0703C16.957 24.0781 18.6211 22.4434 17.6016 21.3945L14.8066 18.5996L14.0449 17.8438C14.9531 17.75 16.3359 17.498 17.3379 16.8594C18.5332 16.0801 19.0547 15.6289 18.5977 14.6914Z" fill="currentColor" fillOpacity="1"/>
                                    </svg>
                                </a>   
                            </li>
                            <li className="footer-company-socials-in">
                                <a href="https://linkedin.com/" className="footer-company-socials-link" target="_blank" rel="noopener noreferrer">
                                    <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24.375 0.875H1.86914C0.837891 0.875 0 1.72461 0 2.76758V25.2324C0 26.2754 0.837891 27.125 1.86914 27.125H24.375C25.4062 27.125 26.25 26.2754 26.25 25.2324V2.76758C26.25 1.72461 25.4062 0.875 24.375 0.875ZM7.93359 23.375H4.04297V10.8477H7.93945V23.375H7.93359ZM5.98828 9.13672C4.74023 9.13672 3.73242 8.12305 3.73242 6.88086C3.73242 5.63867 4.74023 4.625 5.98828 4.625C7.23047 4.625 8.24414 5.63867 8.24414 6.88086C8.24414 8.12891 7.23633 9.13672 5.98828 9.13672ZM22.5176 23.375H18.627V17.2812C18.627 15.8281 18.5977 13.959 16.6055 13.959C14.5781 13.959 14.2676 15.541 14.2676 17.1758V23.375H10.377V10.8477H14.1094V12.5586H14.1621C14.6836 11.5742 15.9551 10.5371 17.8477 10.5371C21.7852 10.5371 22.5176 13.1328 22.5176 16.5078V23.375Z" fill="currentColor" fillOpacity="1"/>
                                    </svg>
                                </a>
                            </li>
                            <li className="footer-company-socials-instagram">
                                <a href="https://instagram.com/" className="footer-company-socials-link" target="_blank" rel="noopener noreferrer">
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.15137 14.1201C9.15137 12.7399 9.63444 11.5667 10.6006 10.6006C11.5667 9.63444 12.7399 9.15137 14.1201 9.15137C15.5003 9.15137 16.6735 9.63444 17.6396 10.6006C18.6058 11.5667 19.0889 12.7399 19.0889 14.1201C19.0889 15.5003 18.6058 16.6735 17.6396 17.6396C16.6735 18.6058 15.5003 19.0889 14.1201 19.0889C12.7399 19.0889 11.5667 18.6058 10.6006 17.6396C9.63444 16.6735 9.15137 15.5003 9.15137 14.1201ZM27.3701 12.4639V24.0576C27.3701 24.972 27.0466 25.7527 26.3997 26.3997C25.7527 27.0466 24.972 27.3701 24.0576 27.3701H4.18262C3.26823 27.3701 2.48755 27.0466 1.84058 26.3997C1.1936 25.7527 0.870117 24.972 0.870117 24.0576V4.18262C0.870117 3.26823 1.1936 2.48755 1.84058 1.84058C2.48755 1.1936 3.26823 0.870117 4.18262 0.870117H24.0576C24.972 0.870117 25.7527 1.1936 26.3997 1.84058C27.0466 2.48755 27.3701 3.26823 27.3701 4.18262V9.15137H20.7451C19.9688 8.13346 19.0026 7.3269 17.8467 6.73169C16.6908 6.13647 15.4486 5.83887 14.1201 5.83887C12.7917 5.83887 11.5495 6.13647 10.3936 6.73169C9.23763 7.3269 8.27148 8.13346 7.49512 9.15137H0.870117V12.4639H5.99414C5.89062 13.016 5.83887 13.568 5.83887 14.1201C5.83887 15.6211 6.2098 17.0056 6.95166 18.2737C7.69352 19.5417 8.69849 20.5467 9.96655 21.2886C11.2346 22.0304 12.6191 22.4014 14.1201 22.4014C15.6211 22.4014 17.0056 22.0304 18.2737 21.2886C19.5417 20.5467 20.5467 19.5417 21.2886 18.2737C22.0304 17.0056 22.4014 15.6211 22.4014 14.1201C22.4014 13.568 22.3496 13.016 22.2461 12.4639H27.3701Z" fill="currentColor" fillOpacity="1"/>
                                    </svg>
                                </a>   
                            </li>
                            <li className="footer-company-socials-youtube">
                                <a href="https://youtube.com/" className="footer-company-socials-link" target="_blank" rel="noopener noreferrer">
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.3588 21.0505V18.3423C16.3588 17.7673 16.192 17.4798 15.8585 17.4798C15.663 17.4798 15.4733 17.5718 15.2893 17.7558V21.6198C15.4733 21.8038 15.663 21.8958 15.8585 21.8958C16.192 21.8958 16.3588 21.614 16.3588 21.0505ZM19.5327 18.946H20.6712V18.3595C20.6712 17.773 20.4815 17.4798 20.102 17.4798C19.7225 17.4798 19.5327 17.773 19.5327 18.3595V18.946ZM9.68307 14.3576V15.565H8.30308V22.8617H7.02659V15.565H5.68111V14.3576H9.68307ZM13.1503 16.531V22.8617H11.9946V22.1717C11.5461 22.6892 11.1091 22.948 10.6836 22.948C10.3041 22.948 10.0626 22.787 9.95907 22.465C9.89007 22.2695 9.85557 21.959 9.85557 21.5335V16.531H10.9941V21.1885C10.9941 21.4645 10.9998 21.614 11.0113 21.637C11.0228 21.8095 11.1091 21.8958 11.2701 21.8958C11.5001 21.8958 11.7416 21.7175 11.9946 21.361V16.531H13.1503ZM17.4973 18.4458V20.9643C17.4973 21.5623 17.457 21.982 17.3765 22.2235C17.2385 22.7065 16.9338 22.948 16.4623 22.948C16.0598 22.948 15.6688 22.7122 15.2893 22.2407V22.8617H14.1335V14.3576H15.2893V17.1348C15.6573 16.6748 16.0483 16.4448 16.4623 16.4448C16.9338 16.4448 17.2385 16.6863 17.3765 17.1693C17.457 17.4108 17.4973 17.8363 17.4973 18.4458ZM21.827 20.671V20.8263C21.827 21.1598 21.8155 21.407 21.7925 21.568C21.758 21.821 21.6717 22.051 21.5337 22.258C21.2232 22.718 20.7632 22.948 20.1537 22.948C19.5557 22.948 19.09 22.7295 18.7565 22.2925C18.515 21.982 18.3943 21.4875 18.3943 20.809V18.5838C18.3943 17.9053 18.5093 17.4108 18.7393 17.1003C19.0728 16.6633 19.5327 16.4448 20.1192 16.4448C20.7057 16.4448 21.1542 16.6633 21.4647 17.1003C21.7062 17.4338 21.827 17.9283 21.827 18.5838V19.8948H19.5327V21.016C19.5327 21.6025 19.7282 21.8958 20.1192 21.8958C20.3952 21.8958 20.5677 21.7463 20.6367 21.4473C20.6367 21.4358 20.6396 21.3955 20.6454 21.3265C20.6511 21.2575 20.654 21.1626 20.654 21.0419V20.671H21.827ZM14.0473 6.45712V9.1481C14.0473 9.7346 13.8633 10.0278 13.4953 10.0278C13.1273 10.0278 12.9433 9.7346 12.9433 9.1481V6.45712C12.9433 5.85913 13.1273 5.56013 13.4953 5.56013C13.8633 5.56013 14.0473 5.85913 14.0473 6.45712ZM23.2415 18.7563C23.2415 16.7208 23.1322 15.2258 22.9137 14.2713C22.7987 13.7653 22.5515 13.3427 22.172 13.0034C21.7925 12.6642 21.3555 12.4658 20.861 12.4083C19.297 12.2358 16.928 12.1496 13.754 12.1496C10.5916 12.1496 8.22833 12.2358 6.66435 12.4083C6.15835 12.4658 5.71848 12.6642 5.34473 13.0034C4.97099 13.3427 4.72661 13.7653 4.61161 14.2713C4.38162 15.2718 4.26662 16.7668 4.26662 18.7563C4.26662 20.7803 4.38162 22.2752 4.61161 23.2412C4.72661 23.7357 4.97099 24.1555 5.34473 24.5005C5.71848 24.8455 6.1526 25.0467 6.6471 25.1042C8.22259 25.2767 10.5916 25.363 13.754 25.363C16.9165 25.363 19.2855 25.2767 20.861 25.1042C21.3555 25.0467 21.7896 24.8455 22.1634 24.5005C22.5371 24.1555 22.7815 23.7357 22.8965 23.2412C23.1265 22.2752 23.2415 20.7803 23.2415 18.7563ZM10.2178 7.52661L11.7703 2.42065H10.4766L9.59682 5.78438L8.68258 2.42065H7.33709C7.41759 2.68515 7.54984 3.0819 7.73384 3.61089L8.14784 4.80113C8.55033 5.98563 8.81483 6.89412 8.94133 7.52661V10.9938H10.2178V7.52661ZM15.203 8.92385V6.68137C15.203 6.01438 15.0823 5.51413 14.8408 5.18063C14.5073 4.74363 14.0588 4.52514 13.4953 4.52514C12.9088 4.52514 12.4603 4.74363 12.1498 5.18063C11.9083 5.51413 11.7876 6.01438 11.7876 6.68137V8.92385C11.7876 9.59085 11.9083 10.0911 12.1498 10.4246C12.4603 10.8616 12.9088 11.0801 13.4953 11.0801C14.0588 11.0801 14.5073 10.8616 14.8408 10.4246C15.0823 10.1141 15.203 9.61385 15.203 8.92385ZM18.3253 10.9938H19.481V4.61139H18.3253V9.4931C18.0723 9.8496 17.8308 10.0278 17.6008 10.0278C17.4283 10.0278 17.3363 9.93584 17.3248 9.75185C17.3133 9.72885 17.3075 9.57935 17.3075 9.30335V4.61139H16.1518V9.6656C16.1518 10.0911 16.1863 10.4073 16.2553 10.6143C16.3818 10.9248 16.629 11.0801 16.997 11.0801C17.411 11.0801 17.8538 10.8213 18.3253 10.3038V10.9938ZM27.0019 5.74988V22.3097C27.0019 23.6782 26.9974 25.4224 26.0257 26.3941C25.0539 27.3659 23.4025 27.2777 22.034 27.2777H5.47411C4.10562 27.2777 2.3166 27.3659 1.34486 26.3941C0.373118 25.4224 0.506146 23.6782 0.506146 22.3097V5.74988C0.506146 4.38139 0.373118 2.63645 1.34486 1.6647C2.3166 0.692961 4.10562 0.781915 5.47411 0.781915H22.034C23.4025 0.781915 25.0539 0.692961 26.0257 1.6647C26.9974 2.63645 27.0019 4.38139 27.0019 5.74988Z" fill="currentColor" fillOpacity="1"/>
                                    </svg>
                                </a>  
                            </li>
                            <li className="footer-company-socials-facebook">
                                <a href="https://facebook.com/" className="footer-company-socials-link" target="_blank" rel="noopener noreferrer">
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M26.19 0.780273H1.81C1.22369 0.780273 0.75 1.25396 0.75 1.84027V26.2203C0.75 26.8066 1.22369 27.2803 1.81 27.2803H26.19C26.7763 27.2803 27.25 26.8066 27.25 26.2203V1.84027C27.25 1.25396 26.7763 0.780273 26.19 0.780273ZM23.1292 8.51496H21.0126C19.353 8.51496 19.0317 9.30334 19.0317 10.4627V13.0166H22.9934L22.4767 17.0148H19.0317V27.2803H14.901V17.0182H11.4461V13.0166H14.901V10.0685C14.901 6.64671 16.9912 4.78177 20.0453 4.78177C21.5094 4.78177 22.7649 4.89109 23.1326 4.94077V8.51496H23.1292Z" fill="currentColor" fillOpacity="1"/>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                        <ul className="footer-company-info">
                            <li className="footer-company-info-item">
                                <Link to="/" className="footer-company-info-link">
                                    Карта сайта
                                </Link>
                                <svg width="60" height="12" viewBox="0 0 60 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 5.5H59V6.5H0V5.5Z" fill="currentColor" fillOpacity="0.75"/>
                                    <path d="M53.84 11.8202L53 10.9802L57.98 6.00018L53 1.02018L53.84 0.180176L59.66 6.00018L53.84 11.8202Z" fill="currentColor" fillOpacity="0.75"/>
                                </svg>
                            </li>
                            <li className="footer-company-info-item">
                                <Link to="/" className="footer-company-info-link">
                                    Политика конфиденциальности
                                </Link>
                                <svg width="60" height="12" viewBox="0 0 60 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 5.5H59V6.5H0V5.5Z" fill="currentColor" fillOpacity="0.75"/>
                                    <path d="M53.84 11.8202L53 10.9802L57.98 6.00018L53 1.02018L53.84 0.180176L59.66 6.00018L53.84 11.8202Z" fill="currentColor" fillOpacity="0.75"/>
                                </svg>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-offices">
                        <div className="footer-title">
                            Наши офисы
                        </div>
                        <hr className="footer-separator"/>
                        <ul className="footer-offices-list">
                            <li className="footer-offices-list-item">
                                <div className="footer-subtitle">
                                    Контакты в Минске
                                </div>
                                <span className="footer-phones">
                                    +375 (44) 755-01-01 <br/>
                                    +375 (29) 550-01-01 <br/>
                                    +375 (17) 374-40-60 <br/>
                                </span>
                                <span className="footer-adress">
                                    <span>Адрес</span>
                                    г. Минск, ул. Широкая, д. 3, <br/>пом. 146, оф. 4
                                </span>
                                <span className="footer-phones-russia">
                                    <span>Телефон для связи резидентов Российской Федерации</span>
                                    whatsapp +7 (989) 166 24 00
                                </span>
                                <span className="footer-email">
                                    info@jurisprudent.by
                                </span>
                            </li>
                            <li className="footer-offices-list-item">
                                <div className="footer-subtitle">
                                    Отдел в Могилеве
                                </div>
                                <span className="footer-adress">
                                    <span>Адрес</span>
                                    г. Могилев, ул. Космонавтов, <br/>д. 19, оф. 507
                                </span>
                                <span className="footer-email">
                                    mogilev@jurisprudent.by
                                </span>
                                <div className="footer-subtitle">
                                    Отдел в Бресте
                                </div>
                                <span className="footer-adress">
                                    <span>Адрес</span>
                                    г. Брест, б-р Шевченко, д. 4, <br/>оф. 401
                                </span>
                                <span className="footer-email">
                                    brest@jurisprudent.by
                                </span>
                                <div className="footer-subtitle">
                                    Отдел в Витебске
                                </div>
                                <span className="footer-adress">
                                    <span>Адрес</span>
                                    г. Витебск, ул.Гоголя, д. 14, <br/>оф. 614
                                </span>
                                <span className="footer-email">
                                    vitebsk@jurisprudent.by
                                </span>
                            </li>
                            <li className="footer-offices-list-item">
                                <div className="footer-subtitle">
                                    Отдел в Гродно
                                </div>
                                <span className="footer-adress">
                                    <span>Адрес</span>
                                    г. Гродно, ул. Карла Маркса, <br/>д. 31-1, оф. 1010
                                </span>
                                <span className="footer-email">
                                    grodno@jurisprudent.by
                                </span>
                                <div className="footer-subtitle">
                                    Отдел в Гомеле
                                </div>
                                <span className="footer-adress">
                                    <span>Адрес</span>
                                    г. Гомель, пр. Ленина, д. 10, <br/>оф. 901
                                </span>
                                <span className="footer-email">
                                    gomel@jurisprudent.by
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-working-hours">
                        <div className="footer-title">
                            Время работы
                        </div>
                        <hr className="footer-separator"/>
                        <ul className="footer-working-list">
                            <li className="footer-working-list-item">
                                <span className="footer-working-time">
                                    <span>Прием посетителей</span>
                                    Ежедневно с 8.00 до 19.00 <br/>Выходной: суббота - воскресенье.

                                </span>
                                <span className="footer-working-time">
                                    <span>Прием звонков</span>
                                    Ежедневно с 8.00 до 22.00 <br/>Без выходных
                                </span>
                                <span className="footer-working-time">
                                    <span>Онлайн консультант</span>
                                    Круглосуточно 24/7 <br/>Без выходных
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="development-and-promotion">
                Разработка и продвижение сайта - Digital агентство «Веб Фокус»
            </div>
        </div>
    )
}
