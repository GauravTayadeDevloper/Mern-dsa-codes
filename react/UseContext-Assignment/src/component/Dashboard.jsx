import React, { useContext } from 'react'
import { LoginContext } from '../context/LoginContext'

export const Dashboard = () => {
 let {user} = useContext(LoginContext);
    return (

    <div>
        <h1>Dashboard</h1>
        {user ?
        (<h4>hello {user.name}  welcome to Dashboard</h4>)
        :<h4>Please log in to view Dashboard</h4>}
        
    </div>
    
  )
}
