import React from 'react';
import { useTranslation } from 'react-i18next';
import './Ser.css'; // Stil faylini ulash

const Ser = () => {
    const { t, i18n } = useTranslation();

    return (
        <section className="ser">
            <div className="container">
                <ul className="ser_list">
                    <li className="ser_item">
                        <h3 className="ser_item_num">{t('ser.item1_num')}</h3>
                        <p className="ser_item_text">{t('ser.item1_text')}</p>
                    </li>
                    <li className="ser_item">
                        <h3 className="ser_item_num">{t('ser.item2_num')}</h3>
                        <p className="ser_item_text">{t('ser.item2_text')}</p>
                    </li>
                    <li className="ser_item">
                        <h3 className="ser_item_num">{t('ser.item3_num')}</h3>
                        <p className="ser_item_text">{t('ser.item3_text')}</p>
                    </li>
                    <li className="ser_item">
                        <h3 className="ser_item_num">{t('ser.item4_num')}</h3>
                        <p className="ser_item_text">{t('ser.item4_text')}</p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Ser;