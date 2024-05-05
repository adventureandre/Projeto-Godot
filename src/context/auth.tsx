import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface UserProps {
  id_account: string
  email: string
  password: string
}

interface AuthProviderProps {
  children: ReactNode
}

interface signInProps {
  email: string
  password: string
}

export const AuthContext = createContext({})

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserProps | null>(null)

  const loadingStoreData = async () => {
    const storegeUser = localStorage.getItem('@AuthAppCelular:user')
    const storegeToken = localStorage.getItem('@AuthAppCelular:token')

    if (storegeUser && storegeToken) {
      const user: UserProps = JSON.parse(storegeUser)
      setUser(user)
    }
  }

  const signIn = async ({ email, password }: signInProps) => {
    try {
      const response = await api.post('/sign-in', {
        email,
        password,
      })

      setUser(response.data)

      // So Para Exenplos vou enviar tudo kkkk tempo ta curto
      localStorage.setItem(
        '@AuthAppCelular:user',
        JSON.stringify(response.data),
      )
    } catch (e) {
      throw new Error('Credenciais inválidas.')
    }
  }

  const signOut = () => {
    localStorage.removeItem('@AuthAppCelular:user')
    setUser(null)
  }

  const value = {
    user,
    signed: user !== null && user !== undefined,
    signIn,
    signOut,
  }

  useEffect(() => {
    loadingStoreData()
  }, [])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
