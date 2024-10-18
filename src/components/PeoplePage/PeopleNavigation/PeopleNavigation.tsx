import { Link } from "react-router-dom";
import styles from "./PeopleNavigation.module.css";
import classNames from "classnames";
import UiButton from "../../UI/UiButton";

const PeopleNavigation = ({ getResource, prevPage, nextPage, counterPage}: IPeopleNavigation) => {
  const handleChangeNext = () => {
    getResource(nextPage);
  }

  const handleChangePrev = () => {
    getResource(prevPage); 
  }

  return (
    <div className={styles.peopleNavigation}>
      <Link className={styles.peopleNavigation__link} to={`/people/?page=${counterPage-1}`}>
        <UiButton isParagraph={true} className={classNames(styles.peopleNavigation__label, {
          [styles.isDisabled]: !prevPage
        })} onClick={handleChangePrev}>Previous</UiButton>
      </Link>
      <Link className={styles.peopleNavigation__link} to={`/people/?page=${counterPage+1}`}>
        <UiButton isParagraph={true} className={classNames(styles.peopleNavigation__label, !nextPage && styles.isDisabled)} onClick={handleChangeNext}>Next</UiButton>
      </Link>
    </div>
  )
}

export default PeopleNavigation;

interface IPeopleNavigation {
  getResource: (url:string) => Promise<void>,
  prevPage: string,
  nextPage: string,
  counterPage: number
}
