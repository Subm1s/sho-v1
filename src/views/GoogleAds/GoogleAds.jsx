import React, { useEffect } from "react";

import Hero from "../../components/ServicesPage/Hero";
import ServicedList from "../../components/ServicesPage/ServicedList";
import FlipCard from "./FlipCard/";

import googleLaptop from "../../assets/googleLaptop.jpg";

const GoogleAds = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Hero
        yearText="2000"
        quoteText="Досягай своєї аудиторії, де б вони не були - Google Ads робить це можливим."
        titleText="google ads."
        pageNumber="004"
        pageNumberTitle="Прорив"
        heroImage={googleLaptop}
        serviceDescription="Рекламні оголошення у найпопулярнішому пошуковику допоможуть знайти клієнтів, які готові зробити замовлення чи оформити покупку просто зараз"
        pageTitle="Prospect"
      />
      <ServicedList
        startWords={"а знаєте"}
        endWords={"дає:"}
        listOpportunity={[
          {
            opportunity:
              "Можливість показувати ваші оголошення потенційним покупцям, які шукають в Google товари або послуги з вашої сфери. Так збільшується кількість відвідувачів сайту, покращується поінформованість про ваш бренд.",
          },
          {
            opportunity:
              "Збільшується кількість підписок та реєстрацій - відвідувачі сайту зможуть бути постійно в курсі ваших акційних пропозицій. Це створює взаємодію користувачів з вашим брендом, укріплює відносини та залучає нових клієнтів. ",
          },
          {
            opportunity:
              "Встановлювати ціни, які ви готові платити за один клік при показі оголошення, контролювати витрати за рекламу, а також відстежувати результати та аналізувати рекламні кампанії для покращення маркетингових цілей. ",
          },
        ]}
      />
      <FlipCard />
    </>
  );
};

export default GoogleAds;
