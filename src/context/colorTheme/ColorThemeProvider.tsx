import { useState, useMemo } from 'react';
import { ChildrenProps } from 'types/models';
import { ColorThemeContext } from './ColorThemeContext';
import { PaletteMode } from '@mui/material';
import { darkTheme, lightTheme } from '@/theme';

export const ColorThemeProvider = ({ children }: ChildrenProps) => {

    const [colorTheme, setColorTheme] = useState<PaletteMode>('light');

    const toggleColorTheme = () => {
        setColorTheme(colorTheme === 'light' ? 'dark' : 'light');
    }

    const theme = useMemo(() => {
        return colorTheme === 'light' ? lightTheme : darkTheme;
    }, [colorTheme]);

    return (
        <ColorThemeContext.Provider value={{
            theme, 
            colorTheme,
            toggleColorTheme,
        }}>
            {children}
        </ColorThemeContext.Provider>
    )
}