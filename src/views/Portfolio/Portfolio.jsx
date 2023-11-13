import React from "react";
import s from "./Portfolio.module.css";
import Hero from "./Hero/Hero";
import Cases from "./Cases";

const Portfolio = () => {
  return (
    <>
      <Hero
        title="portfolio."
        quote='"Портфоліо - це історія наших успіхів, яка вдихає життя в ідеї та трансформує їх у досягнення."'
        quoteTitle="Inspirational."
      />
      <Cases />
    </>
  );
};

export default Portfolio;
