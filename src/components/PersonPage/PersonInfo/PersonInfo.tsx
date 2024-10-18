import { IPersonInfo } from "../../../types/people";
import styles from "./PersonInfo.module.css";

interface IPersonInfoProps {
  personInfo: IPersonInfo[];
}

export const PersonInfo = ({ personInfo }: IPersonInfoProps) => {
  return (
    <ul className={styles.personInfo__list}>
    {personInfo.map(({ title, data })=> {
      return (
        data && (
          <li className={styles.personInfo__listItem} key={title}>
            <span className={styles.personInfo__listItemTitle}>{title}:</span> {data}
          </li>
        )
      )
    })}
  </ul>
  )
}
