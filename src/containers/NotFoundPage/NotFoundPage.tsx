import { useLocation } from "react-router-dom";
import notFoundImg from "./img/404.png";
import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  const location = useLocation();
  console.log(location)

  return (
    <>
      <img className={styles.image} src={notFoundImg} alt="Not found"/>
      <p className={styles.text}>No match for <span className={styles.textUnderline}>{location.pathname}</span></p>
    </>
  )
}

export default NotFoundPage;
