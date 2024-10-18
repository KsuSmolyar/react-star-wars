import { Link } from "react-router-dom";
import { IPerson } from "../../../types/people";
import styles from "./PeopleList.module.css";

interface IPeopleList {
  people: IPerson[];
}

const PeopleList = ({people}: IPeopleList) => {
  return (
    <ul className={styles.peopleList}>
      { people.map(({id, name, img}:{id:string, name:string, img: string}) => {
        return (
          <li className={styles.peopleList__item} key={id}>
            <Link to={`/people/${id}`}>
              <img className={styles.peopleList__personPhoto} src={img} alt={name}/>
              <p className={styles.peopleList__personName}>{name}</p>
            </Link>
          </li>
         )
        })}
    </ul>
  )
}

export default PeopleList;
