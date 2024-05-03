import React, { createContext, useContext, useState } from 'react'
import RenderHeader from '../components/structure/header/Header';

const AuthContext = createContext();
export const authData = () => {
    useContext(AuthContext);
}

const Authwrapper = () => {
  const [user, setUser] = useState({ name: "", isAuthenticated: false });

  const login = (userName, password) => {
    return new Promise((resolve, reject) =>{
        if(password === 'password'){
            setUser({name: userName, isAuthenticated: true})
            resolve("success")
        } else {
            reject("Incorrect Password")
        }
    })
  }

  const logout = () => {
    setUser({...user, isAuthenticated: false});
  }

  return (
    <AuthContext.Provider value={{user, login, logout}}>
        <RenderHeader/>
    </AuthContext.Provider>
  )
}

export default Authwrapper