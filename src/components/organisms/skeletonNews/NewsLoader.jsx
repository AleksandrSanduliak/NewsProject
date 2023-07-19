import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import cl from "../newsCard/NewsCard.module.scss";
import CardDateLoader from "../../molecules/newsCardSubModules/DateLoader/CardDateLoader";
const NewsLoader = ({ listsToRender }) => {
  return (
    <>
      {Array(listsToRender)
        .fill(0)
        .map((item, i) => (
          <div key={i} className={cl.cardnews}>
            <Skeleton className={cl.cardnews__img} />
            <CardDateLoader />
            <Skeleton className={cl["cardnews__title"]}></Skeleton>
            <Skeleton className={cl["cardnews__desc"]}></Skeleton>
            <hr />
            <Skeleton className={cl["cardnews__author"]}></Skeleton>
          </div>
        ))}
    </>
  );
};

export default NewsLoader;
