import { RouterProvider } from 'react-router-dom'
import { AppTheme } from './theme'
import { router } from './routers/routes'
import { ColorThemeProvider } from './context/colorTheme'

export const App = () => {
  return (
    <ColorThemeProvider>
    <AppTheme>
        <RouterProvider router={router} />
    </AppTheme>
    </ColorThemeProvider>
  )
}
