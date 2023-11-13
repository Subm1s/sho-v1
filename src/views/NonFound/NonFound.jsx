import React from "react";
import s from "./NonFound.module.css";

const NonFound = () => {
  return (
    <div className={s.nonFoundWrapper}>
      <h3 className={s.nonFoundText}>404</h3>
    </div>
  );
};

export default NonFound;
