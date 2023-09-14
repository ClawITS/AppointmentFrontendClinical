import { createContext, useState, useEffect } from 'react';
import { ChildrenProps, theme } from 'types/models';

type  ThemeContextType = {
    theme: string;
    setTheme: (theme:theme ) => void;
}

export const ThemeContext = createContext({} as ThemeContextType);

export const ThemeProvider = ({children}: ChildrenProps) => {
     
  const [theme, setTheme] = useState<theme>('light');

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme as theme);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('theme', theme);
    const root = window.document.documentElement;
    root.classList.remove(theme === 'light' ? 'dark' : 'light');
    root.classList.add(theme);
  }, [theme]);


     
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};