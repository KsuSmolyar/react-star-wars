import loaderImgYellow from "./img/loader-yellow.svg";
import loaderImgBlack from "./img/loader-black.svg";
import loaderImgWhite from "./img/loader-white.svg";
import styles from "./UiLoading.module.css";
import { useLayoutEffect, useState } from "react";
import classNames from "classnames";

interface IProp {
  theme?: string;
  isShadow?: boolean;
  className?: string;

}
export const UiLoading = ({className, theme ="yellow", isShadow =true}: IProp) => {
  const classes = classNames(styles.loading, className, {
    [styles.shadow]: isShadow,
  });

  const [loaderIcon, setLoaderIcon] = useState("");

  useLayoutEffect(() => {
    switch (theme) {
      case "yellow":
        setLoaderIcon(loaderImgYellow);
        break;

      case "black": 
        setLoaderIcon(loaderImgBlack);
        break;

      case "white": 
        setLoaderIcon(loaderImgWhite);
        break;
        
      default:
        setLoaderIcon(loaderImgYellow);
        break;
    }
   
  }, [theme])
  return (
    <img className={classes} src={loaderIcon} alt="loader"/>
  )
}
