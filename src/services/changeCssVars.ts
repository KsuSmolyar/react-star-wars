/*
Формат CSS-переменной:
--theme-default-УникальноеИмя # дефолтная переменная
--theme-light-УникальноеИмя   # для "light"
--theme-dark-УникальноеИмя    # для "dark"
--theme-neutral-УникальноеИмя # для "neutral"
*/

export const changeCssVars = (theme: string) => {
  const root: HTMLElement = document.querySelector(":root")!;

  const cssVars = ["header", "bgimage"];

  cssVars.forEach((el) => {
    root?.style.setProperty(`--theme-default-${el}`, `var(--theme-${theme}-${el})`);
  })
}
