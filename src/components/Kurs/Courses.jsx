import React from 'react';
import { useTranslation } from 'react-i18next';
import './Courses.css';

// Rasmlarning haqiqiy manzilini shu yerga yozasiz
import odam1 from "./odam1.png";
import odam2 from "./odam2.png";
import odam3 from "./odam3.png";

const Courses = () => {
    const { t, i18n } = useTranslation();

    return (
        <section className="courses">
            <div className="container">
                <h2 className="courses_title">{t('courses.main_title')}</h2>

                <ul className="courses_list">
                    {/* --- 1-KARD (Ko'k) --- */}
                    <li className="course_item blue_theme">
                        <div className="course_content">
                            <span className="top_text">{t('courses.card1.top_text')}</span>
                            <h3 className="course_name">{t('courses.card1.title')}</h3>
                            <span className="course_badge">{t('courses.card1.badge')}</span>
                            <p className="course_date">{t('courses.card1.date')}</p>

                            <div className="course_body">
                                <div className="course_info">
                                    <p>{t('courses.card1.desc1')}</p>
                                    <p>{t('courses.card1.desc2')}</p>
                                    <p>{t('courses.card1.desc3')}</p>
                                    <p>{t('courses.card1.desc4')}</p>
                                </div>
                                <div className="course_img_wrapper">
                                    <img src={odam1} alt="Kanyul" />
                                </div>
                            </div>
                            
                            <p className="course_availability">{t('courses.card1.availability')}</p>
                        </div>
                        <div className="course_actions">
                            <button className="btn_reg">{t('courses.card1.btn_reg')}</button>
                            <button className="btn_more">{t('courses.card1.btn_more')}</button>
                        </div>
                    </li>

                    {/* --- 2-KARD (Yashil, markaziy) --- */}
                    <li className="course_item green_theme active_card">
                        <div className="course_content">
                            <span className="top_text">{t('courses.card2.top_text')}</span>
                            <h3 className="course_name">{t('courses.card2.title')}</h3>
                            <span className="course_badge">{t('courses.card2.badge')}</span>
                            <p className="course_date">{t('courses.card2.date')}</p>

                            <div className="course_body">
                                <div className="course_info">
                                    <p>{t('courses.card2.desc1')}</p>
                                    <p>{t('courses.card2.desc2')}</p>
                                    <p>{t('courses.card2.desc3')}</p>
                                    <p>{t('courses.card2.desc4')}</p>
                                </div>
                                <div className="course_img_wrapper">
                                    <img src={odam2} alt="Mezoterapiya" />
                                </div>
                            </div>

                            <p className="course_availability">{t('courses.card2.availability')}</p>
                        </div>
                        <div className="course_actions">
                            <button className="btn_reg">{t('courses.card2.btn_reg')}</button>
                            <button className="btn_more">{t('courses.card2.btn_more')}</button>
                        </div>
                    </li>

                    {/* --- 3-KARD (Havorang) --- */}
                    <li className="course_item teal_theme">
                        <div className="course_content">
                            <span className="top_text">{t('courses.card3.top_text')}</span>
                            <h3 className="course_name">{t('courses.card3.title')}</h3>
                            <span className="course_badge">{t('courses.card3.badge')}</span>
                            <p className="course_date">{t('courses.card3.date')}</p>

                            <div className="course_body">
                                <div className="course_info">
                                    <p>{t('courses.card3.desc1')}</p>
                                    <p>{t('courses.card3.desc2')}</p>
                                    <p>{t('courses.card3.desc3')}</p>
                                    <p>{t('courses.card3.desc4')}</p>
                                </div>
                                <div className="course_img_wrapper">
                                    <img src={odam3} alt="Biogel" />
                                </div>
                            </div>

                            <p className="course_availability">{t('courses.card3.availability')}</p>
                        </div>
                        <div className="course_actions">
                            <button className="btn_reg">{t('courses.card3.btn_reg')}</button>
                            <button className="btn_more">{t('courses.card3.btn_more')}</button>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Courses;