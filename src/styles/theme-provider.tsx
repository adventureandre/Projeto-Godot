import { ReactNode, createContext, useContext, useState } from 'react'
import { ThemeProvider as ThemeProviderStyledComponents } from 'styled-components'
import { darkTheme, lightTheme } from './theme'

// Definindo tipos
interface ThemeContextType {
  setIsTheme: (theme: 'dark' | 'light') => void
}

interface ThemeProviderProps {
  children: ReactNode
  storageKey?: string
}

// Criando o contexto
const ThemeContext = createContext<ThemeContextType>({
  setIsTheme: () => {},
})

// Provedor do contexto
export const ThemeProvider = ({
  children,
  storageKey = 'ThemeApp',
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState(() => localStorage.getItem(storageKey))

  function setIsTheme(handletheme: 'dark' | 'light') {
    setTheme(handletheme)
    localStorage.setItem(storageKey, handletheme)
  }

  return (
    <ThemeContext.Provider value={{ setIsTheme }}>
      <ThemeProviderStyledComponents
        theme={theme === 'dark' ? darkTheme : lightTheme}
      >
        {children}
      </ThemeProviderStyledComponents>
    </ThemeContext.Provider>
  )
}

// Hook personalizado para usar o contexto
export const useTheme = () => useContext(ThemeContext)
