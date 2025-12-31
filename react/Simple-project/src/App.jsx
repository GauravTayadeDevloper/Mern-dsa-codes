import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const arr = ["gaurav","kiran","saurabh","tejas"];
let [name,setName] = useState("");


  return(
      <div>
          <input  type='text' placeholder='enter name' value={name} onChange={(e)=>{setName(e.target.value)}}></input> 
          <p>{arr.map((val,i)=>(
            <p>{val === name ? name:""}</p>
          ))}</p>
      </div>
  )
}

export default App

const [user, setUser] = useState({ name: "Jay", age: 25 });

setUser(user=>(user.age = 26));