import React, { PropsWithChildren, useState } from "react";
import { useContext } from "react";
import { changeCssVars } from "../services/changeCssVars";

export const THEME_LIGHT = "light";
export const THEME_DARK = "dark";
export const THEME_NEUTRAL = "neutral";

type Theme = "light"| "dark" | "neutral";
type ThemeContextType = {theme: Theme, change: (value: Theme) => void};

const ThemeContext = React.createContext<ThemeContextType>({theme: "neutral", change: (value: Theme) => console.log(value)});

export const ThemeProvider:React.FC<PropsWithChildren> = ({children, ...props}) => {
  const [theme, setTheme] = useState<Theme>("dark");

  const change = (themeName: Theme) => {
    setTheme(themeName);
    changeCssVars(themeName);
  }

  return (
    <ThemeContext.Provider 
      value={{
        theme,
        change
      }}
      {...props}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext);
