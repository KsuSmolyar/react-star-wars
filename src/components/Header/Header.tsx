import styles from "./Header.module.css"

import { NavLink } from "react-router-dom";
import Favorite from "../Favorite";

import DroidImg from "./img/droid.svg";
import LightSaberImg from "./img/lightsaber.svg";
import SpaceStationImg from "./img/space-station.svg";
import { useTheme } from "../../context/ThemeProvider";
import { useEffect, useState } from "react";

const Header = () => {
  const [icon, setIcon] = useState<string>(SpaceStationImg);
  const isTheme = useTheme();

  useEffect(() => {
    switch(isTheme.theme) {
      case "light": {
        setIcon(LightSaberImg);
        break;
      }
      case "dark": {
        setIcon(SpaceStationImg);
        break;
      } 
      case "neutral": {
        setIcon(DroidImg);
        break;
      }
      default: setIcon(SpaceStationImg);
    }
  }, [isTheme]);

  return (
    <header className={styles.header}>
      <img className={styles.logo} src={icon} alt="Star Wars"/>
      <ul className={styles.headerList}>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/people/?page=1"}>People</NavLink></li>
        <li><NavLink to={"/search"}>Search</NavLink></li>
        <li><NavLink to={"/not-found"}>Not-found</NavLink></li>
        <li><NavLink to={"/fail"}>Fail</NavLink></li>
      </ul>

      <Favorite/>
    </header>
  )
}

export default Header;
