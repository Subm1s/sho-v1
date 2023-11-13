import React from "react";
import s from "./Hero.module.css";
import Container from "../../../components/Layout/Container";

import netBackground from "../../../assets/portfolioTableHero.png";
import circleText from "../../../assets/portfolioHeroCircle.png";

const Hero = ({ title, quote, quoteTitle }) => {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.mainTitle}>
          <img src={netBackground} alt="background" className={s.titleBack} />
          <h2 className={s.title}>{title}</h2>
        </div>
        <div className={s.descriptionWrapper}>
          <div className={s.circleTextWrapper}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="162"
              height="162"
              viewBox="0 0 162 162"
              fill="none"
              className={s.heroStar}
            >
              <path
                d="M81 0L81.544 73.5679L92.7937 0.86319L82.6203 73.7263L104.336 3.43435L83.6621 74.0397L115.381 7.65869L84.6471 74.5015L125.693 13.4462L85.5545 75.1018L135.053 20.6735L86.3647 75.8278L143.26 29.1865L87.0606 76.664L150.141 38.8038L87.6274 77.5926L155.548 49.3205L88.0529 78.5939L159.366 60.5124L88.328 79.6464L161.514 72.1409L88.447 80.7278L161.946 83.9583L88.4073 81.815L160.653 95.7126L88.2097 82.8849L157.662 107.153L87.8584 83.9145L153.037 118.037L87.361 84.882L146.876 128.131L86.728 85.7668L139.312 137.22L85.9729 86.55L130.505 145.111L85.1118 87.215L120.643 151.636L84.163 87.7474L109.936 156.655L83.1469 88.136L98.6118 160.062L82.085 88.3726L86.9126 161.784L81 88.452L75.0874 161.784L79.915 88.3726L63.3882 160.062L78.8531 88.136L52.0643 156.655L77.837 87.7474L41.3572 151.636L76.8882 87.215L31.4949 145.111L76.0271 86.55L22.6878 137.22L75.272 85.7668L15.1235 128.131L74.639 84.882L8.96329 118.037L74.1416 83.9145L4.33838 107.153L73.7903 82.8849L1.34738 95.7126L73.5927 81.815L0.054039 83.9583L73.553 80.7278L0.485924 72.1409L73.672 79.6464L2.63382 60.5124L73.9471 78.5939L6.45196 49.3205L74.3726 77.5926L11.859 38.8038L74.9394 76.664L18.7396 29.1865L75.6353 75.8278L26.9472 20.6735L76.4455 75.1018L36.3068 13.4462L77.3529 74.5015L46.619 7.65869L78.3379 74.0397L57.664 3.43435L79.3797 73.7263L69.2063 0.86319L80.456 73.5679L81 0Z"
                fill="#F6D8FF"
              />
            </svg>
            <img
              src={circleText}
              alt="Вікно до нашого творчого світу"
              className={s.circleText}
            />
          </div>
          <div className={s.quoteBlock}>
            <p className={s.quote}>{quote}</p>
            <p className={s.quoteMain}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="197"
                height="9"
                viewBox="0 0 197 9"
                fill="none"
                className={s.arrowHero}
              >
                <path
                  d="M196.354 4.85355C196.549 4.65829 196.549 4.34171 196.354 4.14645L193.172 0.964466C192.976 0.769204 192.66 0.769204 192.464 0.964466C192.269 1.15973 192.269 1.47631 192.464 1.67157L195.293 4.5L192.464 7.32843C192.269 7.52369 192.269 7.84027 192.464 8.03553C192.66 8.2308 192.976 8.2308 193.172 8.03553L196.354 4.85355ZM0 5H196V4H0V5Z"
                  fill="#D9D9D9"
                />
              </svg>
              {quoteTitle}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
