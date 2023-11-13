import React, { useEffect } from "react";
// import s from "./SMM.module.css";
import Hero from "../../components/ServicesPage/Hero";
import smmHeroImage from "../../assets/smm-hero.png";
import ServicedList from "../../components/ServicesPage/ServicedList";
import FlipCard from "./FlipCard";
const SMM = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Hero
        yearText="2004"
        quoteText="В соцмережах зміст - це ключ до популярності."
        titleText="smm."
        pageNumber="001"
        pageNumberTitle="Інновація"
        heroImage={smmHeroImage}
        serviceDescription="це стратегія маркетингу, яка використовує соціальні мережі для взаємодії з цільовою аудиторією."
        pageTitle="creativity"
      />
      <ServicedList
        startWords={"а  знаєте,"}
        endWords={"дає:"}
        listOpportunity={[
          {
            opportunity:
              "Можливість для ваших клієнтів відчути емоції та настрій саме вашого бренду. Підвищення інтересу та збільшення довіри цільової аудиторії до ваших послуг.",
          },
          {
            opportunity:
              "Розвиток вашого бізнесу завдяки комплексу креативних маркетингових рішень. Реклама, оригінальний зручний сайт, стильне оформлення сторінок у соцмережах.",
          },
          {
            opportunity:
              "Дружню та продуктивну співпрацю з професійними маркетологами, які мають особливий творчий підхід в цифровому маркетингу та враховують ваші побажання.",
          },
        ]}
      />
      <FlipCard />
    </>
  );
};

export default SMM;
