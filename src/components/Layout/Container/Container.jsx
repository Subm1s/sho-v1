import React from "react";
import s from "./Container.module.css";

const Container = ({ children, className = "container" }) => {
  return <div className={`${s.Container} ${className}`}>{children}</div>;
};

export default Container;
