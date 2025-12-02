import { useEffect, useState } from "react";

export default function SearchUser()
{
    let [query ,setQuery] = useState("");
    let [result,setResult] = useState([]);

    useEffect(()=>{
        if(!query) return;
     fetch(`https://jsonplaceholder.typicode.com/users?name_like=${query}`) .then(res=>res.json())
     .then(data=>setResult(data))  
    },[query]);

return(
    <div>
        <input type="text" placeholder="Search ..." onChange={(e)=>setQuery(e.target.value)}></input>
        <ul>
            {result.map((user)=><li key={user.id}>{user.name} {user.email}</li>)}
        </ul>
    </div>
)

}

