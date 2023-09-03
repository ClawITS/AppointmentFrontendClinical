import { useMediaQuery, Typography } from '@mui/material';
import { IconButton } from '@mui/material';
import { Brightness7, Brightness4 } from '@mui/icons-material';
import { useColorTheme } from '@/hooks';

export const ThemeToggleButton = () => {

  const { colorTheme, toggleColorTheme} = useColorTheme();
  const mobileCheck = useMediaQuery('(min-width: 500px)');

  return (
    <>
          {mobileCheck && (
                <Typography>{colorTheme}</Typography>)
            }
            <IconButton sx={{mr: 2}} title={`${colorTheme}mode`} aria-label={`${colorTheme}mode`} onClick={toggleColorTheme}>
            { colorTheme === 'dark' ? <Brightness7/> : <Brightness4/>}               
            </IconButton>
    </>
  )
}
