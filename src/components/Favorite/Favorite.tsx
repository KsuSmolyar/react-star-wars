import { Link } from "react-router-dom";
import styles from "./Favorite.module.css";
import icon from "./img/favorite.svg";
import { useAppSelector } from "../../store/hooks";
import { useEffect, useState } from "react";

const Favorite = () => {
  const [count, setCount] = useState<string|number>(0);
  const storeData = useAppSelector(state => state.favoriteReducer);

  useEffect(() => {
    const length = Object.keys(storeData).length;
    const counterData = length.toString().length > 2 ? "..." : length;
    setCount(counterData);
  }, [storeData])

  return (
    <div className={styles.favorite}>
      <Link to={"/favorites"}>
        {!!count && <span className={styles.counter}>{count}</span>}
        <img className={styles.icon} src={icon} alt="Избранное"/>
      </Link>
      
    </div>
  )
}

export default Favorite;
