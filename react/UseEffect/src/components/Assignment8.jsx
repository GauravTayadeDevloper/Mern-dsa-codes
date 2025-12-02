import { useEffect, useState } from "react"


export default function Assignment8()
{
    let [count ,setCount] =useState(0)
    let [text,setText] =useState("")
       
    useEffect(()=>{
        if(text.length>0)
            { console.log("Render happened")
             }
    },[text])

    return(
        <div>
            <h1>ASSIGNMENT 8</h1>
            <input type="text" placeholder="type here..." onChange={(e)=>setText(e.target.value)}></input>
            <p>{text}</p>
        </div>
    )
}