import { createContext } from 'react';
import { Theme } from '@mui/material';

type ColorThemeContextProps = {
    theme: Theme;
    colorTheme: string;
    toggleColorTheme: () => void;
}

export const ColorThemeContext = createContext({} as ColorThemeContextProps);
