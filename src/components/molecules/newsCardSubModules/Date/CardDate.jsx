import React from "react";
import cl from "./CardDate.module.scss";
import dateSVG from "../../../../assets/icons/dateSVG.svg";

const CardDate = (date) => {
  return (
    <div className={cl.CardDate}>
      <img className={cl.CardDate__img} src={dateSVG} alt="Иконка Даты" />
      <p className={cl.CardDate__dateblock}>{date.date}</p>
    </div>
  );
};

export default CardDate;
