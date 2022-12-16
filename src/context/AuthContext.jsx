import { createContext, useState, useEffect } from 'react'
import getPayload from '../utils/getPayload.js'

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
  const [isAuth, setIsAuth] = useState(false)

  const [costum, setCostum] = useState(null)

  const loginCostumer = (token) => {
    window.localStorage.setItem('token', token)
    const decode = getPayload(token)
    setCostum(decode)
    setIsAuth(true)
  }

  const logoutCostumer = () => {
    window.localStorage.removeItem('token')
    setCostum({})
    setIsAuth(false)
  }

  useEffect(() => {
    const item = window.localStorage.getItem('token')
    if (item) {
      const decode = getPayload(item)
      setCostum(decode)
      setIsAuth(true)
    }
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth, costum, loginCostumer, logoutCostumer
    }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
