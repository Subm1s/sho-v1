import { useState } from "react";
import s from "./Cases.module.css";
import Container from "../../../components/Layout/Container";
import CaseItem from "./CaseItem/CaseItem";
import { useMediaQuery } from "react-responsive";
// image desktop
import mainEnjoy from "../../../assets/portfolioCases/enjoyMain.png";
import addEnjoy from "../../../assets/portfolioCases/enjoyAdd.png";
import mainWOD from "../../../assets/portfolioCases/wodMain.png";
import addWOD from "../../../assets/portfolioCases/wodAdd.png";
import mainNizhna from "../../../assets/portfolioCases/nizhnaMain.png";
import addNizhna from "../../../assets/portfolioCases/nizhnaAdd.png";
import mainElitDental from "../../../assets/portfolioCases/eliteDentalMain.png";
import addElitDental from "../../../assets/portfolioCases/eliteDentalAdd.png";
import mainOneTouch from "../../../assets/portfolioCases/oneTouchMain.png";
import addOneTouch from "../../../assets/portfolioCases/oneTouchAdd.png";
// image tablet
import mainEnjoyTablet from "../../../assets/portfolioCases/tablet/enjoyMain.png";
import addEnjoyTablet from "../../../assets/portfolioCases/tablet/enjoyAdd.png";
import mainWODTablet from "../../../assets/portfolioCases/tablet/wodMain.png";
import addWODTablet from "../../../assets/portfolioCases/tablet/wodAdd.png";
import mainNizhnaTablet from "../../../assets/portfolioCases/tablet/nizhnaMain.png";
import addNizhnaTablet from "../../../assets/portfolioCases/tablet/nizhnaAdd.png";
import mainElitDentalTablet from "../../../assets/portfolioCases/tablet/eliteDentalMain.png";
import addElitDentalTablet from "../../../assets/portfolioCases/tablet/eliteDentalAdd.png";
import mainOneTouchTablet from "../../../assets/portfolioCases/tablet/oneTouchMain.png";
import addOneTouchTablet from "../../../assets/portfolioCases/tablet/oneTouchAdd.png";
// image mobile
import mainEnjoyMobile from "../../../assets/portfolioCases/mobile/enjoyMain.png";
import addEnjoyMobile from "../../../assets/portfolioCases/mobile/enjoyAdd.png";
import mainWODMobile from "../../../assets/portfolioCases/mobile/wodMain.png";
import addWODMobile from "../../../assets/portfolioCases/mobile/wodAdd.png";
import mainNizhnaMobile from "../../../assets/portfolioCases/mobile/nizhnaMain.png";
import addNizhnaMobile from "../../../assets/portfolioCases/mobile/nizhnaAdd.png";
import mainElitDentalMobile from "../../../assets/portfolioCases/mobile/eliteDentalMain.png";
import addElitDentalMobile from "../../../assets/portfolioCases/mobile/eliteDentalAdd.png";
import mainOneTouchMobile from "../../../assets/portfolioCases/mobile/oneTouchMain.png";
import addOneTouchMobile from "../../../assets/portfolioCases/mobile/oneTouchAdd.png";
// backgroundImage
import firstCircle from "../../../assets/portfolioCases/background/firstElips.svg";
import secondCircle from "../../../assets/portfolioCases/background/secondElips.svg";
import thirdCircle from "../../../assets/portfolioCases/background/thirdElips.svg";

