import React, { useEffect, useState } from "react";

import { BiSolidDroplet } from "react-icons/bi";
import { useMediaQuery } from "react-responsive";

import Container from "../../Layout/Container/";
import Year from "./Year";
import Title from "./Title";
import s from "./Hero.module.css";
import Quote from "./Quote";
import NumberTitle from "./NumberTitle";
import ImageHero from "./ImageHero/ImageHero";

const Hero = ({
  yearText,
  quoteText,
  titleText,
  pageNumber,
  pageNumberTitle,
  heroImage,
  serviceDescription,
  pageTitle,
  author,
}) => {
  const [isSmall, setIsSmall] = useState(false);
  useEffect(() => {
    if (pageTitle.length >= 12) {
      setIsSmall(true);
    }
  }, [pageTitle]);

  const isMobileScreen = useMediaQuery({ query: "(max-width: 767px)" });
  const isTabletScreen = useMediaQuery({ query: "(max-width: 940x)" });

  let fontSize = 58;
  let widthSize = "auto";

  if (isMobileScreen && pageTitle.length >= 8) {
    fontSize = 32;
  }
  if (isMobileScreen && pageTitle.length >= 10) {
    widthSize = "50%";
  }
  if (pageTitle.toUpperCase() === 'STRATEGIST' && isMobileScreen) {
    fontSize = 32;
  }
  if (isTabletScreen) {
    fontSize = 48;
  }

  return (
    <section className={s.heroSection}>
      <Container className="containerHero">
        <div className={s.leftSide}>
          <div className={s.yearRotate}>
            <Year yearText={yearText} />
            <Quote quoteText={quoteText} author={author} />
          </div>
          <div className={s.pageTitleWrapper} style={{ width: widthSize }}>
            <h3
              className={
                isSmall ? [s.small, s.pageTitle].join(" ") : s.pageTitle
              }
              {...(isSmall ? { style: { fontSize: `${fontSize}px` } } : {})}
            >
              {pageTitle}
              <BiSolidDroplet color="yellow" className={isSmall ? [s.small, s.dropTitle].join(" ") : s.dropTitle} />
            </h3>
          </div>
          <div className={s.shoSignWrapper}>
            <p className={s.shoSign}> {`[sho?]`}</p>
            <p className={s.serviceDescription}>{serviceDescription}</p>
          </div>
        </div>

        <div className={s.rightSide}>
          <Title titleText={titleText} />
          <NumberTitle
            pageNumber={pageNumber}
            pageNumberTitle={pageNumberTitle}
          />
          <ImageHero heroImage={heroImage} />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
