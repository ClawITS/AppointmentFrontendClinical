import { useContext } from 'react';
import { ThemeContext } from '../context/ui/ThemeContext';
export const useTheme = () => {
  const state = useContext(ThemeContext);
  return {
    ...state
  };
};
