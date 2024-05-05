import { Helmet, HelmetProvider } from 'react-helmet-async'
import { AppRouter } from './Routers'
import { GlobalStyles } from './styles/global'
import { ThemeProvider } from './styles/theme-provider'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | AppCelular" />
      <ThemeProvider>
        <AppRouter />
        <GlobalStyles />
      </ThemeProvider>
    </HelmetProvider>
  )
}
