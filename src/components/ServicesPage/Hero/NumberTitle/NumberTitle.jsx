import React from "react";
import s from "./NumberTitle.module.css";

const NumberTitle = ({ pageNumber, pageNumberTitle }) => {
  return (
    <div className={s.pageNumberWrapper}>
      <div className={s.numberWrapper}>
        <p className={s.pageNumber}>{pageNumber}</p>
        <div className={s.lineWrapper}>
          <div className={`${s.line}`}></div>
          <div className={`${s.insideLine} ${s.line}`}></div>
          <div className={`${s.line}`}></div>
        </div>
        <div className={s.bottomLine}></div>
      </div>
      <p className={s.pageNumberTitle}>{pageNumberTitle}</p>
    </div>
  );
};

export default NumberTitle;
