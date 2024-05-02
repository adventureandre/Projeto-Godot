import { AppRouter } from './Routers'
import { GlobalStyles } from './styles/global'
import { ThemeProvider } from './styles/theme-provider'

export function App() {
  return (
    <ThemeProvider>
      <AppRouter />
      <GlobalStyles />
    </ThemeProvider>
  )
}
