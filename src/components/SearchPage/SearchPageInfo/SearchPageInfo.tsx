import styles from "./SearchPageInfo.module.css";

import { Link } from "react-router-dom";
import { PeopleListItem } from "../../../types/people"

interface IProps {
  people: PeopleListItem[];
}
export const SearchPageInfo = ({ people }: IProps) => {
  return (
    <>
      {people.length 
      ? (
        <ul className={styles.listContainer}>
          {people.map(({id, name, img}) => {
            return (
              <li key={id} className={styles.listItem}>
                <Link to={`/people/${id}`}>
                  <img className={styles.personPhoto} src={img} alt={name}/>
                  <p className={styles.personName}>{name}</p>
                </Link>
              </li>
            )
          })}
        </ul>
      )
      : <h2 className={styles.comment}>No results</h2>}
    </>
  )
}
