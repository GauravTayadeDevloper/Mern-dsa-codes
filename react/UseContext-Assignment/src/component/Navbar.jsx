import React, { useContext } from 'react'
import { LoginContext } from '../context/LoginContext'

function Navbar() {
    let {user,logout} =useContext(LoginContext);
  return (
    <div>
      <h1>My App</h1>
        {user ? (
            <div>
                <h3>Welcome {user.name}</h3> 
                <button onClick={logout}>Log out</button>
                </div>
            
        ):(<span>
            Not Logged in
        </span>)}
    </div>
  )
}

export default Navbar
