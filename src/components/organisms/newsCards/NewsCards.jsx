import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsCard from "../newsCard/NewsCard";
import cl from "./NewsCards.module.scss";
import NewsLoader from "../skeletonNews/NewsLoader";

const NewsCards = () => {
  const select = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_POST_REQ" });
    console.log(select);
  }, []);

  if (!select.newsRequest.load) {
    return (
      <div className={cl.newsCards}>
        <NewsLoader listsToRender={8} />
      </div>
    );
  }

  return (
    <div className={cl.newsCards}>
      {select?.newsRequest?.news?.data?.articles.map((el, indx) => {
        return (
          <NewsCard
            key={indx}
            myKey={indx}
            date={el.publishedAt}
            img={el.urlToImage}
            title={el.title}
            desc={el.description}
            author={el.author}
          ></NewsCard>
        );
      })}
    </div>
  );
};

export default NewsCards;
