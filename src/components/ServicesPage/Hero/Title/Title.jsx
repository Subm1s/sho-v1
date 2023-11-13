import React, { useEffect, useState } from "react";
import s from "./Title.module.css";
import { useMediaQuery } from "react-responsive";

const Title = ({ titleText }) => {
  const isSmallScreen = useMediaQuery({ maxWidth: 1300 });

  const [isSmall, setIsSmall] = useState(false);
  useEffect(() => {
    if (
      isSmallScreen &&
      (titleText.split(" ").length >= 2 || titleText.length >= 7)
    ) {
      setIsSmall(true);
    }
  }, [isSmallScreen, titleText]);

  return (
    <h2 className={isSmall ? [s.title, s.short].join(" ") : s.title}>
      {titleText}
    </h2>
  );
};

export default Title;
