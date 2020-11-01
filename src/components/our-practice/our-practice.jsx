import React from 'react'
import './our-practice.scss'

export const OurPractice = () => {
    return (
        <div className="our-practice">
            <div className="container">
                <div className="our-practice-wrapper">
                    <div className="our-practice-explain">
                        <h4 className="our-practice-title">
                            Просто объясним сложные вещи
                        </h4>
                        <p className="our-practice-text">
                            В своей практике, мы дотошно соблюдаем законность, учитываем сложившуюся правовую практику и правила юридической этики. Мы считаем, что в поддержке бизнеса важно учитывать конкретные проблемы клиента и строить сотрудничество по принципу тщательного изучения всех нюансов возникшей ситуации. Всегда честны и объективны.
                        </p>
                    </div>
                    <div className="our-practice-protect">
                        <span className="our-practice-triangle"></span>
                        <h4 className="our-practice-title">
                            Надежно защитим права и интересы
                        </h4>
                        <p className="our-practice-text">
                            Заказав комплексные юридические услуги в ООО «МК-Правовые технологии», можно больше не платить зарплату штатному юристу, страховые отчисления и налоги с его доходов. Можно не оплачивать отпуск, больничные и не беспокоиться о нахождении работника на рабочем месте в нужный момент.
                        </p>
                    </div>
                    <div className="our-practice-pay">
                        <h4 className="our-practice-title">
                            Вы платите только за результат!
                        </h4>
                        <p className="our-practice-text">
                            В своей практике, мы дотошно соблюдаем законность, учитываем сложившуюся правовую практику и правила юридической этики. Мы считаем, что в поддержке бизнеса важно учитывать конкретные проблемы клиента и строить сотрудничество по принципу тщательного изучения всех нюансов возникшей ситуации. Всегда честны и объективны.
                        </p>
                    </div>
                </div>
            </div>
            <div className="our-practice-image-wrapper">
                <img className="our-practice-image" src="./img/our-practice.jpg" alt="our-practice"/>
            </div>
        </div>
    )
}