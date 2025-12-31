import { use, useState } from "react"
import { LoginContext } from "./LoginContext"

export default function LoginProvider({children})
{
    let [user,setUser] =useState(null);
function login(username)
{
    setUser({name:username})
}
function logout()
{
    setUser(null)
}
    return(
        <LoginContext.Provider value={{user,login,logout}}>
         {children}
        </LoginContext.Provider>
    )
}