const Cases = () => {
  const [isShow, setIsShow] = useState(false);

  const isTabletScreen = useMediaQuery({ maxWidth: 1359.8, minWidth: 768 });
  const isMobileScreen = useMediaQuery({ maxWidth: 767 });

  return (
    <section className={s.casesSection}>
      <Container>
        <ul className={s.casesList}>
          <CaseItem
            number="01."
            company="enjoy"
            description="Ми втілили у цей кейс усе креативне бачення нашої команди. Наша компанія допомогла зробити бізнес клієнта більш діючим та прибутковим Акцентувати увагу на атмосфері та філософії закладу, бути корисними у досягненні маркетингових цілей власника ресторану - наша місія."
            slogan="насолода"
            mainImg={
              isTabletScreen
                ? mainEnjoyTablet
                : isMobileScreen
                ? mainEnjoyMobile
                : mainEnjoy
            }
            addImg={
              isTabletScreen
                ? addEnjoyTablet
                : isMobileScreen
                ? addEnjoyMobile
                : addEnjoy
            }
            backgroundImg={firstCircle}
          />
          <CaseItem
            number="02."
            company="world of devices"
            description="При співпраці з даним клієнтом ми хотіли продемонструвати унікальність та користь його магазину. Замовник пропонує стильні аксесуари для підкреслення індивідуальності кожного, а ми допомогли йому виділити бізнес на фоні інших. Збільшити зацікавленість продукцією, товарний чек та кількість клієнтів."
            slogan="гаджет"
            mainImg={
              isTabletScreen
                ? mainWODTablet
                : isMobileScreen
                ? mainWODMobile
                : mainWOD
            }
            addImg={
              isTabletScreen
                ? addWODTablet
                : isMobileScreen
                ? addWODMobile
                : addWOD
            }
          />
          <CaseItem
            number="03."
            company="nizhna"
            description="Наша мета - допомагати клієнту розвивати бізнес, удосконалюючи спосіб зв'язку з його цільовою аудиторією та інформуючи про послуги й новинки. Враховуючи побажання, наша команда передає процес роботи, яку здійснює студія косметології та епіляції. Разом з нашим клієнтом ми раді бачити чудові результати кожної маркетингової компанії."
            slogan="Елегантність"
            mainImg={
              isTabletScreen
                ? mainNizhnaTablet
                : isMobileScreen
                ? mainNizhnaMobile
                : mainNizhna
            }
            addImg={
              isTabletScreen
                ? addNizhnaTablet
                : isMobileScreen
                ? addNizhnaMobile
                : addNizhna
            }
            backgroundImg={secondCircle}
          />
          <CaseItem
            number="04."
            company="elite dental"
            description="Наша компанія допомогла клієнту втілити маркетингові цілі - ми здійснили кращу поінформованість та сформували довіру до його бізнесу. Нам вдалося висвітлити переваги бізнесу нашого клієнта. Таким чином ми допомогли цільовій аудиторії знайти саме ту стоматологічну клініку, в якій буде комфортно."
            slogan="Естетика"
            mainImg={
              isTabletScreen
                ? mainElitDentalTablet
                : isMobileScreen
                ? mainElitDentalMobile
                : mainElitDental
            }
            addImg={
              isTabletScreen
                ? addElitDentalTablet
                : isMobileScreen
                ? addElitDentalMobile
                : addElitDental
            }
          />
          {isShow && (
            <>
              <CaseItem
                number="05."
                company="one touch"
                description="Ми намагалися знайти найцікавіші рішення, які призведуть до покращення впізнаваності компанії та сформують лояльність клієнтів до бізнесу. Так, ми це зробили! Наші регулярні зусилля дали чудовий результат, який задовольнив нашого клієнта та дає можливість його бізнесу швидше просуватися."
                slogan="Модернізація"
                mainImg={
                  isTabletScreen
                    ? mainOneTouchTablet
                    : isMobileScreen
                    ? mainOneTouchMobile
                    : mainOneTouch
                }
                addImg={
                  isTabletScreen
                    ? addOneTouchTablet
                    : isMobileScreen
                    ? addOneTouchMobile
                    : addOneTouch
                }
                backgroundImg={thirdCircle}
              />
            </>
          )}
        </ul>
        <button
          className={s.showMoreButton}
          onClick={() => {
            setIsShow(!isShow);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="554"
            height="111"
            viewBox="0 0 554 111"
            fill="none"
            className={s.gradientButton}
          >
            <path
              d="M0.517887 67.2007C0.37246 63.6624 2.06507 60.0722 5.55375 56.4639C9.0426 52.8555 14.2871 49.2737 21.1325 45.7709C34.8205 38.7667 54.803 32.1317 79.6289 26.2243C129.273 14.4113 198.183 5.53125 274.588 2.39091C350.992 -0.749417 420.399 2.44573 470.844 10.1449C496.072 13.9951 516.531 18.9679 530.748 24.8251C537.857 27.7543 543.378 30.8937 547.151 34.2036C550.924 37.5134 552.906 40.9526 553.051 44.4909C553.197 48.0292 551.504 51.6194 548.016 55.2276C544.527 58.8361 539.282 62.4179 532.437 65.9207C518.749 72.9248 498.766 79.5598 473.94 85.4673C424.296 97.2802 355.387 106.16 278.982 109.301C202.577 112.441 133.171 109.246 82.7248 101.547C57.4978 97.6965 37.0382 92.7237 22.8216 86.8665C15.7119 83.9373 10.1911 80.7979 6.41786 77.4879C2.64484 74.1781 0.663314 70.7389 0.517887 67.2007Z"
              stroke="url(#paint0_linear_746_1338)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_746_1338"
                x1="279.002"
                y1="109.8"
                x2="274.567"
                y2="1.89134"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#CB6DE7" />
                <stop offset="1" stopColor="#F4FF25" />
              </linearGradient>
            </defs>
          </svg>
          {isShow ? "Згорнути" : "Показати всі"}
        </button>
      </Container>
    </section>
  );
};

export default Cases;
