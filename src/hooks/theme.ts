import { useState } from "react";

const THEME_KEY = "RKNT_SITE_THEME_KEY";

export enum Theme {
  Light = "LIGHT_THEME",
  Dark = "DARK_THEME",
}

const useTheme = (): {
  theme: Theme;
  toggleTheme: (_newTheme: Theme) => Theme;
} => {
  const localstorage_theme: Theme =
    localStorage.getItem(THEME_KEY) === Theme.Dark
      ? Theme.Dark
      : localStorage.getItem(THEME_KEY) === Theme.Light
        ? Theme.Light
        : Theme.Dark;

  const [theme, setTheme] = useState<Theme>(localstorage_theme);

  const toggleTheme = (_newTheme: Theme) => {
    try {
      setTheme(_newTheme);
      const newThemeString =
        _newTheme === Theme.Dark ? Theme.Dark : Theme.Light;
      localStorage.setItem(THEME_KEY, newThemeString);

      return _newTheme;
    } catch (error) {
      console.warn(`Error setting theme: ${_newTheme}`, error);
      return Theme.Dark;
    }
  };

  return { theme, toggleTheme };
};

export default useTheme;
