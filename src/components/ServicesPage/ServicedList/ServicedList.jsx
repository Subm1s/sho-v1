import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Container from "../../Layout/Container";
import TitleServiced from "./TitleІServiced/TitleServiced";
import Opportunity from "./Opportunity";
import s from "./ServicedList.module.css";

const ServicedList = ({ startWords, endWords, listOpportunity }) => {
  const [isUIUX, setIsUIUX] = useState(false);

  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    if ((pathname === "/uiux") || (pathname === "/webdev")) {
      setIsUIUX(true);
    }
  }, [pathname]);

  return (
    <section
      className={
        isUIUX
          ? [s.opportunitySection, s.columnList].join(" ")
          : s.opportunitySection
      }
    >
      <Container>
        <TitleServiced startWords={startWords} endWords={endWords} />
        <Opportunity listOpportunity={listOpportunity} />
      </Container>
    </section>
  );
};

export default ServicedList;
