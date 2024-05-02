import { useTheme } from '../../styles/theme-provider'
import { Conteiner } from './style'

export const SignIn = () => {
  const { setIsTheme } = useTheme()

  return (
    <Conteiner>
      <div>
        <button onClick={() => setIsTheme('dark')}>Toggle Dark Theme</button>
        <button onClick={() => setIsTheme('light')}>Toggle Light Theme</button>
      </div>
    </Conteiner>
  )
}
