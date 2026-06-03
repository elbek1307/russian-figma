import React from 'react'
import "./Hero.css"

import shifo from "./shifo.png"
import { useTranslation } from 'react-i18next'

export const Hero = () => {
  const {t, i18n} = useTranslation()
  return (
    <>
    <div className="hero">
      <div className="container">
        <div className="hero_content">
          <h3 className="hero_title_top">{t("hero.title_top")}</h3>
          <h1 className="hero_title">{t("hero.title")}</h1>
          <p className="hero_text">{t("hero.text")}</p>
          <div className="hero_box">
            <button className="hero_btn hero_btn1">{t("hero.btn1")}</button>
          <button className="hero_btn hero_btn2">{t("hero.btn2")}</button>
          </div>
        </div>
        <img src={shifo} alt="shifokorlar" className="hero_img" />
      </div>
    </div>
    </>
  )
}
