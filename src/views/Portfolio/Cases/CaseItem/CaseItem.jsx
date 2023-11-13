import { useEffect, useState } from "react";
import s from "./CaseItem.module.css";
const CaseItem = ({
  number,
  company,
  description,
  slogan,
  mainImg,
  addImg,
  backgroundImg,
}) => {
  const [isShow, setIsShow] = useState(false);
  const [isLongTitle, setIsLongTitle] = useState(false);

  useEffect(() => {
    if (company.split(" ").length >= 2) {
      setIsLongTitle(true);
    }
  }, [company]);

  return (
    <li className={s.caseItem}>
      <img src={backgroundImg} alt="" className={s.bgImg} />
      <div className={s.textWrapper}>
        <h2
          className={
            isLongTitle ? [s.mainTitle, s.longTitle].join(" ") : s.mainTitle
          }
        >
          <span className={s.caseNumber}>{number}</span>
          {company}
        </h2>
        <p className={s.description}>{description}</p>
        <button
          className={s.showMoreButton}
          onClick={() => {
            setIsShow(!isShow);
          }}
        >
          {isShow ? "Згорнути" : "побачити більше."}
        </button>
      </div>
      <div className={s.caseInfo}>
        <div
          className={isShow ? [s.imgWrapper, s.open].join(" ") : s.imgWrapper}
        >
          <img
            src={mainImg}
            alt="головне зображення кейсу"
            className={s.mainImage}
          />
          <img
            src={addImg}
            alt="розгорнута інформація з кейсу"
            className={s.addImage}
          />
          <button
            className={s.showMoreButton}
            onClick={() => {
              setIsShow(!isShow);
              console.log(isShow);
            }}
          >
            {isShow ? "Згорнути" : "побачити більше."}
          </button>
        </div>
        <p className={s.slogan}>{slogan}</p>
      </div>
    </li>
  );
};

export default CaseItem;
