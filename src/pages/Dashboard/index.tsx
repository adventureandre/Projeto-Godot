import { Helmet } from 'react-helmet-async'
import { useTheme } from '../../styles/theme-provider'
import { Conteiner } from './style'

export const Dashboard = () => {
  const { setIsTheme, theme } = useTheme()
  return (
    <>
      <Helmet title="Dashboard" />
      <button
        onClick={() =>
          theme === 'dark' ? setIsTheme('light') : setIsTheme('dark')
        }
      >
        {theme}
      </button>
      <Conteiner>Dashboard aki</Conteiner>
    </>
  )
}
