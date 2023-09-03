import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { ChildrenProps } from 'types/models';
import { useColorTheme } from '@/hooks';

export const AppTheme = ({ children }: ChildrenProps) => {

  const { theme } = useColorTheme();

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
    </ThemeProvider>
  )
}
