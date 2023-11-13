import React, { useEffect } from "react";
import Hero from "../../components/ServicesPage/Hero";
import ServicedList from "../../components/ServicesPage/ServicedList";
import webdevHero from "../../assets/webdevHero.jpg";

const WebDev = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Hero
        yearText="1990-x"
        quoteText="Веб-розробка - це створення цифрового світу, де кожен кодовий рядок - це крок до інновацій."
        titleText="web dev."
        pageNumber="006"
        pageNumberTitle="Інтерактив"
        heroImage={webdevHero}
        serviceDescription="це процес створення та підтримки веб-сайтів та інтерактивних додатків для Інтернету. Він включає в себе розробку веб-дизайну, програмування, оптимізацію та забезпечення для користувачів функціональності на веб-платформах."
        pageTitle="Digital"
        //   author="- Стів Джобс"
      />
      <ServicedList
        startWords={"от"}
        endWords={"ми можемо:"}
        listOpportunity={[
          {
            title: "Лендінг:",
            opportunity:
              "розробка дизайну та технічного рішення, тестування лендінгу та розміщення його на веб-сервісі.",
            price: "від 700$",
          },
          {
            title: "Багатосторінковий сайт:",
            opportunity:
              "дизайн, вибір платформи, розробка надійного коду, тестування та розміщення на веб-сервері. Надаємо комплекс дій для створення візуально привабливого та водночас функціонального сайту.",
            price: "від 1500$",
          },
          {
            title: "Веб-сервіс:",
            opportunity:
              "створення програмної системи будь-якого розміру та складності - від розробки ефективного коду до тестування веб-сервісу. Якісні технічні рішення для надання вашим клієнтам доступної інформації та підтримки.",
            price: "від 3000$",
          },
          {
            title: "Інтернет-магазин:",
            opportunity:
              "створення дизайну, вибір платформи, розробку необхідних модулів і функцій, тестування на пристроях та браузері, розміщення на надійному веб-сервері.",
            price: "від 3000$",
          },
          {
            title: "Мобільні додатки:",
            opportunity:
              "розробка програмних систем будь-якого розміру та складності, починаючи від програмування ефективного коду і закінчуючи тестуванням мобільних додатків. Ми пропонуємо якісні технічні рішення, щоб надати вашим користувачам доступ до інформації та підтримки, використовуючи мобільні пристрої.",
            price: "від 4000$",
          },
        ]}
      />
    </>
  );
};

export default WebDev;