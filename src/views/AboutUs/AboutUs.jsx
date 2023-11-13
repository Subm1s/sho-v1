import React from "react";

import { MdDirectionsRun } from "react-icons/md";
import circleText from "../../assets/circleAboutUs.png";
import secLogo from "../../assets/secondaryLogo.svg";
import Container from "../../components/Layout/Container";
import s from "./AboutUs.module.css";
import aboutUsHero from "../../assets/bcgtransparent.png";
import OpportunityList from "./OpportunityList";
import welcomeText from "../../assets/welcomeText.png";

const AboutUs = () => {
  return (
    <>
      <section className={s.aboutUsSection}>
        <Container>
          <p className={s.welcomeText}>
            hi,
            <br />
            my dear friend
          </p>
          <div className={s.textHeroWrapper}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="103"
              height="104"
              viewBox="0 0 103 104"
              fill="none"
              className={s.iconStar}
            >
              <path
                d="M41.5855 0H63.5197V104H41.5855V0Z"
                fill="#D9D9D9"
                fillOpacity="0.7"
              />
              <path
                d="M91.6393 17.1764L103 35.5192L12.0004 89.3857L0.639624 71.0428L91.6393 17.1764Z"
                fill="#D9D9D9"
                fillOpacity="0.7"
              />
              <path
                d="M101.571 70.4106L89.8173 88.5151L0 32.7843L11.7539 14.6798L101.571 70.4106Z"
                fill="#D9D9D9"
                fillOpacity="0.7"
              />
            </svg>
            <div className={s.heroTop}>
              <img src={welcomeText} alt="ВЕЛКОМ)" className={s.titleAboutUs} />
              <p className={s.titleAboutUsSho}>[sho?]</p>
            </div>
          </div>
          <img src={aboutUsHero} alt="Картина на стіні" className={s.heroImg} />
        </Container>
      </section>
      <section className={s.opportunitySection}>
        <Container>
          <div className={s.lineRunWrapper}>
            <MdDirectionsRun size={30} className={s.runningMan} />
            <div className={s.line}>
              <div className={s.lineTop}></div>
              <div className={s.lineBottom}></div>
              <div></div>
            </div>
            <MdDirectionsRun size={30} className={s.runningMan} />
            <MdDirectionsRun size={30} className={s.runningMan} />
          </div>
          <div className={s.blockOpportunity}>
            <div className={s.leftSide}>
              <h3 className={s.leftSideTitle}>наші переваги:</h3>
              <OpportunityList
                list={[
                  "До вашого бізнесу ми ставимось як до свого. Любимо свою справу та робимо якісно;",
                  "Ви отримаєте одразу комплексну стратегію розвитку бізнесу та збільшення продажів;",
                  "Ми - спеціалісти з освітою, досвідом, успішними кейсами та цікавими ідеями;",
                  "Працюємо разом з вами для досягнення усіх ваших маркетингових цілей.",
                ]}
              />
            </div>
            <div className={s.rightSide}>
              <img
                src={circleText}
                alt="We are better company"
                className={s.imageCircle}
              />
              <div className={s.textWrapper}>
                <img src={secLogo} alt="ШО логотип" className={s.logo} />
                <p className={s.findText}>ти шукав саме нас!</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default AboutUs;
