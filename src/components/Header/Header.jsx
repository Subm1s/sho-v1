import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import s from "./Header.module.css";
import Logo from "../Logo/Logo";
import Container from "../Layout/Container/Container";
import NavItem from "./NavItem/NavItem";
import { NavLink, useLocation } from "react-router-dom";
import Burger from "./Burger";

const Header = () => {
  const [isShow, setIsShow] = useState(false);
  const isSmallScreen = useMediaQuery({ maxWidth: 940 });
  const [isPortfolio, setIsPortfolio] = useState(false);

  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    if (pathname === "/portfolio") {
      setIsPortfolio(true);
    } else {
      setIsPortfolio(false);
    }
  }, [pathname]);

  return (
    <header className={isPortfolio ? [s.Header, s.portfolioLogo].join(' ') : [s.Header, s.notPortfolio].join(' ')}>
      <Container>
        {/* <div className={s.violetGradient}></div>
        <div className={s.yellowGradient}></div> */}

        <NavLink className={s.linkDropDown} to="/">
          <Logo />
        </NavLink>
        {isSmallScreen ? (
          <Burger />
        ) : (
          <nav className={s.nav}>
            <NavItem link="/about-us" title="Про нас" className={s.navLink} />
            <NavItem link="/portfolio" title="Портфоліо" className={s.navLink} />
            <NavItem link="/contacts" title="Контакти" className={s.navLink} />
            <div
              className={s.servicedWrapper}
              onClick={() => {
                setIsShow(!isShow);
              }}
            >
              <p className={s.navLink}>послуги</p>

              <ul
                className={
                  isShow ? [s.servicedList, s.open].join(" ") : s.servicedList
                }
              >
                <li className={s.itemDropDown}>
                  <NavLink className={s.linkDropDown} to="/smm">
                    SMM
                  </NavLink>
                </li>
                <li className={s.itemDropDown}>
                  <NavLink className={s.linkDropDown} to="/uiux">
                    Design
                  </NavLink>
                </li>
                <li className={s.itemDropDown}>
                  <NavLink className={s.linkDropDown} to="/target">
                    Target
                  </NavLink>
                </li>
                <li className={s.itemDropDown}>
                  <NavLink className={s.linkDropDown} to="/google-ads">
                    Google ADS
                  </NavLink>
                </li>
                <li className={s.itemDropDown}>
                  <NavLink className={s.linkDropDown} to="/marketing">
                    Marketing
                  </NavLink>
                </li>
                <li className={s.itemDropDown}>
                  <NavLink className={s.linkDropDown} to="/webdev">
                    Website
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
};

export default Header;
