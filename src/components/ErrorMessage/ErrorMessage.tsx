import { UiVideo } from "../UI/UiVideo";
import styles from "./ErrorMessage.module.css";
import video from "./video/han-solo.mp4";

const ErrorMessage = () => {
  return (
    <>
     <p className={styles.text}>
       The dark side of the force has won.<br/> 
       We cannot display data.<br/>
       Come back when we fix everything.
     </p>
     <UiVideo src={video} className={styles.video} speed={1}/>
    </>
  )
}

export default ErrorMessage;
