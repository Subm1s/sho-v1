import React, { Fragment, useEffect } from "react";
import s from "./Main.module.css";
import Container from "../../components/Layout/Container/Container";
import Logo from "../../components/Logo/";
import { NavLink } from "react-router-dom";
import ServicesList from "./ServicesList";
import shoFrame from "../../assets/shoFrame.jpg";
import shoModel from "../../assets/shoModel.jpg";
import vydilTitle from '../../assets/vydilyaysyaTitle.png'
const Main = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <Fragment>
      <section className={s.section}>
        <Container>
          <div className={s.contentWrapper}>
            <div className={s.caseWrapper}>
              <div className={s.case1}>
                <Logo />
              </div>
              <div className={s.case2}></div>
              <div className={s.case3}>
                <Logo />
              </div>
              <div className={s.case4}>
                <NavLink to="/portfolio" className={s.casesLink}>
                  кейси
                </NavLink>
              </div>
              <div className={s.case5}></div>
            </div>
            <div className={s.vydilWrapper}>
              {/* <h2 className={s.mainTitle}>vydilyaysya</h2> */}
              <img src={vydilTitle} alt="vydilya" className={s.mainTitle} />
              <div className={s.containerVydil}>
                <p className={s.textVydil}>
                  Компанія "ШО" допоможе зробити ваші бізнес-сторінки яскравими
                  та виділитись на фоні інших! ШО-небудь і як-небудь ми не
                  робимо. Кожен з нас - професіонал, який любить свою справу. Ми
                  пропонуємо комплексний спектр послуг: стратегію, оригінальну
                  контент-розробку, управління соцмедіа та рекламні кампанії. Ми
                  ті, хто збільшить довіру клієнтів до вашого бізнесу!
                </p>
                <NavLink to="/portfolio" className={s.showMoreBtn}>
                  побачити більше →
                </NavLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className={s.sectionBanner}>
        <Container>
          <img
            src={shoFrame}
            alt="фото де бренд оживає"
            className={s.imgFrame}
          />
          <img
            src={shoModel}
            alt="фото де ходить модель"
            className={s.imgModel}
          />
        </Container>
      </section>

      <ServicesList />
    </Fragment>
  );
};

export default Main;
