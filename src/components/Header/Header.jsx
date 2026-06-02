import React from "react";
import "./Header.css";

import { useTranslation } from "react-i18next";

import Logo from "./Logo.svg";
import Logo_with from "./logo_with.svg";
import ru from "./russia.svg";
import { BiSolidPhoneCall } from "react-icons/bi";
import { AiFillFacebook } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";

export const Header = () => {
  const { t, i18n } = useTranslation();

  const handChangeLaunguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <>
      <nav>
        <div className="container">
          <div className="nav_top">
            <img src={Logo} className="nav_logo" alt="logo" />
            <img src={Logo_with} className="nav_logo_with" alt="logo" />
            <div className="nav_box">
              <a className="nav_tel" href="tel:+0(800)508622">
                <BiSolidPhoneCall className="nav_phone nav_icon" /> 0 (800)
                508-622
              </a>
              <a href="">
                <AiFillFacebook className="nav_facebook nav_icon" />
              </a>
              <a href="">
                <RiInstagramFill className="nav_instagram nav_icon" />
              </a>
            </div>

        
            <select
              name=""
              id=""
              value={i18n.language}
              onChange={handChangeLaunguage}
              className="select_menu"
            >
              <option value="uz"> UZ</option>
              <option value="ru">RUS</option>
              <option value="en">ENG</option>
            </select>
          </div>
          <ul className="nav_list">
            <li className="nav_item">
              <a href="">{t("header.a1")}</a>
            </li>
            <li className="nav_item">
              <a href="">{t("header.a2")}</a>
            </li>
            <li className="nav_item">
              <a href="">{t("header.a3")}</a>
            </li>
            <li className="nav_item">
              <a href="">{t("header.a4")}</a>
            </li>
            <li className="nav_item">
              <a href="">{t("header.a5")}</a>
            </li>
            <li className="nav_item">
              <a href="">{t("header.a6")}</a>
            </li>
            <li className="nav_item">
              <a href="">{t("header.a7")}</a>
            </li>
            <li className="nav_item">
              <a href="">{t("header.a8")}</a>
            </li>
            <li className="nav_item">
              <a href="">{t("header.a9")}</a>
            </li>
           
          </ul>
        </div>
      </nav>
    </>
  );
};
