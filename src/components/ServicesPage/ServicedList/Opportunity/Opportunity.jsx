import React from "react";
import s from "./Opportunity.module.css";

const Opportunity = ({ listOpportunity }) => {
  return (
    <ul className={s.listOpportunity}>
      {listOpportunity.map((el, id) => {
        return (
          <li
            key={id}
            className={
              el.title ? s.itemOpportunityWithTitle : s.itemOpportunity
            }
          >
            {el.title && <h3 className={s.titleOpportunity}>{el.title}</h3>}
            <p
              className={
                el.title ? s.textOpportunityWithTitle : s.textOpportunity
              }
            >
              {el.opportunity}
            </p>
            {el.price && <p className={s.priceOpportunity}>{el.price}</p>}
          </li>
        );
      })}
    </ul>
  );
};

export default Opportunity;
