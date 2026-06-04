import React from 'react';
import { useTranslation } from 'react-i18next';
import './Nas.css';

// Rasmingiz manzilini shu yerga yozasiz
import nasImg from './nasimg.jpg'; 

const Nas = () => {
    const { t } = useTranslation();

    return (
        <section className="nas">
            <div className="container">
                <div className="nas_wrapper">
                    
                    {/* Chap taraf - Rasm */}
                    <div className="nas_left">
                        <img src={nasImg} alt="О нас" className="nas_img" />
                    </div>

                    {/* O'ng taraf - Matnlar */}
                    <div className="nas_right">
                        <span className="nas_subtitle">{t('nas.subtitle')}</span>
                        <h2 className="nas_title">
                            <span className="nas_title_green">{t('nas.title_green')}</span><br />
                            {t('nas.title_main')}
                        </h2>
                        
                        <div className="nas_texts">
                            <p>{t('nas.desc1')}</p>
                            <p>{t('nas.desc2')}</p>
                            <p>{t('nas.desc3')}</p>
                        </div>

                        {/* Tugma / Link */}
                        <div className="nas_link_wrapper">
                            <a href="#" className="nas_link">
                                {t('nas.link')} 
                                {/* O'q (arrow) uchun oddiy belgi ishlatildi, xohlasangiz SVG qo'ysangiz ham bo'ladi */}
                                <span className="nas_arrow">⟶</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Nas;