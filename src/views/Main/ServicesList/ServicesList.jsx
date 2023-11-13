import React from "react";
import { NavLink } from "react-router-dom";
import s from "./ServicesList.module.css";
import Container from "../../../components/Layout/Container/Container";

import vetalPhoto from "../../../assets/vetal-services.jpg";
import smmPhoto from "../../../assets/smm-hero.png";
import uiuxPhoto from "../../../assets/UIUX-hero.png";
import googleADSPhoto from "../../../assets/googleLaptop.jpg";
import marketingPhoto from "../../../assets/marketing-hero.png";
import poslyhy from "../../../assets/posluhy.png";
import webdevPhoto from "../../../assets/webdevHero.jpg";

const ServicesList = () => {
  return (
    <section className={s.titleWrapper}>
      <Container>
        {/* <h2 className={s.mainTitle}>posluhy</h2> */}
        <img src={poslyhy} alt="poslyhy" className={s.mainTitle} />
      </Container>
      <ul className={s.servicedList}>
        <li className={s.servicedListItem}>
          <div className={s.bcgGrey}>
            <Container>
              <div className={s.number}>
                <span className={`${s.mainNum}`}>0</span>
                <span className={`${s.mainNum} ${s.numColor}`}>1</span>
                <div className={s.textNumWrapper}>
                  <p className={s.textNum}>sm</p>
                  <p className={`${s.numColor} ${s.textNum}`}>&nbsp;m.</p>
                </div>
              </div>
              <div className={s.textWrapper}>
                <p className={s.description}>
                  <span className={s.descriptionTitle}>
                    SMM (Соціальний медіа маркетинг)
                  </span>
                  - це мистецтво знаходити спільноту в онлайн-світі. SMM
                  фахівець веде ваш бренд у соціальних мережах, взаємодіючи з
                  аудиторією через цікавий контент, відповіді на коментарі та
                  створення зв'язку. Він знає, як зачарувати, підтримати діалог
                  та створити віртуальне співтовариство навколо вашого бренду.
                </p>
                <NavLink to="/smm" className={s.buttonLink}>
                  детальніше →
                </NavLink>
              </div>
              <img
                src={smmPhoto}
                alt="Веталь з ноутом"
                className={s.listImage}
              />
            </Container>
          </div>
          <div className={s.bcgDark}>
            <Container></Container>
          </div>
        </li>
        <li className={s.servicedListItem}>
          <div className={s.bcgGrey}>
            <Container>
              <div className={s.number}>
                <span className={`${s.mainNum}  ${s.numColorYellow}`}>0</span>
                <span className={`${s.mainNum}`}>2</span>
                <div className={s.textNumWrapper}>
                  <p className={s.textNum}>ui/</p>
                  <p className={`${s.numColorYellow} ${s.textNum}`}>ux</p>
                </div>
              </div>
              <div className={s.textWrapper}>
                <p className={s.description}>
                  <span className={s.descriptionTitle}>Дизайн</span> - це мова
                  образів, що розповідає історії через форми, кольори та
                  композицію. Досвідчений дизайнер перетворює концепції на
                  візуальні шедеври, беручи до уваги естетику та
                  функціональність. Він знає, як виразити вашу сутність через
                  графіку, лого, веб-сайт чи інші твори, створюючи неповторний
                  слід у світі форм та образів.
                </p>
                <NavLink to="/uiux" className={s.buttonLink}>
                  детальніше →
                </NavLink>
              </div>
              <img
                src={uiuxPhoto}
                alt="Веталь з ноутом"
                className={s.listImage}
              />
            </Container>
          </div>
          <div className={s.bcgDark}>
            <Container></Container>
          </div>
        </li>
        <li className={s.servicedListItem}>
          <div className={s.bcgGrey}>
            <Container>
              <div className={s.number}>
                <span className={`${s.mainNum}`}>0</span>
                <span className={`${s.mainNum} ${s.numColor}`}>3</span>
                <div className={s.textNumWrapper}>
                  <p className={s.textNum}>tar</p>
                  <p className={`${s.numColor} ${s.textNum}`}>get.</p>
                </div>
              </div>
              <div className={s.textWrapper}>
                <p className={s.description}>
                  <span className={s.descriptionTitle}>Таргетинг</span> - це
                  коли рекламу бачать саме ті люди, які можуть бути зацікавлені
                  вашими продуктами чи послугами. Спеціаліст з таргетингу
                  обирає, кому показувати рекламу - за віком, інтересами, місцем
                  проживання та іншими ознаками. Він допомагає вашому
                  повідомленню потрапити точно туди, де його чекають.
                </p>
                <NavLink to="/target" className={s.buttonLink}>
                  детальніше →
                </NavLink>
              </div>
              <img
                src={vetalPhoto}
                alt="Веталь з ноутом"
                className={s.listImage}
              />
            </Container>
          </div>
          <div className={s.bcgDark}>
            <Container></Container>
          </div>
        </li>
        <li className={s.servicedListItem}>
          <div className={s.bcgGrey}>
            <Container>
              <div className={s.number}>
                <span className={`${s.mainNum}`}>0</span>
                <span className={`${s.mainNum} ${s.numColorYellow}`}>4</span>
                <div className={s.textNumWrapper}>
                  <p className={s.textNum}>goog</p>
                  <p className={`${s.numColorYellow} ${s.textNum}`}>
                    <span className={s.f}>l</span>e&nbsp;ads.
                  </p>
                </div>
              </div>
              <div className={s.textWrapper}>
                <p className={s.description}>
                  <span className={s.descriptionTitle}>Google Ads</span> -
                  магічний місток між брендами та їхніми майбутніми
                  прихильниками. Спеціаліст з цього напрямку допомагає вашим
                  ідеям розквітати на сторінках пошукових результатів,
                  відволікає відтягнені погляди на ваші творіння на YouTube та
                  робить віртуальні мрії реальністю.
                </p>
                <NavLink to="/google-ads" className={s.buttonLink}>
                  детальніше →
                </NavLink>
              </div>
              <img
                src={googleADSPhoto}
                alt="Веталь з ноутом"
                className={s.listImage}
              />
            </Container>
          </div>
          <div className={s.bcgDark}>
            <Container></Container>
          </div>
        </li>
        <li className={s.servicedListItem}>
          <div className={s.bcgGrey}>
            <Container>
              <div className={s.number}>
                <span className={`${s.mainNum}`}>0</span>
                <span className={`${s.mainNum} ${s.numColor}`}>5</span>
                <div className={s.textNumWrapper}>
                  <p className={s.textNum}>
                    ma<span className={s.oneLetterPink}>r</span>ke
                  </p>
                  <p className={`${s.numColor} ${s.textNum}`}>ting.</p>
                </div>
              </div>
              <div className={s.textWrapper}>
                <p className={s.description}>
                  <span className={s.descriptionTitle}>Маркетинг</span> - це
                  мистецтво розповіді про вашу історію та цінності так, щоб
                  привернути і зацікавити людей. Спеціаліст з маркетингу вивчає
                  ваші продукти, аналізує аудиторію та розробляє стратегії, що
                  роблять ваш бренд особливим. Він використовує творчість,
                  дослідження та різні канали, щоб зробити вашу ідею популярною
                  та привабливою для світу.
                </p>
                <NavLink to="/marketing" className={s.buttonLink}>
                  детальніше →
                </NavLink>
              </div>
              <img
                src={marketingPhoto}
                alt="Веталь з ноутом"
                className={s.listImage}
              />
            </Container>
          </div>
          <div className={s.bcgDark}>
            <Container></Container>
          </div>
        </li>
        <li className={s.servicedListItem}>
          <div className={s.bcgGrey}>
            <Container>
              <div className={s.number}>
                <span className={`${s.mainNum}`}>0</span>
                <span className={`${s.mainNum} ${s.numColorYellow}`}>6</span>
                <div className={s.textNumWrapper}>
                  <p className={s.textNum}>web</p>
                  <p className={`${s.numColorYellow} ${s.textNum}`}>
                    <span className={s.f}>d</span>ev.
                  </p>
                </div>
              </div>
              <div className={s.textWrapper}>
                <p className={s.description}>
                  <span className={s.descriptionTitle}>Веб-розробка</span>- це
                  мистецтво створення цифрового простору, де професіонали
                  вивчають ваші потреби, аналізують технічні вимоги та
                  розробляють стратегії для створення унікальних веб-платформ.
                  Вони поєднують технічну експертизу, креативність та
                  дослідницький підхід для того, щоб зробити ваші ідеї
                  доступними та привабливими для онлайн-світу, використовуючи
                  різноманітні інструменти та технології.
                </p>
                <NavLink to="/webdev" className={s.buttonLink}>
                  детальніше →
                </NavLink>
              </div>
              <img
                src={webdevPhoto}
                alt="Веталь з ноутом"
                className={s.listImage}
              />
            </Container>
          </div>
          <div className={s.bcgDark}>
            <Container></Container>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default ServicesList;
