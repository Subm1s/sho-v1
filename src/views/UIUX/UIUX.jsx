import { useEffect } from "react";

import Hero from "../../components/ServicesPage/Hero";
import ServicedList from "../../components/ServicesPage/ServicedList";

import uiuxHero from "../../assets/UIUX-hero.png";

const UIUX = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Hero
        yearText="1991"
        quoteText="Дизайн - не просто як щось виглядає, дизайн - це те, як щось працює."
        titleText="design."
        pageNumber="002"
        pageNumberTitle="Продуманість"
        heroImage={uiuxHero}
        serviceDescription="Це створення естетичних та функціональних рішеннь, що надають продукту або послузі привабливість, легкість використання та вплив на сприйняття користувачів, забезпечуючи позитивний досвід та досягаючи поставлених цілей."
        pageTitle="Magic"
        author="- Стів Джобс"
      />
      <ServicedList
        startWords={"от"}
        endWords={"ми можемо:"}
        listOpportunity={[
          {
            title: "Веб-дизайн:",
            opportunity:
              "Розробка макетів та дизайну для веб-сайтів, які забезпечують користувачам зручність використання та привабливий зовнішній вигляд.",
            price: "від 10 000 грн",
          },
          {
            title: "Поліграфія:",
            opportunity:
              "Розробка дизайну для поліграфічних матеріалів, таких як брошури, листівки, плакати, запрошення, меню, банери, створення дизайну візитних карток  тощо.",
            price: "від 500 грн",
          },
          {
            title: "Соціальні медіа:",
            opportunity:
              "розробка графічного контенту для рекламних кампаній та публікацій у соціальних мережах, таких як рекламні креативи та пости тощо.",
            price: "від 500 грн",
          },
          {
            title: "Електронна пошта та  розсилки:",
            opportunity: "Розробка дизайну для електронних листів та розсилок.",
            price: "від 500 грн",
          },
          {
            title: "Ідентичність бренду:",
            opportunity:
              "Розробка всієї графічної ідентичності бренду, включаючи кольорову палітру, шрифти, стиль та логотип.",
            price: "від 15 000 грн",
          },
        ]}
      />
    </>
  );
};

export default UIUX;
