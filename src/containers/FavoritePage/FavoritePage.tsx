import { useEffect, useState } from "react";
import { useAppSelector } from "../../store/hooks";
import PeopleList from "../../components/PeoplePage/PeopleList";
import { IPerson } from "../../types/people";
import styles from "./FavoritePage.module.css";

const FavoritePage = () => {
  const [people, setPeople] = useState<IPerson[]>([]);
  const storeData = useAppSelector(state => state.favoriteReducer);

  useEffect(() => {
    const arr = Object.entries(storeData);
    if(arr.length) {
      const res = arr.map((item) => {
        return {
          id: item[0],
          ...item[1],
        }
      })
      setPeople(res);
    }
  },[storeData]);
  
  return (
    <>
      <h1 className="header__text">Favorite Page</h1>
      { people.length ? <PeopleList people={people}/> : <h2 className={styles.comment}>No data</h2>}
      
    </>
  )
}

export default FavoritePage;
