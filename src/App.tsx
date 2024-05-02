import { ThemeProvider } from 'styled-components'
import { AppRouter } from './Routers'
import { GlobalStyles } from './styles/global'
import { darkTheme } from './styles/theme'

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppRouter />
      <GlobalStyles />
    </ThemeProvider>
  )
}
