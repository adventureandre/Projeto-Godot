import { ThemeProvider } from 'styled-components'
import { AppRouter } from './Routers'
import { GlobalStyles } from './styles/global'
import { darkTheme, lightTheme } from './styles/theme'
import { useState } from 'react'

export function App() {
  const [isLightTheme, setIsLightTheme] = useState<boolean>(false)

  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <AppRouter />
      <GlobalStyles />
    </ThemeProvider>
  )
}
