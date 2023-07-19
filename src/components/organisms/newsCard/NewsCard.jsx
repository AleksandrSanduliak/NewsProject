import React from "react";
import cl from "./NewsCard.module.scss";
import CardDate from "../../molecules/newsCardSubModules/Date/CardDate";
import news from "../../../assets/news.webp";
const NewsCard = ({ img, date, title, desc, author, myKey }) => {
  return (
    <div className={cl.cardnews} key={myKey}>
      <img
        className={cl["cardnews__img"]}
        loading="lazy"
        src={img || news}
        alt="Картинка новостей"
      />
      <CardDate date={date} />
      <h2 className={cl["cardnews__title"]}>{title}</h2>
      <h3 className={cl["cardnews__desc"]}>{desc}</h3>
      <hr />
      <p className={cl["cardnews__author"]}>{author}</p>
    </div>
  );
};

export default NewsCard;
