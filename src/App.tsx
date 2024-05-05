import { Helmet, HelmetProvider } from 'react-helmet-async'
import { AppRouter } from './Routers'
import { GlobalStyles } from './styles/global'
import { ThemeProvider } from './styles/theme-provider'
import { AuthProvider } from './context/auth'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | AppCelular" />
      <ThemeProvider>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
        <GlobalStyles />
        <GlobalStyles />
      </ThemeProvider>
    </HelmetProvider>
  )
}
