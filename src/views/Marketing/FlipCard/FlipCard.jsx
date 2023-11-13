import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

import { PiHandTapBold } from "react-icons/pi";

import circleText from "../../../assets/circleText.png";

import Container from "../../../components/Layout/Container";

import s from "./FlipCard.module.css";

const FlipCard = () => {
  const [isFlip1, setIsFlip1] = useState(false);
  const [isFlip2, setIsFlip2] = useState(false);
  const [isFlip3, setIsFlip3] = useState(false);

  return (
    <section className={s.cardSection}>
      <Container>
        <img src={circleText} alt="ШО ОБЕРЕШ ТИ?" className={s.circleText} />
        <ul className={s.cardList}>
          <li className={s.cardItem}>
            <ReactCardFlip isFlipped={isFlip1} flipDirection="vertical">
              <div className={`${s.firstCard} ${s.card} ${s.frontSide}`}>
                <h3 className={s.cardTitle}>
                  <span className={s.topText}>stan</span>
                  <br />
                  <span className={s.bottomText}>dart.</span>
                </h3>
              </div>

              <div className={`${s.firstCard} ${s.card} ${s.backSide}`}>
                <ul className={s.listMore}>
                  <li className={s.listMoreItem}>Розробка лендінгу</li>
                  <li className={s.listMoreItem}>Smm Standart</li>
                  <li className={s.listMoreItem}>Target Standart</li>
                  <li className={s.listMoreItem}>Google Ads Light</li>
                </ul>
              </div>
            </ReactCardFlip>
            <ReactCardFlip isFlipped={isFlip1} flipDirection="horizontal">
              <div
                className={s.clickButton}
                onClick={() => {
                  setIsFlip1(!isFlip1);
                }}
              >
                <p className={s.clickButtonText}>
                  натисни, щоб побачити більше
                </p>
                <PiHandTapBold color="grey" size={40} />
              </div>
              <div
                className={s.clickButton}
                onClick={() => {
                  setIsFlip1(!isFlip1);
                }}
              >
                <p className={[s.clickButtonText, s.priceText].join(" ")}>
                  1000 $
                </p>
                <PiHandTapBold color="grey" size={40} />
              </div>
            </ReactCardFlip>
          </li>
          <li className={s.cardItem}>
            <ReactCardFlip isFlipped={isFlip2} flipDirection="vertical">
              <div className={`${s.secondCard} ${s.card} ${s.frontSide}`}>
                <h3 className={`${s.cardTitle} ${s.cardTitleSecond}`}>
                  <span className={s.topTextSecond}>com</span>
                  <br />
                  <span className={s.bottomTextSecond}>fort.</span>
                </h3>
              </div>

              <div className={`${s.secondCard} ${s.card} ${s.backSide}`}>
                <ul className={s.listMore}>
                  <li className={s.listMoreItem}>
                    Розробка багатосторінкового сайту
                  </li>
                  <li className={s.listMoreItem}>Smm Comfort</li>
                  <li className={s.listMoreItem}>Target Comfort</li>
                  <li className={s.listMoreItem}>Google Ads Soft</li>
                </ul>
              </div>
            </ReactCardFlip>
            <ReactCardFlip isFlipped={isFlip2} flipDirection="horizontal">
              <div
                className={s.clickButton}
                onClick={() => {
                  setIsFlip2(!isFlip2);
                }}
              >
                <p className={s.clickButtonText}>
                  натисни, щоб побачити більше
                </p>
                <PiHandTapBold color="grey" size={40} />
              </div>
              <div
                className={s.clickButton}
                onClick={() => {
                  setIsFlip2(!isFlip2);
                }}
              >
                <p className={[s.clickButtonText, s.priceText].join(" ")}>
                  2000 $
                </p>
                <PiHandTapBold color="grey" size={40} />
              </div>
            </ReactCardFlip>
          </li>
          <li className={s.cardItem}>
            <ReactCardFlip isFlipped={isFlip3} flipDirection="vertical">
              <div className={`${s.thirdCard} ${s.card} ${s.frontSide}`}>
                <h3 className={s.cardTitle}>
                  <span className={s.topTextThird}>prem</span>
                  <br />
                  <span className={s.bottomTextThird}>ium.</span>
                </h3>
              </div>

              <div className={`${s.thirdCard} ${s.card} ${s.backSide}`}>
                <ul className={s.listMore}>
                  <li className={s.listMoreItem}>Розробка інтернет-магазину</li>
                  <li className={s.listMoreItem}>Smm Premium</li>
                  <li className={s.listMoreItem}>Target Premium</li>
                  <li className={s.listMoreItem}>Google Ads Hard</li>
                </ul>
              </div>
            </ReactCardFlip>
            <ReactCardFlip isFlipped={isFlip3} flipDirection="horizontal">
              <div
                className={s.clickButton}
                onClick={() => {
                  setIsFlip3(!isFlip3);
                }}
              >
                <p className={s.clickButtonText}>
                  натисни, щоб побачити більше
                </p>
                <PiHandTapBold color="grey" size={40} />
              </div>
              <div
                className={s.clickButton}
                onClick={() => {
                  setIsFlip3(!isFlip3);
                }}
              >
                <p className={[s.clickButtonText, s.priceText].join(" ")}>
                  5000 $
                </p>
                <PiHandTapBold color="grey" size={40} />
              </div>
            </ReactCardFlip>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default FlipCard;
