import { useNavigate } from "react-router-dom";
import iconBack from "./img/icon-arrow-left.svg";
import styles from "./PersonLinkBack.module.css";

export const PersonLinkBack = () => {
  const navigate = useNavigate();

  const handleGoBack = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    navigate(-1);
  }

  return (
    <a href={"#"} onClick={handleGoBack} className={styles.personLinkBack}>
      <img className={styles.personLinkBack__img} src={iconBack} alt="go back arrow"/>
      <span>Go back</span>
    </a>
  )
}
