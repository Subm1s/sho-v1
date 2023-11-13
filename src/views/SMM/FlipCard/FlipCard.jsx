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
                  <li className={s.listMoreItem}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="13"
                      viewBox="0 0 18 13"
                      fill="none"
                    >
                      <path
                        d="M6.54998 12.9996L0.849976 7.29961L2.27498 5.87461L6.54998 10.1496L15.725 0.974609L17.15 2.39961L6.54998 12.9996Z"
                        fill="white"
                      />
                    </svg>
                    Аналіз цільової аудиторії
                  </li>
                  <li className={s.listMoreItem}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="13"
                      viewBox="0 0 18 13"
                      fill="none"
                    >
                      <path
                        d="M6.54998 12.9996L0.849976 7.29961L2.27498 5.87461L6.54998 10.1496L15.725 0.974609L17.15 2.39961L6.54998 12.9996Z"
                        fill="white"
                      />
                    </svg>
                    Аналіз конкурентів
                  </li>
                  <li className={s.listMoreItem}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="13"
                      viewBox="0 0 18 13"
                      fill="none"
                    >
                      <path
                        d="M6.54998 12.9996L0.849976 7.29961L2.27498 5.87461L6.54998 10.1496L15.725 0.974609L17.15 2.39961L6.54998 12.9996Z"
                        fill="white"
                      />
                    </svg>
                    Розробка стратегії просування і розвитку бренду
                  </li>
                  <li className={s.listMoreItem}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="13"
                      viewBox="0 0 18 13"
                      fill="none"
                    >
                      <path
                        d="M6.54998 12.9996L0.849976 7.29961L2.27498 5.87461L6.54998 10.1496L15.725 0.974609L17.15 2.39961L6.54998 12.9996Z"
                        fill="white"
                      />
                    </svg>
                    Розробка контент-плану
                  </li>
                  <li className={s.listMoreItem}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="13"
                      viewBox="0 0 18 13"
                      fill="none"
                    >
                      <path
                        d="M6.54998 12.9996L0.849976 7.29961L2.27498 5.87461L6.54998 10.1496L15.725 0.974609L17.15 2.39961L6.54998 12.9996Z"
                        fill="white"
                      />
                    </svg>
                    Створення фірмового стилю для сторінки
                  </li>
                  <li className={s.listMoreItem}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="13"
                      viewBox="0 0 18 13"
                      fill="none"
                    >
                      <path
                        d="M6.54998 12.9996L0.849976 7.29961L2.27498 5.87461L6.54998 10.1496L15.725 0.974609L17.15 2.39961L6.54998 12.9996Z"
                        fill="white"
                      />
                    </svg>
                    Створення фото/відео контенту
                  </li>
                  <li className={s.listMoreItem}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="13"
                      viewBox="0 0 18 13"
                      fill="none"
                    >
                      <path
                        d="M6.54998 12.9996L0.849976 7.29961L2.27498 5.87461L6.54998 10.1496L15.725 0.974609L17.15 2.39961L6.54998 12.9996Z"
                        fill="white"
                      />
                    </svg>
                    Написання тематичних постів
                  </li>
                  <li className={s.listMoreItem}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="13"
                      viewBox="0 0 18 13"
                      fill="none"
                    >
                      <path
                        d="M6.54998 12.9996L0.849976 7.29961L2.27498 5.87461L6.54998 10.1496L15.725 0.974609L17.15 2.39961L6.54998 12.9996Z"
                        fill="white"
                      />
                    </svg>
                    Публікація постів (3 на тиждень)
                  </li>
                  <li className={s.listMoreItem}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="13"
                      viewBox="0 0 18 13"
                      fill="none"
                    >
                      <path
                        d="M6.54998 12.9996L0.849976 7.29961L2.27498 5.87461L6.54998 10.1496L15.725 0.974609L17.15 2.39961L6.54998 12.9996Z"
                        fill="white"
                      />
                    </svg>
                    Публікація сторіс (до 1 шт на день)
                  </li>
                  <li className={s.listMoreItem}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="13"
                      viewBox="0 0 18 13"
                      fill="none"
                    >
                      <path
                        d="M6.54998 12.9996L0.849976 7.29961L2.27498 5.87461L6.54998 10.1496L15.725 0.974609L17.15 2.39961L6.54998 12.9996Z"
                        fill="white"
                      />
                    </svg>
                    Налаштування актуальних сторіз
                  </li>
                  <li className={s.listMoreItem}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="13"
                      viewBox="0 0 18 13"
                      fill="none"
                    >
                      <path
                        d="M6.54998 12.9996L0.849976 7.29961L2.27498 5.87461L6.54998 10.1496L15.725 0.974609L17.15 2.39961L6.54998 12.9996Z"
                        fill="white"
                      />
                    </svg>
                    Фото/відео зйомка
                  </li>
                  <li className={s.listMoreItem}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z"
                        fill="white"
                      />
                    </svg>
                    Проведення конкурсів/розіграшів
                  </li>
                  <li className={s.listMoreItem}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z"
                        fill="white"
                      />
                    </svg>
                    реклама у місцевих групах
                  </li>
                  <li className={s.listMoreItem}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z"
                        fill="white"
                      />
                    </svg>
                    ПІДБІР ХЕШТЕГІВ ЗА СФЕРОЮ ДІЯЛЬНОСТІ
                  </li>
                  <li className={s.listMoreItem}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="13"
                      viewBox="0 0 18 13"
                      fill="none"
                    >
                      <path
                        d="M6.54998 12.9996L0.849976 7.29961L2.27498 5.87461L6.54998 10.1496L15.725 0.974609L17.15 2.39961L6.54998 12.9996Z"
                        fill="white"
                      />
                    </svg>
                    Звіт щомісяця
                  </li>
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
                  від 10 000 грн
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="13"
                      viewBox="0 0 18 13"
                      fill="none"
                    >
                      <path
                        d="M6.54998 12.9996L0.849976 7.29961L2.27498 5.87461L6.54998 10.1496L15.725 0.974609L17.15 2.39961L6.54998 12.9996Z"
                        fill="white"
                      />
                    </svg>
                    Аналіз цільової аудиторії
                  </li>
                  <li className={s.listMoreItem}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="13"
                      viewBox="0 0 18 13"
                      fill="none"
                    >
                      <path
                        d="M6.54998 12.9996L0.849976 7.29961L2.27498 5.87461L6.54998 10.1496L15.725 0.974609L17.15 2.39961L6.54998 12.9996Z"
                        fill="white"
                      />
                    </svg>
                    Аналіз конкурентів
                  </li>
                  <li className={s.listMoreItem}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="13"
                      viewBox="0 0 18 13"
                      fill="none"
                    >
                      <path
                        d="M6.54998 12.9996L0.849976 7.29961L2.27498 5.87461L6.54998 10.1496L15.725 0.974609L17.15 2.39961L6.54998 12.9996Z"
                        fill="white"
                      />
                    </svg>
                    Розробка стратегії просування і розвитку бренду
                  </li>
                  <li className={s.listMoreItem}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="13"
                      viewBox="0 0 18 13"
                      fill="none"
                    >
                      <path
                        d="M6.54998 12.9996L0.849976 7.29961L2.27498 5.87461L6.54998 10.1496L15.725 0.974609L17.15 2.39961L6.54998 12.9996Z"
                        fill="white"
                      />
                    </svg>
                    Розробка контент-плану
                  </li>
                  <li className={s.listMoreItem}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="13"
                      viewBox="0 0 18 13"
                      fill="none"
                    >
                      <path
                        d="M6.54998 12.9996L0.849976 7.29961L2.27498 5.87461L6.54998 10.1496L15.725 0.974609L17.15 2.39961L6.54998 12.9996Z"
                        fill="white"
                      />
                    </svg>
                    Створення фірмового стилю для сторінки
                  </li>
                  <li className={s.listMoreItem}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="13"
                      viewBox="0 0 18 13"
                      fill="none"
                    >
                      <path
                        d="M6.54998 12.9996L0.849976 7.29961L2.27498 5.87461L6.54998 10.1496L15.725 0.974609L17.15 2.39961L6.54998 12.9996Z"
                        fill="white"
                      />
                    </svg>
                    Створення фото/відео контенту
                  </li>
                  <li className={s.listMoreItem}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="13"
                      viewBox="0 0 18 13"
                      fill="none"
                    >
                      <path
                        d="M6.54998 12.9996L0.849976 7.29961L2.27498 5.87461L6.54998 10.1496L15.725 0.974609L17.15 2.39961L6.54998 12.9996Z"
                        fill="white"
                      />
                    </svg>
                    Написання тематичних постів
                  </li>
                  <li className={s.listMoreItem}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="13"
                      viewBox="0 0 18 13"
                      fill="none"
                    >
                      <path
                        d="M6.54998 12.9996L0.849976 7.29961L2.27498 5.87461L6.54998 10.1496L15.725 0.974609L17.15 2.39961L6.54998 12.9996Z"
                        fill="white"
                      />
                    </svg>
                    Публікація постів (3-4 на тиждень)
                  </li>
                  <li className={s.listMoreItem}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="13"
                      viewBox="0 0 18 13"
                      fill="none"
                    >
                      <path
                        d="M6.54998 12.9996L0.849976 7.29961L2.27498 5.87461L6.54998 10.1496L15.725 0.974609L17.15 2.39961L6.54998 12.9996Z"
                        fill="white"
                      />
                    </svg>
                    Публікація сторіс (до 3 шт на день)
                  </li>
                  <li className={s.listMoreItem}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="13"
                      viewBox="0 0 18 13"
                      fill="none"
                    >
                      <path
                        d="M6.54998 12.9996L0.849976 7.29961L2.27498 5.87461L6.54998 10.1496L15.725 0.974609L17.15 2.39961L6.54998 12.9996Z"
                        fill="white"
                      />
                    </svg>
                    Налаштування актуальних сторіз
                  </li>
                  <li className={s.listMoreItem}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="13"
                      viewBox="0 0 18 13"
                      fill="none"
                    >
                      <path
                        d="M6.54998 12.9996L0.849976 7.29961L2.27498 5.87461L6.54998 10.1496L15.725 0.974609L17.15 2.39961L6.54998 12.9996Z"
                        fill="white"
                      />
                    </svg>
                    Фото/відео зйомка
                  </li>
                  <li className={s.listMoreItem}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z"
                        fill="white"
                      />
                    </svg>
                    Проведення конкурсів/розіграшів
                  </li>
                  <li className={s.listMoreItem}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z"
                        fill="white"
                      />
                    </svg>
                    реклама у місцевих групах
                  </li>
                  <li className={s.listMoreItem}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="13"
                      viewBox="0 0 18 13"
                      fill="none"
                    >
                      <path
                        d="M6.54998 12.9996L0.849976 7.29961L2.27498 5.87461L6.54998 10.1496L15.725 0.974609L17.15 2.39961L6.54998 12.9996Z"
                        fill="white"
                      />
                    </svg>
                    ПІДБІР ХЕШТЕГІВ ЗА СФЕРОЮ ДІЯЛЬНОСТІ
                  </li>
                  <li className={s.listMoreItem}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="13"
                      viewBox="0 0 18 13"
                      fill="none"
                    >
                      <path
                        d="M6.54998 12.9996L0.849976 7.29961L2.27498 5.87461L6.54998 10.1496L15.725 0.974609L17.15 2.39961L6.54998 12.9996Z"
                        fill="white"
                      />
                    </svg>
                    Звіт щомісяця
                  </li>
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
                  від 15 000 грн
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
                  <li className={s.listMoreItem}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="13"
                      viewBox="0 0 18 13"
                      fill="none"
                    >
                      <path
                        d="M6.54998 12.9996L0.849976 7.29961L2.27498 5.87461L6.54998 10.1496L15.725 0.974609L17.15 2.39961L6.54998 12.9996Z"
                        fill="white"
                      />
                    </svg>
                    Аналіз цільової аудиторії
                  </li>
                  <li className={s.listMoreItem}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="13"
                      viewBox="0 0 18 13"
                      fill="none"
                    >
                      <path
                        d="M6.54998 12.9996L0.849976 7.29961L2.27498 5.87461L6.54998 10.1496L15.725 0.974609L17.15 2.39961L6.54998 12.9996Z"
                        fill="white"
                      />
                    </svg>
                    Аналіз конкурентів
                  </li>
                  <li className={s.listMoreItem}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="13"
                      viewBox="0 0 18 13"
                      fill="none"
                    >
                      <path
                        d="M6.54998 12.9996L0.849976 7.29961L2.27498 5.87461L6.54998 10.1496L15.725 0.974609L17.15 2.39961L6.54998 12.9996Z"
                        fill="white"
                      />
                    </svg>
                    Розробка стратегії просування і розвитку бренду
                  </li>
                  <li className={s.listMoreItem}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="13"
                      viewBox="0 0 18 13"
                      fill="none"
                    >
                      <path
                        d="M6.54998 12.9996L0.849976 7.29961L2.27498 5.87461L6.54998 10.1496L15.725 0.974609L17.15 2.39961L6.54998 12.9996Z"
                        fill="white"
                      />
                    </svg>
                    Розробка контент-плану
                  </li>
                  <li className={s.listMoreItem}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="13"
                      viewBox="0 0 18 13"
                      fill="none"
                    >
                      <path
                        d="M6.54998 12.9996L0.849976 7.29961L2.27498 5.87461L6.54998 10.1496L15.725 0.974609L17.15 2.39961L6.54998 12.9996Z"
                        fill="white"
                      />
                    </svg>
                    Створення фірмового стилю для сторінки
                  </li>
                  <li className={s.listMoreItem}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="13"
                      viewBox="0 0 18 13"
                      fill="none"
                    >
                      <path
                        d="M6.54998 12.9996L0.849976 7.29961L2.27498 5.87461L6.54998 10.1496L15.725 0.974609L17.15 2.39961L6.54998 12.9996Z"
                        fill="white"
                      />
                    </svg>
                    Створення фото/відео контенту
                  </li>
                  <li className={s.listMoreItem}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="13"
                      viewBox="0 0 18 13"
                      fill="none"
                    >
                      <path
                        d="M6.54998 12.9996L0.849976 7.29961L2.27498 5.87461L6.54998 10.1496L15.725 0.974609L17.15 2.39961L6.54998 12.9996Z"
                        fill="white"
                      />
                    </svg>
                    Написання тематичних постів
                  </li>
                  <li className={s.listMoreItem}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="13"
                      viewBox="0 0 18 13"
                      fill="none"
                    >
                      <path
                        d="M6.54998 12.9996L0.849976 7.29961L2.27498 5.87461L6.54998 10.1496L15.725 0.974609L17.15 2.39961L6.54998 12.9996Z"
                        fill="white"
                      />
                    </svg>
                    Публікація постів (3-4 на тиждень)
                  </li>
                  <li className={s.listMoreItem}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="13"
                      viewBox="0 0 18 13"
                      fill="none"
                    >
                      <path
                        d="M6.54998 12.9996L0.849976 7.29961L2.27498 5.87461L6.54998 10.1496L15.725 0.974609L17.15 2.39961L6.54998 12.9996Z"
                        fill="white"
                      />
                    </svg>
                    Публікація сторіс (до 5 шт на день)
                  </li>
                  <li className={s.listMoreItem}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="13"
                      viewBox="0 0 18 13"
                      fill="none"
                    >
                      <path
                        d="M6.54998 12.9996L0.849976 7.29961L2.27498 5.87461L6.54998 10.1496L15.725 0.974609L17.15 2.39961L6.54998 12.9996Z"
                        fill="white"
                      />
                    </svg>
                    Налаштування актуальних сторіз
                  </li>
                  <li className={s.listMoreItem}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="13"
                      viewBox="0 0 18 13"
                      fill="none"
                    >
                      <path
                        d="M6.54998 12.9996L0.849976 7.29961L2.27498 5.87461L6.54998 10.1496L15.725 0.974609L17.15 2.39961L6.54998 12.9996Z"
                        fill="white"
                      />
                    </svg>
                    Фото/відео зйомка
                  </li>
                  <li className={s.listMoreItem}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="13"
                      viewBox="0 0 18 13"
                      fill="none"
                    >
                      <path
                        d="M6.54998 12.9996L0.849976 7.29961L2.27498 5.87461L6.54998 10.1496L15.725 0.974609L17.15 2.39961L6.54998 12.9996Z"
                        fill="white"
                      />
                    </svg>
                    Проведення конкурсів/розіграшів
                  </li>
                  <li className={s.listMoreItem}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="13"
                      viewBox="0 0 18 13"
                      fill="none"
                    >
                      <path
                        d="M6.54998 12.9996L0.849976 7.29961L2.27498 5.87461L6.54998 10.1496L15.725 0.974609L17.15 2.39961L6.54998 12.9996Z"
                        fill="white"
                      />
                    </svg>
                    реклама у місцевих групах
                  </li>
                  <li className={s.listMoreItem}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="13"
                      viewBox="0 0 18 13"
                      fill="none"
                    >
                      <path
                        d="M6.54998 12.9996L0.849976 7.29961L2.27498 5.87461L6.54998 10.1496L15.725 0.974609L17.15 2.39961L6.54998 12.9996Z"
                        fill="white"
                      />
                    </svg>
                    ПІДБІР ХЕШТЕГІВ ЗА СФЕРОЮ ДІЯЛЬНОСТІ
                  </li>
                  <li className={s.listMoreItem}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="13"
                      viewBox="0 0 18 13"
                      fill="none"
                    >
                      <path
                        d="M6.54998 12.9996L0.849976 7.29961L2.27498 5.87461L6.54998 10.1496L15.725 0.974609L17.15 2.39961L6.54998 12.9996Z"
                        fill="white"
                      />
                    </svg>
                    Звіт щомісяця
                  </li>
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
                  від 20 000 грн
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
