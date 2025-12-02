import { useEffect, useState } from "react"


export default function Assignment16()
{
    let [count ,setCount] =useState(0)
    let [text,setText] =useState("")
       useEffect(()=>{
             console.log("Render happened")
        
    },[count,text])

    return(
        <div>
            <h1>ASSIGNMENT 16</h1>
            <button onClick={()=>setCount(count+1)}>Click {count}</button>  
            <input type="text" placeholder="type here..." onChange={(e)=>setText(e.target.value)}></input>
            <p>{text}</p>
        </div>
    )
}