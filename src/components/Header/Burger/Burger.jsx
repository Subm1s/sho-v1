import React, { useState } from "react";
import s from "./Burger.module.css";
import { NavLink } from "react-router-dom";
import { AiOutlineInstagram } from "react-icons/ai";
import { PiFacebookLogo, PiPhoneCallThin } from "react-icons/pi";

import NavItem from "../NavItem/NavItem";

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDrop, setIsDrop] = useState(false);

  const socialMediaIconSize = 44;

  const toggleNav = (e) => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={s.burger}>
      <div
        className={s.lineWrapper}
        onClick={() => {
          toggleNav();
        }}
      >
        <div className={`${s.topLine} ${s.line}`}></div>
        <div className={`${s.midLine} ${s.line}`}></div>
        <div className={`${s.bottomLine} ${s.line}`}></div>
      </div>
      <div
        className={isOpen ? [s.backdrop, s.open].join(" ") : s.backdrop}
        // onClick={() => {
        //   toggleNav();
        // }}
      >
        <nav className={isOpen ? [s.nav, s.open].join(" ") : s.nav}>
          <div
            className={s.exit}
            onClick={() => {
              toggleNav();
            }}
          >
            x
          </div>
          <ul className={s.listNAV}>
            <li onClick={() => toggleNav()}>
              <NavItem
                link="/"
                title="Головна"
                className={s.navLink}
                onClick={() => toggleNav()}
              />
            </li>
            <li onClick={() => toggleNav()}>
              <NavItem
                link="/about-us"
                title="Про нас"
                className={s.navLink}
                onClick={() => toggleNav()}
              />
            </li>
            <li>
            <NavItem link="/portfolio" title="Портфоліо" className={s.navLink} />
          </li>
            <li onClick={() => toggleNav()}>
              <NavItem
                link="/contacts"
                title="Контакти"
                className={s.navLink}
                onClick={() => toggleNav()}
              />
            </li>
            <li
              className={s.posluhyItem}
              onClick={() => {
                setIsDrop(!isDrop);
              }}
            >
              <p>Послуги</p>
              <ul
                className={isDrop ? [s.listLink, s.drop].join(" ") : s.listLink}
              >
                <li className={s.itemDropDown}>
                  <NavLink
                    className={s.linkDropDown}
                    to="/smm"
                    onClick={() => toggleNav()}
                  >
                    SMM
                  </NavLink>
                </li>
                <li className={s.itemDropDown}>
                  <NavLink
                    className={s.linkDropDown}
                    to="/uiux"
                    onClick={() => toggleNav()}
                  >
                    Design
                  </NavLink>
                </li>
                <li className={s.itemDropDown}>
                  <NavLink
                    className={s.linkDropDown}
                    to="/target"
                    onClick={() => toggleNav()}
                  >
                    Target
                  </NavLink>
                </li>
                <li className={s.itemDropDown}>
                  <NavLink
                    className={s.linkDropDown}
                    to="/google-ads"
                    onClick={() => toggleNav()}
                  >
                    Google ADS
                  </NavLink>
                </li>
                <li className={s.itemDropDown}>
                  <NavLink
                    className={s.linkDropDown}
                    to="/marketing"
                    onClick={() => toggleNav()}
                  >
                    Marketing
                  </NavLink>
                </li>
                <li className={s.itemDropDown}>
                  <NavLink
                    className={s.linkDropDown}
                    to="/webdev"
                    onClick={() => toggleNav()}
                  >
                    Website
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
          <ul className={s.socialMediaList}>
            <li className={s.socialMediaItem}>
              <NavLink
                to="https://www.instagram.com/sho_vn/?hl=uk"
                className={s.socialMediaLink}
                aria-label="Посилання на сторінку в Instagram"
              >
                <AiOutlineInstagram size={socialMediaIconSize} />
              </NavLink>
            </li>
            <li className={s.socialMediaItem}>
              <NavLink
                to="https://www.facebook.com/profile.php?id=100087395799983"
                className={s.socialMediaLink}
                aria-label="Посилання на сторінку в Facebook"
              >
                <PiFacebookLogo size={socialMediaIconSize} />
              </NavLink>
            </li>
            <li className={s.socialMediaItem}>
              <a
                href="tel:+380800218870"
                className={s.socialMediaLink}
                aria-label="Номер телефону конпанії ШО"
              >
                <PiPhoneCallThin size={socialMediaIconSize} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Burger;
