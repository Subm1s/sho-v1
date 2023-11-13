import React from "react";
import s from "./Quote.module.css";

const Quote = ({ quoteText, author = false }) => {
  return (
    <>
      <p className={s.quoteText}>{quoteText}</p>
      {author && <p className={`${s.author} ${s.quoteText}`}>{author}</p>}
    </>
  );
};

export default Quote;
