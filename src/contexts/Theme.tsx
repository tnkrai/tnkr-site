import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
  useCallback,
} from "react";

const THEME_KEY = "RKNT_SITE_THEME_KEY";

export const DARK_COLOR_TEXT = "#f0f0f0";

export enum Theme {
  Light = "LIGHT_THEME",
  Dark = "DARK_THEME",
}

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(Theme.Dark);

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme as Theme);
    }
  }, []);

  const updateTheme = useCallback((theme: Theme) => setTheme(theme), []);

  useEffect(() => {
    updateTheme(theme);
    localStorage.setItem(THEME_KEY, theme);
    if(theme === Theme.Light){
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
export default ThemeContext;
