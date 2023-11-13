import React from "react";
import Container from "../../../components/Layout/Container";
import s from "./TargetServices.module.css";

import vetalClose from "../../../assets/vetalClose.jpg";

const TargetServices = ({ targetServicedList }) => {
  return (
    <section className={s.targetSection}>
      <Container>
        <div className={s.photoWrapper}>
          <img
            src={vetalClose}
            alt="таргетолог з ноутбуком"
            className={s.imageLaptop}
          />
          <div className={s.titleWrapper}>
            <p className={s.targetServicedTitle}>target</p>
            <p className={s.targetSectionSho}>[sho?]</p>
          </div>
        </div>
        <ul className={s.targetList}>
          {targetServicedList.map((el, idx) => {
            return (
              <li className={s.targetListItem} key={idx}>
                <p className={s.textList}>{el}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};

export default TargetServices;
