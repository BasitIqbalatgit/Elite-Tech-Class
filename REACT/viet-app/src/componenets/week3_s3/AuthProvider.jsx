import React, { Children, createContext, useState } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const[name,setName] = useState("Basit")
  return (
    <AuthContext.Provider value={{name, setName}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider