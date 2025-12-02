import { useEffect, useState } from "react"


export default function Assignment13()
{
    let [ip,setIp] =useState("")
    let [user,setUser] =useState([])
   
       useEffect(()=>{
           if(ip.trim().length >=3)
           {
            fetch(`https://jsonplaceholder.typicode.com/users?name_like=${ip}`)
            .then(res=>res.json())
            .then(data=> setUser(data) )
           }
        
    },[ip])

    return(
        <div>
            <h1>ASSIGNMENT 13</h1>
          
            <input type="text" placeholder="type here..." onChange={(e)=>setIp(e.target.value)}></input>
             
            {ip.trim().length < 3 
            ? <p style={{color:"red"}}>Type Atleast 3 Character to search </p> 
            :   <ul>
                {user.map((u)=><li key={u.id}>{u.name}</li>)}
            </ul>} 
    
         
        </div>
    )
}