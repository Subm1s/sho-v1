import React from "react";
import s from "./OpportunityList.module.css";

const OpportunityList = ({ list }) => {
  return (
    <ul className={s.list}>
      {list.map((el, idx) => {
        return (
          <li className={s.listItem} key={idx}>
            <p className={s.listItemText}>{el}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default OpportunityList;
