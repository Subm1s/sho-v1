import React from "react";
import ShoLogo from "../ShoLogo";
import s from "./TitleServiced.module.css";

const TitleServiced = ({ startWords, endWords }) => {
  return (
    <div className={s.titleWrapper}>
      <p className={s.words}>{startWords}</p>
      <ShoLogo />
      <p className={s.words}>{endWords}</p>
    </div>
  );
};

export default TitleServiced;
