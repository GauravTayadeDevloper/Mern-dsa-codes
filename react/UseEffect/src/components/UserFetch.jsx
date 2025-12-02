import { useEffect, useState } from "react";

export default function UserFetch()
{
    let [user,setUser] = useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json())
        .then(data=>setUser(data))
    })
    return(
        <div>
            <ul>
                {user.map((user)=><li key={user.id}>{user.name}</li>)}
            </ul>
        </div>
    )
}