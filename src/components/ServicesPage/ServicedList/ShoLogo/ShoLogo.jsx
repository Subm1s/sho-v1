import React from "react";
import Shologo from "../../../../assets/secondaryLogo.svg";
import s from "./ShoLogo.module.css";

const ShoLogo = () => {
  return <img src={Shologo} alt="Логотип компанії ШО" className={s.logo} />;
};

export default ShoLogo;
