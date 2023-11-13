import React from "react";
import s from "./Footer.module.css";
import Container from "../Layout/Container/Container";
import { NavLink } from "react-router-dom";
// import linkedinLogo from "../../assets/linkedin.png";
// import tictockLogo from "../../assets/tictok.png";
import { AiOutlineInstagram } from "react-icons/ai";
import { PiFacebookLogo } from "react-icons/pi";

const Footer = () => {
  const logoSize = 64;

  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.linkWrapper}>
          <ul className={s.services}>
            <li className={s.services__item}>
              <NavLink to="/smm">
                <p className={s.services__itemLink}>SMM</p>
              </NavLink>
            </li>
            <li className={s.services__item}>
              <NavLink to="/uiux" className={s.services__itemLink}>
                Design
              </NavLink>
            </li>
            <li className={s.services__item}>
              <NavLink to="/target" className={s.services__itemLink}>
                Target
              </NavLink>
            </li>
            <li className={s.services__item}>
              <NavLink to="/google-ads" className={s.services__itemLink}>
                Google ADS
              </NavLink>
            </li>
            <li className={s.services__item}>
              <NavLink to="/marketing" className={s.services__itemLink}>
                Marketing
              </NavLink>
            </li>
            <li className={s.services__item}>
              <NavLink to="/webdev" className={s.services__itemLink}>
                Web Dev
              </NavLink>
            </li>
          </ul>
          <div className={s.mediaWithNumber}>
            <ul className={s.socialMedia}>
              <li className={s.socialMedia__item}>
                <a
                  href="https://www.instagram.com/sho_vn/?hl=uk"
                  className={s.socialMedia_link}
                  target="_blank"
                  aria-label="Посилання на сторінку в Instagram"
                  rel="noreferrer noopener"
                >
                  <AiOutlineInstagram
                    className={s.socialMediaLogo}
                    alt="instagramm logo"
                    size={logoSize}
                  />
                </a>
              </li>
              {/* <li className={s.socialMedia__item}>
              <NavLink to="/" className={s.socialMedia_link}>
                <img
                  className={s.socialMediaLogo}
                  src={linkedinLogo}
                  alt="Linkendin logo"
                />
              </NavLink>
            </li> */}
              <li className={s.socialMedia__item}>
                <a
                  href="https://www.facebook.com/profile.php?id=100087395799983"
                  className={s.socialMedia_link}
                  aria-label="Посилання на сторінку в Facebook"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <PiFacebookLogo
                    size={logoSize}
                    className={s.socialMediaLogo}
                    alt="Facebook logo"
                  />
                </a>
              </li>
              {/* <li className={s.socialMedia__item}>
              <NavLink to="/" className={s.socialMedia_link}>
                <img
                  className={s.socialMediaLogo}
                  src={tictockLogo}
                  alt="Tictok logo"
                />
              </NavLink>
            </li> */}
            </ul>
            <a href="tel:+380800218870" className={s.numberFooter}>+380800218870</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
