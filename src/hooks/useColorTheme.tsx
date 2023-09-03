import { ColorThemeContext } from '@/context/colorTheme/ColorThemeContext';
import { useContext } from 'react';

export const useColorTheme = () => {
    const states = useContext(ColorThemeContext);
    return { ...states };
}
