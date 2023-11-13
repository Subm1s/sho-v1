import React, {useEffect} from "react";

import Hero from "../../components/ServicesPage/Hero";
import ServicedList from "../../components/ServicesPage/ServicedList";

import { useMediaQuery } from "react-responsive";

import vetalTarget from "../../assets/vetal-services.jpg";
import TargetServices from "./TargetServices/TargetServices";
import FlipCard from "./FlipCard/FlipCard";

const Target = () => {

const isSmallScreen = useMediaQuery({ maxWidth: 767 });

    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  return (
    <>
      <Hero
        yearText="1960х"
        quoteText="Таргетинг - знаходження точної мети серед 
безлічі можливостей."
        titleText="target."
        pageNumber="003"
        pageNumberTitle="Персоналізація"
        heroImage={vetalTarget}
        serviceDescription="це реклама, яка спрямована на конкретну аудиторію з певними характеристиками, такими як вік, стать, інтереси, місце проживання та інші параметри."
        pageTitle={!isSmallScreen ? "Breakthrough" : "Breakth rough"}
      />
      <ServicedList
        startWords={"а  знаєте"}
        endWords={""}
        listOpportunity={[
          {
            opportunity:
              "Дозволяє бізнесу підтримувати зв'язок з клієнтами, збільшувати свою популярність, привертати нових клієнтів та впливати на їхнє рішення про покупку.",
          },
          {
            opportunity:
              "Допомогає підвищити зворотній зв'язок між бізнесом і його клієнтами, дозволяючи компанії зрозуміти, що їх клієнти думають про їх продукти або послуги, і які можливості для покращення.",
          },
          {
            opportunity:
              "Є важливою складовою сучасної стратегії маркетингу для будь-якого бізнесу, який прагне збільшити свій обсяг продажів та залучити нових клієнтів.",
          },
        ]}
      />
      <FlipCard />
    </>
  );
};

export default Target;
