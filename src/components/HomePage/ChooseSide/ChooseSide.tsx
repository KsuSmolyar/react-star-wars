import styles from "./ChooseSide.module.css";

import { useTheme } from "../../../context/ThemeProvider";

import LightSide from "./img/light-side.jpg";
import DarkSide from "./img/dark-side.jpg";
import Neutral from "./img/neutral.jpg";
import classNames from "classnames";

interface IChooseSideIcon {
  theme: "light" | "dark" | "neutral";
  text: string;
  imgSrc: string;
  classes: string;
}

const ChooseSideIcon = ({ theme, text, imgSrc, classes }: IChooseSideIcon) => {
  const isTheme = useTheme();

  return (
  <div className={classNames(styles.imgContainer, classes)} onClick={() => isTheme.change(theme)}>
    <img className={styles.img} src={imgSrc} alt={text} />
    <div className={styles.text}>{text}</div>
  </div>
)};

const elements = [
  {
    theme: "light",
    text: "Light side",
    imgSrc: LightSide,
    classes: styles.lightSide
  },
  {
    theme: "dark",
    text: "Dark side",
    imgSrc: DarkSide,
    classes: styles.darkSide
  },
  {
    theme: "neutral",
    text: "I'm Han Solo",
    imgSrc: Neutral,
    classes: styles.neutral
  },
] as const;

const ChooseSide = () => {
  
  return (
    <div className={styles.container}>
      { elements.map((el) => {
        return (
          <ChooseSideIcon key={el.imgSrc} classes={el.classes} theme={el.theme} text={el.text} imgSrc={el.imgSrc}/>
        )
      })}
    </div>
  )
}

export default ChooseSide;
