import { useEffect, useState } from "react";
import { makeConcurrentRequest } from "../../../utils/network";
import { IFilmsName } from "../../../types/films";
import styles from "./PersonFilms.module.css";

interface IProps {
  personFilms: string[];
}

export const PersonFilms = ({personFilms}: IProps) => {
  const [filmsName, setFilmsName] = useState<IFilmsName[]>([]);

  useEffect(() => {

    const getFilmsNames = async() => {
      const response = await makeConcurrentRequest(personFilms);
      console.log(response)
      setFilmsName(response);
    }

    getFilmsNames();
  }, [])
  return (
    <ul className={styles.personFilms}>
      {filmsName
        .sort((a, b) => a.episode_id - b.episode_id)
        .map(({title, episode_id}) => {
          return (
            <li className={styles.personFilms__item} key={episode_id}>
              <span className={styles.personFilms__itemEpisode}>Episode {episode_id}</span>
              <span className={styles.personFilms__itemColon}>:</span>
              <span className={styles.personFilms__itemTitle}>{title}</span>
            </li>
          )
        })}
    </ul>
  )
}
