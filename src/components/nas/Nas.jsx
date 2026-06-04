import React from 'react';
import { useTranslation } from 'react-i18next';
import './Nas.css';


import nasImg from './nasimg.jpg'; 

const Nas = () => {
    
    const { t, i18n } = useTranslation();

    return (
        <section className="nas">
            <div className="container">
                
                <img src={nasImg} alt="О нас" className="nas_img" />
                

                <div className="nas_content">
                    <span className="nas_subtitle">{t('nas.subtitle')}</span>
                    
                    <h2 className="nas_title">
                        <span className="nas_title_green">{t('nas.title_green')}</span><br />
                        {t('nas.title_main')}
                    </h2>
                    
                    <p className="nas_text">{t('nas.desc1')}</p>
                    <p className="nas_text">{t('nas.desc2')}</p>
                    <p className="nas_text">{t('nas.desc3')}</p>

                    <a href="#" className="nas_link">
                        {t('nas.link')} <span className="nas_arrow">⟶</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Nas;