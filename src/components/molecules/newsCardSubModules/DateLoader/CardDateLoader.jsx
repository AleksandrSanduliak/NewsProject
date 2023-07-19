import cl from "../Date/CardDate.module.scss";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const CardDate = () => {
  return (
    <div className={cl.CardDate}>
      <Skeleton className={cl.CardDate__img} />
      <Skeleton className={cl.CardDate__dateblock}></Skeleton>
    </div>
  );
};

export default CardDate;
