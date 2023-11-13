import React, { useEffect } from "react";

import Hero from "../../components/ServicesPage/Hero";
import ServicedList from "../../components/ServicesPage/ServicedList";
import FlipCard from "./FlipCard";

import marketingImg from "../../assets/marketing-hero.png";

const Marketing = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Hero
        yearText="1950х"
        quoteText="Маркетинг - це мистецтво робити компанію успішною."
        titleText="marketing."
        pageNumber="005"
        pageNumberTitle="Перспектива"
        heroImage={marketingImg}
        serviceDescription="надає засоби та стратегії для привертання, залучення та збереження клієнтів, сприяючи розвитку бізнесу та досягненню успіху."
        pageTitle="Strategist"
      />
      <ServicedList
        startWords={"а знаєте"}
        endWords={"дає маркетинг:"}
        listOpportunity={[
          {
            opportunity: "- Покращення поінформованості про ваш бренд;",
          },
          {
            opportunity:
              "- Можливість бути помітним та яскраво виділятися на фоні конкурентів;",
          },
          {
            opportunity:
              "- Створення у цільової аудиторії зацікавленості продукцією, яку ви пропонуєте;",
          },
          {
            opportunity: "- Просування цінностей, філософії власного бренда;",
          },
          {
            opportunity:
              "- Адаптація вашого продукту відповідно до потреб клієнта;",
          },
          {
            opportunity:
              "- Формування репутації та довіри у клієнтів до вашого бізнесу;",
          },
          {
            opportunity:
              "- Контроль та відстеження своїх витрат на рекламні кампанії;",
          },
          {
            opportunity:
              "- Контроль та відстеження своїх витрат на рекламні кампанії;",
          },
          {
            opportunity:
              "- Можливість аналізувати результати реклами та покращувати ефективність.",
          },
        ]}
      />
      <FlipCard />
    </>
  );
};

export default Marketing;
